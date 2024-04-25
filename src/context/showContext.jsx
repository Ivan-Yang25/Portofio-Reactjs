import { createContext, useState } from "react";

const ShowContext = createContext()


const ShowProvider = ({children}) => {

    const [show, setShow] = useState(false)

    //Funcion para cambiar el estado 'show' del modal login
    const changeShow = () => {

        setShow(show => !show)

    }

    //Estado para cambiar la vista registro
    const [check, setCheck] = useState(false)

    //Funcion para modificar el estado 'check'
    const changeCheck = () => {

        setCheck(true)

    }

    //Funcion para modificar el estado 'check'
    const changeCheckTwo = () => {

        setCheck(false)

    }

    //Estado para guardar la informacion del cliente ingresado por el form de login
    const [login, setLogin] = useState({

        email: '',
        password: ''

    })

    return (

        <ShowContext.Provider value={{show, changeShow, check, changeCheck, changeCheckTwo, setLogin, login}}>
            {children}
        </ShowContext.Provider>

    )

}

export {ShowContext, ShowProvider}