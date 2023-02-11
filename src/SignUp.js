import React from 'react';

function SignUp() { 
    const [formData, setFormData] = React.useState(
      {
        email: "",
        password: "",
        cPassword: "",
        newsletter: true
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
        if(formData.password === formData.cPassword){
            console.log("Successfully signed up!")
        } else {
            console.log("Passwords do not match.")
            return
            //If passwords don't match, cannot sign up for newsletter
        }
        if (formData.newsletter){
            console.log("Thanks for signing up to our newsletter!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="cPassword"
                    value={formData.cPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        name="newsletter"
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUp