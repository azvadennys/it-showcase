import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"

export default function Layout({ children, pageMeta }) {
    const meta = {
        title: "HIMATIF Showcase",
        description: "Website yang menampung hasil karya Mahasiswa Informatika UNIB.",
        type: "website",
        ...pageMeta,
    }

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph */}
                <meta property="og:type" content={meta.type} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
            </Head>

            <div className="min-h-screen bg-dark-900 font-outfit text-white">
                <div className="px-6 py-8">
                    <Header />
                </div>
                <div className="mt-24 px-6">
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </>
    )
}