from fastapi import FastAPI, File, UploadFile
from typing import List
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import os

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


@app.post("/detect")
async def create_files(files: List[bytes] = File(...)):
    return {"vin_num": 'WDDLAF23AF234F'}
