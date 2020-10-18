from django.urls import path
from .import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.overview, name="index"),
    path('index', views.index, name="index"),
    path('overview', views.overview, name="overview"),
    path('boards', views.boards, name='boards'),
    path('project_one', views.project_one, name="project_one"),
    path('algorithms', views.algorithms, name="algorithms"),
    path('python_one', views.python_one, name="python_one")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)