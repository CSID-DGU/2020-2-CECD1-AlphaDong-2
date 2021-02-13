from fastapi import FastAPI, File, UploadFile
from typing import List
import os

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/detect")
async def create_files(files: List[bytes] = File(...)):
    return {"file_sizes": [len(file) for file in files]}
