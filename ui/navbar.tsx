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
            <div className={`md:max-w-3xl mx-auto flex h-20 relative`}>
                <div className='flex items-center text-sm'>
                    {nav.map(({ href, name }) => (
                        <Link href={href} key={name} className={clsx('hover:text-white font-semibold transition-all', {
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
