import Layout from 'components/layout'

export default function About() {
    const Links = [
        { name: 'Twitter', url: 'https://twitter.com/omgismartinez', username: '@omgismartinez' },
        { name: 'GitHub', url: 'https://github.com/omgismartinez', username: '@omgismartinez' },
        { name: 'Website', url: 'https://martinez.vercel.app' },
        { name: 'Linkedin', url: 'https://linkedin.com/in/omgismartinez' },
    ]

    return (
        <Layout title={'About – Martinez'}>
            <div className='flex flex-col gap-8 sm:max-w-3xl mx-auto'>
                <h1 className='text-white text-3xl md:text-5xl font-bold my-6 sm:my-0'>About Me</h1>
                <section className='flex flex-col gap-4'>
                    <h1 className='text-xl text-white font-bold'>Links</h1>
                    <ul className='flex flex-col gap-2 pl-6 transition-colors'>
                        {Links.map(({ name, url, username }) => (
                            <li className='transition-all text-neutral'>
                                {name}: <a className='mix-blend-difference font-medium text-primary hover:opacity-60 underline' href={url}>{username || url}</a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='flex flex-col gap-4'>
                    <h1 className='text-xl text-white font-bold'>Bio</h1>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-neutral font-medium'>Education</h2>
                        <p className='mix-blend-difference'>Alvaro Martinez studying Software Engineering at the Universidad Veracruzana.</p>
                        {/* <p>Alvaro Martinez graduated from the Universidad Veracruzana with a degree in Software Engineering.</p> */}
                    </div>
                </section>
            </div>
        </Layout>
    )
}
