import { useContext } from "react";
import CotizadorContext from "../context/cotizadorProvider";

const UseCotizador = () => {
    return useContext(CotizadorContext)

}

export default UseCotizador