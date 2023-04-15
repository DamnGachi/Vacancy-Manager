from pydantic import BaseModel

class ApplicationCreate(BaseModel):
    first_name: str
    second_name: str
    surname: str
    cv_file: str
