import uuid


def generate_img_uuid():
    return str(uuid.uuid4().hex)


def getSpecificId(id):
    result = objectIdDecoder(list(collection.find({"_id": ObjectId(id)})))
    return str(result)


def objectIdDecoder(list):
    results = []
    for document in list:
        document['_id'] = str(document['_id'])
        results.append(document)
    return results
