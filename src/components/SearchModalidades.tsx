import React, { useState, useEffect } from "react";
import api from "../pages/api/api";
import Link from "next/link";

interface modalProps {
    modId: number;
    modDescricao: string;
}

const SearchModalidades = ({usrId, nivel}: any) => {
    const [modalidades, setModalidades] = useState<Array<modalProps>>([]);
    const [idUsr, setIdUsuario] = useState(usrId);
    const [nivAcesso, setNivAcesso] = useState(nivel);
    const [nivLiberado, setNivLiberado] = useState('9');

    useEffect(() => {

        if (nivAcesso == nivLiberado) {   
            api.get(`/modalidades`).then(response => {
                setModalidades(response.data);
            
            })
        }else {
            api.get(`/modUsuario/${idUsr}`).then(response => {
                setModalidades(response.data);
            }) 
        }     
    }, [])

    return (
        <div className="mb-32 h-auto">
            <div className="flex flex-row justify-between items-center ">
                <span className="flex flex-row justify-center items-center text-3xl font-bold text-green-600 mt-6 mb-6" >
                    Modalidades
                </span>
                <div className={ nivAcesso == nivLiberado ? "text-green-500" : "hidden" }>
                    <Link href={`/NewModalidade`} > 
                        <a className="flex flex-row items-center justify-center text-green-600 hover:text-white hover:bg-green-600 text-[10px] md:text-[14px] border bottom-1 border-green-600 rounded-full w-24 h-10 md:w-40 md:h-10">
                            + Modalidades
                        </a>  
                    </Link>
                </div>
            </div>
            <div className="p-2 grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-2 md:mt-3">  
                {modalidades.map((row) => ( 
                    <div key={row.modId} className="items-center justify-center h-20 rounded overflow-hidden shadow-2xl mb-5 w-full " > 
                        <div className="flex flex-row items-center justify-center text-gray-700 text-2xl font-bold" >{row.modDescricao}</div>
                        <div className="flex flex-row justify-center mt-4">
                            <Link href={`/AltModalidade/${row.modId}`} passHref > 
                            <div className=" text-green-600 hover:text-white hover:bg-green-600 hover:cursor-pointer text-[10px] md:text-[14px] w-14 h-6 md:w-full md:h-6 rounded-full flex items-center justify-center">
                                Editar
                            </div>
                            </Link>                    
                        </div>                         
                    </div>                                     
                ))}
            </div>
        </div>   
    );
}

export default SearchModalidades;