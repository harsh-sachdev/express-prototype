//video

/**
 * @swagger
 * /api/user/videos:
 *   get:
 *     tags:
 *       - Users
 *     description: Get All Videos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully get values
 */

/**
 * @swagger
 * /api/user/videos/{_id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Get Video by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully get video
 */


/**
 * @swagger
 * definitions:
 *   userRegister:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       username:
 *         type: string
 *       role:
 *         type: string
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     tags:
 *       - Users
 *     description: Register User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/userRegister'
 *     responses:
 *       200:
 *         description: Successfully Registered
 */

/**
 * @swagger
 * definitions:
 *   userLogin:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */


/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags:
 *       - Users
 *     description: Login User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/userLogin'
 *     responses:
 *       200:
 *         description: Successfully logged In
 */

