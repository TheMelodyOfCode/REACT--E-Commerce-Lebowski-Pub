
import { Fragment } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { useState } from "react";
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword  } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    /* this object ist the value for formFields basically the initial empty state*/
    email: '',
    password: '',
}

const LogInForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await signInAuthUserWithEmailAndPassword(email, password);
          console.log(response);
          resetFormFields();
        } catch(error) { 
          switch(error.code) {
              case 'auth/wrong-password':
                  alert('incorrect email or password');
                  break
              case 'auth/user-not-found':
                  alert('email does not exists');
                  break
              default:
                  console.log(error);
          }      
        }
      }
      const handleChange = (event) => {
        const { name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    }

    return (
        <Fragment>
                <div className="login">
                    <h2 className="handWriting u-margin-bottom-small">Already have an account?</h2>
                    <h3 className="u-margin-bottom-small standard">Sign in with your email and password</h3>
                        <form onSubmit={handleSubmit} className="form quickSandLightFont">
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
                            <div className="btn__group">
                            <Button  btnType='black' btnAnimation='fromBottom' type="submit" >Sign-In</Button>        
                            <h3 className="u-margin-top-small u-margin-bottom-tiny standard" >Sign in with your Google account</h3>
                            <Button onClick={ signInWithGoogle } btnType='google' btnAnimation='fromLeft' type="button" >Sign-In</Button> 
                            </div>
                        </form>
                </div>
        </Fragment>
    )

}

export default LogInForm;