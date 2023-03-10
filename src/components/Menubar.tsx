import React from 'react'
import Image from 'next/image'
import Router, { useRouter } from "next/router";

import logoBarra from '../assets/images/logo-barra.png'
import Link from 'next/link';
import DropMenu from './DropMenu';

function handleHome() {
    localStorage.clear();
    Router.push({
        pathname: '/',        
      })      
}

const Menubar = () => {   
    const router = useRouter();

    return (
        <nav className="bg-black p-2">
            <div className="flex justify-between items-center mx-auto">
                <div className="flex flex-row items-center ml-2 md:ml-36" >
                    <div className="flex items-center ">
                        <button onClick={handleHome} >
                            <Image src={logoBarra} alt="" width={140} height={30} />
                        </button>                        
                    </div>                    
                </div> 
                <div className="flex flex-row items-center mr-2 md:mr-36" >
                    <div className=''>
                        <Link href={'/SignUpForm'}> 
                            <a className='inline-block px-6 py-2 border-2 border-green-600 text-green-600 hover:border-white hover:text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-green-600 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                                Login Admin
                            </a>  
                        </Link>            
                    </div>
                    <div className=''>
                        <span className='ml-3 text-[8px] text-green-400'>Versão:1.02 - 28-02-2023</span>
                    </div>
                </div>                              
            </div>
        </nav> 
    )
}

export default Menubar

