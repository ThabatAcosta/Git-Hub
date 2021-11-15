import React from 'react'

const GitHubForm = ({handleNameUser, handleSearchUsers}) => {
  return (     

  <div>
    <div>
      <h1 className="text-center py-8 text-4xl font-bold">GitHub</h1>
    </div>
    <form action=""
          onSubmit={(e) => handleSearchUsers(e)}
          className=" w-5/6  tablet:w-1/2  m-auto flex justify-center items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-90 transition duration-500"> 
           <div className="flex bg-gray-100 p-4 w-72  rounded-lg">
              <input className="bg-gray-100 outline-none  " 
                 type="text" 
                 placeholder="Usuario"
                 onChange={({target}) => handleNameUser(target)} /> 
            </div>
            <div className=" bg-purple-500 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer hover:bg-yellow-300 hover:text-black">
              <button>Buscar</button>
              </div>
              </form>        
  </div>

  
  )
}

export default GitHubForm











