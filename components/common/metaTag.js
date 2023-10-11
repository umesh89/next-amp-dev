import Head from "next/head";
import isEmpty from '@/utils/isEmpty'
const MetaTag = ({metaTags,canonical}) => {

let canonicalTag  = canonical === '/' 
		? 'https://education.indianexpress.com'
		: `https://education.indianexpress.com${canonical}`	
	return (	
		<>	
			<Head>
				{ 
					isEmpty(metaTags) 
					? null 
					: <>
						<title>{metaTags.title}</title>
						<meta name="keywords" content={metaTags.keywords}/>
						<meta name="description" content={metaTags.description} />
						<meta name="news_keywords" content={metaTags.google_keywords}/>
					</>
				}
			<link rel="canonical" href={canonicalTag} />
			</Head>
		</>
	);
};

export default MetaTag;
