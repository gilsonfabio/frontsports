import React, { useState, useEffect } from "react";
import api from "../api/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Menubar from "../../components/Menubar";
import moment from 'moment';

interface eventosProps {
    eveId: number;
    eveDescricao: string;
}

const ModDetalhes = () => {
    const [eventos, setEventos] = useState<Array<eventosProps>>([]);
    const router = useRouter();
    const [idMod, setIdModal] = useState(router.query.modId);
    const [modalidade, setModalidade] = useState([]);
    const [desModalidade, setDesModalidade] = useState('');

    const {query: { modId }, } = router

    useEffect(() => {    
    
        setIdModal(modId);
  
        api.get(`/eveModal/${idMod}`).then(response => {
            setEventos(response.data);
        })   

        api.get(`/dadModalidade/${modId}`).then(resp => {
          setModalidade(resp.data);        
          setDesModalidade(resp.data[0].modDescricao);
        })        
             
    }, [])


    return (
      <div className="w-screen h-screen bg-white">
        <Menubar />
        <div className="ml-2 mr-2 md:ml-36 md:mr-36">
          <div className="flex flex-row justify-between items-center border-b-2 border-gray-300">
            <span className="text-md md:text-2xl font-bold text-green-600 mt-6 h-10" >
              Eventos da Modalidade: {desModalidade}
            </span>
            <Link href={`/SignInAdm/${modId}`} > 
              <a className="flex flex-row items-center justify-center text-green-600 hover:text-white hover:bg-green-600 text-[10px] md:text-[14px] border bottom-1 border-green-600 rounded-full w-24 h-8 md:w-40 md:h-10">
                Adicionar Evento
              </a>  
            </Link>
          </div>  
            <div className='flex flex-col w-full h-full text-black mt-5'>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 mb-5 ml-1 px-0 py-0 ">            
                {eventos.map((item:any, idx) => {
                  return <Link key={idx} href={`/equipes/${item.eveId}`}>
                    <a className="bg-[#d7dddc]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#b5b9b9]/40" > 
                      <div className="flex flex-row items-start justify-between px-2 ">
                        <div className="flex flex-col items-start px-2 py-2">
                          <span className='text-[12px] font-bold'>Descrição</span>
                          <div className="text-[16px] text-green-500 font-bold mb-0">{item.eveDescricao}</div>
                        </div>                
                      </div>
                      <div className="flex flex-row items-start justify-between px-2 py-0 ">
                        <div className="flex flex-col items-start px-2 py-1">
                          <span className='text-[12px] font-bold'>Dt. Inicial</span>
                          <div className="text-[12px] mb-0">{moment(item.eveDatInicial).format('DD-MM-YYYY')}</div>
                        </div>
                        <div className="flex flex-col items-start px-2 py-1">
                          <span className='text-[12px] font-bold'>Dt. Final</span>
                          <div className="text-[12px] mb-0">{moment(item.eveDatFinal).format('DD-MM-YYYY')}</div>
                        </div>
                      </div>                                
                      <div className="flex flex-row items-start justify-between px-2">
                        <div className="flex flex-col items-start px-2 ">
                          <span className='text-[12px] font-bold'>Situação</span>
                          <div className="text-[12px] mb-0">{item.eveStatus}</div>
                        </div>
                        <div className="flex flex-col items-start px-2 ">
                          <span className='text-[12px] font-bold'>Gênero</span>
                          <div className="text-[12px] mb-0">{item.eveGenero}</div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between px-2">
                        <div className="flex flex-col items-start px-2 py-1 ">
                          <span className='text-[12px] font-bold'>Modalidade</span>
                          <div className="text-[15px] text-green-500 font-bold mb-0">{item.modDescricao}</div>
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

export default ModDetalhes;