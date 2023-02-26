import type { Metadata } from 'next'
import Content from 'content/scroll.mdx'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read my experiences about software development, design and much more.',
}

export default async function Blog() {
    return (
        <main className='sm:max-w-3xl mx-auto'>
            <h1 className='text-xl font-bold'>Blog</h1>
            <Content />
        </main>
    )
}
