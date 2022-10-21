import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const News = () => {
  return (
    <Container className="mt-5 bg-secondary  p-5">
      <div>
        <h1 className="d-flex text-white justify-content-center align-item-center">
          Bergabung Bersama Kami
        </h1>
      </div>
      <div>
        <h3 className="d-flex m-4 justify-content-center align-item-center">
          Informasi Pendaftaran
        </h3>
      </div>
      <div className="d-flex m-4 justify-content-center align-item-center">
        <Button
          href="./components/Login"
          className="d-flex m-3 justify-content-center align-item-center"
          variant="primary"
        >
          Klik Lebih Lanjut
        </Button>
      </div>
    </Container>
  );
};
export default News;
