import Header from 'components/header'
import Spotify from 'components/spotify'
import Layout from 'components/layout'
import Proyects from 'components/proyects'
import Stack from 'components/stack'

export default function Home() {
  return (
    <Layout title={'Martinez – Developer'}>
      <div className='flex flex-col gap-8 sm:max-w-3xl mx-auto'>
        <Header />
        <Proyects />
        <Stack />
        <Spotify />
      </div>
    </Layout>
  )
}
