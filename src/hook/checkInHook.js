import { useState } from "react"

export const checkInHook = () => {

    //Estado para guardar la informacion que ingresa el cliente por el form
    const [check, setCheck] = useState({

        nombre: '',
        apellido: '',
        email: '',
        password: ''

    })

    //Funcion para guardar ingresar la informacion al estado 'check' cuando el cliente escribe en el form
    const userCheck = (e) => {

        const { name, value } = e.target

        setCheck(() => ({

            ...check,
            [name]: value

        }))

    }

    return {userCheck, check}
}