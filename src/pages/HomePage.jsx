// import { api } from "../api";

import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const HomePage = () => {
  // const refreshToken = auth?.token?.refreshToken;
  const { auth } = useAuth();
  const api = useAxios();

  const handleClick = async () => {
    const response = await api.get(`/profile/${auth.user.id}`);

    console.log(response.data);
  };
  return (
    <>
      <p>Homepage</p>
      <button onClick={handleClick}>Fetch</button>
    </>
  );
};
export default HomePage;
