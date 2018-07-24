/**
 * @api {post} /oauth/token/ Request Access Token
 * @apiVersion 0.1.0
 * @apiName RequestToken
 * @apiGroup Authentication
 *
 * @apiParam {String} grant_type Users unique ID.
 * @apiParam {String} username Users unique ID.
 * @apiParam {String} password Users unique ID.
 * @apiParam {String} client_id Users unique ID.
 *
 * @apiSuccess {String} access_token Firstname of the User.
 * @apiSuccess {String} expires_in  Lastname of the User.
 * @apiSuccess {String} token_type  Lastname of the User.
 * @apiSuccess {String} scope  Lastname of the User.
 * @apiSuccess {String} refresh_token  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *           "access_token": "xjvSR2GLQ4yJwZdzcJ5lXEejn2ei6M",
 *           "expires_in": 36000,
 *           "token_type": "Bearer",
 *           "scope": "read write",
 *           "refresh_token": "cMDAppMQeE7hXFklZ3NwIhms6kIUaZ",
 *       }
 *     }
 *
 * @apiError invalid_grant Invalid credentials given.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "errors": {
 *          "error": "invalid_grant"
 *          "error_description": "Invalid credentials given."
 *     }
 * @apiError unsupported_grant_type Invalid grant type.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "errors": {
 *          "error": "unsupported_grant_type"
 *     }
 * @apiError invalid_user User does not exist.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
 *       {
 *          "detail": "Invalid user."
 *          "source": {
 *              "pointer": "/data/attributes/username"
 *          },
 *          "status": "400"
 *       }
 *     }
 * @apiError invalid_client_id Invalid client id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
 *       {
 *          "detail": "Invalid Client."
 *          "source": {
 *              "pointer": "/data/attributes/client_id"
 *          },
 *          "status": "400"
 *       }
 *     }
 */
 /**
 * @api {post} /oauth/revoke-token/ Revoke Access Token
 * @apiVersion 0.1.0
 * @apiName RevokeToken
 * @apiGroup Authentication
 *
 * @apiParam {String} client_id Users unique ID.
 * @apiParam {String} token Users unique ID.
 *
 * @apiSuccess {String} access_token Firstname of the User.
 * @apiSuccess {String} expires_in  Lastname of the User.
 * @apiSuccess {String} token_type  Lastname of the User.
 * @apiSuccess {String} scope  Lastname of the User.
 * @apiSuccess {String} refresh_token  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError invalid_client_id Invalid client id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "invalid_client"
 *     }
 * @apiError invalid_request Authorization token not provided.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "errors": {
 *          "error": "invalid_request"
 *          "error_description": "Missing token parameter."
 *     }
 */
/**
 * @api {post} /users/register/ Register User
 * @apiVersion 0.1.0
 * @apiName UserRegistration
 * @apiGroup User
 *
 * @apiParam {String} first_name Users unique ID.
 * @apiParam {String} last_name Users unique ID.
 * @apiParam {String} email Users unique ID.
 * @apiParam {String} phone  password of the User.
 * @apiParam {Password} password  password of the User.
 *
 * @apiSuccess {String} first_name Firstname of the User.
 * @apiSuccess {String} last_name  Lastname of the User.
 * @apiSuccess {String} email  Email of the User.
 * @apiSuccess {String} phone  Phone number of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *           "attributes": {
 *              "first_name": "Baseup",
 *              "last_name": "User",
 *              "email": "user@baseup.co"
 *           }
 *       }
 *     }
 *
 * @apiError EmailAlreadyUsed The email of the User was already used by other user.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
 *           {
 *              "detail": "Email already used.",
 *              "source": {
 *                  "pointer": "/data/attributes/email"
 *              },
 *              "status": "400"
 *           }
 *       ]
 *     }
 * @apiSampleRequest https://staging.baseup.me/api/v1/users/register/
 * @apiHeader Content-Type
 */
 /**
 * @api {get} /users/get_auth_user/ Get Authenticated User
 * @apiVersion 0.1.0
 * @apiName GetAuthUser
 * @apiGroup User
 *
 * @apiSuccess {String} first_name firstname of the User.
 * @apiSuccess {String} last_name  last name of the User.
 * @apiSuccess {String} email  email of the User.
 * @apiSuccess {String} address  home address of the User.
 * @apiSuccess {String} city  city location of user's home address.
 * @apiSuccess {String} country  country location of user's city.
 * @apiSuccess {String} province  province location of the user's city.
 * @apiSuccess {String} postal_code  postal code of the user.
 * @apiSuccess {String} gender  gender of the user.
 * @apiSuccess {Date} birthdate  birthdate of the user.
 * @apiSuccess {Boolean} is_guest determine if user is guest.
 * @apiSuccess {Boolean} is_admin  determine if user is admin.
 * @apiSuccess {Boolean} is_superuser  determine if user is superuser.
 * @apiSuccess {String} timezone  Lastname of the User.
 * @apiSuccess {String} phone  Lastname of the User.
 * @apiSuccess {String} alt_phone  Lastname of the User.
 * @apiSuccess {String} status  Lastname of the User.
 * @apiSuccess {Image} photo  Lastname of the User.
 * @apiSuccess {Boolean} is_active  Lastname of the User.
 * @apiSuccess {Boolean} is_mobile_activated  Lastname of the User.
 * @apiSuccess {JSON} metadata  Lastname of the User.
 * @apiSuccess {Date} create_at  Lastname of the User.
 * @apiSuccess {Date} update_at  Lastname of the User.
 * @apiSuccess {List} account  Lastname of the User.
 * @apiSuccess {String} social_id  Lastname of the User.
 * @apiSuccess {String} contact_name  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *          "type": "users",
 *          "id": "5",
 *          "attributes": {
 *              "first_name": "Baseup",
 *              "last_name": "User",
 *              "email": "user@baseup.co",     
 *              "address": "S&L Building, 101 Esteban, Legazpi Village",
 *              "city": "Makati City",
 *              "country": "Philippines",
 *              "province": "Metro Manila",
 *              "postal_code": "1229",
 *              "gender": "Male",
 *              "birthdate": null,
 *              "is_guest": false,
 *              "is_admin": false,
 *              "is_superuser": false,
 *              "timezone": "Asia/Manila",
 *              "phone": "(02) 750 7205",
 *              "alt_phone": null,
 *              "status": "A",
 *              "photo": null, 
 *              "is_active": true,
 *              "is_mobile_activated": false,
 *              "metadata": {},
 *              "create_at": "2016-03-31T09:32:17.399000Z",
 *              "update_at": "2016-03-31T09:32:17.399000Z",
 *              "account": [],
 *              "social_id": null,
 *              "contact_name": null,
 *          }
 *       }     
 *     }
 * @apiError credentials_not_provided Authorization token not provided.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unathorized
 *     {
 *       "errors": [
 *           {
 *              "detail": "Authentication credentials were not provided.",
 *              "source": {
 *                  "pointer": "data"
 *              },
 *              "status": "401"
 *           }
 *       ]
 *     }
 * @apiError invalid_token_provider Token header is invalid.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unathorized
 *     {
 *       "errors": [
 *           {
 *              "detail": "Invalid token header. No credentials provided.",
 *              "source": {
 *                  "pointer": "data"
 *              },
 *              "status": "401"
 *           }
 *       ]
 *     }
 * @apiSampleRequest https://staging.baseup.me/api/v1/users/get_auth_user/
 * @apiHeader Authorization
 * @apiHeader Content-Type
 */
 /**
 * @api {post} /users/forgot_password/ Forgot User Password
 * @apiVersion 0.1.0
 * @apiName ForgotUserPassword
 * @apiGroup User
 *
 * @apiParam {String} email Users' registered email.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": "Please check your email to reset your password."
 *     }
 *
 * @apiError invalid_email Email not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
 *           {
 *              "detail": "Invalid Email",
 *              "source": {
 *                  "pointer": "data"
 *              },
 *              "status": "400"
 *           }
 *       ]
 *     }
 * @apiSampleRequest https://staging.baseup.me/api/v1//users/forgot_password/
 * @apiHeader Content-Type
 */