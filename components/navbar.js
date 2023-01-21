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
        { name: 'Home', href: '/', status: true },
        { name: 'About', href: '/about', status: true },
        { name: 'Projects', href: '/projects', status: false },
        { name: 'Contact', href: '/contact', status: false },
    ]

    const MenuButton = () => (
        <div className={`space-y-1 px-4 py-6 -ml-4 md:hidden ${isActive ? '-space-y-0.5' : ''}`} onClick={() => setIsActive(!isActive)}>
            <div className={`w-5 h-0.5 bg-white transition-all rounded-full ${isActive ? 'rotate-45' : 'ml-2'}`}></div>
            <div className={`w-5 h-0.5 bg-white transition-all rounded-full ${isActive ? '-rotate-45' : ''}`}></div>
        </div>
    )

    const mode = (
        <div className=''>Dark mode</div>
    )

    const navLinks = (
        nav.map(({ href, name, status }) => (
            <Link href={status ? href : '#'} key={name}>
                <a className={`md:px-4 py-2 hover:text-white font-semibold hover:translate-x-1 transition-all
                            ${router.asPath == href ? 'text-white' : ''} ${!status && 'opacity-30'}`}>
                    {name}
                </a>
            </Link>
        ))
    )

    return (
        <>
            <div className={`fixed top-0 z-50 w-full px-6
                backdrop-blur-sm border-b transition-colors duration-300 
                ${scroll ? 'border-gray bg-dark/50 ease-in' : 'ease-out border-transparent'}`}>
                <div className={`md:max-w-3xl mx-auto flex items-center justify-between h-20 relative`}>
                    <div className='hidden md:block md:-ml-4 text-sm'>
                        {navLinks}
                    </div>
                    <div className='md:hidden'>
                        <MenuButton />
                    </div>
                    {/* {mode} */}
                </div>
            </div>
            <div className={`fixed inset-0 px-6 top-24 z-30 md:hidden transition duration-200 ${isActive ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='flex flex-col w-full p-6 bg-black/50 backdrop-blur-md rounded-xl text-lg'>
                    {navLinks}
                </div>
            </div>
        </>
    )
}
