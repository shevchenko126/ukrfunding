from django.contrib import admin
from fundraises.models import Fundraise, FundraiseCategory

class FundraiseAdmin(admin.ModelAdmin):
    model = Fundraise
    list_display=('title','category','user','needed','raised','is_featured','image')

class FundraiseCategoryAdmin(admin.ModelAdmin):
    model = FundraiseCategory
    list_display=('title','description','image')

admin.site.register(Fundraise, FundraiseAdmin)
admin.site.register(FundraiseCategory, FundraiseCategoryAdmin)
