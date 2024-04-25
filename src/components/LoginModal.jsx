import { React, Fragment, useCallback} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { loginHook } from '../hook/loginHook'

export default function LoginModal() {

    const {changeClose, clickClose, userLogin, userData, closeShow, isOpen, user} = loginHook()

    const handleClose = useCallback(() => {changeClose()}, [changeClose])
    const handleClick = useCallback(() => {clickClose()}, [clickClose])
    const handleShow = useCallback(() => {closeShow()}, [closeShow])
    
    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleClick}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-red-500 p-6 text-left align-middle shadow-xl transition-all">

                                    <form className="w-full h-full grid grid-col space-y-5 justify-items-center" onSubmit={handleShow}>

                                        <h3 className="text-xl font-bold text-white w-full text-center border-b-2 pb-4 uppercase">
                                            Login
                                        </h3>

                                        <label htmlFor='email' className="text-white font-bold w-1/2">
                                            Correo electronico:
                                        </label>
                                        <input type="email" name='email' id='email' value={user.email} onChange={userLogin} placeholder="Ingrese su nombre de usuario" className="p-2 w-1/2 rounded-sm" />

                                        <label htmlFor='password' className="text-white font-bold w-1/2">
                                            Contraseña:
                                        </label>
                                        <input type="password" name='password' id='password' value={user.password} onChange={userLogin} placeholder="Ingrese su contraseña" className="p-2 w-1/2 rounded-sm" />

                                        <input type="submit" value="ingresar" className="p-2 bg-white rounded-lg w-1/4 hover:bg-slate-700 hover:text-white cursor-pointer duration-200" onClick={userData}/>

                                        <div className="w-full text-center grid grid-cols-2 text-white">
                                            <p className="cursor-pointer hover:text-lg duration-200 p-4 w-full h-2" onClick={handleClose}>¿No posees cuenta? ¡Registrate aquí!</p>
                                            <p className="cursor-pointer hover:text-lg duration-200 p-4 w-full h-2">¿Olvidaste tu contraseña?</p>
                                        </div>

                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}