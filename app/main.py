from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path

app = FastAPI()

# Configuração de Caminhos
BASE_DIR = Path(__file__).resolve().parent

# Monta arquivos estáticos (CSS, JS, Imagens)
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")

# Configura Templates (HTML)
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

# Rota 1: Home
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
    request=request, 
    name="index.html", 
    context={"active_page": "home"}
)

# Rota 2: Minha História
@app.get("/historia", response_class=HTMLResponse)
async def historia(request: Request):
    return templates.TemplateResponse(
    request=request,
    name="historia.html",
    context={"active_page": "historia"}
)

# Rota 3: Consultoria (Calculadora)
@app.get("/consultoria", response_class=HTMLResponse)
async def consultoria(request: Request):
    return templates.TemplateResponse(
    request=request,
    name="consultoria.html",
    context={"active_page": "consultoria"}
)

# Rota 4: Resultados
@app.get("/resultados", response_class=HTMLResponse)
async def resultados(request: Request):
    return templates.TemplateResponse(
    request=request,
    name="resultados.html",
    context={"active_page": "resultados"}
)

# Rota 5: Planos
@app.get("/planos", response_class=HTMLResponse)
async def planos(request: Request):
    return templates.TemplateResponse(
    request=request,
    name="planos.html",
    context={"active_page": "planos"}
)