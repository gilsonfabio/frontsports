import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Menubar from '../components/Menubar';

const Dashboard = () => {
    return (
    <div className='bg-white w-screen h-auto md:h-full'>
      <div className='flex flex-col w-screen '>
        <Menubar />
        <Header />        
      </div>
      <div className="p-2 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2 mt-6">  
        <Link href={`/AdmModalidades`}>
          <a>            
            <div className="flex items-center justify-center h-24 rounded overflow-hidden shadow-2xl mb-5 " > 
              <p className="text-gray-700 text-2xl font-bold">
                Modalidades
              </p>
            </div>
          </a>
        </Link> 
        <Link href={`/AdmEventos`}>
          <a>            
            <div className="flex items-center justify-center h-24 rounded overflow-hidden shadow-2xl mb-5 " > 
              <p className="text-gray-700 text-2xl font-bold">
                Eventos
              </p>
            </div>
          </a>
        </Link>
        <Link href={`/AdmEquipes`}>
          <a>            
            <div className="flex items-center justify-center h-24 rounded overflow-hidden shadow-2xl mb-5 " > 
              <p className="text-gray-700 text-2xl font-bold">
                Equipes
              </p>
            </div>
          </a>
        </Link> 
        <Link href={`/AdmAdmin`}>
          <a>            
            <div className="flex items-center justify-center h-24 rounded overflow-hidden shadow-2xl mb-5 " > 
              <p className="text-gray-700 text-2xl font-bold">
                Administradores
              </p>
            </div>
          </a>
        </Link> 
        <Link href={`/AdmTecnicos`}>
          <a>            
            <div className="flex items-center justify-center h-24 rounded overflow-hidden shadow-2xl mb-5 " > 
              <p className="text-gray-700 text-2xl font-bold">
                Técnicos
              </p>
            </div>
          </a>
        </Link>                               
      </div>
    </div>
    );
};
export default Dashboard;