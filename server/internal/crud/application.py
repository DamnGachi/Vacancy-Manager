from uuid import UUID
from sqlalchemy import insert
from internal.db.models import Application
from sqlalchemy.ext.asyncio import AsyncSession


async def _create_application(application, session: AsyncSession):
    query = Application(first_name=application.first_name, second_name=application.second_name,
                        surname=application.surname, login_telegram=application.login_telegram, cv_file=application.cv_file)
    session.add(query)
    await session.commit()
    await session.refresh(query)
    return query


async def remove_cv(id: UUID):
    pass
