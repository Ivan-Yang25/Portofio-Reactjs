import { useState } from 'react';

export const headerHook = () => {    

    //Estado para guardar la informacion del cliente ingresado por el form de login
    const [login, setLogin] = useState({

        email: '',
        password: ''

    })

    //Funcion para validar mail
    function validMail(email) {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)

    }

    //Reseteo del estado 'login' para liberar los campos del form
    const closeLogin = () => {

        setLogin({

            email: '',
            password: ''

        })

    }
    
    return {

        login,
        closeLogin,
        validMail
    }
}