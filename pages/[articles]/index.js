import { useRouter } from 'next/router';
import List from '@/components/list';
import AboutListing from  '@/components/about-listing';
import Layout from "@/components/templatepart/layout";
import Container from "@/components/templatepart/container";
import {getCanonicalPath,getCommonPosts} from '@/utils/requestApi'

export const config = { amp: true };

export async function getServerSideProps(context) {
	const {req} = context;
	//const refererURL = req.headers.referer || req.headers.referrer;

	if (!['news', 'news','photos','videos','Articles','web-stories'].includes(context.query.articles)) {
	
		return {
			notFound: true, 
		};
	}
	const data = await getCommonPosts(`/webstories/latest/0/10`);
	return {
		props: {
			data
		}
	}
};

export default function Listing({ data }) {
	const router = useRouter();
	const pageType = router.query.articles;	
	const canonical = getCanonicalPath(router.asPath);

	return (
		<Layout canonical={canonical}  >
			<Container>
				{pageType === "web-stories"
						? (<div className="web-stories"><List {...data} /></div>)
						: null
				}

				{
					pageType === "about"
						? (<div className="about">
							<AboutListing  /></div> )
						: null
				}
			</Container>
			<style jsx global>{`
				.web-stories{display:flex;flex-wrap:wrap;gap:20px;}
				.web-stories .webstory-cols {margin-bottom:25px;width:100%;}
				.web-stories .webstory-thumb {position: relative;}
				.web-stories .webstory-thumb img{border-radius:8px 8px 0 0;width:100%;}
				.web-stories .webstory-thumb a:before{content: "";position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);z-index: 1;width: 36px;height: 36px;display: inline-block;background-image: url(./images/vs-icon.svg);background-repeat: no-repeat;background-size: contain;}

				.entry-wrapper{border: 1px solid #E2E2E2;padding: 10px;}
				.entry-title{font-size:14px;font-weight: 700;line-height:19px;height:76px;overflow: hidden;margin-bottom: 10px;}

				@media screen and (min-width: 768px) {
					.web-stories .webstory-cols {max-width: calc(25% - 15px);}
				}
			`}</style>
		</Layout>
	)
}
