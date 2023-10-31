import Footer from "./Footer";

const Register = () => {
  return (
    <>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container bg-secundary pt-4 ">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5 text-white bg-dark ">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Create Account
                      </h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating text-black mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="nombre"
                                type="text"
                                placeholder="Ingrese su nombre"
                              />
                              <label htmlFor="inputNombre">
                                Ingrese su Nombre
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating text-black">
                              <input
                                className="form-control"
                                id="apellido"
                                type="text"
                                placeholder="Ingrese su apellido"
                              />
                              <label htmlFor="inputApellido">
                                Ingrese su Apellido
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3 text-black">
                          <input
                            className="form-control"
                            id="correo"
                            type="email"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0 text-black">
                              <input
                                className="form-control"
                                id="clave"
                                type="password"
                                placeholder="Create a password"
                              />
                              <label htmlFor="inputPassword">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0 text-black ">
                              <input
                                className="form-control"
                                id="claveConfirm"
                                type="password"
                                placeholder="Confirm password"
                              />
                              <label htmlFor="inputPasswordConfirm">
                                Confirm Password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-12">
                            <div className="form-floating text-black">
                              <input
                                className="form-control"
                                id="Sueldo"
                                type="text"
                                placeholder="Ingrese su Sueldo Mensual"
                              />
                              <label htmlFor="inputSueldo">
                                Ingrese su Sueldo Mensual
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 mb-0">
                          <div className="d-grid">
                            <a
                              className="btn btn-secondary  btn-block"
                              href="/"
                            >
                              Create Account
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="/">Have an account? Go to login</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
