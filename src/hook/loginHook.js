import {useState, useEffect, useContext} from 'react';
import { ShowContext } from '../context/showContext';
import { headerHook } from './headerHook';

export const loginHook = () => {

    const {setLogin, login} = headerHook()
    const {show, changeCheck} = useContext(ShowContext)

    //Estado para modificar si se muestra el modal o no
    const [isOpen, setIsOpen] = useState(show)

    //useEffect para que se modifique el valor inicial del estado 'isOpen' cada vez que se modifica el estado 'show'
    useEffect(() => {
        setIsOpen(show)
    }, [show])


    //Estado para guardar la informacion del cliente antes de enviar el form
    const [user, setUser] = useState({

        email: '',
        password: ''
    })

    //Funcion para guardar los datos ingresado por el cliente en el estado 'user'
    const userLogin = (e) => {

        const { name, value } = e.target

        setUser(() => ({ ...user, [name]: value }))

    }

    //Funcion para enviar los datos del estado 'user' al estado 'login'
    const userData = () => {

        setLogin({

            ...login,
            email: user.email,
            password: user.password

        })
    }

    //Funcion para cerrar el modal modificando el valor del estado 'user' a false
    const closeShow = (e) => {
        e.preventDefault()
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
        userData, 
        closeShow,
        user

    }

}
