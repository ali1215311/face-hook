import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      <p>Homepage</p>
    </>
  );
};
export default HomePage;
