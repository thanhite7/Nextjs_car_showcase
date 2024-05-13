import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4"> 
        {/* px-6 means when the screen is in small size, px is 6. Otherswise, it's 16 */}
            <Link href= "/" className = "flex justify-center items-center">
                <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className = "object-contain"/>
            </Link>
            <CustomButton
                title='Sign In'
                btnType='button'
                containerStyles = "text-white rounded-full bg-blue-500 xl:bg-white xl:text-black -w-[130px]"

            />
        </nav>

    </header>
  )
}

export default NavBar