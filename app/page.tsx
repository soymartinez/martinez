import Header from 'components/header'
import Proyects from 'components/proyects'
import Stack from 'components/stack'
import Spotify from 'components/spotify'

export default function Home() {
    return (
        <main className='flex flex-col gap-8 sm:max-w-3xl mx-auto'>
            <Header />
            <Proyects />
            <Stack />
            <Spotify />
        </main >
    )
}
