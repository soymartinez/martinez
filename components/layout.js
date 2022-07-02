import Head from 'next/head'
import Nabvar from './navbar'

export default function Layout({ title, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Frontend developer, JS developer" />
                <meta name="twitter:site" content="@omgismartinez" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nabvar />

            <main className='relative'>{children}</main>
        </div>
    )
}
