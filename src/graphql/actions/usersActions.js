import { UserModel } from '../../dataBase/models';

const addUserAction = async (userData) => {
  try {
    return await UserModel.create(userData)
  } catch (error) {
    console.log("TCL: error", error)
  }
};

const updateUserAction = async (filter, update) => {
  try {
    return await UserModel.findOneAndUpdate(filter, update, { new: true });
  } catch (error) {
    console.log("TCL: updateUserAction -> error", error)
  }
}

export {
  addUserAction,
  updateUserAction
}