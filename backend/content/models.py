from ast import Mod
from tabnanny import verbose
from turtle import title
from django.db import models
from django.contrib.auth.models import User


class BlogCategory(models.Model):
    title=models.CharField(verbose_name="Назва"
                            ,null=True
                            ,blank=True,
                            max_length=100
                            )

    def __str__(self):
        return self.title

    def save(self, *args,**kwargs):
        return super().save()

    class Meta:
        verbose_name="Категория"
        verbose_name_plural="Категории"


class Blog(models.Model):
    title=models.CharField(verbose_name="Назва"
                            ,null=True
                            ,blank=True,
                            max_length=100
                            )
    content=models.TextField(verbose_name="Контент",
                            null=True,
                            blank=True
                            )
    image=models.FileField(verbose_name="Картинка",
                            null=True,
                            blank=True,
                            upload_to=None
                            )
    category=models.ForeignKey(BlogCategory,
                                verbose_name="Категория",
                                on_delete=models.SET_NULL,
                                null=True,
                                blank=True
                                )

    def __str__(self):
        return self.title

    def save(self, *args,**kwargs):
        return super().save()

    class Meta:
        verbose_name="Блог"
        verbose_name_plural="Блоги"


class BlogComment(models.Model):
    post=models.ForeignKey(Blog,
                            verbose_name="Блог",
                            on_delete=models.SET_NULL,
                            null=True,
                            blank=True)
    user=models.ForeignKey(User,
                            verbose_name="Пользователь",
                            related_name="content",
                            on_delete=models.SET_NULL,
                            null=True,
                            blank=True)
    title=models.CharField(verbose_name="Назва"
                            ,null=True
                            ,blank=True,
                            max_length=100
                            )
    text=models.TextField(verbose_name="Текст",
                            null=True,
                            blank=True
                            )

    def __str__(self):
        return self.title

    def save(self, *args,**kwargs):
        return super().save()

    class Meta:
        verbose_name="Коментарий"
        verbose_name_plural="Коментарии"