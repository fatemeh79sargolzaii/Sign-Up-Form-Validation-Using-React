import React, { useState } from 'react'
import SingUpForm from './SingUpForm'
import SingupFormSuccess from './SingupFormSuccess'
const Form = () => {
    const[formIssubmitted,setFormIsSubmitted]= useState(false)
   const submitform=()=>{
       setFormIsSubmitted(true)
   }
    return (
        <div>
         {!formIssubmitted?<SingUpForm submitform={submitform}/>:<SingupFormSuccess/>}
        </div>
    )
}

export default Form
