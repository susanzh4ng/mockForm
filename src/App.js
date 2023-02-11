import React from 'react';
import './App.css';
import SignUp from './SignUp.js';

function App() { 
      const [formData, setFormData] = React.useState(
      {
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
      }
      )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
          }
        })
    }
    function handleSubmit(event) {
      event.preventDefault()
      console.log(formData)
    }

  return (
    <div className="App">

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName" //make the name property of the form the same as the formData property
            value= {formData.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value= {formData.lastName}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value= {formData.email}
          />
          <textarea
            onChange={handleChange}
            name="comments"
            value={formData.comments}
            placeholder="Comments"
          />
          <input
            type="checkbox"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
          />
          <label htmlFor="isFriendly"> Are you friendly?</label>
          <br />

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

                        <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
              id="favColor"
              value={formData.favColor}
              onChange={handleChange}
              name="favColor"
              >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <button>Submit Here!!</button>
            {/*since button is in a form, automatically of type "submit" */}
        </form>
        <br />
        <br />





        <h1>Fake signup</h1>
        <SignUp />

    </div>
  );
}

export default App;
