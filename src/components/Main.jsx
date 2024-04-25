import { useContext } from 'react'
import { ShowContext } from '../context/showContext';

import AboutMe from "./AboutMe";
import Proyects from "./Proyects";
import Section from "./Section";
import CheckIn from "./CheckIn";
import Header from './Header';
import Footer from './Footer';


const Main = () => {

    const {check} = useContext(ShowContext)

    return(
        <>
            

                <Header />

                {check === true ?
                //Condicional para poner una pantalla u otr en base al estado del estado 'check'
                
                <div className="w-full h-screen">
                    <CheckIn />
                </div>
                
                :
                
                <>
                    <Section />
                    <AboutMe />
                    <Proyects />
                </>
                }

                <Footer />
        </>
    )

}

export default Main