export const headerHook = () => {    

    //Funcion para validar mail
    function validMail(email) {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)

    }

    
    return{validMail}
}