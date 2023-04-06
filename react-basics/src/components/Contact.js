import React, { useState } from "react";

const Contact = () => {
  let name = "initial"; 
  /* this name value is changing but there is no data binding i.e changing the value in the program will change the value in console but there will be no change 
    in the value inside tage like p h1 etc for that we need a hook called useState
  */
 const [email , setEmail] = useState("email");
 /*
  now with the help of use state there will be data binding and with the change of the value of the variable there will be a total change in its value both in 
  console and jsx tags like p h1 etc
 */
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => (name = e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e)=>{setEmail(e.target.value)}}
          />
        <button onClick={()=> console.log(name,email)}>Click </button>
        <p>{name}</p>
        <p>{email}</p>
      </form>
    </div>
  );
};

export default Contact;
