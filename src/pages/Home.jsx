import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      Home:
      <Link to={"/search"}>Mulai Sewa Mobil</Link>
    </div>
  );
};

export default Home;
