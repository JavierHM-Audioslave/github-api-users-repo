export const urlGetUsers = "https://api.github.com/users";
export const urlGetUser = userLogin => `https://api.github.com/users/${userLogin}`;
export const urlGetUsersOfAPagination = since => since ? `https://api.github.com/users?since=${since}` : `https://api.github.com/users`;

// export const urlGetRepos = "https://api.github.com/repositories";
export const urlGetRepo = userName => `https://api.github.com/users/${userName}/repos`;
export const urlGetReposOfAPagination = since => since ? `https://api.github.com/repositories?since=${since}` : `https://api.github.com/repositories`;