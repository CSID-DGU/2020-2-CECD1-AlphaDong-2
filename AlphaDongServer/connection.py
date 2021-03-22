from config import development
import boto3


def s3_connection():
    s3 = boto3.client('s3',
                      aws_access_key_id=development.AWS_ACCESS_KEY,
                      aws_secret_access_key=development.AWS_SECRET_KEY)
    return s3

api = "http://divus.iptime.org:4207/vin/ai-api/ver-0.1.10"
