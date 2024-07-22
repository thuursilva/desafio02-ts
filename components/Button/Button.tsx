import './Button.css'

type IButton = {
    onClick: () => void
}

export const Button = ({onClick}: IButton) => {
    
    return(
            <button type='button' className='button' onClick={() => {onClick()}}>
                Login
            </button>
    )
}