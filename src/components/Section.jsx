const Section = () => {

    return(

        <>
            <section className="grid grid-cols-2 h-screen items-center justify-center font-bold drop-shadow">

                <h1 data-aos="fade-up" className="text-9xl ml-4 text-gray-50">
                    <span className="text-red-500">¡Welcome</span> to my<span className="text-red-500"> porfolio!</span> 
                </h1>
                <img src="/img/img-portfolio.png" data-aos="fade-up" alt="Imagen de robot programando" />
            </section>
        </>
    )

}

export default Section