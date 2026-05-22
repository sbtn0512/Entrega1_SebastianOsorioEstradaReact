import logo from '../../assets/logo.svg'
import CartWidget from './CartWidget'
import FindWidget from '../Navbar/FindWidget'

function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <img src={logo} alt="E-Commerce" className='h-10 w-auto'/>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">FindCar</a>
                </div>
                <div className="navbar-end">
                    <FindWidget/>
                    <CartWidget/>
                </div>
            </div>
        </>
    )
}

export default Navbar