import { Icon } from '@iconify/react';
import logo from '../../assets/logo.svg'
function Footer() {
    return (
        <footer className="border-t border-base-300 mt-24">
            <div className="max-w-screen-2xl mx-auto px-10 py-4 flex justify-between items-center">
                {/* LEFT */}
                <div className="flex items-center gap-4">
                    <img
                        src={logo}
                        alt="MiniGarage"
                        className="h-12 w-auto"
                    />
                    <div>
                        <h3 className="font-bold text-lg">
                            MiniGarage
                        </h3>
                        <p className="text-sm text-base-content/60">
                            Collect legendary vehicles.
                        </p>
                    </div>
                </div>
                {/* CENTER */}
                <div className="text-center">
                    <p className="text-sm text-base-content/60">
                        © {new Date().getFullYear()} MiniGarage.
                        All rights reserved.
                    </p>
                </div>
                {/* RIGHT */}
                <div className="flex gap-5">
                    <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                        <Icon
                            icon="logos:youtube-icon"
                            width="28"
                        />
                    </a>
                    <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
                        <Icon
                            icon="devicon:twitter"
                            width="24"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer