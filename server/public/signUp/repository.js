import {
  User
} from "../../models/User"

export const saveUser = async user => {
  const newUser = new User(user);
  return await newUser.save();
}