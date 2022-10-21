import "./App.css";
import Navigationbar from "./components/NavigationBar";
import "./style/landingpage.css";
import Intro from "./components/Intro";
import "./style/pilihan.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DataMenu from "./components/DataMenu";
import Footer from "./components/Footer";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./Home";
import Logins from "./components/Login";
import Kegiatan from "./components/TableKegiatan";
import Article1 from "./components/article1";


function App() {
  return (
    <div class="myBG">
      <Navigationbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/components" element={<Intro/>}/>
          <Route path="/components/DataMenu" element={<DataMenu/>}/>
          <Route path="/components/Login" element={<Logins/>}/>
          <Route path="/components/Kegiatan" element={<Kegiatan/>}/>
          <Route path="/components/article1" element={<Article1/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
