/**
 * @swagger
 * /api/private/user/{id}:
 *   get:
 *     tags:
 *       - GetById
 *     name: GetById
 *     summary: GetById
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Status OK
 *         schema:
 *          properties:
 *           usuario:
 *             type: object
 *             example: {
 *               id: "string",
 *               nome: "string",
 *               email: "string",
 *               telefones: "array"
 *             }
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 */