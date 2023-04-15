from uuid import UUID
from sqlalchemy import insert
from internal.db.models import Application
from sqlalchemy.ext.asyncio import AsyncSession




async def _create_application(application: dict, session: AsyncSession):
    query = insert(Application).values(application.first_name, application.last_name, application.email,)
    session.add(query)
    session.commit()
    session.refresh(query)
    return {"id": query.id}


async def remove_cv(id: UUID):
    pass
