import { useState } from 'react'

import AboutMe from "./AboutMe";
import Proyects from "./Proyects";
import Section from "./Section";
import CheckIn from "./CheckIn";
import Header from './Header';
import Footer from './Footer';

const Main = () => {

    //Estado para cambiar la vista registro
    const [check, setCheck] = useState(false)

    return(
        <>
            <Header 
                setCheck={setCheck}
            />

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