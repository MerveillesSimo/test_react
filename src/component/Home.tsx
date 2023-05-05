import React from 'react';
import Form from './Form';
import Modal from 'react-modal'
import FormInput from './Input';



interface FormData {
  nom: string;
  prenom: string;
  pseudo: string;
  cni:File | null
}


 

const Home : React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [submit,setSubmit] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    nom: '',
    prenom: '',
    pseudo: '',
    cni: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setSubmit(true)
    // You can submit the form data to a server or perform other actions here
  };

return(
  <><div className="bg-gray-100 h-screen flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-4">Welcome to my website!</h1>
    <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center">
      Form
    </button>
  </div>
</div>
<Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.0)', // rendre l'arrière-plan transparent
    },
    content: {
      maxWidth: '1000px',
      width: '50%',
      height: '80%',
      margin: 'auto',
      top: '80%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      padding: 0,
      border: 'none',
    },
  }}>
    <div className="bg-white mt-4 rounded-md shadow-md">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button onClick={() => setShowModal(false) }type="button" className="bg-[#FCCC37] absolute top-3 right-2.5 text-white-600 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="text-xl font-medium text-title dark:text-white">Demande de certification</h3>
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <div className=" flex justify-self-stretch justify-between  flex-row">
            <FormInput name='nom' label='Votre nom' type ='text' onChange={handleInputChange}/>
            <FormInput name='prenom' label='Votre prenom' type ='text' onChange={handleInputChange}/>
            </div>
            <FormInput name='pseudo' label='Nom avec lequel vous etes connu' type ='text' onChange={handleInputChange}/>
            <FormInput name='cni' label='CNI ou passport' type ='file' onChange={handleFileChange}/>
            <div className="text-xs">
                Rassurez vous que le document soit lisible
            </div>
            <div  className="grid justify-self-stretch">
            <button type="submit" className="bg-[#FCCC37] justify-self-end text-white  hover:text-opacity-50  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              {submit? 'Chargement...' : 'Demander une certification' }
            </button>
            </div>
           
          </form>
      </div>
  </div>
    </div>
    </Modal>
   </>)
  
};

export default Home;