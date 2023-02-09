import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import SearchModalidades from '../components/SearchModalidades';

const AdmModalidades = () => {
    return (
    <div className='bg-white w-screen h-auto md:h-full'>
      <div className='flex flex-col w-screen '>
        <Menubar />
        <Header />
        <div className='ml-2 mr-2 md:ml-32 md:mr-32'>
            <SearchModalidades />
        </div>            
      </div>      
    </div>
    );
};
export default AdmModalidades;