import "./App.css";
import "./style/landingpage.css";
import Intro from "./components/Intro";
import Section from "./components/Section";
import UncontrolledExample from "./components/Carosel";
import Pilihan from "./components/Pilihan";
import "./style/pilihan.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import News from "./components/News";
import Button from "react-bootstrap/Button";
import DataMenu from "./components/DataMenu";
import Join from "./components/Join";
import Newss from "./components/Swiper"


const Home = () => {
    return (
      <div>
        <UncontrolledExample />
        <Intro />
        <Section />
        <Pilihan />
        <News />
        <Newss/>
        <container class="d-flex justify-content-center m-5">
          <Button variant="primary" class>
            Show All
          </Button>
          {""}
        </container>
        <DataMenu />
        <Join />
        
      </div>
    );
  };
  export default Home;
  