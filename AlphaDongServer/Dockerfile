FROM python
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5001
CMD ["uvicorn", "fast:app", "--host", "0.0.0.0", "--port", "5001"]