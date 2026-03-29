import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FormUpdate = ({setformUpdate,e}) => {
    const types = [
        "Trabalho",
        "Pessoal",
        "Estudos"
    ]
    
    const [tarefa, setTarefa] = useState(e.tarefa)
    const [prazo, setPrazo] = useState(e.prazo)
    const [tipo, setTipo] = useState(e.tipo)
    const [nivel, setNivel] = useState(e.nivel)

    const [tipoBar, setTipoBar] = useState(false)

    const InputTarefa = (event) => {
        const value = event.target.value
        setTarefa(value)

    }

    const InputPrazo = (event) => {
        const value = event.target.value
        setPrazo(value)

    }

    const InputTipo = (types) => {
        setTipoBar(false)
        setTipo(types)
        
    }

    const InputNivel = (nivel) => {
        setNivel(nivel)
        
    }

    const Submit = (event) =>{
        event.preventDefault()
        

        console.log({
            tarefa,
            prazo,
            tipo,
            nivel
        })
    }


    return(
        <>
            <div onClick={ () => setformUpdate(false) } className="flex fixed top-0 left-0 justify-center items-center z-[30] w-[100dvw] h-[100dvh] backdrop-blur-[20px]">
                <div onClick={(event)=> event.stopPropagation() } className=" w-[600px] text-[var(--text2)] flex flex-col gap-[10px] h-[520px] bg-linear-40 from-[var(--cor4)] to-[var(--cor3)] rounded-[10px] backdrop-opacity-25 p-[30px_20px] shadow-[0_0_30px_5px_#73534C]">

                    <form className="flex flex-col items-center h-[100%] justify-between" onSubmit={Submit}>
                        {/* TAREFA */}
                        <div className="flex flex-col w-[100%] gap-[15px]">
                        <div className="flex flex-col w-[100%] gap-[5px]">
                            <h1 className="text-[22px] text-[var(--black)]">Tarefa</h1>
                            <input onChange={InputTarefa} value={tarefa} className="outline-none border-[2px] border-[var(--cor1)] w-[100%] rounded-[10px] h-[45px] p-[10px]" type="text" />
                        </div>

                        {/* PRAZO */}
                        <div className="flex flex-col w-[100%] gap-[5px]">
                            <h1 className="text-[22px] text-[var(--black)]">Prazo</h1>
                            <input onChange={InputPrazo} value={prazo} className=" font-[Resolve] outline-none border-[2px] border-[var(--cor1)] w-[100%] rounded-[10px] h-[45px] p-[10px]" type="date" />
                        </div>

                        <div className="flex w-[100%] justify-center ">
                            {/* TIPO */}
                            <div className="flex w-[40%] flex-col gap-[5px]">
                                <h1 className="text-[22px] text-[var(--black)]">Tipo</h1>
                                <div onClick={()=>{setTipoBar(prev => !prev)}} className="flex w-[100%] text-[18px] cursor-pointer justify-center items-center relative rounded-[6px] border-[var(--cor1)] border-[2px] flex-col  ">
                                    <div className="h-[40px] flex justify-between px-[10px] relative w-[100%] items-center">
                                        <h1 >{tipo}</h1>
                                        <div className=" flex  right-[12px]">
                                            {tipoBar ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                        </div>
                                    </div>

                                    <div className={`${tipoBar ? "flex" : "hidden"} flex flex-col justify-center items-center gap-[5px] p-[10px] w-[100%]`}>
                                        {types.map((types, index)=>(
                                            <p key={index} onClick={(event)=>{
                                                InputTipo(types)
                                                event.stopPropagation()
                                                
                                            }}  className="border-2 border-[var(--cor4)] text-center w-[100%]">{types}</p>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* PRIORIDADE */}
                            <div className="w-[60%] pt-[10px] flex flex-col items-center gap-[10px]">
                                <h1 className="text-[22px] text-[var(--black)]">Prioridade</h1>
                                <div className="flex h-[40px] justify-around relative items-center gap-[10px] text-[16px]">
        
                                    <div className="flex justify-center items-center">
                                        <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="baixo-up">
                                            <input checked={nivel == "baixo"} onChange={()=>InputNivel("baixo")} className="peer hidden" type="radio" name="nivel-Up" id="baixo-up" />
                                            <div className={`w-[25px] h-[25px] ${nivel == "baixo" && "peer-checked:bg-green-600"} rounded-full border-[4px] border-green-600`}></div>
                                            <p>Baixa</p>
                                        </label>
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="medio-up">
                                            <input checked={nivel == "medio"} onChange={()=>InputNivel("medio")} className="peer hidden" type="radio" name="nivel-Up" id="medio-up" />
                                            <div className={`w-[25px] h-[25px] ${nivel == "medio" && "peer-checked:bg-yellow-600"} rounded-full border-[4px] border-yellow-600`}></div>
                                            <p>Media</p>
                                        </label>
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="alto-up">
                                            <input checked={nivel == "alto"} onChange={()=>InputNivel("alto")} className="peer hidden" type="radio" name="nivel-Up" id="alto-up" />
                                            <div className={`w-[25px] h-[25px] ${nivel == "alto" && "peer-checked:bg-red-700"} rounded-full border-[4px] border-red-700`}></div>
                                            <p>Alta</p>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>

                        <button className="bg-[var(--cor1)] w-[200px] h-[40px] text-[var(--text)] rounded-[10px]" type="submit">Atualizar</button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default FormUpdate