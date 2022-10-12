

const BUTTON_Style_CLASSES = {
    base: 'btn',
    white: 'btn--white',
    black: 'btn--black',
    google: 'btn--google',
}

const BUTTON_Animation_CLASSES = {

    fromBottom: 'btn--animated',
    fromLeft: 'btn--animated-2'
}

// Children is whatever is inside of the button component
const Button = ({children, btnType, btnAnimation, ...otherProps})=>{

    return (

        <button 
            className={`
            btn 
            ${BUTTON_Style_CLASSES[btnType]} 
            ${BUTTON_Animation_CLASSES[btnAnimation]} `}
            {...otherProps}>
            {children}
        </button>
   
    );
};

export default Button;