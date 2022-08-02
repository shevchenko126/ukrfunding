Method: admin/
Admin panel
/-----------------------------------------------------------------------
Method: /accounts/
Type: GET
Authorization required: No
Description: Retrieve user full info with token.
Request params:
username(string),|username|is not case sensitive
password(string),|password|case sensitive

Response: /accounts/?username=user1&password=user1
/-----------------------------------------------------------------------
Method: /accounts/
Type: POST
Authorization required: No
Description: Assigns an authentication token for existing account or creates new user account and token.
Request params:
username(string),|username|is not case sensitive
password(string),|password|case sensitive

Response: /accounts/?username=Some_user&password=Some_password
/-----------------------------------------------------------------------
Method: /fundraises/
Type: GET
Authorization required: No
Description: Retrieve Fundraises List.
Request params:
None - Retrieve all Fundraises
or
featured(Boolean),|0 or 1| filter for Fundraises
or
category_id(int)

Response: /fundraises
or
Response: /fundraises/?featured=1
or
Response: /fundraises/categories/1
/-----------------------------------------------------------------------
Method: /fundraises/
Type: OPTIONS
Authorization required: No
Description: Retrieve Fundraises model fields.
Request params:
None

Response: /fundraises/
/-----------------------------------------------------------------------
Method: /payments/
Type: OPTIONS
Authorization required: No
Description: Retrieve Payments List
Request params:
None

Response: /payments/api/
/-----------------------------------------------------------------------
Method: /payments/
Type: GET
Authorization required: YES
Description: Receive payments linked to a token 
Request params(in headers):
Token(string),|Each user has a token associated with him in the database
user(string),|username|is not case sensitive
password(string),|password|case sensitive

Response: /payments/api/