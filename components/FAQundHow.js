import faqStyle from '../styles/FAQundHow.module.css'
import Image from "next/dist/client/image";
import faq from '../public/img/faq.png'
const FAQundHow = () => {
    return (
        <div className={faqStyle.faq}>
            <div className={faqStyle.header}>
                <section>
                    <p>FAQ</p>
                    <h1>Questions and Answers on Professional Traffic Permits:</h1>
                </section>
                <section>
                    <Image src={faq} alt=""></Image>
                </section>


            </div>
        </div>
    );
}

export default FAQundHow;