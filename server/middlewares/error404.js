const sendError404 = async (req, res) => {
  res
    .status(404)
    .send({
      name: 'Page404',
      message: 'Página não encontrada',
      status: '404',
    });
};

export default async (req, res, next) => {
  await sendError404(req, res, next);
};
