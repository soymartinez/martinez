export default function Stack() {
    const stack = [
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
            name: 'Node.js',
            icon: '/icons/nodejs.svg',
            url: 'https://nodejs.org/',
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
            name: 'Git',
            icon: '/icons/git.svg',
            url: 'https://git-scm.com/',
        },
        {
            name: 'GitHub',
            icon: '/icons/github.svg',
            url: '',
        },
        {
            name: 'Vercel',
            icon: '/icons/vercel.svg',
            url: 'https://vercel.com/',
        },
        {
            name: 'Figma',
            icon: '/icons/figma.svg',
            url: 'https://www.figma.com/',
        },
        {
            name: 'Prisma',
            icon: '/icons/prisma.svg',
            url: 'https://www.prisma.io/',
        },
        {
            name: 'JavaScript',
            icon: '/icons/javascript.svg',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            name: 'TypeScript',
            icon: '/icons/typescript.svg',
            url: 'https://www.typescriptlang.org/',
        },
    ]

    return (
        <div className='backdrop-blur-sm my-8'>
            <h1 className='text-white font-semibold'>Technologies</h1>
            <div className='flex flex-wrap justify-center gap-2 my-4'>
                {
                    stack.map((tech) => (
                        <button className={`flex flex-col items-center backdrop-blur-sm border px-6 py-1 rounded-full
                            hover:border-transparent transition-all`} key={tech.name}>
                            <p>{tech.name}</p>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}