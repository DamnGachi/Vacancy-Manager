
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException

from internal.crud.application import _create_application
from internal.dto.application import ApplicationCreate
from internal.db.database import get_session
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.post("/applications/")
async def create_application(application: ApplicationCreate, session: AsyncSession = Depends(get_session)) -> ApplicationCreate:
    try:
        return await _create_application(application, session)
    except HTTPException as error:
        raise HTTPException(
            status_code=404, detail=f"application not found as {error}")
