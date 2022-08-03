# Generated by Django 4.0.6 on 2022-07-22 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fundraises', '0011_merge_20220721_0943'),
    ]

    operations = [
        migrations.AddField(
            model_name='fundraise',
            name='is_featured',
            field=models.BooleanField(blank=True, default=False, null=True, verbose_name='Обрана'),
        ),
        migrations.AlterField(
            model_name='fundraise',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='', verbose_name='Зображення'),
        ),
        migrations.AlterField(
            model_name='fundraisecategory',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='', verbose_name='Зображення'),
        ),
    ]