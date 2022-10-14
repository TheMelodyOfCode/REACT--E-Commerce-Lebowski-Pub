/* we use useState to keep track of the value of the input fields */
import { Fragment, useState } from "react";
import 
    { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
    } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


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

    // console.log('hit! the dude abides');

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
        await   createUserDocumentFromAuth(user, { displayName })

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
                        <FormInput 
                        onChange={handleChange} 
                        label='Username'
                        type="text" 
                        placeholder="Username" 
                        name="displayName" 
                        value={displayName}
                        />
                    </div>
                    <div className="form__group">
                        <FormInput 
                        onChange={handleChange} 
                        label='Your email'
                        type="email" 
                        required                     
                        placeholder="Your email" 
                        name="email" 
                        value={email}
                        />
                    </div>
                    <div className="form__group">       
                        <FormInput onChange={handleChange}
                        label='Choose password'
                         type="password" 
                         required  
                         placeholder="Choose password" 
                         name="password" 
                         value={password} />
                    </div>
                    <div className="form__group">
                        <FormInput onChange={handleChange} 
                        label='Confirm password'
                        type="password" 
                        required  
                        placeholder="Confirm password"
                        name="confirmPassword" 
                        value={confirmPassword} />
                    </div>
          
                    <Button btnType='black' btnAnimation='fromBottom' type="submit" >Sign UP</Button>   
                </form>
        </div>
        </Fragment>
    )

}

export default SignUpForm;