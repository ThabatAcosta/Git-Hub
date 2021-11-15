import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

//Components
import CardInformationUser from '../components/CardInformationUser';
import Louder from '../components/Louder';


const Followers = () => {

    //Hooks
    const {user} = useParams();

    //State
    const [followers, setFollowers] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setFollowers([]);
        setLoader(true);

        const handleUserFollowers = async () => {
            const response = await fetch(`https://api.github.com/users/${user}/followers`);
            const result = await response.json();
            setFollowers(result);
            console.log(result);
        }; 
        handleUserFollowers();
        setLoader(false);
    }, [user])


    return (
        <div>
            <p>FUFUFUFUFUUUUUUUU</p>


            
             {
             followers && followers.length > 0 && !loader ? (
               followers.map(user => (
                   
                <CardInformationUser
                    avatar={user.avatar_url ? user.avatar_url : null}
                    github={user?.html_url}
                    login={user?.login}
                     name={user?.name}
                     public_repos={user?.public_repos}
                     followers={user?.followers}
                     following={user?.following}
                />
               ))  
               ) : (
                <Louder/>
               )
               
            } 



        </div>
    )
}

export default Followers
