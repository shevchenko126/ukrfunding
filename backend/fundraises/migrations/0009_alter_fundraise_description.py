# Generated by Django 4.0.6 on 2022-07-19 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fundraises', '0008_alter_fundraise_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fundraise',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Опис'),
        ),
    ]
