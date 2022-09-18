import React from './icons/react'
import Nextjs from './icons/nextjs'
import TailwindCSS from './icons/tailwindcss'
import Javascript from './icons/javascript'
import HTML from './icons/html'
import CSS from './icons/css'

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
    ]

    const backend = [
        {
            name: 'Node.js',
            icon: '/icons/nodejs.svg',
            url: 'https://nodejs.org/en/',
        },
        {
            name: 'Express.js',
            icon: '/icons/expressjs.svg',
            url: 'https://expressjs.com/',
        },
        {
            name: 'Prisma',
            icon: '/icons/prisma.svg',
            url: 'https://www.prisma.io/',
        },
        {
            name: 'MongoDB',
            icon: '/icons/mongodb.svg',
            url: 'https://www.mongodb.com/',
        },
        {
            name: 'PostgreSQL',
            icon: '/icons/postgresql.svg',
            url: 'https://www.postgresql.org/',
        },
        {
            name: 'Supabase',
            icon: '/icons/supabase.svg',
            url: 'https://supabase.io/',
        },
        {
            name: 'Firebase',
            icon: '/icons/firebase.svg',
            url: 'https://firebase.google.com/',
        },
    ]

    const software = [
        {
            name: 'VS Code',
            icon: '/icons/vscode.svg',
            url: 'https://code.visualstudio.com/',
        },
        {
            name: 'Git',
            icon: '/icons/git.svg',
            url: 'https://git-scm.com/',
        },
        {
            name: 'GitHub',
            icon: '/icons/github.svg',
            url: 'https://github.com/'
        },
        {
            name: 'Figma',
            icon: '/icons/figma.svg',
            url: 'https://www.figma.com/',
        },
        {
            name: 'Framer',
            icon: '/icons/framer.svg',
            url: 'https://www.framer.com/',
        }
    ]

    const misc = [
        {
            name: 'Vercel',
            icon: '/icons/vercel.svg',
            url: 'https://vercel.com/',
        },
    ]

    const learning = [
        {
            name: 'Deno',
            icon: '/icons/deno.svg',
            url: 'https://deno.land/',
        },
        {
            name: 'Fresh',
            icon: '/icons/fresh.svg',
            url: 'https://fresh.deno.dev/',
        },
        {
            name: 'Astro',
            icon: '/icons/astro.svg',
            url: 'https://astro.build/',
        },
        {
            name: 'three.js',
            icon: '/icons/threejs.svg',
            url: 'https://threejs.org/',
        },
        {
            name: 'tRPC',
            icon: '/icons/trpc.svg',
            url: 'https://trpc.io/',
        },
        {
            name: 'GraphQL',
            icon: '/icons/graphql.svg',
            url: 'https://graphql.org/',
        },
    ]

    return (
        <section className='flex flex-col gap-6'>
            <h1 className='text-xl text-white font-bold'>Technologies</h1>
            <div className='grid gap-2'>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        frontend.map(({ name, icon, url }) => (
                            <a href={url} target='_black' rel='noreferrer' className='justify-self-center' key={name}>{icon}</a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}