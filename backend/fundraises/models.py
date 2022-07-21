from django.db import models
from django.contrib.auth.models import User

class FundraiseCategory(models.Model):
    title = models.CharField(verbose_name="Назва",
                            max_length = 100,
                            blank = True,
                            null = True)
    description = models.TextField(verbose_name="Опис",
                            null=True,
                            blank=True)
    image = models.FileField(verbose_name="Зображення", 
                                    upload_to = None, 
                                    blank = True, 
                                    null = True)

                                    
    def save(self, *args, **kwargs):
        return super().save()

    class Meta:
        verbose_name="Категорія збірок"
        verbose_name_plural="Категорії збірок"

class Fundraise(models.Model):
    title = models.CharField(verbose_name="Назва",
                            max_length = 100,
                            blank = True,
                            null = False)
    category = models.ForeignKey(FundraiseCategory,
                                verbose_name = "Категорія",
                                on_delete = models.SET_NULL,
                                null = True,
                                blank = True)
    user = models.ForeignKey(User,
                             verbose_name='Користувач',
                             related_name='fundraise',
                             on_delete=models.SET_NULL,
                             null=True,
                             blank=True)
    image = models.FileField(verbose_name="Зображення",
                                upload_to = 'fundraises',
                                blank = True,
                                null = True)

    description = models.TextField(verbose_name="Опис",
                                    blank = True,
                                    null = True)
    needed = models.DecimalField(
        max_digits=9,
        decimal_places=2,
        blank=True,
        null=True,
        verbose_name="Потрібно коштів")
    raised = models.DecimalField(
        max_digits=9,
        decimal_places=2,
        # blank=True,
        #null=True,
        default=0,
        verbose_name="Зібрано")

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        return super().save()

    class Meta:
        verbose_name="Збірка"
        verbose_name_plural="Збірки"
