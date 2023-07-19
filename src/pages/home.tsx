import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

const Home = () => {
  return (
    <div className="relative">
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[246px]">HOME</div>
    </div>
  );
};

export default Home;
