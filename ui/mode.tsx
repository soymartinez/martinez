'use client'

import { useTheme } from 'next-themes'
import { motion, Variants } from 'framer-motion'
import clsx from 'clsx'

export default function Mode() {
    const { resolvedTheme, setTheme } = useTheme()

    const size = 25

    const childVariants: Variants = {
        dark: {
            x: 0,
            transition: {
                type: 'spring',
                delay: 0.1,
                mass: 0.4,
                damping: 10,
                stiffness: 220,
            },
        },
        light: {
            x: 25,
            transition: {
                type: 'spring',
                mass: 0.4,
            },
        },
    }
    return (
        <motion.button
            className={clsx('bg-dark dark:bg-light/20 w-[65px] h-10 rounded-full relative p-2 overflow-hidden flex', {
                'justify-start': resolvedTheme === 'light',
                'justify-end': resolvedTheme === 'dark'
            })}
            initial={resolvedTheme === 'dark' ? 'light' : 'dark'}
            exit={resolvedTheme === 'dark' ? 'light' : 'dark'}
            animate={resolvedTheme}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            <motion.div
                animate={{ left: resolvedTheme === 'dark' ? '13%' : '0%' }}
                style={{
                    position: 'absolute',
                    top: '55%',
                    width: `${size * 0.08}px`,
                    height: `${size * 0.08}px`,
                    borderRadius: '50%',
                    background: 'white',
                }}
                key='circle-1'
                variants={childVariants}
            />
            <motion.div
                animate={{
                    left: resolvedTheme === 'dark' ? '18%' : '-1%',
                    top: resolvedTheme === 'dark' ? '25%' : '40%',
                }}
                style={{
                    position: 'absolute',
                    width: `${size * 0.3}px`,
                    height: `${size * 0.3}px`,
                    borderRadius: '50%',
                    background: 'white',
                    clipPath: 'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)'
                }}
                key='start-1'
                variants={childVariants}
            />
            <motion.div
                animate={{
                    left: resolvedTheme === 'dark' ? '38%' : '20%',
                    width: resolvedTheme === 'dark' ? `${size * 0.08}px` : `${size * 0.13}px`,
                    height: resolvedTheme === 'dark' ? `${size * 0.08}px` : `${size * 0.13}px`,
                }}
                style={{
                    position: 'absolute',
                    top: '43%',
                    borderRadius: '50%',
                    background: 'white'
                }}
                key='circle-2'
                variants={childVariants}
            />
            <motion.div
                animate={{ left: resolvedTheme === 'dark' ? '36%' : '-1%' }}
                style={{
                    position: 'absolute',
                    top: '60%',
                    width: `${size * 0.2}px`,
                    height: `${size * 0.2}px`,
                    borderRadius: '50%',
                    clipPath: 'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)',
                    background: 'white',
                }}
                key='start-2'
                variants={childVariants}
            />
            <motion.div
                animate={{
                    top: resolvedTheme === 'dark' ? '28%' : '20%',
                    left: resolvedTheme === 'dark' ? '48%' : '30%',
                    width: resolvedTheme === 'dark' ? `${size * 0.08}px` : `${size * 0.3}px`,
                    height: resolvedTheme === 'dark' ? `${size * 0.08}px` : `${size * 0.3}px`,
                }}
                style={{
                    position: 'absolute',
                    borderRadius: '50%',
                    background: 'white'
                }}
                key='circle-3'
                variants={childVariants}
            />
            <motion.div
                layout
                animate={resolvedTheme}
                transition={{ type: 'spring', stiffness: 600, damping: 30 }}
                className={clsx('w-6 h-6 z-50 rounded-full', {
                    'bg-white': resolvedTheme === 'light',
                    'bg-transparent': resolvedTheme === 'dark'
                })}
                variants={{
                    dark: {
                        boxShadow: 'inset 0px 0px white, inset 0px 13px 0px 0px white',
                        rotate: 120,
                    },
                    light: {
                        boxShadow: 'inset 0px 0px white, inset 0px 0px 0px 0px white',
                        rotate: 90,
                    }
                }}
                initial={false}
            />
        </motion.button>
    )
}
