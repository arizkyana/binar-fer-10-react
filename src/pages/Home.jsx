import { Link } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="backdrop"></div>
      Home:
      <Link to={"/search"}>Mulai Sewa Mobil</Link>
      <div className="search-form">Search Form</div>
    </div>
  );
};

export default Home;
