import instanceAPI from "../../lib/network"
import { IUser, userMap } from "./UserModel";
import { getUserSchema } from "./UserSchema";

export const getUserInfo = async (userId: string): Promise<IUser> => {
  const data = { query: getUserSchema({ userId }) };
  return instanceAPI.post('/graphql', JSON.stringify(data))
    .then(({ data: { data } }) => userMap({ ...data.user, userId }));
}