import Link from 'next/link'
import buttonStyle from '../styles/Button.module.css'

const Buttton = (props) => {
    return (

        <div className={buttonStyle.button}>
            <Link href=""><a >{props.text}</a></Link>
        </div>
    );
}

export default Buttton;