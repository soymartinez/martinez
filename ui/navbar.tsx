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
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const nav = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
    ]

    return (
        <div className={clsx('fixed top-0 z-50 w-full px-4 border-b border-stone/30 dark:border-[#363636] transition-colors duration-300', {
            'bg-light/10 dark:bg-dark/50 ease-in-out backdrop-blur-sm': scroll,
            'transition-none': !scroll,
        })}>
            <div className={`md:max-w-3xl mx-auto ml-auto flex justify-between items-center h-20 relative`}>
                <div className='not-sr-only' />
                <div className='flex items-center gap-8'>
                    {nav.map(({ href, name }) => (
                        <Link href={href} key={name} className={clsx(
                            `text-base text-dark/50 dark:text-inherit hover:text-dark dark:hover:text-neutral
                             mix-blend-multiply dark:mix-blend-normal font-medium hover:transition-all`, {
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
