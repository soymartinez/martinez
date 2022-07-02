import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Nabvar() {

    const [scroll, setScroll] = useState(false)
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

    return (
        <div className='sticky top-0 z-10
                        md:max-w-3xl mx-auto'>
            <div className={`
                flex justify-center items-center 
                backdrop-blur-sm ${scroll ? 'border-b' : 'border-none'} border-zinc-900            
                absolute transition-all
                w-full h-16 
                px-6`}>
                {
                    nav.map(item => (
                        <Link href={item.href} key={item.name}>
                            <a className={`block px-4 py-2 hover:text-white font-semibold text-sm
                                ${router.asPath == item.href ? 'text-white' : ''}`}>
                                {item.name}
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
