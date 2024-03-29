import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                    <meta name="robots" content="all" />
                    <meta itemProp="image" content="https://upvc-interior.shopgeo.in/ms-icon-310x310.png"></meta>
                    <meta name="image" content="https://upvc-interior.shopgeo.in/ms-icon-310x310.png" />

                    <meta property="og:title" content="Dream Interiors | U - PVC Interior" />
                    <meta property="og:site_name" content="Dream Interiors" />
                    <meta property="og:url" content="upvc-interior.shopgeo.in" />
                    <meta property="og:description" content="Dream Interiors | U-PVC Interior is the one of the best designers in tamil nadu. We are from Salem and we work all over Tamil Nadu. " />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://upvc-interior.shopgeo.in/ms-icon-310x310.png" />
                    <meta property="og:image" content="https://upvc-interior.shopgeo.in/logo.jpg" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Dream Interiors | U - PVC Interior - Tamil Nadu" />
                    <meta name="twitter:image:src" content="https://upvc-interior.shopgeo.in/logo.jpg"/>
                    <meta name="twitter:description" content="Dream Interiors | U-PVC Interior is the one of the best designers in tamil nadu. We are from Salem and we work all over Tamil Nadu. " />
                </Head>
                <body className="bg-gray-200">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument