import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className='flex justify-center items-center bg-pink-600 py-2'>
            <div className='flex w-11/12 justify-between items-center'>
                <img className='h-12 w-12' src="https://cm-coder.000webhostapp.com/images/LogoKarlyCream-small.png" alt="" />

                <ul className='flex gap-6 cursor-pointer text-white font-semibold'>
                    <li>Pasteles</li>
                    <li>Pedidos</li>
                    <li>Quienes Somos</li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar