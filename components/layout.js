import Head from 'next/head'
import Nabvar from './navbar'

export default function Layout({ title, children }) {
    return (
        <div className='relative overflow-x-hidden'>
            <div className=''>
                <div className='absolute rounded-full w-96 h-96 bg-primary animate-smooth bg-blend-multiply' />
            </div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Frontend developer, JS developer" />
                <meta name="twitter:site" content="@omgismartinez" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nabvar />
            <main className='relative px-6 backdrop-blur-3xl py-20 sm:pt-28 md:pt-32'>{children}</main>
        </div>
    )
}
