import Layout from 'components/layout'
import Image from 'next/image'

export default function Certificates() {
    return (
        <Layout title={'Certificates – Martinez'}>
            <div className='flex flex-col gap-8 sm:max-w-3xl mx-auto relative'>
                <h1 className='text-white text-3xl md:text-5xl font-bold my-6 sm:my-0'>Certificates</h1>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-1'>
                        <a href={'https://www.kaggle.com/learn/python'} target='_blank' rel='noreferrer'>
                            <h1 className='text-white text-xl font-bold hover:underline'>Python</h1>
                        </a>
                        <p className='text-white text-sm'>by Kaggle</p>
                    </div>
                    <div className='relative animate-fade h-80 w-full'>
                        <Image src={'/certificate - python.png'} layout={'fill'} objectFit={'contain'} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
