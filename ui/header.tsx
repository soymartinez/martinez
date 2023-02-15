import Image from 'next/image'
import Github from './icons/github'
import Twitter from './icons/twitter'

export default function Header() {
    return (
        <header>
            <div className='flex sm:flex-row flex-col-reverse'>
                <div className='flex flex-col gap-1 sm:pr-6'>
                    <h1 className='text-white text-3xl md:text-5xl font-bold'>
                        Alvaro Martinez
                    </h1>
                    <span className='text-neutral'>
                        Frontend Developer, JS Developer.
                    </span>
                    <span className='mt-3'>
                        {`I building web apps with React / Next.js and Tailwind CSS and more.
                        I'm a JavaScript enthusiast and I love doing design and UI.`}
                    </span>
                </div>
                <div className='my-6 sm:my-0 sm:w-[170px] w-[80px] animate-fade'>
                    <Image
                        src={'https://avatars.githubusercontent.com/u/72507996?v=4'}
                        className='rounded-full'
                        alt='profile'
                        width={40}
                        height={40}
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto"
                        }} />
                </div>
            </div>
            <section className='flex gap-6 mt-4'>
                <a
                    href='https://twitter.com/omgismartinez'
                    target={'_blank'}
                    rel={'noreferrer'}
                    className='flex items-center gap-[6px] hover:underline underline-offset-4 decoration-2 decoration-[#1da1f2]'>
                    <Twitter size={17} /> <span className='text-white'>Twitter</span>
                </a>
                <a
                    href='https://github.com/omgismartinez'
                    target={'_blank'}
                    rel={'noreferrer'}
                    className='flex items-center gap-[6px] hover:underline underline-offset-4 decoration-2 decoration-[#ffffff]'>
                    <Github size={16} title={false} /> <span className='text-white'>GitHub</span>
                </a>
            </section>
        </header>
    );
}
