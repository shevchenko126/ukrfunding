URL: /accounts/
Method: GET
Authorization required: YES
Description: Retrieve user full info with token.
Request params:
username(string),|username|is not case sensitive
password(string),|password|case sensitive

Example: /accounts/?username=user1&password=user1

Response:
{
    "success": true,
    "user_id": 1,
    "token": "c6d299f8e830d87d39907fc0b0deef2d0994b98e",
    "username": "admin",
    "password": "admin"
}
/-----------------------------------------------------------------------
URL: /accounts/
Method: POST
Authorization required: YES
Description: Assigns an authentication token for existing account or creates new user account and token.
Request params:
username(string),|username|is not case sensitive
password(string),|password|case sensitive

Example: /accounts/?username=Some_user&password=Some_password

Response:
{
    "success": true,
    "user_id": 17,
    "user_email": "some_user",
    "token": "36c762c030debd7c6c04cf272cdeb9b12a7667a5",
    "username": "some_user",
    "password": "Some_password",
    "password_encrypted": "pbkdf2_sha256$320000$G8TeEixlV0UM6nYl6aFAiy$VJabag5z/aazaC1xGth4xRJdS8sX7gum6uE8ZWGFuQY="
}
/-----------------------------------------------------------------------
URL: /fundraises/
Method: GET
Authorization required: No
Description: Retrieve Fundraises List.
Request params:
None - Retrieve all Fundraises
or
featured(Boolean),|0 or 1| filter for Fundraises
or
category_id(int)

Example: /fundraises

Response:
{
    "success": 1,
    "fundraises": [
        {
            "id": 1,
            "title": "Збираємо на солярку для волонтерів",
            "image": null,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis massa suscipit turpis placerat iaculis. Suspendisse eget nisi urna. Ut eros augue, convallis vel porta vel, consequat id velit. Nullam odio metus, sodales non fringilla consectetur, tempor ut lorem. Pellentesque vitae metus mauris. Nam consectetur risus vitae est maximus tempus. Nam et nibh faucibus, consectetur ipsum ut, ultricies justo. Nunc et nisi laoreet, mollis ex eu, elementum ante. Donec lobortis dolor eget arcu faucibus aliquam. Praesent posuere faucibus risus lobortis commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel bibendum metus, in pharetra ligula. Sed euismod velit et accumsan consequat. Sed bibendum bibendum diam, nec faucibus est rhoncus ut. Pellentesque ac tincidunt elit. Donec vulputate orci in ligula commodo laoreet.",
            "needed": "3000.00",
            "raised": "107306.00",
            "is_featured": false,
            "category": 1,
            "user": 1
        },
        {
            "id": 2,
            "title": "Збираємо на Байрактар",
            "image": "/media/images/Bayraktar_TB2_Ukrainian_Navy.jpg",
            "description": "«Байрактар ТБ2» — турецький ударний оперативно-тактичний середньовисотний безпілотний літальний апарат (БПЛА) з великою тривалістю польоту, здатний виконувати дистанційно керовані або автономні польоти.",
            "needed": "15000.00",
            "raised": "0.00",
            "is_featured": true,
            "category": 1,
            "user": 1
        }
    ]
}
or
Example: /fundraises/?featured=1

Response:
{
    "success": 1,
    "fundraises": [
        {
            "id": 2,
            "title": "Збираємо на Байрактар",
            "image": "/media/images/Bayraktar_TB2_Ukrainian_Navy.jpg",
            "description": "«Байрактар ТБ2» — турецький ударний оперативно-тактичний середньовисотний безпілотний літальний апарат (БПЛА) з великою тривалістю польоту, здатний виконувати дистанційно керовані або автономні польоти.",
            "needed": "15000.00",
            "raised": "0.00",
            "is_featured": true,
            "category": 1,
            "user": 1
        }
    ]
}
or
Example: /fundraises/categories/1

Response:
{
    "id": 1,
    "title": "Загальна",
    "description": "",
    "image": null
}
/-----------------------------------------------------------------------
URL: /fundraises/
Method: OPTIONS
Authorization required: No
Description: Retrieve Fundraises model fields.
Request params:
None

Example: /fundraises/

Response:
{
    "name": "Get Fundraises List",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "title": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Назва",
                "max_length": 100
            },
            "image": {
                "type": "file upload",
                "required": false,
                "read_only": false,
                "label": "Зображення",
                "max_length": 100
            },
            "description": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Опис"
            },
            "needed": {
                "type": "decimal",
                "required": false,
                "read_only": false,
                "label": "Потрібно коштів"
            },
            "raised": {
                "type": "decimal",
                "required": false,
                "read_only": false,
                "label": "Зібрано"
            },
            "is_featured": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Обрана"
            },
            "category": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Категорія"
            },
            "user": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Користувач"
            }
        }
    }
}
/-----------------------------------------------------------------------
URL: /payments/
Method: OPTIONS
Authorization required: No
Description: Retrieve Payments List
Request params:
None

Example: /payments/api/

Response:
{
    "name": "Get Payments List",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "email": {
                "type": "email",
                "required": false,
                "read_only": false,
                "label": "Email",
                "max_length": 254
            },
            "amount": {
                "type": "decimal",
                "required": true,
                "read_only": false,
                "label": "Сума"
            },
            "fundraise": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Збірка"
            },
            "user": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Користувач"
            }
        }
    }
}
/-----------------------------------------------------------------------
URL: /payments/
Method: GET
Authorization required: YES
Description: Receive payments linked to a token 
Request params(in headers):
Token(string),|Each user has a token associated with him in the database
user(string),|username|is not case sensitive
password(string),|password|case sensitive

Example: /payments/api/?user=admin&password=admin&token=c6d299f8e830d87d39907fc0b0deef2d0994b98e

Response:
{
    "success": 1,
    "payments": [
        {
            "id": 1,
            "email": "admin@admin.com",
            "amount": "1.00",
            "fundraise": 1,
            "user": 1
        },
        {
            "id": 3,
            "email": null,
            "amount": "3.00",
            "fundraise": 1,
            "user": 1
        }
    ]
}