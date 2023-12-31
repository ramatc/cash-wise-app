import { useEffect, useState } from "react";
import { obtenerTipoDeGasto } from "../services/obtenerTipoDeGasto";
import { ToastContainer, toast } from "react-toastify";

const FormGasto = () => {
  const [monto, setMonto] = useState("");
  const [tipoGastoId, setTipoGastoId] = useState("");
  const [tipoDeGasto, setTipoDeGasto] = useState([]);
  const [errores, setErrores] = useState({
    monto: null,
    tipoGastoId: '',
  }); //manejo de errores en form

  useEffect(() => {
    async function cargarTipoDeGasto() {
      try {
        const tipoDeGasto = await obtenerTipoDeGasto();
        setTipoDeGasto(tipoDeGasto);
      } catch (error) {
        console.log(error);
      }
    }

    cargarTipoDeGasto();
  }, []);

  const showToast = () => {
    toast("Gasto ingresado exitosamente!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSend = async (e) => {
    e.preventDefault();

    let nuevosErrores = {}; // Objeto para almacenar los posibles errores

    // Validación para el nombre
    if (!monto.trim()) {
      nuevosErrores.monto = "El Monto es requerido";
    }

    // Validación para el tipo de gasto
    if (!tipoGastoId) {
      nuevosErrores.tipoGastoId = "Debe seleccionar un tipo de gasto";
    }
    setErrores(nuevosErrores); // Actualiza el estado de errores con los nuevos errores

    if (Object.keys(nuevosErrores).length === 0) {
      const usuarioLocalStorage = JSON.parse(localStorage.getItem("user"));
      const idusuario = usuarioLocalStorage.idusuario;

      const data = {
        monto: parseFloat(monto),
        tipo_gasto_id: parseInt(tipoGastoId),
        idusuario,
      };
      console.log(data);

      try {
        const response = await fetch(
          "http://localhost/serverWiseApp/registrarGastos.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setTimeout(() => {
            window.location.reload();
          }, 1300);
        } else {
          console.error("Error en la solicitud al servidor");
        }
      } catch (error) {
        console.error(error);
      }

      showToast();
    }
  };

  return (
    <main>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title d-flex justify-content-center">
            Gestor de gastos
          </h5>
        </div>
        <div
          className="card-body d-flex justify-content-center align-items-center"
          style={{ height: "600px" }}
        >
          <div className="row">
            <div className="col-xl-5 mt-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eco-gm.appspot.com/o/Fotos_Producto%2Fpresupuesto.png?alt=media&token=0b7d92a3-1172-4556-8f79-8cfcac0eb8bb&_gl=1*s7zmfr*_ga*MjAzOTcxOTU0My4xNjk3MTMwODQ4*_ga_CW55HF8NVT*MTY5ODcwODQ2MS45LjEuMTY5ODcwODQ3Mi40OS4w.LjA."
                className="img-fluid rounded-start"
                alt="Finanzas"
                style={{ width: 200, height: 200 }}
              ></img>
            </div>
            <div className="col-xl-7 d-flex justify-content-center">
              <div className="card-body">
                <h5 className="card-title">Nuevo consumo</h5>
                <p className="card-text">
                  Complete los datos para poder guardar su gasto
                </p>
                <div className="card-text">
                  <form onSubmit={handleSend}>
                    <div className="mb-3">
                      <label className="form-label">Ingrese el monto</label>
                      <input
                        type="number"
                        className={`form-control ${
                          errores.monto ? "is-invalid" : ""
                        }`} //maneja el estilo del input segun error
                        id="monto"
                        name="monto"
                        aria-describedby="monto"
                        min={1}
                        step="1"
                        max={9999999}
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        placeholder="$3000"
                      />
                      {errores.monto ? ( // mensaje de error si no pasa la validacion
                        <div className="invalid-feedback d-block">
                          {errores.monto}
                        </div>
                      ) : (
                        <div id="montodesc" className="form-text">
                          Este dato no es visible para otros usuarios
                        </div>
                      )}
                    </div>
                    <select
                      id="tipo_de_gasto"
                      name="tipo_de_gasto"
                      className={`form-select ${errores.tipoGastoId ? "is-invalid" : ""}`}
                      aria-label="Tipo De Gasto"
                      value={tipoGastoId}
                      onChange={(e) => setTipoGastoId(e.target.value)}
                    >
                      <option disabled value="">
                        Seleccione un gasto
                      </option>
                      {tipoDeGasto.map((gasto) => (
                        <option key={gasto.id_gasto} value={gasto.id_gasto}>
                          {gasto.descripcion}
                        </option>
                      ))}
                    </select>
                    {errores.tipoGastoId && <div className="invalid-feedback d-block">{errores.tipoGastoId}</div>}
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary mt-3">
                        Ingresar gasto
                      </button>
                      <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormGasto;
