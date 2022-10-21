import { Container } from "react-bootstrap";

const Logins = () => {
  return (
    <div>
        <h1 className="text-white d-flex justify-content-center">
            <b>DAFTAR</b>
        </h1>
        <Container className="w-50 border border-light p-5 rounded-4">
      <form>
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            placeholder="Nama"
          />
          <label class="form-label text-light" for="form2Example1">
            Contoh: Miracle Purnama{" "}
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            placeholder="Email"
          />
          <label class="form-label text-light" for="form2Example2">
            Contoh: Miracle09@gmail.com{" "}
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            placeholder="No Handphone"
          />
          <label class="form-label text-light" for="form2Example1">
            Contoh: 08xxxxxxxxxx{" "}
          </label>
        </div>

        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary btn-block mb-4 bg-light text-dark ">
            <b>Berikutnya</b>
          </button>
        </div>

        <div class="text-center text-light">
          <p>or sign up with:</p>
        </div>

        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary btn-block mb-4 bg-light text-dark ">
            <b>Login Dengan Google</b>
          </button>
        </div>

        <div class="text-center text-light d-flex justify-content-between">
          <label>Sudah punya akun?</label>
          <label><b>Login</b></label>
        </div>
      </form>
    </Container>
    </div>
  );
};
export default Logins;
