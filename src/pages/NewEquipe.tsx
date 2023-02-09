import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import { useRouter } from "next/router";

import api from './api/api';

const NewEquipe = () => {
    const router = useRouter();

    const [equIdEvento, setEvento] = useState(router.query.idEvento); 
    const [equDescricao, setDescricao] = useState('');
    const [equRegiao, setRegiao] = useState('');
    const [equResp, setResponsavel] = useState('');
    const [equTecnico, setTecnico] = useState(router.query.id);
    const [equDirigente, setDirigente] = useState('');

    const {query: { id }, } = router;

    async function handleCadastra(e:any){      
        e.preventDefault();

        try {
            api.post('newevento', {
                equDescricao,
                equIdEvento, 
                equRegiao, 
                equResp, 
                equTecnico, 
                equDirigente, 
            }).then(() => {
                alert('Equipe cadastrada com sucesso!')
            }).catch(() => {
                alert('Erro no cadastro!');
            })  
            Router.back();
        }catch (err) {
            alert('Falha no Cadastro de Equipes!');
        }  
    }

    return (
    <section className='h-screen gradient-form bg-gray-200 md:h-screen'>
      <div className='container py-12 px-6 h-full'>
        <div className=' flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <div className=''>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='px-4 md:px-0'>
                  <div className='md:p-12 md:mx-6'>
                    <div className='text-center'>
                      <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                        Formulário Cadastro de Equipes
                      </h4>
                    </div>
                    <form>                       
                      <div className='mb-4'>                        
                        <input
                          type='email'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Descrição da Equipe'
                          name='equDescricao'
                          value={equDescricao} 
                          onChange={(e) => {setDescricao(e.target.value)}} 
                        />
                      </div>
                      <div className='grid grid-cols-2 gap-2'>   
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Região'
                            name='equRegiao'
                            value={equRegiao} 
                            onChange={(e) => {setRegiao(e.target.value)}} 
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Responsável p/ Equipe'
                            name='responsavel'
                            value={equResp} 
                            onChange={(e) => {setResponsavel(e.target.value)}} 
                          />
                        </div>
                      </div>
                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Dirigente da Equipe'
                          name='dirigente'
                          value={equDirigente} 
                          onChange={(e) => {setDirigente(e.target.value)}} 
                        />                                              
                      </div>                                            
                      <div className='text-center pt-1 mb-12 pb-1'>
                        <button
                          className='bg-green inline-block px-6 py-2.5 text-black hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          type='button'
                          onClick={handleCadastra}
                        >
                          Cadastra
                        </button>
                      </div>                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};
export default NewEquipe;