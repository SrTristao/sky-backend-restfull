export const mapper = ({
  _id,
  nome,
  email,
  telefones,
  token
}) => ({
  id: _id,
  nome,
  email,
  telefones: telefones.map(telefone => phoneMapper(telefone)),
  token
})

export const phoneMapper = ({
  numero,
  dd,
  _id
}) => ({
  numero,
  dd
})