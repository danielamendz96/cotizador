import UseCotizador from "../hooks/UseCotizador"

const Resultado = () => {
    const {resultado} = UseCotizador()

    if(resultado === 0) return null

  return (
    <div>{resultado}</div>
  )
}
export default Resultado