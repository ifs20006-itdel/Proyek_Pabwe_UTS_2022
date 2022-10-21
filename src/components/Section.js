import {Container} from 'react-bootstrap';


const Section = () => {
    return(
        <div className=''>
        <Container className='text-white text-center '>
              <label className='text-justify program mb-2'>Program Studi <label className='studi'>Informatika</label></label>
              {/* <p className='program'>Program Studi Informatika</p> */}
        </Container>
        <Container className='text-center'>
        <p className='text-light'>Informatika merupakan salah satu core technology dalam sistem teknologi yang dikenal sebagai Teknologi Informasi dan Komunikasi (Information and Communication Technology), karena melalui pemfungsian Informatika-lah diperoleh produk-produk perangkat lunak (software products) yang memungkinkan terwujudnya sifat intelligent dari Teknologi Informasi dan Komunikasi. Teknologi Informasi dan Komunikasi merupakan strategic enabling technology dalam menopang upaya pencerdasan kehidupan bangsa.</p>
        </Container>
        
      </div>
    )
}

export default Section