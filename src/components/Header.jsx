import { useCallback, useContext } from 'react'
import { ShowContext } from '../context/showContext'
import { headerHook } from '../hook/headerHook'
import LoginModal from './LoginModal'

const Header = () => {

    const {validMail, closeLogin, login} = headerHook()
    const {changeShow, changeCheckTwo} = useContext(ShowContext)
    

    const handleShow = useCallback(() => {changeShow()}, [changeShow])
    const handleCheck = useCallback(() => {changeCheckTwo()}, [changeCheckTwo])
    const handleValid = useCallback(() => validMail(login.email), [validMail, login.email])

    return (
        <>
            <header>
                <nav id="nav" className="grid grid-cols-4 items-center mb-10 justify-between fixed w-full z-50 h-16 border-b-2 border-red-400 bg-red-500 drop-shadow-md">
                    <h1 className="ml-4 text-2xl font-bold cursor-pointer" onClick={handleCheck}>
                        Ivan Yang - <span className="col-span-1 text-gray-50">Porfolio</span>
                    </h1>

                    <div className="flex justify-center items-center col-span-2 text-lg h-5">
                        <a href="https://www.instagram.com/ivan_y25/" target="_blank" className="m-4 text-slate-900 cursor-pointer hover:text-gray-50 hover:underline-2 hover:text-xl duration-200">
                            Instagram
                        </a >
                        <a href="https://www.facebook.com/ivan.yang.338/" target="_blank" className="m-4 text-slate-900 cursor-pointer hover:text-gray-50 hover:text-xl duration-200">
                            Facebook
                        </a>
                        <a href="https://www.linkedin.com/in/ivan-yang-03b680256/" target="_blank" className="m-4 text-slate-900 cursor-pointer hover:text-gray-50 hover:text-xl duration-200">
                            Linkedin
                        </a>
                        <a href="https://github.com/Ivan-Yang25" target="_blank" className="m-4 text-slate-900 cursor-pointer hover:text-gray-50 hover:text-xl duration-200">
                            GitHub
                        </a>
                    </div>

                    <div className="col-span-1 h-full justify-center space-x-2 grid grid-cols-2">

                        <button className="justify-self-center p-4 hover:text-red-500 hover:bg-gray-50 duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>

                        {(Object.values(login).includes('')) || handleValid(login.email) === false ?
                            //Condicional para mostrar unos elementos u otros

                            <button onClick={handleShow} className="hover:text-gray-50 hover:rotate-6 duration-200">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </a>
                            </button>
                            
                            :

                            <div className="self-center flex flex-row space-x-6">
                                <p className="p-2 w-1/2 text-center rounded-sm font-bold shadow-lg text-red-500 uppercase bg-slate-50">
                                    {login.email}
                                </p>
                                <button className="bg-slate-50 p-2 w-10 rounded-full hover:bg-slate-900 hover:text-white hover:font-bold duration-200" onClick={() => closeLogin()}>
                                    X
                                </button>
                            </div>
                            
                        }
                        
                    </div>


                    <div className="hidden col-span-3 grid-cols-1 justify-self-end">
                        <a href="#" className="justify-self-center">About me</a>
                        <a href="#" className="justify-self-center">Proyects</a>
                        <a href="#" className="justify-self-center">Contact</a>
                        <a href="#" className="justify-self-center">Improvement options</a>
                    </div>
                </nav>

                <LoginModal />
            </header>
        </>
    )
}

export default Header