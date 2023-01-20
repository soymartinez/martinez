import React from './icons/react'
import Nextjs from './icons/nextjs'
import TailwindCSS from './icons/tailwindcss'
import Javascript from './icons/javascript'
import HTML from './icons/html'
import CSS from './icons/css'
import Vercel from './icons/vercel'
import Nodejs from './icons/nodejs'
import Prisma from './icons/prisma'
import Mongodb from './icons/mongodb'
import Postgresql from './icons/postgresql'
import Supabase from './icons/supabase'
import Firebase from './icons/firebase'
import Trpc from './icons/trpc'
import Vscode from './icons/vscode'
import Figma from './icons/figma'
import Framer from './icons/framer'

export default function Stack() {

    const frontend = [
        {
            name: 'React',
            icon: <React />,
            url: 'https://reactjs.org/',
        },
        {
            name: 'Next.js',
            icon: <Nextjs />,
            url: 'https://nextjs.org/',
        },
        {
            name: 'Tailwind CSS',
            icon: <TailwindCSS />,
            url: 'https://tailwindcss.com/',
        },
        {
            name: 'Javascript',
            icon: <Javascript />,
            url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        },
        {
            name: 'HTML',
            icon: <HTML />,
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
            name: 'CSS',
            icon: <CSS />,
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
            name: 'Vercel',
            icon: <Vercel />,
            url: 'https://vercel.com/',
        },
    ]

    const backend = [
        {
            name: 'Node.js',
            icon: <Nodejs />,
            url: 'https://nodejs.org/en/',
        },
        {
            name: 'Prisma',
            icon: <Prisma />,
            url: 'https://www.prisma.io/',
        },
        {
            name: 'MongoDB',
            icon: <Mongodb />,
            url: 'https://www.mongodb.com/',
        },
        {
            name: 'PostgreSQL',
            icon: <Postgresql />,
            url: 'https://www.postgresql.org/',
        },
        {
            name: 'Supabase',
            icon: <Supabase />,
            url: 'https://supabase.io/',
        },
        {
            name: 'Firebase',
            icon: <Firebase />,
            url: 'https://firebase.google.com/',
        },
        {
            name: 'tRPC',
            icon: <Trpc />,
            url: 'https://trpc.io/',
        },
    ]

    const software = [
        {
            name: 'VS Code',
            icon: <Vscode />,
            url: 'https://code.visualstudio.com/',
        },
        {
            name: 'Figma',
            icon: <Figma />,
            url: 'https://www.figma.com/',
        },
        {
            name: 'Framer',
            icon: <Framer />,
            url: 'https://www.framer.com/',
        }
    ]

    return (
        <section className='flex flex-col gap-6'>
            <h1 className='text-xl text-white font-bold'>Technologies</h1>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        frontend.map(({ name, icon, url }) => (
                            <a href={url} target='_black' rel='noreferrer' className='justify-self-center' key={name}>{icon}</a>
                        ))
                    }
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        backend.map(({ name, icon, url }) => (
                            <a href={url} target='_black' rel='noreferrer' className='justify-self-center' key={name}>{icon}</a>
                        ))
                    }
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        software.map(({ name, icon, url }) => (
                            <a href={url} target='_black' rel='noreferrer' className='justify-self-center' key={name}>{icon}</a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}