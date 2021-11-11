import React, { useState } from 'react';
import './App.css';
import Form from './comps/Form'
import formLayout from './valid/formLayout'
import * as yup from 'yup';
import axios from 'axios'

const initialValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {

    const [values, setValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [users, setUsers] = useState([])

    const handleSubmit = () => {
      axios.post('https://reqres.in/api/users', values)
      .then(results => {
        setUsers([results.data, ...users])
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => setValues(initialValues))
    }

    const valid = (name, value) => {
      yup.reach(formLayout, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(error => setFormErrors({ ...formErrors, [name]: error.errors[0]}))
    }

    const handleChange = (name, value) => {
      valid(name, value)
      setValues({ ...values, [name]: value})
    }


  return (
    <div className="App">
      <Form 
        values={values} 
        change={handleChange} 
        errors={formErrors} 
        submit={handleSubmit}
      />
      {users.map(user => {
      return (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      )
    })}
    </div>
  );
}

export default App;
