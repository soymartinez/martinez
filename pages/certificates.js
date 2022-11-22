import Layout from 'components/layout'
import Image from 'next/image'

export default function Certificates() {
    const certificates = [
        {
            name: 'Python',
            by: 'Kaggle',
            image: '/Certificate - Python.png',
            link: 'https://www.kaggle.com/learn/python'
        },
        {
            name: 'Pandas',
            by: 'Kaggle',
            image: '/Certificate - Pandas.png',
            link: 'https://www.kaggle.com/learn/pandas'
        },
        {
            name: 'Intro to Machine Learning',
            by: 'Kaggle',
            image: '/Certificate - Intro to Machine Learning.png',
            link: 'https://www.kaggle.com/learn/intro-to-machine-learning'
        },
        {
            name: 'Intermediate Machine Learning',
            by: 'Kaggle',
            image: '/Certificate - Intermediate Machine Learning.png',
            link: 'https://www.kaggle.com/learn/intermediate-machine-learning'
        },
        {
            name: 'Intro to Deep Learning',
            by: 'Kaggle',
            image: '/Certificate - Intro to Deep Learning.png',
            link: 'https://www.kaggle.com/learn/intro-to-deep-learning'
        },
        {
            name: 'Computer Vision',
            by: 'Kaggle',
            image: '/Certificate - Computer Vision.png',
            link: 'https://www.kaggle.com/learn/computer-vision'
        },
    ]

    return (
        <Layout title={'Certificates – Martinez'}>
            <div className='flex flex-col gap-8 sm:max-w-3xl mx-auto relative'>
                <h1 className='text-white text-3xl md:text-5xl font-bold my-6 sm:my-0'>Certificates</h1>
                {certificates.map(({ name, by, image, link }, index) => (
                    <div id={index} className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-1'>
                            <a href={link} target='_blank' rel='noreferrer'>
                                <h1 className='text-white text-xl font-bold hover:underline'>{name}</h1>
                            </a>
                            <p className='text-white text-sm'>by {by}</p>
                        </div>
                        <div className='relative animate-fade h-80 w-full'>
                            <Image src={image} alt={name} layout={'fill'} objectFit={'contain'} />
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
