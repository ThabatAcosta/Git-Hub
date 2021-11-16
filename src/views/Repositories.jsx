import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router'


//Components
import Louder from '../components/Louder';


const Repositories = () => {

    //Hooks
    const {user} = useParams();
    const history = useHistory()

    //State
    const [repositories, setRepositories] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setRepositories([]);
        setLoader(true);

        const handleUserrepositories = async () => {
            const response = await fetch(`https://api.github.com/users/${user}/repos`);
            console.log(`https://api.github.com/users/${user}/repos`, `https://api.github.com/users/${user}/repos`)
            const result = await response.json();
            setRepositories(result);
        }; 
        handleUserrepositories();
        setLoader(false);
    }, [user])

   


    return (
        <div className="w-full bg-gray-800">
        <section className="  px-4 sm:px-6 lg:px-4 py-12">
            <button type='button' onClick={() => history.goBack()} className=' border border-white p-2 rounded-md text-base font-bold text-indigo-600'> Atras
            </button>
           
            <div className="text-center pb-12">
                <h2 className="text-base font-bold text-indigo-600">
                    GitHub Api
                </h2>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                repositories          
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

            
             {
             repositories && repositories.length > 0 && !loader ? (
               repositories.map(user => (
                

            <div key={user.id} className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">{user?.full_name}</p>
                    <p className="text-xl text-white font-bold mb-2">{user?.visibility}</p>
             <a target="_blank" href={user?.html_url} className="text-base text-gray-400 font-normal" >{user?.html_url}</a>  
                </div>
            </div>
       
  
               ))  
               ) : (
                <Louder/>
               )
               
            } 



            </div>
    </section>
</div>
    )
}

export default Repositories
