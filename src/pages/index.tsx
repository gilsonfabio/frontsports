import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Image from 'next/image';
import Slideshow from '../components/SliderShow';
import Link from 'next/link';

import {api} from '../services/api';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)
  
  const [res, setRes] = useState(1);

  const [inform, setInform] = useState([]);
  
  const [imgSrc, setImgSrc] = React.useState(null);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    },[webcamRef, setImgSrc]
  );

  useEffect(() => {  
    let min = Math.ceil(1);
    let max = Math.floor(5);
    setRes(Math.floor(Math.random() * (max - min + 1)) + min);
  }, [])
  
  async function handleSignIn(data) {
    await signIn(data)
  }

  function handleTesteIP() {
    api.get("https://ipinfo.io/json")
      .then(res => {
      setInform(res.data)
      console.log(res.data)   
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home</title>
      </Head>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 min-h-screen ">  
      <div className='bg-gray-200 max-h-screen '>
        <video className="w-full h-screen object-cover" src={`/images/video00${res}.mp4`} autoPlay loop muted />    
      </div>
      <div className="bg-gray-100 flex flex-col items-center justify-center space-y-8">
        <div>          
          <Image src={'/images/logoHome.jpeg'} alt="Logo Prefeitura" width={200} height={50} />
        </div>
        <div>          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">SECRETARIA DE ESPORTE, LAZER E JUVENTUDE</h2>
        </div>
        <div>          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Faça login na sua conta</h2>
        </div>
        <div className='w-1/2'>
        <form className="w-full space-y-6" onSubmit={handleSubmit(handleSignIn)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                {...register('tipaccess')}
                id="tipaccess"
                name="tipaccess"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="tipaccess" className="ml-2 block text-sm text-gray-900">
                acesso administrativo
              </label>
            </div>    
            <div className="text-sm">
              <Link href={"/ForgotPassword"} passHref> 
                <span className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer">
                  Esqueceu sua senha?
                </span>  
              </Link>
            </div>      
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Endereço Email 
              </label>
              <input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Informe Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Informe Senha"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 hover:cursor-pointer" aria-hidden="true" />
              </span>
              Entrar
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href={"/NewTecnico"} passHref>
                <span className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer">
                  Faça seu cadastra p/Técnico
                </span>  
              </Link>
            </div>
            <div className="text-sm">
              <Link href={"/ForgotPassword"} passHref>
                <span className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer">
                  Esqueceu sua senha Técnico?
                </span>  
              </Link>
            </div>                            
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button onClick={handleTesteIP} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>                
              </button>              
            </div>                               
          </div>
        </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home;

/*
<Webcam
  audio={false}
  height={720}
  ref={webcamRef}
  screenshotFormat="image/jpeg"
  width={1280}
  videoConstraints={videoConstraints}
/>
<button onClick={capture}>Capture photo</button>
  {imgSrc && (
    <Image src={imgSrc} />
  )}
*/