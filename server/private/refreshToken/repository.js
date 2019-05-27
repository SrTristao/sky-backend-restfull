export const updateToken = async (id, token) => {
  const updateObj = {
    token,
    updatedAt: new Date()
  }
  return await User.findByIdAndUpdate({
    _id: id
  }, updateObj);
}