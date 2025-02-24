
function Home() {
    return (
        <>
            <div className="bg-sky-100 flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Uma Farmacia online para você
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="./remedio.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home