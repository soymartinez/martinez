import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function Mode() {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        const html = document.documentElement
        const classList = html.classList

        classList.remove('light', 'dark')

        if ('system' === theme || (!theme && true)) {
            const darkScheme = '(prefers-color-scheme: dark)'
            const matchMedia = window.matchMedia(darkScheme)
            if (matchMedia.media !== darkScheme || matchMedia.matches) {
                html.style.colorScheme = 'dark'
                classList.add('dark')
            } else {
                html.style.colorScheme = 'light'
                classList.add('light')
            }
        } else if (theme) {
            classList.add(theme || '')
        }
        if (theme === 'light' || theme === 'dark')
            html.style.colorScheme = theme
    }, [theme])

    function toggleTheme() {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            setTheme('light')
            document.documentElement.classList.remove('dark')
        }
    }
    return (
        <motion.button className={`dark:bg-white bg-primary w-6 h-6 rounded-full`} onClick={toggleTheme}>
        </motion.button>
    )
}
