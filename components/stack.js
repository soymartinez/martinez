export default function Stack() {

    const frontend = [
        {
            name: 'React',
            icon: '/icons/react.svg',
            url: 'https://reactjs.org/',
        },
        {
            name: 'Next.js',
            icon: '/icons/nextjs.svg',
            url: 'https://nextjs.org/',
        },
        {
            name: 'Tailwind CSS',
            icon: '/icons/tailwindcss.svg',
            url: 'https://tailwindcss.com/',
        },
        {
            name: 'Framer Motion',
            icon: '/icons/framer-motion.svg',
            url: 'https://www.framer.com/motion/',
        },
        {
            name: 'HTML',
            icon: '/icons/html.svg',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
            name: 'CSS',
            icon: '/icons/css.svg',
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

    const stack = [
        {
            
            "tools": [
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
            ],
            "misc": [
                {
                    name: 'Vercel',
                    icon: '/icons/vercel.svg',
                    url: 'https://vercel.com/',
                },
            ],
            "learning": [
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
                    name: 'GraphQL',
                    icon: '/icons/graphql.svg',
                    url: 'https://graphql.org/',
                },
            ],
        },
    ]

    return (
        <div className='backdrop-blur-sm my-8'>
            <h1 className='text-xl text-white font-bold'>Technologies</h1>
            <div className='flex flex-wrap justify-center gap-2 my-4'>
                {
                    stack.map((tech) => (
                        <button className={`flex flex-col items-center border px-6 py-1 rounded-full
                            hover:border-transparent transition-all`} key={tech.name}>
                            <p>{tech.name}</p>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}