import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import wisuda from "../Assets/wisuda.jpeg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Newss = () => {
  return (
    <div className="text-white m-5 ">
      <Swiper
        className="text-light"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Card className="text-dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Wisuda HIMASTI 2022</Card.Title>
              <Card.Text>
                Untuk merayakan wisuda di tahun 2022, HIMASTI mengadakan acara arak-arakan ..
              </Card.Text>
              <Button href="/components/article1" variant="primary">Baca Selengkapnya</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="text-dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Baca Selengkapnya</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="text-dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Baca Selengkapnya</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="text-dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Baca Selengkapnya</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>        
      </Swiper>
    </div>
  );
};
export default Newss;
