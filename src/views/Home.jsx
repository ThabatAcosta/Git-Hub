import React, { useState } from 'react'


//Componentes
import GitHubForm from '../components/GitHubForm';
import Louder from '../components/Louder';
import CardInformationUser from '../components/CardInformationUser';
import { useHistory } from 'react-router';

const Home = () => {

    const history = useHistory();

    //State 
    const [nameUser, setNameUser] = useState("");
    const [userInformation, setUserInformation] = useState(null)
    const [loader, setLoader] = useState(false)

    //Funciones
    const handleNameUser = ({value}) => {
        setNameUser(value);

    };

    
    const handleSearchUsers = async e => {
        e.preventDefault();
        setUserInformation(null);

        

        try {
           const API = `https://api.github.com/users/${nameUser}`;
        const response = await fetch(API);
        const result = await response.json();
       

        if (result.message !== 'Not Found') {
            setUserInformation(result);
            setLoader(false); 
			return
		}
		throw new Error(result.message);

    } catch (error) {
        console.error(error);
        setLoader(false);
        history.push('/*')
            
        }

    }
 


    return (
        <div className=' min-h-screen w-full  bg-gradient-to-r from-gray-800 via-blue-900 to-blue-300 flex flex-col justify-center items-center gap-6 '>

           
           <GitHubForm handleNameUser={handleNameUser}
                       handleSearchUsers={handleSearchUsers}/>

            
            {
                loader && <Louder/>
            }

            {
                userInformation &&
                ( <CardInformationUser
                    avatar={userInformation?.avatar_url}
                    github={userInformation?.html_url}
                    login={userInformation?.login}
                    name={userInformation?.name}
                    public_repos={userInformation?.public_repos}
                    followers={userInformation?.followers}
                    following={userInformation?.following}/>) 
            }
            
        </div>
    )
}

export default Home
