import React, { useState } from 'react'


//Componentes
import GitHubForm from '../components/GitHubForm';
import Louder from '../components/Louder';
import CardInformationUser from '../components/CardInformationUser';

const Home = () => {

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

        const API = `https://api.github.com/users/${nameUser}`;
        const response = await fetch(API);
        const result = await response.json();
        console.log( result);
        setUserInformation(result);
        setLoader(false);

    }


    return (
        <div>

           
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
