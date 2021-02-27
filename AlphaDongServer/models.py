from pydantic import BaseModel, Field
from pymongo import MongoClient
from bson import ObjectId
from typing import Optional
import datetime
client = MongoClient(host='52.78.124.16', port=9017,
                     username='root',
                     password='alphadong1!',)
db = client['alphadong']


class PyObjectId(ObjectId):

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid objectid')
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type='string')


class Vin(BaseModel):
    id: Optional[PyObjectId] = Field(alias='_id')
    vin_num: str
    img_url: str
    created_at: datetime.datetime

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str
        }
