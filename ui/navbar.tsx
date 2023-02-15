'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Nabvar() {
    const [scroll, setScroll] = useState(false)
    const pathName = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const nav = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
    ]

    return (
        <div className={clsx('fixed top-0 z-50 w-full px-6 backdrop-blur-sm border-b transition-colors duration-300', {
            'border-gray bg-dark/50 ease-in': scroll,
            'ease-out border-transparent': !scroll,
        })}>
            <div className={`md:max-w-3xl mx-auto flex items-center justify-end h-20 relative`}>
                <div className='hidden md:block md:-ml-4 text-sm'>
                    {nav.map(({ href, name }) => (
                        <Link href={href} key={name} className={clsx('md:px-4 py-2 hover:text-white font-semibold hover:translate-x-1 transition-all', {
                            'text-white': pathName === href,
                            'hidden': pathName === href,
                        })}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
