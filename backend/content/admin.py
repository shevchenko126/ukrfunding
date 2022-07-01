from django.contrib import admin
from content.models import Blog,BlogCategory,BlogComment

# Register your models here.
admin.site.register(Blog)
admin.site.register(BlogCategory)
admin.site.register(BlogComment)