# Better Book Bundle Builder API documentation

The base part of the URI path for the bundles API is `/api`

The following sections describe each API endpoint.

## Obtain all bundles

- Request:
  - Method: GET
  - Path: /bundles
  -  Body: none
- Response:
  - Success:
    - Status code: 200 OK 
    - Content-Type: aplication/json
    - Body example:

    ```json
      {
        "bundles": [
          {
            "id": 1,
            "name": "bundle1",
            "description": "description of bundle 1"
          },
          {
            "id": 2,
            "name": "bundle2",
            "description": "description of bundle 2"
          },
          ...
        ]
      }
    ```


---

## Obtain a specific bundle

- Request:
  - Method:GET
  - Path: /bundles/:id
    - Path parameters:
      - id - bundle identifier
  - Body: none
- Response:
  - Success: 
    - Status code: 200 OK 
    - Content-Type: apllication/json
    - Body:
 
    ```json
        {
          "id": 1,
          "name": "bundle1",
          "description": "description of bundle 1"
          "books": [  
            {
              ...
            }
          ]
        }
    ```

 - Errors:
   - Status Code: 404 Not Found

     - Body:
     ```json
       {
         "error": "Resource not found" ,
         "uri": "/bundle/2"
       }
     ```
---

## Create a Bundle

- Request:
  - Method:POST
  - Path: /bundles
  - Content-Type: application/json
  - Body:

```json
  {
    "name": "bundle1",
    "description": "description of bundle 1"
  }  
```

- Response:
  - Success:
    - Status code: 201 Created
    - Headers:
      - Location: /bundles/2
    - Content-Type: application/json
    - Body example:
 
    ```json
      {
        "status" : "Bundle created",
        "uri": "/bundles/2"
      }
    ```
 - Errors:
   - Status Code: 400 Bad Request

   - Body:

     ```json
        {
          "error": "Bad request",
          "errorDetail": "Parameter x error"
          "uri": "/bundles/2"
        }
     ```
---

## Update a Bundle

- Request:
  - Method: PUT
  - Path: /bundles/:id
    - Path parameters:
      - id - bundle id
  - Content-Type: application/json
  - Body:

```json
  {
    "name": "bundle11",
    "description": "description of bundle 11"
  },  

```

- Response:
  - Success:
    - Status code: 200
    - Content-Type: application/json
    - Body example:
 
    ```json
      {
        "status" : "Bundle updated" ,
        "uri": "/bundles/2 "
      }
    ```

- Errors:
  - Status Code: 400 Bad Request

   - Body:

     ```json
        {
          "error": "Bad request",
          "errorDetail": "Parameter x error"
          "uri": "/bundles/2"
        }
     ```
  - Status Code: 404 Not Found

     - Body:
     ```json
       {
         "error": "Resource not found" ,
         "uri": "/bundle/2"
       }
     ```
---

## Delete a Bundle

- Request:
  - Method:DELETE 
  - Path: /bundles/:id
    - Path parameters:
      - id - bundle identifier 
  - Content-Type: 
  - Body: none

- Response:
  - Success:
    - Status code: 200
    - Content-Type: application/json
    - Body example:
 
    ```json
      {
        "status" : "Bundle deleted",
        "uri": "/bundles/2"
      }
    ```

- Errors:
  - Status Code: 404 Not Found

     - Body:
     ```json
       {
         "error": "Resource not found" ,
         "uri": "/bundle/2"
       }
     ```
  
---

## Associate a Book with a Bundle

- Request:
  - Method: PUT
  - Path: /bundles/:id/books/:bid
    - Path parameters:
      - id - bundle id
      - bid - book id
  - Content-Type: 
  - Body: none

- Response:
  - Success:
    - Status code: 200
    - Content-Type: application/json
    - Body example:
 
    ```json
      {
        "status" : "Book associated,
        "uri": "/bundles/2/books/b1"
      }
    ```

- Errors

  - Status Code:

    - Body:

     ```json
       {
          "error":,
          "uri": ,
       }
     ```
---


