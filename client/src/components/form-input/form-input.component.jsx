import { Fragment } from "react"

const FormInput = ({ label, ...inputProps}) => {
    return (
        <Fragment>
            <input className="form__input"  {...inputProps} />
            <label className="form__label">{label}</label> 
        </Fragment>
    )
}

export default FormInput;