'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Mode from './mode'

export default function Nabvar() {
    const [scroll, setScroll] = useState(false)
    const pathName = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0
                ? setScroll(true)
                : setScroll(false)
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
            <div className={`md:max-w-3xl mx-auto ml-auto flex justify-between items-center h-20 relative`}>
                <div className='not-sr-only' />
                <div className='flex gap-8'>
                    {nav.map(({ href, name }) => (
                        <Link href={href} key={name} className={clsx('text-base hover:text-white font-medium transition-all', {
                            'hidden': pathName === href,
                        })}>
                            {name}
                        </Link>
                    ))}

                    <Mode />
                </div>
            </div>
        </div>
    )
}
