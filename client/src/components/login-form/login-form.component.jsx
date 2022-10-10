
// import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { Fragment } from "react";

const LogInForm = ()=>{

    return (
        <Fragment>
                <div className="login">
                    <h2 className="handWriting u-margin-bottom-small">Already have an account?</h2>
                    <h3 className="u-margin-bottom-small">Sign in with your email and password</h3>
                    <form className="form">
        
                        <div class="form__group">
                            <input type="email" className="form__input" placeholder="Your email" name="mail" required />
                            <label for="email" className="form__label" >Your email</label>
                        </div>
                        <div class="form__group">
                            <input type="password" className="form__input" placeholder="Your password" name="password" required />
                            <label for="password" className="form__label" >Your password</label>
                        </div>
                    </form>
           
                    <div class="btn__group">
                        <button type="submit"
                        className="btn btn--black btn--animated"
                        name="submit"
                        value="send">Sign-IN
                    </button>
                    <h3 class="u-margin-top-small u-margin-bottom-small" >Sign in with your Google Account</h3>
                    <button type="button"
                        className="btn btn--google btn--animated-2"
                        name="submit"
                        value="send">GOOGLE Sign-IN
                    </button>
                    </div>
                </div>
        </Fragment>
    )

}

export default LogInForm;