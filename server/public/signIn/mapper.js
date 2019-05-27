export const mapper = ({
  _id,
  nome,
  email,
  telefones
}) => ({
  id: _id,
  nome,
  email,
  telefones: telefones.map(telefone => phoneMapper(telefone))
})

export const phoneMapper = ({
  numero,
  dd,
  _id
}) => ({
  id: _id,
  numero,
  dd
})