# Generated by Django 4.0.6 on 2022-07-23 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_remove_profile_phone_profile_avatar_profile_funded'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.FileField(blank=True, null=True, upload_to='images', verbose_name='Аватарка'),
        ),
    ]
