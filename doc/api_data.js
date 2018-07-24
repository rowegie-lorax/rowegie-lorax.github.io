define({ "api": [
  {
    "type": "get",
    "url": "/user/get_auth_user/",
    "title": "Get logged in user.",
    "name": "AuthUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>home address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city location of user's home address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country location of user's city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>province location of the user's city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "postal_code",
            "description": "<p>postal code of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_guest",
            "description": "<p>determine if user is guest.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_admin",
            "description": "<p>determine if user is admin.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_superuser",
            "description": "<p>determine if user is superuser.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alt_phone",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Image",
            "optional": false,
            "field": "photo",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_mobile_activated",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "metadata",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create_at",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update_at",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "account",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social_id",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact_name",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n     \"type\": \"users\",\n     \"id\": \"5\",\n     \"attributes\": {\n         \"first_name\": \"Baseup\",\n         \"last_name\": \"User\",\n         \"email\": \"user@baseup.co\",\n         \"address\": \"S&L Building, 101 Esteban, Legazpi Village\",\n         \"city\": \"Makati City\",\n         \"country\": \"Philippines\",\n         \"province\": \"Metro Manila\",\n         \"postal_code\": \"1229\",\n         \"gender\": \"Male\",\n         \"birthdate\": null,\n         \"is_guest\": false,\n         \"is_admin\": false,\n         \"is_superuser\": false,\n         \"timezone\": \"Asia/Manila\",\n         \"phone\": \"(02) 750 7205\",\n         \"alt_phone\": null,\n         \"status\": \"A\",\n         \"photo\": null,\n         \"is_active\": true,\n         \"is_mobile_activated\": false,\n         \"metadata\": {},\n         \"create_at\": \"2016-03-31T09:32:17.399000Z\",\n         \"update_at\": \"2016-03-31T09:32:17.399000Z\",\n         \"account\": [],\n         \"social_id\": null,\n         \"contact_name\": null,\n     }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "credentials_not_provided",
            "description": "<p>Authorization token not provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_token_provider",
            "description": "<p>Token header is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unathorized\n{\n  \"errors\": [\n      {\n         \"detail\": \"Authentication credentials were not provided.\",\n         \"source\": {\n             \"pointer\": \"data\"\n         },\n         \"status\": \"401\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unathorized\n{\n  \"errors\": [\n      {\n         \"detail\": \"Invalid token header.\n            No credentials provided.\",\n         \"source\": {\n             \"pointer\": \"data\"\n         },\n         \"status\": \"401\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/users/get_auth_user/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register/",
    "title": "Create a new user.",
    "name": "RegisterUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Update user object</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Update user object</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Update user object</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Update user object</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Update user object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"data\": {\n        \"attributes\": {\n            \"first_name\": \"Baseup\",\n            \"last_name\": \"User\",\n            \"email\": \"user@baseup.co\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyUsed",
            "description": "<p>The email was already used by other user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Email already used.\",\n                \"source\": {\n                    \"pointer\": \"/data/attributes/email\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/users/register/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": ""
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/user.py",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id/",
    "title": "Update user.",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>home address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city location of user's home address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country location of user's city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>province location of the user's city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postal_code",
            "description": "<p>postal code of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Image",
            "optional": false,
            "field": "photo",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>home address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city location of user's home address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country location of user's city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>province location of the user's city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "postal_code",
            "description": "<p>postal code of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_guest",
            "description": "<p>determine if user is guest.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_admin",
            "description": "<p>determine if user is admin.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_superuser",
            "description": "<p>determine if user is superuser.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alt_phone",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Image",
            "optional": false,
            "field": "photo",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_mobile_activated",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "metadata",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create_at",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update_at",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "account",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social_id",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact_name",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n     \"type\": \"users\",\n     \"id\": \"5\",\n     \"attributes\": {\n         \"first_name\": \"Baseup\",\n         \"last_name\": \"User\",\n         \"email\": \"user@baseup.co\",\n         \"address\": \"S&L Building, 101 Esteban, Legazpi Village\",\n         \"city\": \"Makati City\",\n         \"country\": \"Philippines\",\n         \"province\": \"Metro Manila\",\n         \"postal_code\": \"1229\",\n         \"gender\": \"Male\",\n         \"birthdate\": null,\n         \"is_guest\": false,\n         \"is_admin\": false,\n         \"is_superuser\": false,\n         \"timezone\": \"Asia/Manila\",\n         \"phone\": \"(02) 750 7205\",\n         \"alt_phone\": null,\n         \"status\": \"A\",\n         \"photo\": null,\n         \"is_active\": true,\n         \"is_mobile_activated\": false,\n         \"metadata\": {},\n         \"create_at\": \"2016-03-31T09:32:17.399000Z\",\n         \"update_at\": \"2016-03-31T09:32:17.399000Z\",\n         \"account\": [],\n         \"social_id\": null,\n         \"contact_name\": null,\n     }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "credentials_not_provided",
            "description": "<p>Authorization token not provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid_token_provider",
            "description": "<p>Token header is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unathorized\n{\n  \"errors\": [\n      {\n         \"detail\": \"Authentication credentials were not provided.\",\n         \"source\": {\n             \"pointer\": \"data\"\n         },\n         \"status\": \"401\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unathorized\n{\n  \"errors\": [\n      {\n         \"detail\": \"Invalid token header.\n            No credentials provided.\",\n         \"source\": {\n             \"pointer\": \"data\"\n         },\n         \"status\": \"401\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/users/:id/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": ""
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/verify_user/",
    "title": "Verify user.",
    "name": "VerifyUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent in email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"first_name\": \"Baseup\",\n    \"last_name\": \"User\",\n    \"email\": \"baseup.user@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCode",
            "description": "<p>Invalid verification code.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExpiredCode",
            "description": "<p>Verification code has already expired.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CodeAlreadyUsed",
            "description": "<p>Verification code is already used.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParams",
            "description": "<p>Missing parameters.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Invalid verification code.\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Verification code has already expired.\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Verification code is already used.\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Missing parameters.\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/users/verify_user/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": ""
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/user.py",
    "groupTitle": "User"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "rest/doc/main.js",
    "group": "_var_www_baseup_env_api_rest_doc_main_js",
    "groupTitle": "_var_www_baseup_env_api_rest_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "rest/template/template/main.js",
    "group": "_var_www_baseup_env_api_rest_template_template_main_js",
    "groupTitle": "_var_www_baseup_env_api_rest_template_template_main_js",
    "name": ""
  }
] });
