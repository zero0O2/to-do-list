import gsap from "gsap"
import { useEffect, useRef } from "react"
import Form from "../components/Form.jsx"
import { Link} from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";

const Menu = ({asideActive, setAsideActive, main, setArrayTarefas}) => {
    const aside = useRef()

    // Efeito de animacao do Campo Menu

    const AsideDisplay = () => {
        setAsideActive(prev => !prev)
        gsap.to(aside.current,{
            x: !asideActive ? "0%" : "-87%",
            duration:1.4,
            ease: "expo.out",
        })
        gsap.to(main.current,{
            marginLeft: !asideActive ? "600px" : "80px",
            duration:1.4,
            ease: "expo.out",
        })
    }

    useEffect(()=>{
        gsap.from(aside.current,{
            // x:"-100%",
            duration:1.4,
            delay:0.3,
            ease: "expo.out",
        })
    },[])




    return (
            <div ref={aside} className=" absolute left-0 top-0 justify-between bg-[var(--cor5)] text-[var(--text)] gap-[20px] p-[10px_80px_30px_30px] flex flex-col items-center shadow-[#0000004f] shadow-[5px_5px_20px] min-w-[600px] h-[100dvh]">
                <div className="flex flex-col gap-[20px] h-[100%] w-[100%] justify-center items-center"> 
                    <h1 className="text-[50px] text-[var(--white)] text-nowrap">To do List</h1>
                    <div className=" h-[100%] gap-[45px] p-[20px_0] justify-center items-center flex flex-col w-[100%] rounded-[20px]">
                        <h1 className="text-[28px] text-[var(--text)]">Criar uma nova tarefa</h1>
                        <Form setArrayTarefas={setArrayTarefas} />
                    </div>
                </div>
                <div onClick={AsideDisplay} className=" text-[30px] absolute flex rounded-full justify-center items-center right-[15px] cursor-pointer top-[50%] w-[50px] h-[50px] border-2">
                    {
                        asideActive ? <IoIosArrowBack /> : <IoIosArrowForward />
                    }
                </div>
                <div className={`${!asideActive ? "top-[0]" : "top-[-40px]"} transition-all duration-600 text-[40px] absolute flex  justify-center items-center right-[15px]  w-[50px] h-[50px]`}>
                    <CiBoxList />
                </div>
                <div className=" gap-[5px] justify-center items-center bottom-[40px] flex">
                    <p>Desenvolvido por</p>
                    <Link to="https://www.linkedin.com/in/carlos-daniel-79853b2a4/" className="underline">Carlos Daniel</Link>
                    <CiLinkedin className="text-[20px]" />
                </div>
            </div>

    )
}

export default Menu