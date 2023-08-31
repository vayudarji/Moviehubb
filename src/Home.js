
import Movie from "./Movie";
import Search from "./Search";
import Test from "./Test";
import Header from "./header";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Search />
        <Movie />
        
      </div>
    </>
  );
};

export default Home;
