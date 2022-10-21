import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Kegiatan() {
  return (
    <Container>
        <h1 className="text-white d-flex justify-content-center">
            <b>DAFTAR KEGIATAN</b>
        </h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Nama Kegiatan</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 November 2022</td>
            <td>Pengukuhan Angkatan Baru</td>
            <td>Masukknya angkatan baru sebagai anggota resmi dari HIMASTI</td>
          </tr>
          <tr>
            <td>17 Januari 2023</td>
            <td>Photo Competition</td>
            <td>Kegiatan untuk mempererat tali persaudaranaan dari HIMASTI</td>
          </tr>
          <tr>
            <td>24 Maret 2023</td>
            <td>Himasti Coding Chalengge</td>
            <td>Kegiatan untuk meningkatkan jiwa kompetitif mahasiswa</td>
          </tr>
          <tr>
            <td>3 April 2023</td>
            <td>Pembinaan KP</td>
            <td>Pembinaan Kerja Praktik kepada mahasiswa yang akan magang</td>
          </tr>
          <tr>
            <td>13 April 2023</td>
            <td>Akhir Semester</td>
            <td>Kegiatan untuk mempersiapkan diri terkair akhir semester</td>
          </tr>
          <tr>
            <td>17 Januari 2023</td>
            <td>Photo Competition</td>
            <td>Kegiatan untuk mempererat tali persaudaranaan dari HIMASTI</td>
          </tr>
          <tr>
            <td>17 Januari 2023</td>
            <td>Photo Competition</td>
            <td>Kegiatan untuk mempererat tali persaudaranaan dari HIMASTI</td>
          </tr>
          <tr>
            <td>17 Januari 2023</td>
            <td>Photo Competition</td>
            <td>Kegiatan untuk mempererat tali persaudaranaan dari HIMASTI</td>
          </tr>
          <tr>
            <td>17 Januari 2023</td>
            <td>Photo Competition</td>
            <td>Kegiatan untuk mempererat tali persaudaranaan dari HIMASTI</td>
          </tr>
          <tr>
            <td>17 Januari 2023</td>
            <td>Photo Competition</td>
            <td>Kegiatan untuk mempererat tali persaudaranaan dari HIMASTI</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Kegiatan;
