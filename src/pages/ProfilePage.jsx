import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { auth } = useAuth();
  const api = useAxios();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/profile/${auth?.user?.id}`);

        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [api, auth]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <div>ProfilePage</div>
      <h2>Name: {user?.firstName}</h2>
    </>
  );
};
export default ProfilePage;
