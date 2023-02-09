import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import Link from "next/link";

import api from "./api/api";
import { RecordWithTtl } from 'dns';

interface eventosProps {
    eveId: number;
    eveDescricao: string;
}
interface equipesProps {
    equId: number;
    equDescricao: string;
}

const AdmEquipes = () => {
    const [eventos, setEventos] = useState<Array<eventosProps>>([]);
    const [equipes, setEquipes] = useState<Array<equipesProps>>([]);
    const [atualiza, setAtualiza] = useState(0);
    const [idEve, setIdEvento] = useState(0);

    const id = 0 ;
    useEffect(() => {   
        api.get(`/eventos`).then(resp => {
            setEventos(resp.data);            
        })    
        api.get(`/admEquipes/${idEve}`).then(response => {
            setEquipes(response.data);
        })
    }, [idEve])

    //useEffect(() => {   
    //    api.get(`/equEvento/${idEve}`).then(response => {
    //       setEventos(response.data);            
    //   })    
    //}, [idEve])

    function handleSelectEvento(id:any) {
        setIdEvento(id);
        setAtualiza(atualiza + 1);

        //console.log('Evento:',idEve)
    }

    return (
    <div className='bg-white w-screen h-auto md:h-full'>
      <div className='flex flex-col w-screen '>
        <Menubar />
        <Header />
        <div className='ml-2 mr-2 md:ml-32 md:mr-32'>
            <div className='flex flex-row w-full h-full'>
                <div className='bg-gray-200 w-[20%]'>
                    <div className="mb-32 h-auto">
                        <div className="flex flex-row justify-between items-center ">
                            <span className="w-full flex flex-row justify-center items-center text-3xl font-bold text-green-600 mt-6 mb-6" >
                                Eventos
                            </span>                
                        </div>
                        <div className="p-2 grid grid-cols-1 gap-1">  
                            {eventos.map((row) => (  
                                <div key={row.eveId} className="items-center justify-center h-10 rounded overflow-hidden shadow-2xl mb-5 w-full " >                               
                                    <button onClick={() => handleSelectEvento(row.eveId)}>
                                        <div className="flex flex-row items-center justify-start text-gray-700 text-[12px] font-bold" >{row.eveDescricao}</div>
                                    </button>     
                                </div>                                                             
                            ))}
                        </div>
                    </div>  
                </div>
                <div className='bg-gray-100 w-[80%]'>
                <div className='flex flex-col w-full h-full text-black mt-5'>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 ml-1 px-0 py-0 ">            
                        {equipes.map((item:any, idx) => {
                            return <Link key={idx} href={`/MosDetEquipes/${item.equId}`}>
                            <a className="bg-[#d7dddc]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#b5b9b9]/50" > 
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
                                <div className="flex flex-row items-start justify-between px-2">
                                    <div className="flex flex-col items-start px-2 py-1 ">
                                        <span className='text-[12px] font-bold'>Evento</span>
                                        <div className="text-[15px] text-green-500 font-bold mb-0">{item.eveDescricao}</div>
                                    </div>
                                </div>                   
                            </a>                            
                        </Link>                  
                        })}
                    </div>
                </div>
                </div>
            </div>
        </div>            
      </div>      
    </div>
    );
};
export default AdmEquipes;