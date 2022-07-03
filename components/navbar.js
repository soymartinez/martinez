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
        <div className={`space-y-1 md:hidden ${isActive ? '-space-y-0.5' : ''}`} onClick={() => setIsActive(!isActive)}>
            <div className={`w-5 h-0.5 bg-white transition-all rounded-full ${isActive ? 'rotate-45' : 'ml-2'}`}></div>
            <div className={`w-5 h-0.5 bg-white transition-all rounded-full ${isActive ? '-rotate-45' : ''}`}></div>
        </div>
    )

    const mode = (
        <div className=''>Dark mode</div>
    )

    const navbar = (
        nav.map(nav => (
            <Link href={nav.href} key={nav.name}>
                <a className={`px-4 py-2 hover:text-white font-semibold text-sm hidden md:block
                            ${router.asPath == nav.href ? 'text-white' : ''}`}>
                    {nav.name}
                </a>
            </Link>
        ))
    )

    const navbarMobile = (
        <div className={`flex flex-col 
                        ${isActive ? 'visible' : 'hidden'}
                        md:hidden
                        absolute mt-16 top-0`}>
            {navbar}
        </div>
    )

    return (
        <div className='sticky top-0 z-10
                        sm:max-w-3xl mx-auto'>
            <div className={`
                flex items-center justify-between md:justify-start
                backdrop-blur-sm border-b-2 ${scroll ? 'border-zinc-900' : 'border-transparent'}            
                absolute transition-all
                w-full h-16 
                px-6`}>
                {menu}
                {navbar}
                {navbarMobile}
                {mode}
            </div>
        </div>
    )
}
