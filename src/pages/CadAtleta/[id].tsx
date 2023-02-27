import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import { useRouter } from "next/router";

import api from '../api/api';

const CadAtleta = () => {
    const router = useRouter();

    const [atlNome, setNome] = useState(''); 
    const [atlNascimento, setNascimento] = useState('');
    const [atlCpf, setCpf] = useState('');
    const [atlIdentidade, setIdentidade] = useState('');
    const [atlOrgEmissor, setOrgEmissor] = useState('');
    const [atlNatural, setNatural] = useState('');
    const [atlEstCivil, setEstCivil] = useState('');
    const [atlNomPai, setNomPai] = useState('');
    const [atlNomMae, setNomMae] = useState('');
    const [atlEndereco, setEndereco] = useState('');
    const [atlIdEquipe, setIdEquipe] = useState(router.query.id);
    
    const {query: { id }, } = router;

    async function handleCadastra(e:any){      
        e.preventDefault();
        let datProcess = atlNascimento.substring(6,10) + '-' + atlNascimento.substring(3,5) + '-' + atlNascimento.substring(0,2);
        setIdEquipe(id);

        try {
            api.post('newatleta', {
                atlNome, 
                atlNascimento: datProcess, 
                atlCpf, 
                atlIdentidade, 
                atlOrgEmissor, 
                atlNatural, 
                atlEstCivil, 
                atlNomPai, 
                atlNomMae, 
                atlEndereco,
                atlIdEquipe,
            }).then(() => {
                alert('Atleta cadastrado com sucesso!')
            }).catch(() => {
                alert('Erro no cadastro!');
            })  
            Router.back();
        }catch (err) {
            alert('Falha na confirmação da compra!');
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
                        Formulário Cadastro de Atleta
                      </h4>
                    </div>
                    <form>                       
                      <div className='mb-4'>                        
                        <input
                          type='email'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Informe nome do Atleta'
                          name='userNome'
                          value={atlNome} 
                          onChange={(e) => {setNome(e.target.value)}} 
                        />
                      </div>
                      <div className='grid grid-cols-2 gap-2'>   
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Nascimento'
                            name='nascimento'
                            value={atlNascimento} 
                            onChange={(e) => {setNascimento(e.target.value)}} 
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Cpf'
                            name='cpf'
                            value={atlCpf} 
                            onChange={(e) => {setCpf(e.target.value)}} 
                          />
                        </div>
                      </div>
                      <div className='grid grid-cols-2 gap-2'> 
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Identidade'
                            name='identidade'
                            value={atlIdentidade} 
                            onChange={(e) => {setIdentidade(e.target.value)}} 
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Orgão Emissor'
                            name='orgemissor'
                            value={atlOrgEmissor} 
                            onChange={(e) => {setOrgEmissor(e.target.value)}} 
                          />
                        </div>
                      </div>
                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Informe Naturalidade'
                          name='natural'
                          value={atlNatural} 
                          onChange={(e) => {setNatural(e.target.value)}} 
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Informe Est. Civil'
                          name='estcivil'
                          value={atlEstCivil} 
                          onChange={(e) => {setEstCivil(e.target.value)}} 
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Informe Nome do Pai'
                          name='nomPai'
                          value={atlNomPai} 
                          onChange={(e) => {setNomPai(e.target.value)}} 
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Informe Nome da Mãe'
                          name='nomMae'
                          value={atlNomMae} 
                          onChange={(e) => {setNomMae(e.target.value)}} 
                        />
                      </div>  
                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Informe Endereço do Atleta'
                          name='endereco'
                          value={atlEndereco} 
                          onChange={(e) => {setEndereco(e.target.value)}} 
                        />
                      </div>
                      
                      <div className='text-center pt-1 mb-12 pb-1'>
                        <button
                          className='bg-green inline-block px-6 py-2.5 text-black hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          type='button'
                          onClick={handleCadastra}
                        >
                          Cadastrar
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
export default CadAtleta;