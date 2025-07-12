from fastapi import FastAPI

#app = FastAPI()

#@app.get("/")
#def read_root():
#    return {"message": "Hello from FastAPI"}
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth

app = FastAPI()

# Allow frontend (adjust in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth")