# Generated by Django 4.0.6 on 2022-07-23 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='images', verbose_name='Картинка'),
        ),
    ]
