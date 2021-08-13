import Image from "next/image";
import imageTextStyle from '../styles/ImageText.module.css'

const ImageText = (props) => {
    return (
        <section className={imageTextStyle.flex} >
            <style jsx>{`
            section {
            flex-direction: ${props.direction ? "row-reverse" : ""};
            }
            `}

            </style>

            <div>
                <h3>{props.header}</h3>
                <p>{props.text}</p>
                <p>{props.text2}</p>
            </div>
            <Image src={props.image} alt="" />
        </section>
    );
}

export default ImageText
