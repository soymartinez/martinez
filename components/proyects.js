import Image from 'next/image'

const proyects = [
    {
        title: 'Fitstore',
        description: 'Suplements store.',
        image: '/fitstore.png',
        url: 'https://fitstore.vercel.app',
        technologies: ['Next.js', 'TailwindCSS', 'Supabase', 'NextAuth'],
        github: 'https://github.com/omgismartinez/fitstore',
    },
]

export default function Proyects() {
    return (
        <div className='grid md:grid-cols-2 gap-4 mb-4'>
            {
                proyects.map(proyect => (
                    <section key={proyect.title} className='bg-gray rounded-xl relative'>
                        <div className='absolute rounded-xl flex flex-col items-center justify-center w-full h-full p-4 z-10'>
                            <a href={proyect.url} target='_blank' rel='noopener'>
                                <h1 className='text-white font-semibold text-xl z-20 hover:underline'>{proyect.title}</h1>
                            </a>
                            <p className='text-stone text-sm'>{proyect.description}</p>
                        </div>
                        <div className='opacity-60'>
                            <Image src={proyect.image} priority={true}
                                className='rounded-xl' alt={proyect.title} width={400} height={200} layout='responsive' objectFit='contain' />
                        </div>
                    </section>
                ))
            }
        </div>
    )
}
