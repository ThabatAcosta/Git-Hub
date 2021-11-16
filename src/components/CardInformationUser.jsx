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
       

<div className=" w-11/12 md:w-9/12 lg:w-5/12 bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
<div className="mb-8">
    <img className="object-center object-cover rounded-full h-36 w-36" src={avatar} alt={github}/>
</div>
<div className="text-center">
    <h1 className="text-xl text-white font-bold mb-2">{name}</h1>
    <h2 className='text-xl text-white font-bold mb-2'>{login}</h2>

<div className='flex justify-between items-center  space-x-2 md:space-x-4 '>
        
            <p className='space-x-2 text-xs md:text-base'> 
               <Link to={`/followers/${login}`}>
               <span className='text-indigo-800 font-medium'>Followers:</span>
               </Link> 
              <span className='text-indigo-900 font-medium'>{followers} </span> 
            </p> 

            <p className='space-x-2 text-xs md:text-base'> 
               <Link to={`/repositories/${login}`}> 
                <span className='text-indigo-800 font-medium'> Repositorios:</span>
                 </Link>  
                 <span className='text-indigo-900 font-medium'>{public_repos} </span>
                 
            </p> 

             <p className='space-x-2 text-xs md:text-base'>  <span className='text-indigo-800 font-medium'>following</span>
            <span className='text-indigo-900 font-medium'>{following} </span>
            
            </p>
           </div> 
</div>
</div>







    )
}

export default CardInformationUser;
