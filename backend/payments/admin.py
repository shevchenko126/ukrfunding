from django.contrib import admin
from .models import Payment

# Register your models here.

class PaymentAdmin(admin.ModelAdmin):
    model = Payment
    list_display=('user', 'fundraise', 'amount')


admin.site.register(Payment, PaymentAdmin)
