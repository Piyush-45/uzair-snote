import React, { useState } from 'react';

function FormExample() {
  // State to manage the input value
  // const [inputValue, setInputValue] = useState();
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState()



  const [errors, setErrors] = useState({})

  // const handleChanges=(e)=>{
  //   setInputValue(e.target.value)
  //  }
  //onClick => clickingsometing
  //onSubmit => while submitting the form
  //onChnage => mostly with inputs and it get called while input value gets changed


  const validate = () => {
    const newErrors = {}

    if (!form.username) {
      newErrors.username = 'username is required'
    }
    if (!form.password) {
      newErrors.password = 'password is required'
    }

  }

  const handleSubmitForm=(e)=>{
    e.preventDefault()
    const validateErrors = validate()

    setErrors(validateErrors)
  }

  const handleChange = (e)=>{
    const{name, value}  = e.target;
    setForm({
      ...form, 
      [name]:value
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>
          email:
          <input type="text" value={form.username} onChange={handleChange} name='username'/>
        </label>
        <label>
          password:
          <input type="text"  name='password'/>
        </label>

        <button type='submit'>submit</button>
      </form>
      {/* <p>You typed: {inputValue}</p> */}
    </div>
  );
}

export default FormExample;