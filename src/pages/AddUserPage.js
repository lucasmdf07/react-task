import React, { useState } from "react";

const AddUserPage = () => {
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [email, setEmail] = useState();
  const [occupation, setOccupation] = useState();

  const handleSubmit = async (e) => {
  }

  return (
    <div className="">
      <h2>Information</h2>
      <form onSubmit= {handleSubmit} method="POST">
        
        <div className="">
          <label>First Name: </label>
          <input
            class="bg-white border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal" type="email" placeholder=""        
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}        
            />
        </div>
        
        <div>          
          <label>Last Name: </label>
          <input
            class="bg-white border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal" type="email" placeholder=""        
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}        
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            class="bg-white border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal" type="email" placeholder="jane@example.com"        
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}            
            />
        </div>

        <div>
        <label>Occupation: </label>
          <input
            class="bg-white border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal" type="email" placeholder=""        
            type="text"
            required
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}    
            />
        </div>

        <button 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit">
          Submit button
        </button>
      </form> 
    </div>
  )
}

export default AddUserPage;