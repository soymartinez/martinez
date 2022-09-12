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
        <div className='grid md:grid-cols-2 gap-4 my-4'>
            <h1 className='text-xl text-white font-bold'>Proyects</h1>
            {
                proyects.map(proyect => (
                    <section key={proyect.title} className={'overflow-hidden relative rounded-xl'}>
                        <div className='absolute rounded-full -z-50 w-96 h-96 bg-primary top-20' />
                        <div className='flex flex-col backdrop-blur-3xl overflow-hidden'>
                            <div className='p-4'>
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
