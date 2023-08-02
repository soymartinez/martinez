import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read my experiences about software development, design and much more.',
}

export default async function Blog() {
    return (
        <main className='flex flex-col gap-6'>
            <h1 className='text-dark dark:text-white text-3xl md:text-5xl font-bold'>Blog</h1>
            <section>
                <Link
                    href={'/blog/real-scroll-for-a-chat-application'}
                    className='hover:underline underline-offset-2 dark:text-neutral text-gray px-2 -mx-2'
                >
                    Real Scroll for a Chat Application
                </Link>
            </section>
        </main>
    )
}
