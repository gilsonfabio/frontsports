import React, { useState, useEffect } from "react";
import api from "../pages/api/api";
import Link from "next/link";

interface modalProps {
    modId: number;
    modDescricao: string;
}

const Modalidades = () => {
    const [modalidades, setModalidades] = useState<Array<modalProps>>([]);
    
    useEffect(() => {   
        api.get(`/modalidades`).then(response => {
            setModalidades(response.data);
            
        })    
    }, [])

    return (
        <div className="mb-3">
            <div className="flex flex-row justify-center items-center ">
                <span className="flex flex-row justify-center items-center text-3xl font-bold text-green-600 mt-6 mb-6" >
                    Modalidades
                </span>
                
            </div>
            <div className="p-2 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2 ">  
                {modalidades.map((row) => (
                    <Link key={row.modId} href={`/moddetalhes/${row.modId}`}>
                        <a>            
                        <div className="flex items-center justify-center h-52 rounded overflow-hidden shadow-2xl mb-5 " > 
                            <p className="text-gray-700 text-2xl font-bold">
                                {row.modDescricao}
                            </p>
                        </div>
                        </a>
                    </Link>                               
                ))}
            </div>
        </div>   
    );
}

export default Modalidades;