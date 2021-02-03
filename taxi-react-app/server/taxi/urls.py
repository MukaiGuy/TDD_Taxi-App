# server/taxi/urls.py

from django.conf import settings  # new
from django.conf.urls.static import static  # new
from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView

from trips.views import SignUpView, LogInView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/sign_up/', SignUpView.as_view(), name='sign_up'),
    path('api/log_in/', LogInView.as_view(), name='log_in'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/trip/', include('trips.urls', 'trip',)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # new

'''
Media files can now be retrieved via http://localhost:8000/media/<file_path>/ on your local machine.
To test, add a new folder called "media" to "server". Then, add a test file called test.txt to that folder and add some random text to the file. 
Fire up the server and navigate to http://localhost:8000/media/test.txt to view the file.
'''
