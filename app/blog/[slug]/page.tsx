import Content from 'content/scroll.mdx'

export default function Blog() {
    return (
        <main className='sm:max-w-3xl mx-auto'>
            <section className='flex flex-col gap-6'>
                <h1 className='text-dark dark:text-white text-3xl md:text-5xl font-bold'>
                    Real Scroll for a Chat Application
                </h1>
                <div className='gap-3 flex flex-col text-dark dark:text-white'>
                    <Content />
                </div>
            </section>
        </main>
    )
}
