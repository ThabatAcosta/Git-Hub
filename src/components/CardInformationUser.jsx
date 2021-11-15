import React from 'react'
import { Link } from 'react-router-dom'

const CardInformationUser = props => {

    const {
        avatar,
        github,
        login,
        name,
        public_repos,
        followers,
        following
      } = props;
    
    

    return (
        <div className='w-1/4 m-auto'>
           <div className='flex justify-between items-center p-6'>
               <img src={avatar} alt={github} />
               <h1 className=''>{name}</h1>
               <h2 className=''>{login}</h2>
               </div> 

           <div className='flex justify-between items-center'>
        
            <p> 
               <Link to={`/followers/${login}`}>
               <span className='text-indigo-800 font-medium'>Followers:</span>
               </Link> 
               {followers}
            </p> 

            <p> 
               <Link to={`/repositories/${public_repos}`}> 
                <span className='text-indigo-800 font-medium'> Repositorios:</span>
                 </Link>  
                {public_repos} 
            </p> 

            <p> <span className='text-indigo-800 font-medium'>following</span>
            {following}
            </p>
           </div> 
           
        </div>
    )
}

export default CardInformationUser;
