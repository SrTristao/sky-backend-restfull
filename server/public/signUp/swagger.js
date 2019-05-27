/**
 * @swagger
 * /api/public/signUp:
 *   post:
 *     tags:
 *       - SignUp
 *     name: SignUp
 *     summary: SignUp
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
 *              nome:
 *                  type: string
 *              telefones:
 *                  type: array
 *         required:
 *             - email
 *             - senha
 *             - nome
 *             - telefones
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