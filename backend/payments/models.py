from django.db import models
from fundraises.models import Fundraise
from django.contrib.auth.models import User
from django.contrib import admin

# Create your models here.
class Payment(models.Model):
    fundraise = models.ForeignKey(
        Fundraise,
        verbose_name='Збірка',
        related_name='payment',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    user = models.ForeignKey(
        User,
        verbose_name='Користувач',
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
    amount = models.DecimalField(
        max_digits=9,
        decimal_places=2,
        # blank=True,
        # null=True,
        verbose_name="Сума")

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        cur_fundraise_id = self.fundraise.id
        cur_fundraise = Fundraise.objects.get(id=cur_fundraise_id)
        all_raised_cur_project = Payment.objects.filter(fundraise=cur_fundraise)
        raised_sum = 0
        for raised_payments in all_raised_cur_project:
            print(raised_payments.amount)
            raised_sum += raised_payments.amount

        cur_fundraise.raised = raised_sum
        cur_fundraise.save()

    class Meta:
        verbose_name="Платіж"
        verbose_name_plural="Платежі"
