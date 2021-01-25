import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <menu>
            <nav>
            <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a>
                        About
                    </a>
                </Link>
            </nav>
        </menu>
    )
}

export default Navbar
