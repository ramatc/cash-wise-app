import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Modal = ({ showModal, cerrarModal, gastoAEditar }) => {
  const [descripcion, setDescripcion] = useState("");
  const [color, setColor] = useState('');
  const [tipoGastoId, setTipoGastoId] = useState("");

  useEffect(() => {
    if (gastoAEditar) {
      setColor(gastoAEditar.color);
      setDescripcion(gastoAEditar.descripcion);
      setTipoGastoId(gastoAEditar.id_gasto);
    }
  }, [gastoAEditar]);

  const handleEditar = async () => {
    const data = {
      id_gasto: tipoGastoId,
      descripcion: descripcion,
      color: color,
    };

    try {
      const response = await fetch("http://localhost/serverWiseApp/editarGasto.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.mensaje == "true") {
          cerrarModal();
          window.location.reload();
        } else {
          console.error("Error al editar la operación.");
        }
      } else {
        console.error("Error en la solicitud al servidor.");
      }
    } catch (error) {
      console.error("Error en la solicitud al servidor:", error);
    }
  };

  return (
    <div>
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar operación</h5>
                <button type="button" className="btn-close" onClick={cerrarModal}></button>
              </div>
              <div className="modal-body">
                <input type="hidden" name="id_gasto" value={gastoAEditar.id_gasto} />
                <div className="form-group m-2">
                  <label className="mb-2" htmlFor="descripcion">Descripcion:</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>
                <div className="form-group m-2">
                  <label className="mb-2 " htmlFor="color">Color:</label>
                  <input
                    type="color"
                    className="form-control mb-2"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={cerrarModal}>
                  Cerrar
                </button>
                <button className="btn btn-primary" onClick={handleEditar}>Guardar cambios</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop show"></div>}
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.any.isRequired,
  cerrarModal: PropTypes.any.isRequired,
  gastoAEditar: PropTypes.any.isRequired,
};

export default Modal;