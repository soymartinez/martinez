import Header from 'components/header'
import Spotify from 'components/spotify'
import Layout from 'components/layout'

export default function Home() {
  return (
    <Layout title={'Martinez – Developer'}>
      <div className='flex flex-col sm:max-w-3xl mx-auto'>
        <Header />
        <Spotify />
      </div>
    </Layout>
  )
}
