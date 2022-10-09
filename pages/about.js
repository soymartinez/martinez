import Layout from 'components/layout'

export default function About() {
    return (
        <Layout title={'About – Martinez'}>
            <div className='flex flex-col gap-8 sm:max-w-3xl mx-auto'>
                <h1>About Me</h1>
                <section>
                    <h1>Links</h1>
                    <ul>
                        <li>Twitter: <a href='https://twitter.com/omgismartinez'>@omgismartinez</a></li>
                        <li>GitHub: <a href='https://github.com/omgismartinez'>@omgismartinez</a></li>
                        <li>Website: <a href='https://martinez.vercel.app'>https://martinez.vercel.app</a></li>
                        <li>LinkedIn: <a href='https://linkedin.com/in/omgismartinez'>https://linkedin.com/in/omgismartinez</a></li>
                    </ul>
                </section>
                <section>
                    <h1>Bio</h1>
                    <div>
                        <h2>Education</h2>
                        <p>Alvaro Martinez studying Software Engineering at the Universidad Veracruzana.</p>
                        {/* <p>Alvaro Martinez graduated from the Universidad Veracruzana with a degree in Software Engineering.</p> */}
                    </div>
                </section>
            </div>
        </Layout>
    )
}
