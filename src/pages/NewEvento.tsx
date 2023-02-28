import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import { useRouter } from "next/router";
//import { GetServerSideProps } from 'next';

import api from './api/api';

//interface apiProps {
//  modalidades: any;
//}

interface modalidadesProps {
  modId: number;
  modDescricao: string;
}

const CadEvento = () => {
    const router = useRouter();

    const [modalidades, setModalidades] = useState<Array<modalidadesProps>>([]);
    const [eveModalidade, setIdModalidade] = useState(''); 
    const [eveDescricao, setDescricao] = useState('');
    const [eveAno, setAno] = useState('');
    const [eveDatInicial, setDatInicial] = useState('');
    const [eveDatFinal, setDatFinal] = useState('');
    const [eveNroEquipes, setNroEquipes] = useState('');
    const [eveGenero, setGenero] = useState('');

    useEffect(() => {    
      api.get(`/modalidades`).then(response => {
        setModalidades(response.data);
      })       
    }, [])

    async function handleCadastra(e:any){      
        e.preventDefault();
        //let datInicio = eveDatInicial.substring(6,10) + '-' + eveDatInicial.substring(3,5) + '-' + eveDatInicial.substring(0,2);
        //setDatInicial(datInicio);
        console.log('Data Inicio:', eveDatInicial);
        
        //let datFinal = eveDatFinal.substring(6,10) + '-' + eveDatFinal.substring(3,5) + '-' + eveDatFinal.substring(0,2);
        //setDatFinal(datFinal);
        console.log('Data Final:', eveDatFinal);
        try {
            api.post('/newevento', {
                eveModalidade, 
                eveDescricao, 
                eveAno, 
                eveDatInicial, 
                eveDatFinal, 
                eveNroEquipes, 
                eveGenero, 
            }).then(() => {
                alert('Evento cadastrado com sucesso!')
            }).catch(() => {
                alert('Erro no cadastro!');
            })  
            Router.back();
        }catch (err) {
            alert('Falha na confirmação do Evento!');
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
                        Formulário Cadastro de Eventos
                      </h4>
                    </div>
                    <form>                       
                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Informe Descrição Evento'
                          name='eveDescricao'
                          value={eveDescricao} 
                          onChange={(e) => {setDescricao(e.target.value)}} 
                        />
                      </div>
                      <div className='grid grid-cols-2 gap-2'>                         
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Ano'
                            name='ano'
                            value={eveAno} 
                            onChange={(e) => {setAno(e.target.value)}} 
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Nro Equipes'
                            name='nroEquipes'
                            value={eveNroEquipes} 
                            onChange={(e) => {setNroEquipes(e.target.value)}} 
                          />
                        </div>
                      </div>
                      <div className='grid grid-cols-2 gap-2'> 
                        <div className='mb-4'>
                          <input
                            type='date'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Data Inicial'
                            name='datInicial'
                            value={eveDatInicial} 
                            onChange={(e) => {setDatInicial(e.target.value)}} 
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='date'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Informe Data Final'
                            name='datFinal'
                            value={eveDatFinal} 
                            onChange={(e) => {setDatFinal(e.target.value)}} 
                          />
                        </div>
                      </div>                      
                      <div className='mb-4'>
                        <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" 
                          value={eveGenero}
                          onChange={(e) => {setGenero(e.target.value)}} 
                        >
                          <option selected>Selecione o Genero do Evento</option>
                            <option value={'FEMININO'}>{'FEMININO'}</option>
                            <option value={'MASCULINO'}>{'MASCULINO'}</option>
                            <option value={'MISTO'}>{'MISTO'}</option>
                        </select> 
                      </div>
                      <div className='mb-4'> 
                        <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" 
                          value={eveModalidade}
                          onChange={(e) => {setIdModalidade(e.target.value)}} 
                        >
                          <option selected>Selecione a Modalidade desejada</option>
                          {modalidades.map((row:any) => (
                            <option key={row.modId} value={row.modId}>{row.modDescricao}</option>
                          ))}                          
                        </select>             
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

/*export const getServerSideProps: GetServerSideProps = async () => {
  let urlModalidades = "https://backsports.herokuapp.com/modalidades";
  const resModalidades = await fetch(urlModalidades);
  const dataModalidades = await resModalidades.json()

  return {
     props: {
      modalidades: dataModalidades,
     } 
  }
}
*/

export default CadEvento;
