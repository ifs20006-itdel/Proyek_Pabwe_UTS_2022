import { Col, Container, Row, Button} from 'react-bootstrap';


const Intro = () => {
    return(
        <div className=' intro'>
        <Container fluid className='text-white d-flex'>
          <Row>
            <Col>
              <label className='title'>Program Studi <label className='sarjana'>Sarjana</label></label>
              <div className='informatika'>Informatika</div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro