

import { Fragment } from "react";

const SignUpForm = ()=>{

    return (
        <Fragment>
                  <div class="signup">
            <h2 className="handWriting u-margin-bottom-small">Don't have an account?</h2>
            <h3 className="u-margin-bottom-small">Register now</h3>

                <form className="form">
                    <div className="form__group">
                        <input type="text" class="form__input" placeholder="Username" name="username"/>
                        <label for="username" class="form__label">Username</label>
                    </div>
                    <div className="form__group">
                        <input type="email" required class="form__input" placeholder="Your email" name="email"/>
                        <label for="email" class="form__label">Your email</label>
                    </div>
                    <div class="form__group">       
                        <input type="password" required class="form__input" placeholder="Choose password" name="password" aria-describedby="passwordHelp"/>
                        <label for="password" className="form__label">Choose password</label>
                    </div>
                    <div class="form__group">
                        <input type="password" required className="form__input" name="password_confirm" placeholder="Confirm password"/> 
                        <label for="password_confirm" className="form__label">Confirm password</label>
                    </div>

                    <button type="submit" className="btn btn--black btn--animated" name="submit" value="send" >Sign UP</button>   
                </form>
        </div>
        </Fragment>
    )

}

export default SignUpForm;