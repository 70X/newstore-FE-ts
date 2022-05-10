import { IUserRequest } from "./UserModel";

export const getUserSchema = (user: IUserRequest) => {
  const { 
    userId,
    last = 6,
    field = 'PUSHED_AT',
    direction = 'DESC',

   } = user;
  return `query GetUser {
    user(login: "${userId}") {
      avatarUrl
      name
      followers {
        totalCount
      }
      following{
        totalCount
      }
      starredRepositories {
        totalCount
      }
      twitterUsername
      topRepositories (last:${last}, orderBy: {field:${field}, direction:${direction}}) {
        nodes {
          name
          url
          description
          primaryLanguage{
            name
          }
          stargazerCount
          forkCount
        }
      }
      organizations (last:10) {
        nodes{
          avatarUrl
        }
      }
    }
  }`
};