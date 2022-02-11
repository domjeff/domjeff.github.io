import axios from "axios";

export interface getLatestReposInterface{
    githubUsername:string
}

const getLatestRepos = async (data:getLatestReposInterface):Promise<any> => {
  console.log("data", data);
  try {
    const username = data.githubUsername;

    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
    );

    let repos = res.data.items;
    let latestSixRepos = repos.splice(0, 6);
    return latestSixRepos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;