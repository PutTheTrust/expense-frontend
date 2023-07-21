import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="relative">
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[246px]">
        <Button> Click me</Button>
      </div>
    </div>
  );
};

export default Home;
