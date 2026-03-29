import { useEffect, useRef,useState } from "react"
import Menu from "../components/Menu.jsx";
import Cards from "../components/Cards.jsx";

const Home = () => {
    const main = useRef()
    const [asideActive,setAsideActive] = useState(true)
    const [arrayTarefas,setArrayTarefas] = useState(
        localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : []
    )


    useEffect(()=>{
        localStorage.setItem("tarefas",JSON.stringify(arrayTarefas))        
    },[arrayTarefas])


    return (
        <div className="w-[100vdw] relative h-[100vdh] flex">

            <Menu setArrayTarefas={setArrayTarefas} main={main} asideActive={asideActive} setAsideActive={setAsideActive}/>

            <div ref={main} className="ml-[600px] w-[100%] flex flex-col h-[100dvh] gap-[10px] p-[20px] overflow-y-scroll">
                    <h1 className="text-[40px]">Tarefas</h1>
                    <div className="columns-[300px] space-y-[10px] gap-[10px] ">

                        {
                            arrayTarefas.map((e,index)=>(
                                <Cards setArrayTarefas={setArrayTarefas} key={index} tarefa={e}/>
                            ))
                        }


                    </div>
            </div>

        </div>
    )
}

export default Home