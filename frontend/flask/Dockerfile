FROM python:3-alpine
MAINTAINER "baronbrn"

COPY app /app

WORKDIR /app

# Install python packages through pip, here we'll install whatever is in requirments.txt
RUN pip install -r requirments.txt

# EXPOSE 30 

CMD ["python", "app.py"]