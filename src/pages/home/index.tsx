import Dashboard from "../../components/dashboard";
import Header from "../../components/header";
import Hero from "../../components/hero";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <Hero />
      <Dashboard />
    </div>
  );
};

export default Home;