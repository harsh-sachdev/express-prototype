//video

/**
 * @swagger
 * definitions:
 *   video:
 *     properties:
 *       title:
 *         type: string
 *       author_name:
 *         type: string
 *
 */

/**
 * @swagger
 * /api/admin/videos:
 *   post:
 *     tags:
 *       - Admin
 *     description: Add video
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         in: header
 *         description: token
 *         type: string
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/video'
 *     responses:
 *       200:
 *         description: video added successfully
 */

/**
 * @swagger
 * /api/admin/videos/{_id}:
 *   put:
 *     tags:
 *       - Admin
 *     description: Update video
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         in: header
 *         description: token
 *         type: string
 *         required: true
 *       - name: _id
 *         in: path
 *         type: string
 *         description: video id
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/video'
 *     responses:
 *       200:
 *         description: video updated Successfully
 */

/**
 * @swagger
 * /api/admin/videos/{_id}:
 *   delete:
 *     tags:
 *       - Admin
 *     description: Delete  video
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         in: header
 *         description: token
 *         type: string
 *         required: true
 *       - name: _id
 *         in: path
 *         type: string
 *         description: video id
 *     responses:
 *       200:
 *         description: video updated Successfully
 */

