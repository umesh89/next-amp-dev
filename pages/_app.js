import '../styles/globals.css'
import ErrorBoundary from './ErrorBoundary';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
function MyApp({ Component, pageProps }) {


	
	
	return (
		<ErrorBoundary>
			<Header ads={pageProps} />
				<Component {...pageProps} />
			<Footer ads={pageProps} />
		</ErrorBoundary>
	)
}


export default MyApp;
