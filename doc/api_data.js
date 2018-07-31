define({ "api": [
  {
    "type": "post",
    "url": "/oauth/token/",
    "title": "Request Access Token.",
    "name": "RequestToken",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "defaultValue": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client id of baseup</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"access_token\":\"hFExhYOoaILXSeFId2KWCXhkVpFLUy\",\n        \"expires_in\":36000,\n        \"token_type\":\"Bearer\",\n        \"scope\":\"read write\",\n        \"refresh_token\":\"e8GufgkOabZQhs3YhUjhqXgDMTvG6D\"\n    }\n}",
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
            "field": "InvalidGrant",
            "description": "<p>Invalid credentials given.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidUser",
            "description": "<p>Invalid user.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>User is not verified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"errors\":{\n        \"error\":\"invalid_grant\",\n        \"error_description\":\"Invalid credentials given.\"\n    }\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\":[\n        {\n            \"detail\":\"User is not verified.\",\n            \"source\":{\n                \"pointer\":\"/data/attributes/username\"\n            },\n            \"status\":\"400\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\":[\n        {\n            \"detail\":\"Invalid user.\",\n            \"source\":{\n                \"pointer\":\"/data/attributes/username\"\n            },\n            \"status\":\"400\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/oauth/token/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/views/token.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/bookings/",
    "title": "Create booking.",
    "name": "CreateBooking",
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_start",
            "description": "<p>Id of current branch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "padding",
            "description": "<p>Specified schedule date of appointments format(yyyy-mm-dd).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client",
            "description": "<p>Client id of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>Schedule id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>Service id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch",
            "description": "<p>Current branch id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>Provider id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{}",
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
            "field": "BranchNotFound",
            "description": "<p>Branch not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServiceWithBooking",
            "description": "<p>Service not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBranch",
            "description": "<p>Service not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\": [\n        {\n            \"detail\": \"Invalid date format'.\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"errors\": [\n        {\n            \"detail\": \"Branch not found.\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\": [\n        {\n            \"detail\": \"Branch id must be integer format\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/bookings/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer</p>"
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
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/booking.py",
    "groupTitle": "Booking"
  },
  {
    "type": "delete",
    "url": "/bookings/:id/",
    "title": "Delete Booking.",
    "name": "DeleteBooking",
    "group": "Booking",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Contet\n{\n}",
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
        "url": "https://staging.baseup.me/api/v1/bookings/:id/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/booking.py",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "/bookings/",
    "title": "List all bookings.",
    "name": "ListBookings",
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "branch",
            "description": "<p>Id of current branch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Specified schedule date of appointments format(yyyy-mm-dd).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "no_paginate",
            "description": "<p>Requires pagination or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "include",
            "defaultValue": "provider,client,service,schedule,branch",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content\n{}",
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
            "field": "BranchNotFound",
            "description": "<p>Branch not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServiceWithBooking",
            "description": "<p>Service not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBranch",
            "description": "<p>Service not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\": [\n        {\n            \"detail\": \"Invalid date format'.\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"errors\": [\n        {\n            \"detail\": \"Branch not found.\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\": [\n        {\n            \"detail\": \"Branch id must be integer format\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/bookings/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer</p>"
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
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/booking.py",
    "groupTitle": "Booking"
  },
  {
    "type": "put",
    "url": "/bookings/:id/",
    "title": "Update booking.",
    "name": "UpdateBooking",
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_start",
            "description": "<p>Id of current branch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "padding",
            "description": "<p>Specified schedule date of appointments format(yyyy-mm-dd).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client",
            "description": "<p>Requires pagination or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>Requires pagination or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>Requires pagination or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch",
            "description": "<p>Requires pagination or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>Requires pagination or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Requires pagination or not.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\":{\n        \"type\":\"bookings\",\n        \"id\":\"15\",\n        \"attributes\":{\n        \"status\":\"P\",\n            \"metadata\":{\n                \"no_preference\":false,\n                \"booking_created_by\":\"admin\",\n                \"special_instructions\":\"\"\n            },\n            \"time_start\":\"16:45:00\",\n            \"padding\":\"00:30:00\",\n            \"account\":{\n            \"id\":2,\n            \"name\":\"Haney, Morgan and Mccormick\",\n            \"slug\":\"demo\"\n        }\n        },\n        \"relationships\":{\n            \"branch\":{\n                \"data\":{\n                    \"type\":\"branches\",\n                    \"id\":\"3\"\n                }\n            },\n            \"client\":{\n                \"data\":{\n                    \"type\":\"users\",\n                    \"id\":\"17\"\n                }\n            },\n            \"provider\":{\n                \"data\":{\n                    \"type\":\"users\",\n                    \"id\":\"22\"\n                }\n            },\n            \"schedule\":{\n                \"data\":{\n                    \"type\":\"schedules\",\n                    \"id\":\"18\"\n                }\n            },\n            \"service\":{\n                \"data\":{\n                    \"type\":\"services\",\n                    \"id\":\"1\"\n                }\n            }\n        }\n    }\n}",
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
        "url": "https://staging.baseup.me/api/v1/bookings/:id/"
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
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/booking.py",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "/branches/",
    "title": "List all branches.",
    "name": "ListBranches",
    "group": "Branches",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "account",
            "description": "<p>Id of account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "include",
            "defaultValue": "admins,account,account.owner",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\":[\n        {\n            \"type\":\"branches\",\n            \"id\":\"3\",\n            \"attributes\":{\n                \"name\":\"Demo Branch\",\n                \"alias\":\"test main\",\n                \"description\":\"Test description\",\n                \"phone\":\"09123123123\",\n                \"address\":\"Test location\",\n                \"city\":null,\n                \"country\":null,\n                \"province\":null,\n                \"postal_code\":null,\n                \"timezone\":null,\n                \"email\":\"jeremiah32@hotmail.com\",\n                \"amenities\":[\n\n                ],\n                \"guest_booking\":true\n            },\n            \"relationships\":{\n                \"providers\":{\n                    \"data\":[\n                        {\n                            \"type\":\"users\",\n                            \"id\":\"4\"\n                        }\n                    ],\n                    \"meta\":{\n                        \"count\":14\n                    }\n                },\n                \"account\":{\n                    \"data\":{\n                        \"type\":\"accounts\",\n                        \"id\":\"2\"\n                    }\n                },\n                \"admins\":{\n                    \"data\":[\n                        {\n                            \"type\":\"users\",\n                            \"id\":\"2\"\n                        }\n                    ],\n                    \"meta\":{\n                        \"count\":1\n                    }\n                },\n                \"groups\":{\n                    \"data\":[\n\n                    ],\n                    \"meta\":{\n                        \"count\":0\n                    }\n                }\n            }\n        }\n    ],\n    \"included\":[\n        {\n            \"type\":\"accounts\",\n            \"id\":\"2\",\n            \"attributes\":{\n                \"name\":\"Haney, Morgan and Mccormick\",\n                \"metadata\":null,\n                \"status\":\"A\",\n                \"address\":null,\n                \"city\":null,\n                \"country\":null,\n                \"province\":null,\n                \"postal_code\":null,\n                \"timezone\":null,\n                \"slug\":\"demo\",\n                \"business_logo\":null\n            },\n            \"relationships\":{\n                \"owner\":{\n                    \"data\":{\n                        \"type\":\"users\",\n                        \"id\":\"2\"\n                    }\n                },\n                \"groups\":{\n                    \"data\":[],\n                    \"meta\":{\"count\":0}\n                }\n            }\n        },\n        {\n            \"type\":\"users\",\n            \"id\":\"2\",\n            \"attributes\":{\n                \"first_name\":\"\",\n                \"last_name\":\"\",\n                \"email\":\"demo@baseup.co\",\n                \"address\":null,\n                \"city\":null,\n                \"country\":null,\n                \"province\":null,\n                \"postal_code\":null,\n                \"gender\":null,\n                \"birthdate\":null,\n                \"is_guest\":false,\n                \"is_admin\":true,\n                \"is_superuser\":true,\n                \"timezone\":null,\n                \"phone\":null,\n                \"alt_phone\":null,\n                \"status\":\"A\",\n                \"photo\":null,\n                \"is_active\":true,\n                \"is_mobile_activated\":false,\n                \"metadata\":{},\n                \"create_at\":\"2018-07-18T03:04:57.952887Z\",\n                \"update_at\":\"2018-07-18T03:04:57.952917Z\",\n                \"social_id\":null,\n                \"contact_name\":null\n            }\n        }\n    ]\n}",
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
            "field": "BranchNotFound",
            "description": "<p>Branch not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServiceWithBooking",
            "description": "<p>Service not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBranch",
            "description": "<p>Service not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\": [\n        {\n            \"detail\": \"Missing Paramaters\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/branches/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer</p>"
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
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/branch.py",
    "groupTitle": "Branches"
  },
  {
    "type": "delete",
    "url": "/provider_schedules/:id/",
    "title": "Delete provider schedule.",
    "name": "DeleteProviderSchedule",
    "group": "ProviderSchedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id of provider schedule.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
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
            "field": "ProviderScheduleNotFound",
            "description": "<p>The provider schedule not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeleteException",
            "description": "<p>Problem deleting schedule.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\": [\n        {\n            \"detail\": \"Opss! There is a problem when\n                deleting schedule.\",\n            \"source\": {\n                \"pointer\": \"/data\"\n            },\n            \"status\": \"400\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n    \"errors\": [\n        {\n            \"detail\": \"Internal server error\",\n            \"source\": {\n                \"pointer\": \"/data\"\n            },\n            \"status\": \"400\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"errors\": [\n        {\n            \"detail\": \"Not found.\",\n            \"source\": {\n                \"pointer\": \"/data\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/provider_schedules/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/provider_schedule.py",
    "groupTitle": "ProviderSchedule"
  },
  {
    "type": "get",
    "url": "/provider_schedules/",
    "title": "List all provider schedules.",
    "name": "ListProviderSchedulers",
    "group": "ProviderSchedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "branch",
            "description": "<p>Id of current branch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Specified schedule date of provider format(yyyy-mm-dd).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "include",
            "defaultValue": "provider,schedule",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n        \"data\":[\n            {\n                \"type\":\"provider_schedules\",\n                \"id\":\"15\",\n                \"attributes\":{\n                    \"time_in\":\"08:00:00\",\n                    \"time_out\":\"21:00:00\",\n                    \"metadata\":{\n                        \"repeated\":true\n                    },\n                    \"is_repeat\":true,\n                    \"services\":[\n                        1\n                    ]\n                },\n                \"relationships\":{\n                    \"provider\":{\n                        \"data\":{\n                            \"type\":\"users\",\n                            \"id\":\"22\"\n                        }\n                    },\n                    \"schedule\":{\n                        \"data\":{\n                            \"type\":\"schedules\",\n                            \"id\":\"2\"\n                        }\n                    }\n                }\n            }\n        ],\n        \"included\":[\n            {\n                \"type\":\"schedules\",\n                \"id\":\"2\",\n                \"attributes\":{\n                    \"date\":\"2018-07-22\",\n                    \"time_open\":\"00:00:00\",\n                    \"time_close\":\"23:59:00\"\n                },\n                \"relationships\":{\n                    \"branch\":{\n                        \"data\":{\n                            \"type\":\"branches\",\n                            \"id\":\"3\"\n                        }\n                    }\n                }\n            },\n            {\n                \"type\":\"users\",\n                \"id\":\"22\",\n                \"attributes\":{\n                    \"first_name\":\"Amanda\",\n                    \"last_name\":\"Flowers\",\n                    \"email\":\"fpope@gmail.com\",\n                    \"address\":null,\n                    \"city\":null,\n                    \"country\":null,\n                    \"province\":null,\n                    \"postal_code\":null,\n                    \"gender\":null,\n                    \"birthdate\":null,\n                    \"is_guest\":false,\n                    \"is_admin\":false,\n                    \"is_superuser\":false,\n                    \"timezone\":null,\n                    \"phone\":null,\n                    \"alt_phone\":null,\n                    \"status\":\"A\",\n                    \"photo\":null,\n                    \"is_active\":false,\n                    \"is_mobile_activated\":false,\n                    \"metadata\":{\n\n                    },\n                    \"create_at\":\"2018-07-18T03:04:58.640979Z\",\n                    \"update_at\":\"2018-07-18T03:04:58.641003Z\",\n                    \"social_id\":null,\n                    \"contact_name\":null\n                }\n            }\n        ]\n    }\n}",
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
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Missing params\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Invalid date format\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/provider_schedules/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/provider_schedule.py",
    "groupTitle": "ProviderSchedule"
  },
  {
    "type": "get",
    "url": "/reports/",
    "title": "Get reports.",
    "name": "DashboardData",
    "group": "Reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Id of current logged in account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch",
            "description": "<p>Id of current branch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_from",
            "description": "<p>Starting date of reports filter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_to",
            "description": "<p>End date of reports filter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"results\":[\n        {\n            \"booking_status\":\"P\",\n            \"booking_created\":\"2018-07-30T02:11:27.023412Z\",\n            \"booking_updated\":\"2018-07-30T02:11:27.023434Z\",\n            \"time_start\":\"09:00:00\",\n            \"branch_id\":3,\n            \"service_id\":1,\n            \"client_id\":3,\n            \"schedule_id\":1,\n            \"provider_id\":4,\n            \"service_cost\":\"200.00\",\n            \"service_duration\":\"01:00:00\",\n            \"service_name\":\"Demo Service\",\n            \"branch_name\":\"Demo Branch\",\n            \"client_first_name\":\"Aaron\",\n            \"client_last_name\":\"Wilson\",\n            \"client_email\":\"valenzuelaraymond@velasquez-mitchell.info\",\n            \"client_photo\":null,\n            \"account_name\":\"Bowman, Thomas and Webb\",\n            \"provider_first_name\":\"Ashley\",\n            \"provider_last_name\":\"Duarte\",\n            \"provider_email\":\"simonrobert@gmail.com\",\n            \"provider_photo\":null,\n            \"account_id\":2,\n            \"time_open\":\"04:00:00\",\n            \"time_close\":\"23:00:00\",\n            \"schedule_date\":\"2018-07-30\",\n            \"metadata\":{\n                \"is_guest_booking\":0\n            },\n            \"padding\":\"00:30:00\",\n            \"id\":1\n        },\n        {\n            \"booking_status\":\"F\",\n            \"booking_created\":\"2018-07-30T02:11:27.140898Z\",\n            \"booking_updated\":\"2018-07-30T02:11:27.140929Z\",\n            \"time_start\":\"10:00:00\",\n            \"branch_id\":3,\n            \"service_id\":1,\n            \"client_id\":5,\n            \"schedule_id\":1,\n            \"provider_id\":6,\n            \"service_cost\":\"200.00\",\n            \"service_duration\":\"01:00:00\",\n            \"service_name\":\"Demo Service\",\n            \"branch_name\":\"Demo Branch\",\n            \"client_first_name\":\"Matthew\",\n            \"client_last_name\":\"Donaldson\",\n            \"client_email\":\"lindsey23@hotmail.com\",\n            \"client_photo\":null,\n            \"account_name\":\"Bowman, Thomas and Webb\",\n            \"provider_first_name\":\"Angela\",\n            \"provider_last_name\":\"Murray\",\n            \"provider_email\":\"andersonstephanie@neal.com\",\n            \"provider_photo\":null,\n            \"account_id\":2,\n            \"time_open\":\"04:00:00\",\n            \"time_close\":\"23:00:00\",\n            \"schedule_date\":\"2018-07-30\",\n            \"metadata\":{\n                \"is_guest_booking\":0\n            },\n            \"padding\":\"00:30:00\",\n            \"id\":2\n        },\n    ],\n    \"branch\":[\n        {\n            \"account_id\":2,\n            \"account_name\":\"Bowman, Thomas and Webb\",\n            \"branch_id\":3,\n            \"branch_name\":\"Demo Branch\",\n            \"revenue\":1400.0,\n            \"day_revenue\":{},\n            \"stats\":{\n                \"2018-07-30\":{\n                    \"morning\":2,\n                    \"afternoon\":6,\n                    \"evening\":6\n                }\n            },\n            \"top_service\":[\n                {\n                    \"branch_id\":3,\n                    \"branch_name\":\"Demo Branch\",\n                    \"service_id\":1,\n                    \"service_name\":\"Demo Service\",\n                    \"booking_status\":\"F\",\n                    \"service_total\":1400.0\n                }\n            ],\n            \"top_provider\":[\n                {\n                    \"branch_id\":3,\n                    \"branch_name\":\"Demo Branch\",\n                    \"provider_id\":26,\n                    \"provider_first_name\":\"Mary\",\n                    \"provider_last_name\":\"Smith\",\n                    \"provider_photo\":\"\",\n                    \"booking_status\":\"F\",\n                    \"total_revenue\":200.0\n                },\n                {\n                    \"branch_id\":3,\n                    \"branch_name\":\"Demo Branch\",\n                    \"provider_id\":6,\n                    \"provider_first_name\":\"Angela\",\n                    \"provider_last_name\":\"Murray\",\n                    \"provider_photo\":\"\",\n                    \"booking_status\":\"F\",\n                    \"total_revenue\":200.0\n                },\n                {\n                    \"branch_id\":3,\n                    \"branch_name\":\"Demo Branch\",\n                    \"provider_id\":14,\n                    \"provider_first_name\":\"Daniel\",\n                    \"provider_last_name\":\"Grant\",\n                    \"provider_photo\":\"\",\n                    \"booking_status\":\"F\",\n                    \"total_revenue\":200.0\n                },\n                {\n                    \"branch_id\":3,\n                    \"branch_name\":\"Demo Branch\",\n                    \"provider_id\":10,\n                    \"provider_first_name\":\"Mary\",\n                    \"provider_last_name\":\"Stephens\",\n                    \"provider_photo\":\"\",\n                    \"booking_status\":\"F\",\n                    \"total_revenue\":200.0\n                },\n                {\n                    \"branch_id\":3,\n                    \"branch_name\":\"Demo Branch\",\n                    \"provider_id\":18,\n                    \"provider_first_name\":\"Derrick\",\n                    \"provider_last_name\":\"Garcia\",\n                    \"provider_photo\":\"\",\n                    \"booking_status\":\"F\",\n                    \"total_revenue\":200.0\n                }\n            ],\n            \"status\":[\n                {\n                    \"booking_status\":\"P\",\n                    \"count\":7\n                },\n                {\n                    \"booking_status\":\"F\",\n                    \"count\":7\n                }\n            ]\n        }\n    ],\n    \"prev_data\":{\n        \"revenue\":0.0,\n        \"top_provider\":[\n\n        ],\n        \"top_service\":[\n\n        ],\n        \"bookings\":0,\n        \"new_customers\":0\n    },\n    \"bookings_create_by\":{\n        \"admin\":0,\n        \"client\":0,\n        \"new\":14,\n        \"returning\":0\n    }\n}",
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
            "field": "InvalidGrant",
            "description": "<p>Invalid credentials given.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidUser",
            "description": "<p>Invalid user.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>User is not verified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"errors\":{\n        \"error\":\"invalid_grant\",\n        \"error_description\":\"Invalid credentials given.\"\n    }\n\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\":[\n        {\n            \"detail\":\"User is not verified.\",\n            \"source\":{\n                \"pointer\":\"/data/attributes/username\"\n            },\n            \"status\":\"400\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\":[\n        {\n            \"detail\":\"Invalid user.\",\n            \"source\":{\n                \"pointer\":\"/data/attributes/username\"\n            },\n            \"status\":\"400\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/reports/"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/views/reports.py",
    "groupTitle": "Reports"
  },
  {
    "type": "get",
    "url": "/schedules/",
    "title": "List all schedules.",
    "name": "ListSchedules",
    "group": "Schedules",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "branch",
            "description": "<p>Current branch id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_from",
            "description": "<p>Starting date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_to",
            "description": "<p>Current End date.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n        \"data\":[\n            {\n                \"type\": \"schedules\",\n                \"id\": \"1\",\n                \"attributes\": {\n                    \"date\": \"2018-07-18\",\n                    \"time_open\": \"04:00:00\",\n                    \"time_close\": \"23:00:00\"\n                },\n                \"relationships\": {\n                    \"branch\": {\n                        \"data\": {\n                            \"type\": \"branches\",\n                            \"id\": \"3\"\n                        }\n                    }\n                }\n            },\n            {\n                \"type\": \"schedules\",\n                \"id\": \"2\",\n                \"attributes\": {\n                    \"date\": \"2018-07-22\",\n                    \"time_open\": \"00:00:00\",\n                    \"time_close\": \"23:59:00\"\n                },\n                \"relationships\": {\n                    \"branch\": {\n                        \"data\": {\n                            \"type\": \"branches\",\n                            \"id\": \"3\"\n                        }\n                    }\n                }\n            }\n        ]\n    }\n}",
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
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"'Invalid date format\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Branch not found\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/schedules/"
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
            "field": "Accept",
            "defaultValue": "application/vnd.api+json\n",
            "description": "<p>apiHeader Content-Type=application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/schedule.py",
    "groupTitle": "Schedules"
  },
  {
    "type": "get",
    "url": "/service_categories/?include=services&page_size=1000",
    "title": "List all service categories.",
    "name": "ListServiceAndCategories",
    "group": "ServiceCategories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "branch",
            "description": "<p>Current branch id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "include",
            "defaultValue": "services",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page_size",
            "defaultValue": "1000",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n        \"links\":{\n            \"first\":\"https://baseup.staging/api/v1/service_categories/?branch=3&include=services&page=1&page_size=1000\",\n            \"last\":\"https://baseup.staging/api/v1/service_categories/?branch=3&include=services&page=1&page_size=1000\",\n            \"next\":null,\n            \"prev\":null\n        },\n        \"data\":[\n            {\n                \"type\":\"service_categories\",\n                \"id\":\"3\",\n                \"attributes\":{\n                    \"name\":\"Demo\",\n                    \"order\":0,\n                    \"services_order\":[\n\n                    ]\n                },\n                \"relationships\":{\n                    \"branch\":{\n                        \"data\":{\n                            \"type\":\"branches\",\n                            \"id\":\"3\"\n                        }\n                    },\n                    \"services\":{\n                        \"data\":[\n                            {\n                                \"type\":\"services\",\n                                \"id\":\"1\"\n                            }\n                        ],\n                        \"meta\":{\n                            \"count\":1\n                        }\n                    }\n                }\n            }\n        ],\n        \"included\":[\n            {\n                \"type\":\"services\",\n                \"id\":\"1\",\n                \"attributes\":{\n                    \"name\":\"Demo Service\",\n                    \"description\":\"It is a Demo Service\",\n                    \"cost\":\"200.00\",\n                    \"duration\":\"01:00:00\",\n                    \"max_customer\":2,\n                    \"is_online\":true\n                },\n                \"relationships\":{\n                    \"branch\":{\n                        \"data\":{\n                            \"type\":\"branches\",\n                            \"id\":\"3\"\n                        }\n                    }\n                }\n            }\n        ],\n        \"meta\":{\n            \"pagination\":{\n                \"page\":1,\n                \"pages\":1,\n                \"count\":2\n            }\n        }\n    }\n}",
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
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"'branch' id must be integer value\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Branch doesn't exist\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/service_categories/"
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
    "filename": "rest/viewsets/service_category.py",
    "groupTitle": "ServiceCategories"
  },
  {
    "type": "delete",
    "url": "/services/:id/?branch={id}",
    "title": "Delete service.",
    "name": "DeleteService",
    "group": "Services",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "branch",
            "description": "<p>Id of the current branch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content\n{}",
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
            "field": "ServiceNotFound",
            "description": "<p>Service not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BranchNotFound",
            "description": "<p>Branch not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServiceWithBooking",
            "description": "<p>Cannot delete service with booking.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBranch",
            "description": "<p>Invalid branch id given.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"errors\": [\n        {\n            \"detail\": \"Ooopss! Service doesn\\'t exist.\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"errors\": [\n        {\n            \"detail\": \"Ooopss! Branch doesn\\'t exist.\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\": [\n        {\n            \"detail\": \"Ooops! Can\\'t\n                delete service with booking(s)\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"errors\": [\n        {\n            \"detail\": \"Branch id must be integer value\",\n            \"source\": {\n                \"pointer\": \"/data/attributes/detail\"\n            },\n            \"status\": \"404\"\n        }\n    ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/services/:id/"
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
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/service.py",
    "groupTitle": "Services"
  },
  {
    "type": "get",
    "url": "/services/",
    "title": "List all services.",
    "name": "ListServices",
    "group": "Services",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "branch",
            "description": "<p>Current branch id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n        \"data\":[\n            {\n                \"type\": \"services\",\n                \"id\": \"2\",\n                \"attributes\": {\n                    \"name\": \"Demo Services\",\n                    \"description\": \"adfasd\",\n                    \"cost\": \"150.00\",\n                    \"duration\": \"00:30:00\",\n                    \"max_customer\": 1,\n                    \"is_online\": true\n                },\n                \"relationships\": {\n                    \"branch\": {\n                        \"data\": {\n                            \"type\": \"branches\",\n                            \"id\": \"3\"\n                        }\n                    }\n                }\n            },\n        ]\n    }\n}",
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
            "field": "BranchNotExists",
            "description": "<p>Branch doesn't exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BranchInvalid",
            "description": "<p>Branch doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"'branch' id must be integer value\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Branch doesn't exist\",\n                \"source\": {\n                    \"pointer\": \"/data\"\n                },\n                \"status\": \"400\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/services/"
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
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/service.py",
    "groupTitle": "Services"
  },
  {
    "type": "patch",
    "url": "/services/:id/",
    "title": "Update service.",
    "name": "UpdateServices",
    "group": "Services",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the service.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cost",
            "description": "<p>Price of the service.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration of the service.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "max_custmer",
            "description": "<p>Max customer of ther service.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_online",
            "description": "<p>Service if can be booked online.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n        \"data\":{\n            \"type\": \"services\",\n            \"id\": \"2\",\n            \"attributes\": {\n                \"name\": \"Demo Service12\",\n                \"description\": \"hello\",\n                \"cost\": \"150.00\",\n                \"duration\": \"00:30:00\",\n                \"max_customer\": 1,\n                \"is_online\": true\n            },\n            \"relationships\": {\n                \"branch\": {\n                    \"data\": {\n                        \"type\": \"branches\",\n                        \"id\": \"3\"\n                    }\n                }\n            }\n        }\n    }\n}",
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
            "field": "ServiceNotFound",
            "description": "<p>The email was already used by other user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n        \"errors\": [\n            {\n                \"detail\": \"Not found.\",\n                \"source\": {\n                    \"pointer\": \"/data/attributes/detail\"\n                },\n                \"status\": \"404\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://staging.baseup.me/api/v1/services/:id/"
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
            "field": "Accept",
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "rest/viewsets/service.py",
    "groupTitle": "Services"
  },
  {
    "type": "get",
    "url": "/user/get_auth_user/",
    "title": "Get logged in user.",
    "name": "AuthUser",
    "group": "User",
    "success": {
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
            "defaultValue": "application/vnd.api+json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
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
            "description": "<p>Firstname of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lastname of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Confirm password of the user</p>"
          }
        ]
      }
    },
    "success": {
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
            "defaultValue": "application/x-www-form-urlencoded",
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
            "description": "<p>timezone of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Image",
            "optional": false,
            "field": "photo",
            "description": "<p>profile photo of the User.</p>"
          }
        ]
      }
    },
    "success": {
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
            "defaultValue": "Bearer",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
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
