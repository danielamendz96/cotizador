import { Fragment, useContext } from 'react'
import {MARCAS, YEARS, PLANES} from '../constants'
import CotizadorContext from '../context/cotizadorProvider'

const Formulario = () => {

    const { hola } = useContext(CotizadorContext)
    console.log(hola)

    hola()

  return (
    <>
    <form>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-600 uppercase'>Marca</label>
            <select 
                name= 'marca'
                className='w-full p-3 bg-white border border-gray-300'>
                <option value=''>--Selecciona Marca--</option>
                {MARCAS.map(marca =>(
                    <option
                        key= {marca.id}
                        value= {marca.id}
                    >
                        {marca.nombre}
                    </option>
                ))}
            </select>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-600 uppercase'>Año</label>
            <select 
                name= 'año'
                className='w-full p-3 bg-white border border-gray-300'>
                <option value=''>--Selecciona Año--</option>
                {YEARS.map(year =>(
                    <option
                        key= {year}
                        value= {year}
                    >
                        {year}
                    </option>
                ))}
            </select>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-600 uppercase'>Elige un plan</label>
            <div 
                className='flex gap-3 items-center'>
                {PLANES.map(plan =>(
                    <Fragment
                        key= {plan.id}
                    >
                        <label>
                            {plan.nombre}
                         </label>
                        <input
                        type='radio'
                        name='plan'
                        value={plan.id}
                        />
                    </Fragment>
                ))}
            </div>
        </div>
        <input
            type='submit'
            className='w-full bg-gray-400 hover:bg-gray-500 transition-colors text-white cursor-pointer p-3 font-bold uppercase rounded-lg'
            value='cotizar'
            />
            
        </form>
    </>
  );
}

export default Formulario;
