from django.db import models

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
        null=True,
        blank=True
    )
