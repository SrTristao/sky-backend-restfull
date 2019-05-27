import {
  User
} from "../../models/User"

export const findByEmail = async email => {
  return await User.findOne({
    email
  })
}