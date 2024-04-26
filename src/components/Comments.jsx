
const Comments = () => {

    return (
        <>
            <section className="flex flex-col w-full items-center h-screen space-y-10 mt-10 bg-red-500">
                
                <h2 className="font-bold text-6xl text-center text-gray-50 mt-10 mb-20 drop-shadow-md">Comentarios</h2>
                
                <div className="grid grid-cols-3 w-5/6 justify-self-center items-center h-24 rounded-md">
                    <textarea className="col-span-2 w-full h-full self-center rounded-md p-2" placeholder="Ingrese su opinion sobre el portfolio..."></textarea>
                    <button className="col-span-1 bg-slate-900 h-3/4 justify-self-center hover:bg-gray-500 w-1/3 p-3 rounded-md text-gray-50 cursor-pointer ">
                        Comentar
                    </button>
                </div>
            
            </section>
        </>
    )

}

export default Comments