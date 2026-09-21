# Dockerfile (na raiz)
FROM python:3.11-slim

WORKDIR /code

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copia o requirements da raiz para dentro do container
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia a pasta app inteira para dentro do container
COPY ./app ./app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]