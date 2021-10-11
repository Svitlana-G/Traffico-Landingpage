import Link from 'next/link'
import Image from 'next/image'
import mobel from '../public/img/mobel.png'
import logo from '..//public/img/logo.png'
import headerStyle from '../styles/Header.module.css'
import Button from './Button'

const Header = () => {
    return (
        <section className={headerStyle.header}>
            <div className={headerStyle.background}>
                <nav>

                    <Image src={logo} alt="" />

                    <ul>
                        <li><Link href=""><a >About</a></Link></li>
                        <li><Link href="/"><a >How to</a></Link></li>
                        <li><Link href="/faq"><a >FAQS</a></Link></li>
                        <Button text="Contact us" />
                    </ul>

                </nav>
                <h1>Your awesome traffic permit consultant.</h1>
                <Button text="Get started" />
            </div>
            <div className={headerStyle.mobel}>
                <Image src={mobel} alt="" />
            </div>

        </section>
    );
}

export default Header;