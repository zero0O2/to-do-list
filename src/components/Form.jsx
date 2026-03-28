import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Form = ({setArrayTarefas}) => {
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
            nivel
        }
        
        setArrayTarefas(prev => [...prev,newTarefa])

        setTarefa('')
        setPrazo('')
        setTipo('')
        setNivel('')
        
    }
    
    return (
        <>

            <form onSubmit={Submit} className="flex h-[100%] w-[100%] justify-between text-[var(--text)] flex-col items-center">
                <div className="flex flex-col justify-center items-center gap-[45px] w-[100%] "> 

                    {/* Input das tarefas */}
                    <div className="flex w-[100%] h-[70px] justify-start gap-[5px] relative flex-col  text-[18px]">
                        <input value={tarefa} onChange={(event)=>{
                                const value = event.target.value
                                setTarefa(event.target.value)
                                
                                if(value.trim() != ""){
                                    setErros(prev => prev.filter(e=> !e.tarefa))
                                }

                            }} className="peer w-[100%] outline-none p-[10px_15px] text-[var(--text)] bg-[var(--text2)] rounded-[4px] border-[var(--cor4)]" type="text" />
                        <label className={`absolute ${tarefa ? "top-[-35px] left-[0]" : "top-[8px] left-[14px]"} peer-focus:top-[-35px] text-[20px] duration-300 transition-all `} >Tarefa</label>
                        <p className="text-[14px] animate-pulse text-red-700">{
                            
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
                
                            }} className={` ${prazo ? "" : "pl-[80px]"} font-[Resolve]  text-[var(--text)] font-bold peer w-[100%] outline-none p-[10px_15px] bg-[var(--text2)] rounded-[4px] border-[var(--cor4)]`} type="date" />
                        <label className={`absolute ${prazo ? "top-[-35px] left-[0]" : "top-[8px] left-[14px]"} text-[20px] duration-300 transition-all `} >Prazo</label>
                    </div>

                    <div className="flex  justify-start items-start w-[100%] ">
                        {/* Tipo de tarefa */}
                        <div className="w-[40%] flex flex-col gap-[5px]">
                            <div onClick={()=>{setTipoBar(prev => !prev)}} className="flex w-[100%] text-[18px] cursor-pointer justify-center items-center relative rounded-[6px] bg-[var(--text2)] flex-col  ">
                                <div className="h-[40px] flex justify-around relative w-[100%] items-center">
                                    {tipo ? tipo : "Tipo de Tarefa"}
                                    <div className=" flex  right-[12px]">
                                        {tipoBar ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                    </div>
                                </div>

                                <div className={`${tipoBar ? "flex" : "hidden"} flex flex-col  items-center gap-[5px] p-[10px] w-[100%]`}>
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

                            <p className="text-[14px] flex animate-pulse items-center text-center justify-center w-[100%] text-red-700">{
                            
                                erros.map((e)=>(
                                    e.tipo && e.erro
                                ))
                                
                            }</p>
                        </div>
                        
                        {/* Input da importancia */}
                        <div className="w-[60%] flex flex-col gap-[5px]">
                            <div className="flex w-[100%] h-[40px] justify-around relative items-center gap-[10px] text-[16px]">
    
                                <div className="flex justify-center items-center">
                                    <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="baixo">
                                        <input onChange={()=>{
                                            setNivel("baixo")
                                            setErros(prev=>prev.filter(e=> !e.nivel))
                                            
                                        }} className="peer hidden" type="radio" name="nivel" id="baixo" />
                                        <div className={`w-[25px] h-[25px] ${nivel && "peer-checked:bg-green-600"} rounded-full border-[4px] border-green-600`}></div>
                                        <p>Baixa</p>
                                    </label>
                                </div>

                                <div className="flex justify-center items-center">
                                    <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="medio">
                                        <input onChange={()=>{
                                            setNivel("medio")
                                            setErros(prev=>prev.filter(e=> !e.nivel))
                                        }} className="peer hidden" type="radio" name="nivel" id="medio" />
                                        <div className={`w-[25px] h-[25px] ${nivel && "peer-checked:bg-yellow-600"} rounded-full border-[4px] border-yellow-600`}></div>
                                        <p>Media</p>
                                    </label>
                                </div>

                                <div className="flex justify-center items-center">
                                    <label className="flex items-center gap-[5px] cursor-pointer" htmlFor="alto">
                                        <input onChange={()=>{
                                            setNivel("alto")
                                            setErros(prev=>prev.filter(e=> !e.nivel))
                                        }} className="peer hidden" type="radio" name="nivel" id="alto" />
                                        <div className={`w-[25px] h-[25px] ${nivel && "peer-checked:bg-red-700"} rounded-full border-[4px] border-red-700`}></div>
                                        <p>Alta</p>
                                    </label>
                                </div>
                            </div>
                            <p className="text-[14px] animate-pulse flex items-center text-center justify-center w-[100%] text-red-700">{
                                
                                    erros.map((e)=>(
                                        e.nivel && e.erro
                                    ))
                                    
                            }</p>
                        </div>
                    </div>
                </div>

                {/* Criar nova tarefa */}
                <button className="bg-[var(--cor3)] w-[400px] hover:bg-[var(--cor4)] duration-300 text-[var(--black)] h-[50px] cursor-pointer rounded-[4px] text-[18px]">Criar tarefa</button>

            </form>

        </>
    )
}

export default Form