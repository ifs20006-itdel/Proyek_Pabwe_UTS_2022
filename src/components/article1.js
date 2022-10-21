import { Container, Tab } from "react-bootstrap";
import wisuda from "../Assets/wisuda.jpeg"

const Article1 = () => {
  return (
    <div className="text-white">
      <div className="d-flex justify-content-center">
        <h1><b>Wisuda HIMASTI 2022</b></h1>
      </div>
      
      <div className="d-flex justify-content-center">
        <img class="w-75" src={wisuda}></img>
      </div>
      <Container>
        <br>
        </br>
      <p>
        Pada tanggal 15 Oktober 2022, IT Del mengadakan acara wisuda. Acara ini berlangsung meriah yang diadakan di Gedung Serba Guna(GSB) yayasan Del. Acara diikuti oleh Pak Luhut Binsar Panjaitan selaku founding father dan juga banyak pejabat lainnya. 
      </p>
      <br>
      </br>
      <p>Tidak lupa HIMASTI juga hadir untuk merayakan kelulusan dari abang dan kakak mereka. Setelah wisudawan mengadakan acara di GSG, HIMASTI menyambutnya dengan gemuruh drum dan juga nyanyian untuk merayakan kelulusannya.</p>
    <br>
    </br>
    <p>
      Sepanjang jalan menuju kampus, wisudawan dibawa dalam arak-arakan yang diiringi dengan nyayian dan tabuhan drum. Sesampainya di kampus, wisudawan disambut dengan acara Farewell Party dari HIMASTI. Setelah acara selesai, wisudawan dan rekan-rekan HIMASTI mengambil foto bersama.
    </p>
      </Container>
    </div>
  );
};
export default Article1;
