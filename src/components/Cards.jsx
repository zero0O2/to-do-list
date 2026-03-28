import { MdOutlineEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";

const Cards = ({e}) => {

    return (
        <>
            <div className="w-full min-h-[120px] relative flex justify-between flex-col  rounded-[4px] overflow-hidden text-[var(--text1)]">
                <div className="absolute bg-linear-to-bl to-[var(--cor4)] from-[var(--cor2)] w-[100%] h-[100%] opacity-60 "></div>
                <div className="flex justify-between text-[var(--text2)] gap-[20px] h-[100%] flex-col z-20 p-[10px_20px]">
                    
                    <div className="flex flex-col gap-[10px]">

                        <div className="flex justify-between text-[var(--cor1)]">
                            <h1 className="text-[20px] font-medium">{e.tipo}</h1>
                            {
                                e.prazo && <p className="font-[Resolve]">Prazo: {e.prazo}</p>
                            }
                            
                        </div>

                        <p className="text-[18px]">{e.tarefa}</p>

                        <div className="flex gap-[5px] items-center">
                            <p>Importancia:</p>
                            <div className={`h-[16px] w-[16px] rounded-full ${e.nivel == "alto" ? "bg-red-800" : e.nivel == "medio" ? "bg-yellow-600" : "bg-green-800" }`}></div>
                        </div>

                    </div>

                    <div className="flex justify-between text-[var(--cor2)] items-center">
                        <div className="flex justify-between gap-[10px] text-[var(--cor2)] items-center">

                            <button className="relative text-[var(--cor3)] hover:bg-[var(--cor2)] duration-200  h-[26px] cursor-pointer flex justify-center items-center w-[90px] p-[2px] ">
                                <div className="absolute h-[100%] w-[100%] opacity-70 bg-[var(--cor1)]"></div>
                                <p className="z-20"><GoTrash /></p>
                            </button>

                            <button className="relative text-[var(--cor3)] h-[26px] hover:bg-[var(--cor2)] duration-200  cursor-pointer flex justify-center items-center w-[90px] p-[2px] ">
                                <div className="absolute h-[100%] w-[100%] opacity-70 bg-[var(--cor1)]"></div>
                                <p className="z-20"><MdOutlineEdit/></p>
                            </button>

                        </div>

                        <button className="relative text-[var(--cor3)] h-[26px] flex hover:bg-[var(--cor2)] duration-200  justify-center cursor-pointer items-center w-[90px] p-[2px] ">
                            <div className="absolute h-[100%] w-[100%] opacity-70 bg-[var(--cor1)]"></div>
                            <p className="z-20"><FaCheck/></p>
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Cards