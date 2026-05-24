import logo from '../../assets/logo.svg'
import CartWidget from './CartWidget'
import FindWidget from '../Navbar/FindWidget'

function Navbar() {
    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-base-200/70 border-b border-white/10">
                <div className="max-w-screen-2xl mx-auto h-20 px-10 flex items-center justify-between">
                    <div>
                        <a className="flex text-2xl font-black tracking-[0.2em] text-white cursor-pointer hover:text-primary transition-all duration-300">
                            <img src={logo} alt="E-Commerce" className='h-7 w-auto px-2'/>
                            MINI<span className="text-primary">GARAGE</span>
                        </a>
                    </div>
                    <ul className="flex items-center gap-12 text-sm font-medium">
                        <li>
                            <a className="hover:text-primary transition-all duration-300 cursor-pointer">
                                Colección
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary transition-all duration-300 cursor-pointer">
                                Categorias
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary transition-all duration-300 cursor-pointer">
                                Ediciones limitadas
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <button className="btn btn-ghost btn-circle hover:bg-white/10">
                            <FindWidget size={20} />
                        </button>
                        <button className="btn btn-ghost btn-circle hover:bg-white/10">
                            <CartWidget size={20} />
                        </button>
                        <button className="btn btn-primary rounded-full px-6">
                            {/* <User size={18} /> */}
                            Account
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar