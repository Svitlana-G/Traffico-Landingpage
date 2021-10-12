import faqStyle from '../styles/FAQundHow.module.css'
import Image from "next/dist/client/image";
import faq from '../public/img/faq.png'
import plus from '../public/img/plus.svg'
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
            <div className={faqStyle.fragen}>
                <section>
                    <div className={faqStyle.frage}>
                        <p>What is a professional traffic permit?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                    <div className={faqStyle.frage}>
                        <p>How to check the traffic condition?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                    <div className={faqStyle.frage}>
                        <p>What are the requirements for a professional traffic permit?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                    <div className={faqStyle.frage}>
                        <p>Are there professional traffic permit training courses at a distance?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                </section>
                <section>
                    <div className={faqStyle.frage}>
                        <p>When is a professional traffic permit needed?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                    <div className={faqStyle.frage}>
                        <p>Where to look for a traffic permit?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                    <div className={faqStyle.frage}>
                        <p>Are there differences between a traffic permit and a professional traffic permit?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                    <div className={faqStyle.frage}>
                        <p>How much does a commercial traffic permit cost for goods?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                    <div className={faqStyle.frage}>
                        <p>How to plug in for the traffic permit test?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                    <div className={faqStyle.frage}>
                        <p>How is the sample for a professional traffic permit booked?</p>
                        <Image src={plus} alt=""></Image>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default FAQundHow;