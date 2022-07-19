from django.db import models
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.dispatch import receiver
from django.db.models.signals import post_save
# Create your models here.

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="profile")
    funded = models.DecimalField(verbose_name="Финансируемый",
                                max_digits=9,
                                decimal_places=2,
                                blank=True,
                                null=True,
                                )
    avatar = models.FileField(verbose_name="Аватарка",
                            null=True,
                            blank=True,
                            upload_to=None
                            )

@receiver(post_save,sender=User)
def create_user_profile_and_token(sender,instance,created,**kwargs):
    if created:
        Profile.objects.create(user=instance)
        Token.objects.create(user=instance)

@receiver(post_save,sender=User)
def save_user_profile(sender,instance,**kwargs):
    instance.profile.save()
