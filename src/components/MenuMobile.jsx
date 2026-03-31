
import Form from "../components/Form.jsx"

import { CiBoxList } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const MenuMobile = ({setArrayTarefas, setDivActive, setAsideActive,asideActive}) => {

    return (
        <>
            <div className="flex text-[var(--text)] justify-center px-[10px] items-center z-50 bg-[var(--cor5)] w-[100%] h-[80px]">
                <div className="flex w-[100%] justify-between items-center">
                    <div>
                        <h1 className="text-[40px]"><CiBoxList/></h1>
                    </div>
                    <div onClick={()=>{
                            setAsideActive(prev => !prev)
                            setDivActive(false)
                        }} className="w-[200px] flex justify-center items-center rounded-[14px] cursor-pointer h-[40px] bg-[var(--cor2)]">
                        {asideActive ? <p className={`text-[20px] transition-all duration-300 ${asideActive ? "rotate-90" : ""}`}> < IoCloseSharp/> </p> : <p>Criar nova tarefa</p>}
                    </div>
                </div>
            </div>
            <div className={`flex flex-col absolute z-30 w-[100%] h-[100dvh] p-[10px] items-center justify-center transition-all duration-300 backdrop-blur-md top-0 ${asideActive ? " backdrop-blur-md block visible" : " backdrop-blur-none  invisible"} `}>
                <div className={`w-[100%] relative transition-all px-[10px] rounded-[6px] duration-300 h-[650px] bg-linear-30 to-[var(--cor5)] from-[var(--cor5)] ${asideActive ? " top-[0] " : " top-[-700px] "} `}>
                    <Form mobile={true} setArrayTarefas={setArrayTarefas}/>
                </div>
            </div>
        </>

    )
}

export default MenuMobile