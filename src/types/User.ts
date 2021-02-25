import Repo from "./Repo";

type User = {
  login: string;
  id: number;
  repos_url: string;
  name: string;
  bio: string;
  email: string;
  location: string;
  avatar_url: string;
  repos?: Repo[];
};

export default User;
