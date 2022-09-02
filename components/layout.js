import Head from 'next/head'
import Nabvar from './navbar'

export default function Layout({ title, children }) {
    return (
        <div>
            <div className='relative '>
                <div className='absolute left-10 top-80 rounded-full w-64 h-80 bg-primary opacity-40 animate-smooth bg-blend-multiply' />
                <div className='absolute left-52 top-64 rounded-full w-64 h-80 bg-sky-500 opacity-60 animate-smooth bg-blend-multiply' />
                <div className='absolute -left-10 top-96 rounded-full w-64 h-80 bg-green opacity-80 animate-smooth bg-blend-multiply' />
                <div className='absolute -left-96 top-80 rounded-full w-64 h-80 bg-white opacity-70 animate-smooth bg-blend-multiply' />
            </div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Frontend developer, JS developer" />
                <meta name="twitter:site" content="@omgismartinez" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nabvar />
            <main className='relative px-6 w-screen h-screen backdrop-blur-2xl'>{children}</main>
        </div>
    )
}
