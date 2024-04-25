const AboutMe = () => {


    return (

        <>
            <section className="grid grid-cols-1 justify-center text-center mt-20 mb-20">
                
                <h2 className="font-bold text-6xl mb-16 text-gray-50 drop-shadow-md">
                    <span className="text-red-500">About</span> me
                </h2>
                
                <img className="justify-self-center m-10 rounded-full w-96 animate-bounce" src="/img/img-me.jpeg" alt="Foto mia" />
                
                <div className="justify-self-center flex items-center w-1/2 bg-gray-50 shadow-2xl rounded-xl">
                    <p className="p-10 w-full text-start text-slate-700">
                    Estudiante de Desarrollo Web con un sólido enfoque en la tecnología, actualmente estudio licenciatura en Estadística Tecnologica y hago cursos de donde aprendo sobre este sector. Mi objetivo es crecer y perfeccionar constantemente mis habilidades en programación.
                    
                    Me fascina la programación en todas sus facetas, y actualmente estoy inmerso en el estudio del Desarrollo Web, incluyendo el FrontEnd y el BackEnd. Además, estoy tomando cursos adicionales para ampliar mis conocimientos y habilidades en este campo.
                    </p>
                </div>
                
            </section>
        </>

    )
}

export default AboutMe