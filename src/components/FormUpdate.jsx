const FormUpdate = ({setformUpdate}) => {
    return(
        <>
            <div onClick={ ()=>setformUpdate(false) } className="flex fixed top-0 left-0 justify-center items-center z-[30] w-[100dvw] h-[100dvh] backdrop-blur-[20px]">
                <div onClick={(event)=> event.stopPropagation() } className=" w-[600px] h-[500px] bg-[var(--cor3)] rounded-[4px] shadow-[0_0_30px_5px_#73534C] ">

                </div>
            </div>
        </>
    )
}

export default FormUpdate