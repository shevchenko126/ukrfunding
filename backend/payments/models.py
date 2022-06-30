from django.db import models
from fundraises.models import Fundraise
from django.contrib.auth.models import User

# Create your models here.
class Payment(models.Model):
    fundraise = models.ForeignKey(
        Fundraise,
        verbose_name='Fundraise Title',
        related_name='payment',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    user = models.ForeignKey(
        User,
        verbose_name='User',
        related_name='payment',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    email = models.EmailField(
        verbose_name='email',
        blank=True,
        null=True
    )
    class Meta:
        verbose_name="Payment"
        verbose_name_plural="Payments"
