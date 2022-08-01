from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from account.models import Profile
# Register your models here.

class ProfileInLine(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural: "Profiles"
    fk_name = 'user'

class CustomUserAdmin(UserAdmin):
    inlines = (ProfileInLine, )

admin.site.unregister(User)
admin.site.register(User,CustomUserAdmin)
