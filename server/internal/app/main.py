from internal.api import api_router
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from internal.db import settings
from sqlalchemy.exc import DBAPIError, NoResultFound



def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.NAME,
        description=settings.DESCRIPTION,
        version=settings.VERSION,
        terms_of_service="http://www.fastapi.org",
        license_info=dict(
            name="Apache 2.0",
            url="https://www.apache.org/licenses/LICENSE-2.0.html"
        ),
        openapi_url="{0}/openapi.json".format(settings.DOCS),
        swagger_ui_parameters=settings.SWAGGER_UI_PARAMETERS,
    )

    @app.get("/", tags=['Welcome'])
    async def welcome():
        return {"message": "Welcome"}
    if settings.BACKEND_CORS_ORIGINS:
        app.add_middleware(
            CORSMiddleware,
            allow_origins=[str(origin)
                           for origin in settings.BACKEND_CORS_ORIGINS],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )
    app.include_router(api_router, prefix=settings.API)

    return app