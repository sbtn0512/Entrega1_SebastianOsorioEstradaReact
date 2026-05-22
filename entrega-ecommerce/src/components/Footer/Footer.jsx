import { Icon } from '@iconify/react';
import logo from '../../assets/logo.svg'
function Footer() {
    return (
        <footer className='footer sm:footer-horizontal text-black-content items-center p-4 border'>
            <aside className='grid-flow-col items-center'>
                <img src={logo} alt="E-Commerce" className='h-10 w-auto'/>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
                <a>
                    <Icon
                        icon="logos:youtube-icon"
                        width="32"
                    />
                </a>
                <a>
                    <Icon
                        icon="devicon:twitter"
                        width="24"
                    />
                </a>
            </nav>
        </footer>
    );
}

export default Footer