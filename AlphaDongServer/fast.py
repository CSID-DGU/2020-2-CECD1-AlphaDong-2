from fastapi import FastAPI, File, UploadFile
from typing import List
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import os
import random
import detect
from connection import s3_connection
from config import development
from pymongo import MongoClient
import tools as to
from models import db, Vin
from datetime import datetime
import json

# s3 connection
s3 = s3_connection()
BUCKET_NAME = development.BUCKET_NAME
s3_url = "https://alphdong.s3.ap-northeast-2.amazonaws.com/"


app = FastAPI()
test_output = {
    "key": 1,
    "img_url": "http://placekitten.com/400/400",
    "vin_num": "WDDLJ6FB3HA203319a"
}


def generateTestData(num):
    result = []
    for i in range(0, num):
        result.append({
            "key": i,
            "img_url": f'http://placekitten.com/{random.randrange(400,401+i*10)}/{random.randrange(400,401+i*10)}',
            "vin_num": f'WDDLJ6FB3HA20{random.randrange(1000,9999)}a'
        })
    return result


@app.get("/")
def read_root():
    item = generateTestData(10)
    json_compatible_item_data = jsonable_encoder(item)
    return JSONResponse(content=json_compatible_item_data)


@app.get("/data")
def get_vin_list():
    vin_numbers = []
    for v in db.vins.find():
        vin_numbers.append(Vin(**v))
    return vin_numbers


@ app.post("/detect")
async def detect_vin_image(files: List[bytes] = File(...)):
    # check file
    image_file = files[0]
    # detection
    vin_result = detect.vin_detect(image_file)

    # generate image uuid
    image_id = to.generate_img_uuid()
    print(image_id)

    # save at aws s3
    s3.put_object(
        Bucket=BUCKET_NAME,
        Body=files[0],
        Key=image_id + ".jpg",
        ContentType='image/jpeg')

    # generate db object
    vin = Vin(vin_num=vin_result,
              img_url=f'{s3_url}{image_id}.jpg', created_at=datetime.now())

    # insert at db
    dict_vin = vin.dict(by_alias=True)
    dict_vin.pop('_id')
    ret = db.vins.insert_one(dict_vin)
    vin.id = ret.inserted_id

    return vin
