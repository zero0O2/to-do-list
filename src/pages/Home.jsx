import { useEffect, useRef,useState } from "react"
import Menu from "../components/Menu.jsx";
import Cards from "../components/Cards.jsx";
import MenuMobile from "../components/MenuMobile.jsx";

const Home = () => {
    const isMobile = window.innerWidth < 1100
    const main = useRef()
    const [asideActive,setAsideActive] = useState(isMobile ? false : true)
    

    const [arrayTarefas,setArrayTarefas] = useState(
        localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : []
    )

    useEffect(()=>{
        localStorage.setItem("tarefas",JSON.stringify(arrayTarefas))        
    },[arrayTarefas])

    return (
        <div className={` ${isMobile ? "flex-col":"w-[100vdw]"} relative h-[100dvh] flex`}>
            {
                !isMobile ? <Menu setArrayTarefas={setArrayTarefas} main={main} asideActive={asideActive} setAsideActive={setAsideActive}/>
                : <MenuMobile setArrayTarefas={setArrayTarefas} asideActive={asideActive} setAsideActive={setAsideActive}/>
            }

            <div ref={main} className={`${isMobile ? "ml-[0] h-[100%] ":" ml-[600px]  h-[100dvh]"} w-[100%] flex flex-col gap-[10px] p-[30px] overflow-y-scroll`}>
                    <h1 className={` ${isMobile ? "text-[23px]" : "text-[40px]"}`}>Tarefas</h1>
                    <div className="columns-[400px]  space-y-[10px] gap-[10px]">

                        {
                            arrayTarefas.map((e,index)=>(
                                <Cards asideActive={asideActive}  isMobile={isMobile}  setArrayTarefas={setArrayTarefas} key={index} tarefa={e}/>
                            ))
                        }


                    </div>
            </div>

        </div>
    )
}

export default Home