import "../style/navbarStyle.css";
import arrow from "../Assets/Arrow.png";

const Pilihan = () => {
  return (
    <div className="d-flex" >
      <div className="menuBox m-5 w-75">
        <div className="d-flex m-3 justify-content-between">
          <div>
            <h2>Struktur Kurikulum</h2>
            <p>
              Pola dan susunan mata kuliah yang harus ditempuh oleh peserta
              didik.
            </p>
          </div>
          <img src={arrow}/>
        </div>
        <hr className="garisPemisah"/>
        <div className="d-flex m-3 justify-content-between">
          <div>
            <h2>Profil Lulusan</h2>
            <p>
              Peran lulusan di bidang keahlian atau kerja setelah menyelesaikan 
              studinya.
            </p>
          </div>
          <img src={arrow} />
        </div>
        <hr className="garisPemisah"/>
        <div className="d-flex m-3 justify-content-between">
          <div>
            <h2>Capaian Pembelajaran</h2>
            <p>Kompetensi pembelajaran yang harus dicapai Mahasiswa.</p>
          </div>
          <img src={arrow} />
        </div>
      </div>
      <div className="w-25 text-white">
        <h1 className="mt-5">EVENTS</h1>
        <div className="d-flex mt-4 ">
            <div className="tanggal m-2">
                <h2>07</h2>
                <h2>OCT</h2>
            </div>
            <h3>Garuda ACademic of Excellence (ACE)</h3>
        </div>
        <div className="d-flex mt-4">
            <div className="tanggal m-2">
                <h2>15</h2>
                <h2>OCT</h2>
            </div>
            <h3>Graduation Day</h3>
        </div>
      </div>
    </div>
  );
};

export default Pilihan;
