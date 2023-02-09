import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import { useRouter } from "next/router";

import api from '../api/api';

interface equipeProps {
    equId: number;
    equDescricao: string;
    equIdEvento: number;
    equRegiao: string;
    equResp: string;
    equTecnico: number;
    equDirigente: string;
    equStatus: string;
}

const AltModalidade = () => {
    const router = useRouter();
    const [idMol, setIdModalidade] = useState(router.query.modId); 
    const [modDescricao, setDescricao] = useState('');
    
    const {query: { modId }, } = router;

    useEffect(() => {    
    
        setIdModalidade(modId);
  
        api.get(`/dadModalidade/${modId}`).then(response => {
            setDescricao(response.data[0].modDescricao);
        })   

    }, [])

    async function handleAlterar(e:any){      
        e.preventDefault();

        try {
          api.put(`updModalidade/${modId}`, {
                modDescricao,
            }).then(() => {
                alert('Modalidade alterada com sucesso!')
            }).catch(() => {
                alert('Erro na alteração!');
            })  
            Router.back();
        }catch (err) {
            alert('Falha na Alteração da Modalidade!');
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
                        Formulário Alteração de Modalidade
                      </h4>
                    </div>
                    <form>                       
                      <div className='mb-4'>                        
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Descrição da Modalidade'
                          name='modDescricao'
                          value={modDescricao} 
                          onChange={(e) => {setDescricao(e.target.value)}} 
                        />
                      </div>
                                              
                      <div className='text-center pt-1 mb-12 pb-1'>
                        <button
                          className='bg-green inline-block px-6 py-2.5 text-black hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          type='button'
                          onClick={handleAlterar}
                        >
                          Alterar
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
export default AltModalidade;