/* we use useState to keep track of the value of the input fields */
import { Fragment, useState } from "react";
import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
    } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    /* this object ist the value for formFields basically the initial empty state*/
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    // console.log(formFields);

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
          }
    
          try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );

        await createUserDocumentFromAuth(user, { displayName })
        resetFormFields();
    
          } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('cannot create user - email already in use')
            } else {
                console.error('user creation encountered an HOPPALA', error)
            }
            
          }
    }

    /* this function takes the input event whenever the text changes */
    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }
    return (
        <Fragment>
                  <div className="signup">
            <h2 className="handWriting u-margin-bottom-small">Don't have an account?</h2>
            <h3 className="u-margin-bottom-small standard">Register now</h3>

                <form onSubmit={handleSubmit} className="form quickSandLightFont">
                    <div className="form__group ">
                        <input 
                        onChange={handleChange} 
                        type="text" 
                        className="form__input" 
                        placeholder="Username" 
                        name="displayName" 
                        value={displayName}
                        />
                        <label label="Username" className="form__label">Username</label>
                    </div>
                    <div className="form__group">
                        <input 
                        onChange={handleChange} 
                        type="email" 
                        required 
                        className="form__input" 
                        placeholder="Your email" 
                        name="email" 
                        value={email}
                        />
                        <label label="email" className="form__label">Your email</label>
                    </div>
                    <div className="form__group">       
                        <input onChange={handleChange}
                         type="password" 
                         required className="form__input" 
                         placeholder="Choose password" 
                         name="password" 
                         value={password} />
                        <label label="password" className="form__label">Choose password</label>
                    </div>
                    <div className="form__group">
                        <input onChange={handleChange} 
                        type="password" 
                        required className="form__input" 
                        placeholder="Confirm password"
                        name="confirmPassword" 
                        value={confirmPassword} />
                        <label label="confirmPassword" className="form__label">Confirm password</label>
                    </div>

                    <button type="submit" className="btn btn--black btn--animated" >Sign UP</button>   
                </form>
        </div>
        </Fragment>
    )

}

export default SignUpForm;