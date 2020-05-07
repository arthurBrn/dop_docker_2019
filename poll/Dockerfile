FROM python:3
MAINTAINER "baronbrn"
# RUN mkdir -p /app
WORKDIR /app
COPY requirements.txt ./
RUN python -m pip install -r requirements.txt
COPY . .
# EXPOSE 80
CMD ["python3", "app.py"]
