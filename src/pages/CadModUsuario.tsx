import React, {useState, useEffect}  from 'react';
import Router, {useRouter} from 'next/router';

import api from './api/api';

interface modalidadesProps {
    modId: number;
    modDescricao: string; 
}

const CadModUsuario = () => {
    const [modDescricao, setDescricao] = useState('');
    const router = useRouter();
    const [idUsr, setIdUsuario] = useState(router.query.id);
    const [modalidades, setModalidades] = useState<Array<modalidadesProps>>([]);
    const [aceModId, setIdModalidade] = useState('');
    const {query: { id }, } = router;

    async function handleCadastra(e:any){      
        e.preventDefault();

        try {
            api.post('newModUsuario', {
                aceUsrId: idUsr,
                aceModId,
            }).then(() => {
                alert('Modalidade cadastrada com sucesso!')
            }).catch(() => {
                alert('Erro no cadastro!');
            })  
            Router.back();
        }catch (err) {
            alert('Falha no Cadastro de Modalidade!');
        }  
    }

    useEffect(() => {    
        api.get(`/modalidades`).then(response => {
          setModalidades(response.data);
        })       
      }, [])

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
                        Formulário Cadastro de Modalidades
                      </h4>
                    </div>
                    <form>                       
                        <div className='mb-4'> 
                            <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" 
                                value={aceModId}
                                onChange={(e) => {setIdModalidade(e.target.value)}} 
                            >
                            <option selected>Selecione a Modalidade desejada</option>
                                {modalidades.map((row) => (
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
export default CadModUsuario;