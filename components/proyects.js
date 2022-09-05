import Image from 'next/image'

const proyects = [
    {
        title: 'fitstore',
        description: 'suplements store.',
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
                    <section key={proyect.title} className='rounded-xl relative'>
                        <div className='backdrop-blur-sm'>
                            <div className='rounded-t-xl flex flex-col p-4'>
                                <a href={proyect.url} target='_blank' rel='noreferrer'>
                                    <h1 className='text-white font-semibold text-xl z-20 hover:underline'>{proyect.title}</h1>
                                </a>
                                <p className='text-stone text-sm'>{proyect.description}</p>
                            </div>
                            <div className='shadow-md'>
                                <Image src={proyect.image} priority={true}
                                    className='rounded-xl' alt={proyect.title} width={400} height={200} layout='responsive' objectFit='contain' />
                            </div>
                        </div>
                    </section>
                ))
            }
        </div>
    )
}
