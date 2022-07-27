import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Nabvar() {

    const [scroll, setScroll] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, []);

    const router = useRouter()
    const nav = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ]

    const menu = (
        <div className={`space-y-1 px-4 py-6 -ml-4 md:hidden ${isActive ? '-space-y-0.5' : ''}`} onClick={() => setIsActive(!isActive)}>
            <div className={`w-5 h-0.5 bg-white transition-all rounded-full ${isActive ? 'rotate-45' : 'ml-2'}`}></div>
            <div className={`w-5 h-0.5 bg-white transition-all rounded-full ${isActive ? '-rotate-45' : ''}`}></div>
        </div>
    )

    const mode = (
        <div className=''>Dark mode</div>
    )

    const navLinks = (
        nav.map(nav => (
            <Link href={nav.href} key={nav.name}>
                <a className={`md:px-4 py-2 hover:text-white font-semibold
                            ${router.asPath == nav.href ? 'text-white' : ''}`}>
                    {nav.name}
                </a>
            </Link>
        ))
    )

    const navbar = (
        <div className='hidden md:block md:-ml-4 text-sm'>
            {navLinks}
        </div>
    )

    const navbarMobile = (
        <div className={`flex flex-col w-full h-screen
                        ${isActive ? 'opacity-100' : 'hidden'}
                        md:hidden left-0 transition-all text-xl
                        bg-gradient-to-b from-black via-black px-6
                        absolute mt-16 top-0`}>
            {navLinks}
        </div>
    )

    return (
        <div className={`fixed top-0 z-50 w-full px-6
                backdrop-blur-sm border-b-2 transition-all 
                ${scroll ? 'border-zinc-900' : 'border-transparent'}`}>
            <div className={`md:max-w-3xl mx-auto
                flex items-center justify-between h-20`}>
                {menu}
                {navbar}
                {navbarMobile}
                {mode}
            </div>
        </div>
    )
}
