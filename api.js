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
 * @apiError Invalid Grant Invalid credentials given.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "errors": {
 *          "error": "invalid_grant"
 *          "error_description": "Invalid credentials given."
 *     }
 * @apiError Invalid User User does not exist.
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
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
/**
 * @api {post} /users/register/ Register User
 * @apiVersion 0.1.0
 * @apiName UserRegistration
 * @apiGroup User
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
 *           "attributes": {
 *              "first_name": "Baseup",
 *              "last_name": "User",
 *              "email": "user@baseup.co"
 *           }
 *       }
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
 /**
 * @api {get} /users/get_auth_user/ Get Authenticated User
 * @apiVersion 0.1.0
 * @apiName GetAuthUser
 * @apiGroup User
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
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */