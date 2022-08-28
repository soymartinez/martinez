import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <div className='flex sm:flex-row flex-col-reverse mt-20 sm:mt-28 md:mt-32 mb-4'>
                <div className='flex flex-col gap-1 sm:pr-6'>
                    <h1 className='text-white text-3xl md:text-5xl font-bold'>
                        Alvaro Martinez
                    </h1>
                    <span className='text-neutral'>
                        Frontend Developer, JS Developer.
                        {/* I am a self-taught developer and I am always looking to learn new things.   */}
                    </span>
                    <span className='mt-3'>
                        I building web apps with React / Next.js and Tailwind CSS and more.
                        I'm a JavaScript enthusiast and I love doing design and UI.
                    </span>
                </div>
                <div className='my-6 sm:my-0 sm:w-[170px] w-[80px]'>
                    <Image src={'https://avatars.githubusercontent.com/u/72507996?v=4'}
                        className='rounded-full' layout='responsive' width={40} height={40} />
                </div>
            </div>
        </header>
    )
}
