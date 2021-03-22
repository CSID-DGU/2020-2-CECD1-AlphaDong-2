import time
import random
import base64
from PIL import Image
from io import BytesIO
import os
import json


def vin_detect(image):
    # time.sleep(random.randrange(2, 5))
    return "1G1YZ23J9P5803427"

# folder = "./GT/input_images/"


def makeRequest(image_file, image_name):

    req = {"no_img": 1, "image": [], "size_img": [], "filename": []}
    
    encoded = base64.b64encode(image_file)
    base64_string = encoded.decode("utf-8")
    image_string = BytesIO(base64.b64decode(base64_string))
    width, height = Image.open(image_string).size

    req["image"].append(base64_string)
    req["size_img"].append([width, height])
    req["filename"].append(image_name)

    return req
