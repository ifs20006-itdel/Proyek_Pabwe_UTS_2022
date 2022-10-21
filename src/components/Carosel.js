import Carousel from 'react-bootstrap/Carousel';

import img from "../Assets/it_del.jpg";

function Carosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 className='border '>
            IT DEL
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 className='border '>
            IT DEL
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 className='border '>
            IT DEL
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={img}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='m'>
            IT DEL
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={img}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>
            IT DEL
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;