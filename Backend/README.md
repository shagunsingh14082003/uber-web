# Backend API Documentation

This documentation provides details about the backend API endpoints for the Uber Clone application.

## Endpoints

### POST /users/register

This endpoint registers a new user by accepting their first name, last name, email, and password. It validates the input data and returns a JWT token upon successful registration.

#### Request

- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
  - `fullname`: Object containing `firstname` and `lastname`
  - `email`: User's email address
  - `password`: User's password

#### Response

- **Success**: 
  - **Status Code**: `201 Created`
  - **Body**: Contains the JWT token and user details

- **Validation Errors**:
  - **Status Code**: `400 Bad Request`
  - **Body**: Contains validation error messages

- **User Already Exists**:
  - **Status Code**: `400 Bad Request`
  - **Body**: Message indicating the user already exists

#### Example

##### Request
```bash
curl -X POST https://yourapi.com/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

##### Response
Contains the JWT token and user details.

### GET /users/profile

This endpoint retrieves the profile of the authenticated user.

#### Request

- **URL**: `/users/profile`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <jwt_token>`

#### Response

- **Success**: 
  - **Status Code**: `200 OK`
  - **Body**: Contains user profile details

- **Unauthorized**:
  - **Status Code**: `401 Unauthorized`
  - **Body**: Message indicating unauthorized access

#### Example

##### Request
```bash
curl -X GET https://yourapi.com/users/profile \
-H "Authorization: Bearer <jwt_token>"
```

##### Response
Contains user profile details.

### GET /users/logout

This endpoint logs out the authenticated user by blacklisting the JWT token.

#### Request

- **URL**: `/users/logout`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <jwt_token>`

#### Response

- **Success**: 
  - **Status Code**: `200 OK`
  - **Body**: Message indicating successful logout

- **Unauthorized**:
  - **Status Code**: `401 Unauthorized`
  - **Body**: Message indicating unauthorized access

#### Example

##### Request
```bash
curl -X GET https://yourapi.com/users/logout \
-H "Authorization: Bearer <jwt_token>"
```

##### Response
Message indicating successful logout.

### POST /captains/register

This endpoint registers a new captain by accepting their first name, last name, email, password, and vehicle details. It validates the input data and returns a JWT token upon successful registration.

#### Request

- **URL**: `/captains/register`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
  - `fullname`: Object containing `firstname` and `lastname`
  - `email`: Captain's email address
  - `password`: Captain's password
  - `vehicle`: Object containing `color`, `plate`, `capacity`, and `vehicleType`

#### Response

- **Success**: 
  - **Status Code**: `201 Created`
  - **Body**: Contains the JWT token and captain details

- **Validation Errors**:
  - **Status Code**: `400 Bad Request`
  - **Body**: Contains validation error messages

- **Captain Already Exists**:
  - **Status Code**: `400 Bad Request`
  - **Body**: Message indicating the captain already exists

#### Example

##### Request
```bash
curl -X POST https://yourapi.com/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

##### Response
Contains the JWT token and captain details.

### GET /captains/profile

This endpoint retrieves the profile of the authenticated captain.

#### Request

- **URL**: `/captains/profile`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <jwt_token>`

#### Response

- **Success**: 
  - **Status Code**: `200 OK`
  - **Body**: Contains captain profile details

- **Unauthorized**:
  - **Status Code**: `401 Unauthorized`
  - **Body**: Message indicating unauthorized access

#### Example

##### Request
```bash
curl -X GET https://yourapi.com/captains/profile \
-H "Authorization: Bearer <jwt_token>"
```

##### Response
Contains captain profile details.

### GET /captains/logout

This endpoint logs out the authenticated captain by blacklisting the JWT token.

#### Request

- **URL**: `/captains/logout`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <jwt_token>`

#### Response

- **Success**: 
  - **Status Code**: `200 OK`
  - **Body**: Message indicating successful logout

- **Unauthorized**:
  - **Status Code**: `401 Unauthorized`
  - **Body**: Message indicating unauthorized access

#### Example

##### Request
```bash
curl -X GET https://yourapi.com/captains/logout \
-H "Authorization: Bearer <jwt_token>"
```

##### Response
Message indicating successful logout.
