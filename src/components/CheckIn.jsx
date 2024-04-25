import {useState} from 'react';

const CheckIn = () => {

    //Estado para guardar la informacion que ingresa el cliente por el form
    const [check, setCheck] = useState({

        nombre: '',
        apellido: '',
        email: '',
        password: ''

    })

    //Funcion para guardar ingresar la informacion al estado 'check' cuando el cliente escribe en el form
    const userCheck = (e) => {

        const {name, value} = e.target

        setCheck(() => ({

            ...check,
            [name]: value

        }))

    }

    return (

        <>
            <form className="w-full h-full items-center flex flex-col justify-center">

                <h3 className="text-4xl font-bold text-white w-full text-center border-b-2 pb-4 uppercase mb-10">
                    Registrate
                </h3>
                
                <label htmlFor="nombre" className="text-white text-2xl font-bold w-1/2">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={userCheck} value={check.nombre} placeholder="Ingrese su nombre" className="p-2 w-1/2 mb-10 rounded-sm"/>

                <label htmlFor="apellido" className="text-white text-2xl font-bold w-1/2">Apellido</label>
                <input type="text" id="apellido" name="apellido" onChange={userCheck} value={check.apellido} placeholder="Ingrese su apellido" className="p-2 w-1/2 mb-10 rounded-sm"/>

                <label htmlFor="email" className="text-white text-2xl font-bold w-1/2">Email</label>
                <input type="email" id="email" name="email" onChange={userCheck} value={check.email} placeholder="Ingrese su email" className="p-2 w-1/2 mb-10 rounded-sm"/>

                <label htmlFor="password" className="text-white text-2xl font-bold w-1/2">Password</label>
                <input type="password" id="password" name="password" onChange={userCheck} value={check.password} placeholder="Ingrese su contraseña" className="p-2 w-1/2 mb-10 rounded-sm"/>

                <input type="submit" value="Registrarse" className="p-4 bg-white w-1/6 text-2xl rounded-lg hover:bg-red-500 hover:text-white duration-200 cursor-pointer"/>
            </form>
        </>
    )
}

export default CheckIn