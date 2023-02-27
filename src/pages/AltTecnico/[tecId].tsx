import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import { useRouter } from "next/router";

import api from '../api/api';

interface tecnicoProps {
    tecId: number;
    tecNome: string; 
    tecCpf: string; 
    tecNascimento: string; 
    tecEmail: string; 
    tecCelular:string; 
}

const AltTecnico = () => {
    const router = useRouter();

    const [tecnico, setTecnico] = useState<Array<tecnicoProps>>([]);
    const [tecNome, setTecNome] = useState(''); 
    const [tecNascimento, setTecNascimento] = useState('');
    const [tecCpf, setTecCpf] = useState('');
    const [tecCelular, setTecCelular] = useState('');
    const [tecEmail, setTecEmail] = useState('');
    const [idTec, setIdTecnico] = useState(router.query.tecId);
    
    const {query: { tecId }, } = router;

    useEffect(() => {    
    
        setIdTecnico(tecId);
  
        api.get(`/dadTecnico/${tecId}`).then(response => {
            setTecNome(response.data[0].tecNome); 
            setTecNascimento(response.data[0].tecNascimento); 
            setTecCpf(response.data[0].tecCpf); 
            setTecEmail(response.data[0].tecEmail); 
            setTecCelular(response.data[0].tecCelular); 
        })            
    }, [])

    async function handleAlteracao(e:any){      
        e.preventDefault();

        setIdTecnico(tecId);

        try {
            api.put(`updTecnico/${tecId}`, {
                tecNome, 
                tecNascimento, 
                tecCpf, 
                tecEmail, 
                tecCelular, 
            }).then(() => {
                alert('Técnico alterado com sucesso!')
            }).catch(() => {
                alert('Erro na alteração!');
            })  
            Router.back();
        }catch (err) {
            alert('Falha na alteração do técnico!');
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
                        Formulário Alteração de Técnico
                      </h4>
                    </div>
                    <form>                       
                      <div className='mb-4'>                        
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Informe nome do técnico'
                          name='nome'
                          value={tecNome} 
                          onChange={(e) => {setTecNome(e.target.value)}} 
                        />
                      </div>
                      <div className='grid grid-cols-2 gap-2'>   
                        <div className='mb-4'>
                          <input
                            type='email'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe email'
                            name='email'
                            value={tecEmail} 
                            onChange={(e) => {setTecEmail(e.target.value)}} 
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe celular'
                            name='celular'
                            value={tecCelular} 
                            onChange={(e) => {setTecCelular(e.target.value)}} 
                          />
                        </div>
                      </div>
                      <div className='grid grid-cols-2 gap-2'> 
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Cpf'
                            name='cpf'
                            value={tecCpf} 
                            onChange={(e) => {setTecCpf(e.target.value)}} 
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='date'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Nascimento'
                            name='nascimento'
                            value={tecNascimento} 
                            onChange={(e) => {setTecNascimento(e.target.value)}} 
                          />
                        </div>
                      </div>      
                      <div className='text-center pt-1 mb-12 pb-1'>
                        <button
                          className='bg-green inline-block px-6 py-2.5 text-black hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          type='button'
                          onClick={handleAlteracao}
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
export default AltTecnico;