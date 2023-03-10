import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	render() {
		return (
			<Html lang="fr">
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<meta name="msapplication-TileColor" content="#FFFFFF" />
					<meta name="theme-color" content="#FFFFFF" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://full-palette.vercel.app/" />
					<meta property="og:title" content="TailwindCSS color palette viewer, click to copy class name !" />
					<meta
						property="og:description"
						content="TailwindCSS Palette viewer, click to copy class name ! Full Tailwind palette (with cyan, rose, emerald)"
					/>
					<meta property="og:image" content="https://full-palette.vercel.app/og-image.png"></meta>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="canonical" href="https://full-palette.vercel.app/" />
					{/* <meta name="Publisher" content="Mattèo Gauthier"/> */}
					<meta name="author" content="Mattèo Gauthier" />

					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://full-palette.vercel.app/" />
					<meta
						property="twitter:title"
						content="TailwindCSS Palette viewer, click to copy class name ! Full Tailwind palette (with cyan, rose, emerald)"
					/>
					<meta property="twitter:site" content="@MatteoGauthier_" />
					<meta property="twitter:creator" content="@MatteoGauthier_" />
					<meta
						name="description"
						content="TailwindCSS Palette viewer, click to copy class name ! Full Tailwind palette (with cyan, rose, emerald)"
					/>
					<meta
						property="description"
						content="TailwindCSS Palette viewer, click to copy class name ! Full Tailwind palette (with cyan, rose, emerald)"
					/>
					<meta property="twitter:image" content="https://full-palette.vercel.app/og-image.png" />
					<meta
						name="keywords"
						content="tailwind, css, tailwindcss, Mattèo Gauthier, Candice Fradet, squale.agency, dev, nodejs, postcss"
					/>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-LT54RS6BQT"></script>
					<script
						dangerouslySetInnerHTML={{
							__html: ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-LT54RS6BQT');`,
						}}
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: `
                        
							{
							  "@context": "https://schema.org/",
							  "@type": "WebSite",
							  "name": "TailwindCSS Full Palette",
							  "url": "https://full-palette.vercel.app/"
				
							}
    `,
						}}
					></script>
				</Head>
				<body className="transition-colors duration-200 bg-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
