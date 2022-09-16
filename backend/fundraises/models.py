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
                            upload_to = 'images',
                            blank = True,
                            null = True)

    def save(self, *args, **kwargs):
        return super().save()

    def __str__(self):
        return self.title

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
                                upload_to = 'images',
                                blank = True,
                                null = True)

    description = models.TextField(verbose_name="Опис",
                                    blank = True,
                                    null = True)
    needed = models.DecimalField(verbose_name="Потрібно коштів",
                                max_digits=9,
                                decimal_places=2,
                                blank=True,
                                null=True)
    raised = models.DecimalField(verbose_name="Зібрано",
                                max_digits=9,
                                decimal_places=2,
                                # blank=True,
                                #null=True,
                                default=0)
    is_featured = models.BooleanField(verbose_name="Обрана",
                                        blank=True,
                                        null=True,
                                        default=False)

    is_active = models.BooleanField(verbose_name="Активний",
                                        blank=True,
                                        null=True,
                                        default=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        return super().save()

    class Meta:
        verbose_name="Збірка"
        verbose_name_plural="Збірки"
