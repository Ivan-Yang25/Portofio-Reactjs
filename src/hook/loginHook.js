import {useState, useEffect, useContext} from 'react';
import { ShowContext } from '../context/showContext';

export const loginHook = () => {

    const {show, changeCheck, setLogin, login} = useContext(ShowContext)

    //Estado para modificar si se muestra el modal o no
    const [isOpen, setIsOpen] = useState(show)

    //useEffect para que se modifique el valor inicial del estado 'isOpen' cada vez que se modifica el estado 'show'
    useEffect(() => {
        setIsOpen(show)
    }, [show])


    const [user, setUser] = useState({

        email: '',
        password: ''

    })

    //Funcion para guardar los datos ingresado por el cliente en el estado 'user'
    const userLogin = (e) => {

        const { name, value } = e.target

        setUser(() => ({ ...user, [name]: value }))

    }

    const userData = () => {

        setLogin({
            ...login,
            email: user.email,
            password: user.password
        })

    }

    //Reseteo del estado 'login' para liberar los campos del form
    const closeLogin = () => {

        setLogin({

            email: '',
            password: ''

        })

        setUser({

            ...login,
            email: '',
            password: ''

        })

    }
   

    //Funcion para cerrar el modal modificando el valor del estado 'user' a false
    const closeShow = () => {
        setIsOpen(false)
    }

    //Funcion para cerrar el estado del modal cuando hago click sobre el boton ingresar
    const clickClose = () => {
        setIsOpen(false)
    }

    //Funcion para cambiar el estado 'check' y cambiar el estado del modal
    const changeClose = () => {

        clickClose()
        changeCheck()

    }

    return {

        isOpen,
        changeClose, 
        clickClose, 
        userLogin,  
        closeShow,
        closeLogin,
        userData,
        user
    
    }

}
