from django.db import models


class FundraiseCategory(models.Model):
    
    class Meta:
        verbose_name="Fundraise Category"
        verbose_name_plural="Fundraise Categories"

class Fundraise(models.Model):
    title = models.CharField(verbose_name="Назва",
                            max_length = 100,
                            blank = True,
                            null = True)

    category = models.ForeignKey(FundraiseCategory, verbose_name = "Категорія",
                                                    on_delete = models.SET_NULL,
                                                    null = True,
                                                    blank = True)

    image = models.FileField(verbose_name="Зображення", upload_to = None, blank = True, null = True)

    description = models.TextField(verbose_name="Опис")

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name="Fundraise"
        verbose_name_plural="Fundraises"