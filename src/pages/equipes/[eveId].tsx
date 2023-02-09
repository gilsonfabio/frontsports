import React, { useState, useEffect } from "react";
import api from "../api/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Menubar from "../../components/Menubar";

interface eventosProps {
    equId: number;
    equDescricao: string;
}

const Equipes = () => {
    const [equipes, setEquipes] = useState<Array<eventosProps>>([]);
    const router = useRouter();
    const [idEve, setIdEvento] = useState(router.query.eveId);
    const [evento, setEvento] = useState([]);
    const [desEvento, setDesEvento] = useState('');
    const {query: { eveId }, } = router

    useEffect(() => {    
    
        setIdEvento(eveId);
  
        api.get(`/equEvento/${idEve}`).then(response => {
            setEquipes(response.data);
        })   

        api.get(`/dadEvento/${idEve}`).then(resp => {
          setEvento(resp.data);
          setDesEvento(resp.data[0].eveDescricao);            
        })   

    }, [])


    return (
      <div className="w-screen h-screen bg-white">
      <Menubar />
      <div className="ml-2 mr-2 md:ml-36 md:mr-36">
        <div className="flex flex-row justify-between items-center border-b-2 border-gray-300">
          <span className="text-[10px] md:text-2xl font-bold text-green-600 mt-6 h-10" >
            Equipes do Evento: {desEvento}
          </span>
          <Link href={`/SignEquipe/${eveId}`} > 
            <a className="flex flex-row items-center justify-center text-green-600 hover:text-white hover:bg-green-600 text-[10px] md:text-[14px] border bottom-1 border-green-600 rounded-full w-24 h-10 md:w-40 md:h-10">
              Adicionar Equipe
            </a>  
          </Link>
        </div>  
            <div className='flex flex-col w-full h-full text-black mt-5'>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 ml-1 px-0 py-0 ">            
                {equipes.map((item:any, idx) => {
                  return <Link key={idx} href={`/SignInTec/${item.equId}`}>
                    <a className="bg-[#d7dddc]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#b5b9b9]/40" > 
                      <div className="flex flex-row items-start justify-between px-2">
                        <div className="flex flex-col items-start px-2 py-1 ">
                          <span className='text-[12px] font-bold'>Equipe</span>
                          <div className="text-[15px] text-green-500 font-bold mb-0">{item.equDescricao}</div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between px-2 py-0 ">
                        <div className="flex flex-col items-start px-2 py-1">
                          <span className='text-[12px] font-bold'>Responsável</span>
                          <div className="text-[12px] mb-0">{item.equResp}</div>
                        </div>
                        <div className="flex flex-col items-start px-2 py-1">
                          <span className='text-[12px] font-bold'>Dirigente</span>
                          <div className="text-[12px] mb-0">{item.equDirigente}</div>
                        </div>
                      </div>                                
                      <div className="flex flex-row items-start justify-between px-2">
                        <div className="flex flex-col items-start px-2 ">
                          <span className='text-[12px] font-bold'>Técnico</span>
                          <div className="text-[12px] mb-0">{item.tecNome}</div>
                        </div>
                        <div className="flex flex-col items-start px-2 ">
                          <span className='text-[12px] font-bold'>Região</span>
                          <div className="text-[12px] mb-0">{item.equRegiao}</div>
                        </div>
                      </div>                     
                    </a>                            
                  </Link>                  
                })}
              </div>
            </div>            
        </div>   
      </div>  
    );
}

export default Equipes;