import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta name="robots" content="noindex" />
					<script async src="https://cdn.ampproject.org/v0.js"></script>
					{/* <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script> */}
					<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
				</Head>
				<body>
					<Main />
					
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
