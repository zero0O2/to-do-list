import { MdOutlineEdit } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import FormUpdate from "./FormUpdate";
import { useState } from "react";

const Cards = ({tarefa, setArrayTarefas, isMobile,asideActive }) => {
    const [formUpdate,setformUpdate] = useState(false)

    const Delete = () => {
        setArrayTarefas(prev => prev.filter(e => e != tarefa))
    }
    
    const Update = (arrayTarefaUp) => {
        if(arrayTarefaUp){
            setArrayTarefas(prev=>(
                prev.map(e=> e == tarefa ? arrayTarefaUp : e)
            ))
        }
        setformUpdate(false)
    
    }

    const Concluir = () => {
        setArrayTarefas(prev=>(
            prev.map(e=>(
                e == tarefa ? {...e,conclued: !e.conclued} : e
            ))
        ))

    }


    return (
        <>
            <div className={`break-inside-avoid ${isMobile ? "w-[100%]" : "min-w-[380px]"} w-full ${tarefa.conclued && "border-[4px] border-[green]"} shadow-[0_0_20px_var(--sombra)] min-h-[120px] relative flex justify-between flex-col  rounded-[4px] overflow-hidden text-[var(--text1)]`}>
                <div className="absolute bg-linear-to-bl to-[var(--cor4)] from-[var(--white)] w-[100%] h-[100%] opacity-30 "></div>
                <div className="flex justify-between text-[var(--text2)] gap-[20px] h-[100%] flex-col z-20 p-[10px_20px]">
                    
                    <div className="flex flex-col gap-[10px]">

                        <div className="flex justify-between text-[var(--cor1)]">
                            <h1 className={` ${isMobile ? "text-[18px]" :"text-[20px]"}  font-medium`}>{tarefa.tipo}</h1>
                            {
                                tarefa.prazo && <p className="font-[Resolve]">Prazo: {tarefa.prazo}</p>
                            }
                            
                        </div>

                        <p  className={` ${isMobile ? "text-[16px]" :"text-[18px]"}`}>{tarefa.tarefa}</p>

                        <div className="flex gap-[5px] items-center">
                            <p  className={` ${isMobile ? "text-[15px]" :""}`}>Importancia:</p>
                            <div className={`h-[16px] w-[16px] rounded-full ${tarefa.nivel == "alto" ? "bg-red-800" : tarefa.nivel == "medio" ? "bg-yellow-600" : "bg-green-800" }`}></div>
                        </div>

                    </div>

                    <div className="flex justify-between text-[var(--cor2)] items-center">
                        <div className="flex justify-between gap-[10px] text-[var(--cor2)] items-center">

                            <button onClick={Delete} className="relative text-[var(--cor3)] hover:bg-[var(--cor2)] duration-200  h-[26px] cursor-pointer flex justify-center items-center w-[90px] p-[2px] ">
                                <div className="absolute h-[100%] w-[100%] opacity-70 bg-[var(--cor1)]"></div>
                                <p className="z-20"><GoTrash /></p>
                            </button>

                            <button onClick={()=>{
                                    setformUpdate(true)
                                }} 
                                className="relative text-[var(--cor3)] h-[26px] hover:bg-[var(--cor2)] duration-200  cursor-pointer flex justify-center items-center w-[90px] p-[2px] ">
                                <div className="absolute h-[100%] w-[100%] opacity-70 bg-[var(--cor1)]"></div>
                                <p className="z-20"><MdOutlineEdit/></p>
                            </button>

                        </div>

                        <button onClick={Concluir} className="relative text-[var(--cor3)] h-[26px] flex hover:bg-[var(--cor2)] duration-200  justify-center cursor-pointer items-center w-[90px] p-[2px] ">
                            <div className="absolute h-[100%] w-[100%] opacity-70 bg-[var(--cor1)]"></div>
                            <p className="z-20">{tarefa.conclued ? <IoCloseSharp /> : <FaCheck/>}</p>
                        </button>
                    </div>
                    
                </div>

                {
                    formUpdate  && <FormUpdate e={tarefa} asideActive={asideActive} mobile={isMobile} Update={Update} setformUpdate={setformUpdate}/>
                }
                
            </div>
        </>
    )
}

export default Cards