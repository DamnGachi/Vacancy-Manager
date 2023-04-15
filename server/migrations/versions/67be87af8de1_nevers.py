"""nevers

Revision ID: 67be87af8de1
Revises: dafc84474a30
Create Date: 2023-04-15 19:41:24.266267

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '67be87af8de1'
down_revision = 'dafc84474a30'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('applications', sa.Column('login_telegram', sa.String(length=50), nullable=False))
    op.add_column('applications', sa.Column('is_verified', sa.Boolean(), nullable=True))
    op.create_unique_constraint(None, 'applications', ['login_telegram'])
    op.add_column('users', sa.Column('rating', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'rating')
    op.drop_constraint(None, 'applications', type_='unique')
    op.drop_column('applications', 'is_verified')
    op.drop_column('applications', 'login_telegram')
    # ### end Alembic commands ###