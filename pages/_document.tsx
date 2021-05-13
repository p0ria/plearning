import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheet } from 'styled-components';
import { ServerStyleSheets as MaterialUiSheet } from '@material-ui/core/styles';

export default class MyDocument extends Document {
    render() {
        const description = 'The Next generation of programming websites'
        const yekanFontUrl = 'https://cdn.jsdelivr.net/npm/yekan-font@1.0.0/css/yekan-font.min.css&display=swap'
        const robotoFontUrl = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        const materialFontIconUrl = 'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap';
        const devIconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css'

        return (
            <Html dir="rtl">
                <Head>
                    <meta name="description" content={description} />
                    <link rel="preload" as="style" href={yekanFontUrl} />
                    <link rel="preload" as="style" href={robotoFontUrl} />
                    <link rel="preload" as="style" href={materialFontIconUrl} />
                    <link rel="preload" as="style" href={devIconUrl} />
                    {this.props.styles}
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

    static async getInitialProps(ctx: DocumentContext) {
        const styledComponentSheet = new StyledComponentSheet()
        const materialUiSheet = new MaterialUiSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => styledComponentSheet.collectStyles(
                        materialUiSheet.collect(<App {...props} />)
                    )
                })

            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {materialUiSheet.getStyleElement()}
                        {styledComponentSheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            styledComponentSheet.seal()
        }
    }
}