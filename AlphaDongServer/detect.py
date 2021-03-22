import time
import random


def vin_detect(image):
    # time.sleep(random.randrange(2, 5))
    return "1G1YZ23J9P5803427"
# import base64
# from PIL import Image
# from io import BytesIO
# import os
# import json
# from PIL import Image

# folder = "./GT/input_images/"


# def makeRequest(f_names):

#     req = {"no_img": len(f_names[:]), "image": [], "size_img": [], "filename": []}
#     for f_name in f_names[:]:

#         path = folder + f_name
#         file = open(path, "rb")
#         encoded = base64.b64encode(file.read())
#         base64_string = encoded.decode("utf-8")
#         image_string = BytesIO(base64.b64decode(base64_string))
#         width, height = Image.open(image_string).size

#         req["image"].append(base64_string)
#         req["size_img"].append([width, height])
#         req["filename"].append(f_name)

#     print(len(req["image"]))
#     ## make request file
#     f = open("inputfile_seg_2img.json", "w")
#     f.write(json.dumps(req))
#     f.close()
