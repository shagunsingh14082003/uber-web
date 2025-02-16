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
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

#### Response

- **Success**: 
  - **Status Code**: `201 Created`
  - **Body**:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **Validation Errors**:
  - **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **User Already Exists**:
  - **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "message": "User already exist"
    }
    ```

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
```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

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
  - **Body**:
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **Unauthorized**:
  - **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example

##### Request
```bash
curl -X GET https://yourapi.com/users/profile \
-H "Authorization: Bearer <jwt_token>"
```

##### Response
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

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
  - **Body**:
    ```json
    {
      "message": "Logged out"
    }
    ```

- **Unauthorized**:
  - **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example

##### Request
```bash
curl -X GET https://yourapi.com/users/logout \
-H "Authorization: Bearer <jwt_token>"
```

##### Response
```json
{
  "message": "Logged out"
}
```

### POST /captains/register

This endpoint registers a new captain by accepting their first name, last name, email, password, and vehicle details. It validates the input data and returns a JWT token upon successful registration.

#### Request

- **URL**: `/captains/register`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
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
  }
  ```

#### Response

- **Success**: 
  - **Status Code**: `201 Created`
  - **Body**:
    ```json
    {
      "token": "jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **Validation Errors**:
  - **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        },
        {
          "msg": "Color must be at least 3 characters long",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "Plate must be at least 3 characters long",
          "param": "vehicle.plate",
          "location": "body"
        },
        {
          "msg": "Capacity must be at least 1",
          "param": "vehicle.capacity",
          "location": "body"
        },
        {
          "msg": "Invalid vehicle type",
          "param": "vehicle.vehicleType",
          "location": "body"
        }
      ]
    }
    ```

- **Captain Already Exists**:
  - **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "message": "Captain already exists"
    }
    ```

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
```json
{
  "token": "jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

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
  - **Body**:
    ```json
    {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
    ```

- **Unauthorized**:
  - **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example

##### Request
```bash
curl -X GET https://yourapi.com/captains/profile \
-H "Authorization: Bearer <jwt_token>"
```

##### Response
```json
{
  "_id": "captain_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

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
  - **Body**:
    ```json
    {
      "message": "Logged out"
    }
    ```

- **Unauthorized**:
  - **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example

##### Request
```bash
curl -X GET https://yourapi.com/captains/logout \
-H "Authorization: Bearer <jwt_token>"
```

##### Response
```json
{
  "message": "Logged out"
}
```
