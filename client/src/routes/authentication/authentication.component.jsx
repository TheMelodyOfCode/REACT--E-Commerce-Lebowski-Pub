// import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { Fragment } from 'react';
import Navigation from '../navigation/navigation.component';
import LogInForm from '../../components/login-form/login-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';


const Authentication =()=> {

    return (
        <Fragment>
            <header className="headerLoginReg">
                <Navigation />
            </header>
            <section className="section-loginReg standard">
            <LogInForm />
            <SignUpForm />
            </section>
        </Fragment>
    )

}

export default Authentication;