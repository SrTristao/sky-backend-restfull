/**
 * @swagger
 * /api/private/refreshToken:
 *   post:
 *     tags:
 *       - RefreshToken
 *     name: RefreshToken
 *     summary: RefreshToken
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     responses:
 *       200:
 *         description: Status OK
 *         schema:
 *          properties:
 *           token:
 *             type: object
 *             example: {
 *               token: "string"
 *             }
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 */