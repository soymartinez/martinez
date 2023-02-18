'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function Mode() {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <motion.button
            className={'dark:bg-white bg-primary w-6 h-6 rounded-full'}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
        </motion.button>
    )
}
