export const tokenMapper = ({
    _id,
    nome,
    email,
    role
  }) => ({
    id: _id,
    nome: nome,
    role: role,
    email: email
  });