/**
 * @swagger
 * /api/public/signIn:
 *   post:
 *     tags:
 *       - SignIn
 *     name: SignIn
 *     summary: SignIn
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: signIn
 *         schema:
 *          properties:
 *              email:
 *                  type: string
 *              senha:
 *                  type: string
 *         required:
 *             - email
 *             - senha
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
 *               telefones: "array",
 *               token: "string"
 *             }
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 */
