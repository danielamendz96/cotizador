import UseCotizador from "../hooks/UseCotizador"

const Error = () => {
    const {error} = UseCotizador()
  return (
    <div className='border text-center border-red-400 rounded-lg bg-red-100 text-red-700 py-3'>
       <p> {error} </p>
        
    </div>
  )
}

export default Error