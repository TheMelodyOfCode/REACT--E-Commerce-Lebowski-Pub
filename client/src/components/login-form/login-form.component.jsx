
import { Fragment } from "react";
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const LogInForm = ()=>{


    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    /**INSTEAD OF doing this code below we call the 
     * method signInWithGoogleRedirect directly in the button onCLICK  */ 
    // const logGoogleRedirectUser = async () =>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // };

    return (
        <Fragment>
                <div className="login">
                    <h2 className="handWriting u-margin-bottom-small">Already have an account?</h2>
                    <h3 className="u-margin-bottom-small">Sign in with your email and password</h3>
                    <form className="form">
        
                        <div className="form__group">
                            <input type="email" className="form__input" placeholder="Your email" name="mail" required />
                            <label label="email" className="form__label" >Your email</label>
                        </div>
                        <div className="form__group">
                            <input type="password" className="form__input" placeholder="Your password" name="password" required />
                            <label label="password" className="form__label" >Your password</label>
                        </div>
                    </form>
           
                    <div className="btn__group">
                        <button type="submit"
                        className="btn btn--black btn--animated"
                        name="submit"
                        value="send">Sign-IN
                    </button>
                    <h3 className="u-margin-top-small u-margin-bottom-small" >Sign in with your Google Pop-up</h3>
                    <button onClick={ logGoogleUser } type="button"
                        className="btn btn--google btn--animated-2"
                        value="send">GOOGLE Sign-IN
                    </button>
                    </div>
                </div>
        </Fragment>
    )

}

export default LogInForm;