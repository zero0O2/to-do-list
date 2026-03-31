import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Form = ({setArrayTarefas, mobile = false}) => {
    const types = [
        "Trabalho",
        "Pessoal",
        "Estudos"
    ]

    // Inteligencia por traz da criaçao das tarefas

    const [tarefa, setTarefa] = useState("")
    const [prazo, setPrazo] = useState("")
    const [tipo, setTipo] = useState("")
    const [nivel, setNivel] = useState("")
    
    const [tipoBar, setTipoBar] = useState(false)
    const [erros, setErros] = useState([])
    
    const SearchError = () => {
        const errosList = []
        if(!tarefa){
            errosList.push({tarefa:true,erro:"Escreva uma tarefa para continuar."})
        }
        if(!tipo){
            errosList.push({tipo:true,erro:"Selecione um tipo para continuar."})
        }
        if(!nivel){
            errosList.push({nivel:true,erro:"Informar sua prioridade é obrigatorio."})
        }
        
        setErros(errosList)
        return errosList
    }
    
    const Submit = (event) => {
        event.preventDefault()
        
        const errosList = SearchError()
        
        if(errosList.length > 0) return

        const newTarefa = {
            tarefa,
            prazo,
            tipo,
            nivel,
            conclued:false
        }

        setTarefa('')
        setPrazo('')
        setTipo('')
        setNivel('')
        
        setArrayTarefas(prev => [newTarefa,...prev])
        
    }
    
    return (
        <>

            <form onSubmit={Submit} className={`${mobile ? "p-[50px_10px_20px_10px] text-[var(--white)]" : ""} flex h-[100%]  w-[100%] justify-between text-[var(--text)] flex-col items-center`}>
                <div className="flex flex-col justify-center items-center gap-[45px] w-[100%] "> 

                    {/* Input das tarefas */}
                    <div className=" flex w-[100%] h-[70px] justify-start relative gap-[5px] relative flex-col  text-[18px]">
                        <input value={tarefa} onChange={(event)=>{
                                const value = event.target.value
                                setTarefa(event.target.value)
                                
                                if(value.trim() != ""){
                                    setErros(prev => prev.filter(e=> !e.tarefa))
                                }

                            }} className={` ${mobile ? "bg-[var(--text2)] text-[var(--white)] border-[var(--cor3)] border-[2px] rounded-[10px]" : " border-[var(--cor4)] bg-[var(--text2)] rounded-[4px]"} peer w-[100%] outline-none p-[10px_15px] text-[var(--text)] rounded-[4px]" type="text`} />
                        <label className={`absolute ${tarefa ? "top-[-35px] left-[0]" : "top-[8px] left-[14px]"} peer-focus:top-[-35px] text-[20px] duration-300 transition-all `} >Tarefa</label>
                        <p className="text-[14px] absolute bottom-[-5px] animate-pulse text-red-700">{
                            
                            erros.map((e)=>(
                                e.tarefa && e.erro
                            ))
                            
                        }</p>
                    </div>

                    {/* Input dos prazos */}
                    <div className="flex w-[100%] h-[70px] justify-start gap-[5px] relative flex-col  text-[18px]">
                        <input value={prazo}
                            onChange={(event)=>{
                                const value = event.target.value
                                setPrazo(value)
                
                            }} className={` ${prazo ? "" : "pl-[80px]"}  ${mobile ? "bg-[var(--text2)] text-[var(--white)] border-[var(--cor3)] border-[2px] rounded-[10px]" : " border-[var(--cor4)] bg-[var(--text2)]"} font-[Resolve]  text-[var(--text)] font-bold peer w-[100%] outline-none p-[10px_15px] rounded-[4px] `} type="date" />
                        <label className={`absolute ${prazo ? "top-[-35px] left-[0]" : "top-[8px] left-[14px]"} text-[20px] duration-300 transition-all `} >Prazo</label>
                    </div>

                    <div className={`flex ${mobile ? "flex-col gap-[50px]" : ""} justify-start items-start w-[100%]`} >
                        {/* Tipo de tarefa */}
                        <div className={`${mobile ? "w-[100%]" : " w-[40%]"} relative flex flex-col gap-[5px]`}>
                            <div onClick={()=>{setTipoBar(prev => !prev)}} className={` ${mobile ? "bg-[var(--text2)] text-[var(--white)] border-[var(--cor3)] border-[2px] rounded-[10px]" : " border-[var(--cor4)] bg-[var(--text2)]"} flex w-[100%] text-[18px] cursor-pointer justify-center items-center relative rounded-[6px] flex-col  `}>
                                <div className={` ${mobile ? " justify-between px-[20px]" : "justify-around"} h-[40px] flex relative w-[100%] items-center`}>
                                    {tipo ? tipo : "Tipo de Tarefa"}
                                    <div className=" flex  right-[12px]">
                                        {!tipoBar ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                    </div>
                                </div>

                                <div className={`${tipoBar ? " max-h-[200px] p-[10px] " : "max-h-[0] p-[0] "} overflow-hidden transition-all duration-200 flex flex-col  items-center gap-[5px] w-[100%]`}>
                                    {types.map((e, index)=>(
                                        <p key={index} onClick={()=>{
                                            setTipo(e)
                                            if(e){
                                                setErros(prev => prev.filter(e=> !e.tipo))
                                            }
                                        }} className="border-2 border-[var(--cor4)] text-center w-[100%]">{e}</p>
                                    ))}
                                </div>

                            </div>

                            <p className={`${mobile ? "bottom-[-25px] text-start" : "bottom-[-45px] text-center justify-center"} text-[14px] absolute flex animate-pulse items-center w-[100%] text-red-700`}>{
                            
                                erros.map((e)=>(
                                    e.tipo && e.erro
                                ))
                                
                            }</p>
                        </div>
                        
                        {/* Input da importancia */}
                        <div className={` ${mobile ? "w-[100%]" : "w-[60%]"} relative flex flex-col gap-[5px]`}>
                            <div className="flex w-[100%] h-[40px] justify-around relative items-center gap-[10px] text-[16px]">
    
                                <div className="flex justify-center items-center">
                                    <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="baixo">
                                        <input checked={nivel == "baixo"} onChange={()=>{
                                            setNivel("baixo")
                                            setErros(prev=>prev.filter(e=> !e.nivel))
                                            
                                        }} className="peer hidden" type="radio" name="nivel" id="baixo" />
                                        <div className={`w-[25px] h-[25px] peer-checked:bg-green-600 rounded-full border-[4px] border-green-600`}></div>
                                        <p>Baixa</p>
                                    </label>
                                </div>

                                <div className="flex justify-center items-center">
                                    <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="medio">
                                        <input checked={nivel == "medio"} onChange={()=>{
                                            setNivel("medio")
                                            setErros(prev=>prev.filter(e=> !e.nivel))
                                        }} className="peer hidden" type="radio" name="nivel" id="medio" />
                                        <div className={`w-[25px] h-[25px] peer-checked:bg-yellow-600 rounded-full border-[4px] border-yellow-600`}></div>
                                        <p>Media</p>
                                    </label>
                                </div>

                                <div className="flex justify-center items-center">
                                    <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="alto">
                                        <input checked={nivel == "alto"} onChange={()=>{
                                            setNivel("alto")
                                            setErros(prev=>prev.filter(e=> !e.nivel))
                                        }} className="peer hidden" type="radio" name="nivel" id="alto" />
                                        <div className={`w-[25px] h-[25px] peer-checked:bg-red-700 rounded-full border-[4px] border-red-700`}></div>
                                        <p>Alta</p>
                                    </label>
                                </div>
                            </div>
                            <p className="text-[14px] bottom-[-25px] absolute animate-pulse flex items-center text-center justify-center w-[100%] text-red-700">{
                                
                                    erros.map((e)=>(
                                        e.nivel && e.erro
                                    ))
                                    
                            }</p>
                        </div>
                    </div>
                </div>

                {/* Criar nova tarefa */}
                <button className={`${mobile ? "w-[300px]" : "w-[400px]"} bg-[var(--cor3)]  hover:bg-[var(--cor4)] duration-300 text-[var(--black)] h-[50px] cursor-pointer rounded-[4px] text-[18px]`}>Criar tarefa</button>

            </form>

        </>
    )
}

export default Form