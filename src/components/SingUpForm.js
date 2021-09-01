
import React ,{useState,useEffect}from 'react'
import Validation from './Validation';
const SingUpForm = ({submitform}) => {
    const [errors,setErrors]=useState({});
    const[dataIsCorrect,setDataIsCorrect]=useState(false)
    const [value,setValue]=useState({
        fullname:"",
        email:"",
        password:"",
    })
    const handlechange=(e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,
        })
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        setErrors(Validation(value))
        setDataIsCorrect(true)
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitform(true)
    }
    },[errors]);
    return (
        <div className="container">
           <div className="app-wrapper">
            <div> 
          <h2 className="title">Create Account</h2>
          </div>
              <form className="form-wrapper">
                  <div className="name">
                  <label className="label">FullName</label>
                  <input className="input" type="text" name="fullname" value={value.fullname} onChange={handlechange}/>
                   </div>
                   {errors.fullname && <p className="error">{errors.fullname}</p>}
                   <div className="email">
                      <label className="label">Email</label>
                  <input className="input" type="email" name="email"value={value.email} onChange={handlechange} /> 
                  </div>
                    {errors.email && <p className="error">{errors.email}</p>}
                <div className="password">
                      <label className="label">Password</label>
                  <input className="input" type="password" name="password"value={value.password} onChange={handlechange}/>
                 </div>
                   {errors.password && <p className="error">{errors.password}</p>}
                 <div>
                     <button className="submit" onClick={handleFormSubmit}>Sing Up</button>
                 </div>
              </form>
            
          </div>
        </div>
    )
}

export default SingUpForm
