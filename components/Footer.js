
import footerStyle from '../styles/Footer.module.css'
import Button from './Button'
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import logo from '..//public/img/logo.png'
import f from '../public/img/f.png'
import i from '../public/img/i.png'
import t from '../public/img/t.png'
import lkw from '../public/img/lkw.png'

const Footer = () => {
    return (
        <section className={footerStyle.footer}>
            <div className={footerStyle.auto}>
                <Image src={lkw} alt="" />
            </div>

            <div className={footerStyle.background}>
                <div className={footerStyle.button}>
                    <p>We provide traffic management consultants so you get started quickly, contact us for a quote today!</p>
                    <Button text="Get started" />
                </div>
                <nav>

                    <Image src={logo} alt="" />

                    <ul>
                        <li><Link href=""><a >About</a></Link></li>
                        <li><Link href=""><a >How to</a></Link></li>
                        <li><Link href=""><a >FAQS</a></Link></li>
                    </ul>

                </nav>
            </div>
            <div className={footerStyle.socialmedia}>
                <p>Copyright @ 2019</p>
                <ul>
                    <li><Link href=""><a ><Image src={f} alt="" /></a></Link></li>
                    <li><Link href=""><a ><Image src={t} alt="" /></a></Link></li>
                    <li><Link href=""><a ><Image src={i} alt="" /></a></Link></li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;
<section className={footerStyle.footer}>

</section>