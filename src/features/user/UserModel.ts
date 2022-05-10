export interface IUserRequest {
  userId: string,
  last?: number,
  field?: string,
  direction?: string,
}

export interface IOrganization {
  avatarUrl: string
}
export interface IRepository {
  description?: string,
  forkCount: number,
  name: string,
  primaryLanguage: string,
  stargazerCount: number,
  url: string,
}

export interface IUser {
  avatarUrl: string,
  name: string,
  githubId: string,
  following: number,
  follower: number,
  starredRepositories: number,
  twitterUsername: string,
  organizations: IOrganization[],
  topRepositories: IRepository[],
}

const repositoryMap = (record: any): IRepository => ({
  description: record.description,
  forkCount: record.forkCount,
  name: record.name,
  primaryLanguage: record.primaryLanguage.name,
  stargazerCount: record.stargazerCount,
  url: record.url,
});

const organizationMap = (record: any): IOrganization => ({
  avatarUrl: record.avatarUrl
})
export const userMap = (record: any) => ({
  avatarUrl: record.avatarUrl,
  name: record.name,
  githubId: record.userId,
  following: record.following.totalCount,
  follower: record.followers.totalCount,
  starredRepositories: record.starredRepositories.totalCount,
  twitterUsername: record.twitterUsername,
  organizations: (record.organizations.nodes || []).map(organizationMap),
  topRepositories: (record.topRepositories.nodes || []).map(repositoryMap),
});