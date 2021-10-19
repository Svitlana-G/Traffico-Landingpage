import aboutStyle from '../styles/About.module.css'
import Image from 'next/dist/client/image';
import isak from '../public/img/isak.png'
import simon from '../public/img/simon.png'
import peter from '../public/img/peter.png'
const About = () => {
    return (
        <div className={aboutStyle.about}>
            <span>About us</span>
            <h1>Out Awesome Clients</h1>
            <section>
                <div className={aboutStyle.clients}>
                    <p>Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.</p>
                    <section>
                        <div>
                            <Image src={isak} alt="Isak"></Image>
                        </div>
                        <h3>Isak Pettersson</h3>
                    </section>
                </div>
                <div className={aboutStyle.clients}>
                    <p>From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.</p>
                    <section>
                        <div>
                            <Image src={simon} alt="Simon"></Image>
                        </div>
                        <h3>Simon Sandberg</h3>
                    </section>
                </div>
                <div className={aboutStyle.clients}>
                    <p>An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct</p>
                    <section>
                        <div>
                            <Image src={peter} alt="Peter"></Image>
                        </div>
                        <h3>Peter Stein</h3>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default About;