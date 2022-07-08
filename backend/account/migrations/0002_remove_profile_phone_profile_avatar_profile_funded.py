# Generated by Django 4.0.6 on 2022-07-08 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='phone',
        ),
        migrations.AddField(
            model_name='profile',
            name='avatar',
            field=models.FileField(blank=True, null=True, upload_to=None, verbose_name='Аватарка'),
        ),
        migrations.AddField(
            model_name='profile',
            name='funded',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=9, null=True, verbose_name='Финансируемый'),
        ),
    ]
