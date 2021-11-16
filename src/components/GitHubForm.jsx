import React from 'react'

const GitHubForm = ({handleNameUser, handleSearchUsers}) => {
  return (     

  <div className=' flex flex-col justify-center items-center gap-8 '>
   
      <h1 className="text-center  text-4xl font-bold">GitHub</h1>

    <form 
          onSubmit={(e) => handleSearchUsers(e)}
          className=" w-11/12     flex justify-center items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-90 transition duration-500"> 
           <div className="flex w-11/12 bg-gray-100 p-4  rounded-lg">
              <input className="bg-gray-100 outline-none  " 
                 type="text" 
                 placeholder="Usuario"
                 onChange={({target}) => handleNameUser(target)}
                 required /> 
                
            </div>
            <div className=" bg-indigo-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer hover:bg-indigo-900">
              <button>Buscar</button>
              </div>
           
              </form>        
  </div>

  
  )
}

export default GitHubForm











