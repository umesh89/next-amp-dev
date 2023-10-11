import { useRouter } from 'next/router';
import Layout from "@/components/templatepart/layout";
import Container from "@/components/templatepart/container";
import LeftPanel from '@/components/templatepart/left-panel';
import RightPanel from '@/components/templatepart/right-panel';
import Article from '@/components/article/article';
import {  getCanonicalPath, getCommonPosts, signlePostMetaTags, getMenu } from '@/utils/requestApi';
import { getCommonServerSideProps } from '@/utils/getCommonServerSideProps';
import { isDeviceMobile } from 'utils/devicechecker';
import LatestNews from '@/components/latest-news';
import Schema from '@/components/article/schema';
import SectionNav from '@/components/section-nav'



export const config = { amp: true };

export default function ArticleDetails({ data, latestNewsData, isMobile, metaTags, apiData }) {
	const router = useRouter();
	const PageName = router.query.slug;
	console.log(data.categories[0].slug)
	const canonical = getCanonicalPath(router.asPath);

	return (
		<>
			<Layout canonical={canonical}  postMeta={metaTags}>
				<Container>
					{/* <SectionNav pgCatagory={data.categories[0].slug}  pgName={data.title}/>  */}
					<LeftPanel>
						<Article data={data} isSize={isMobile} />
						<amp-next-page>
							<script type="application/json" dangerouslySetInnerHTML={
									{
										__html: `${JSON.stringify( apiData )}`
									}
								}
							>
							</script>
						</amp-next-page>
					</LeftPanel>

					<RightPanel>
					{
						isMobile ? null :
							<LatestNews newsData={latestNewsData} />
					}
					</RightPanel>

				</Container>
			</Layout>
			<style jsx global>
				{`
					.caption{font-size:12px;line-height:1.43;color:#787676;margin-top:10px}
					.o-post-content{clear:both}
					.o-post-content p{font-size:17px;line-height:30px;margin-bottom:20px}
					.o-post-content h2{font-size:1.375rem;line-height:1.5}
					.o-post-content table{max-width:100%;border-collapse:collapse;border-spacing:0;width:100%;margin-bottom:10px}
					.o-post-content table td,.o-post-content table th{border:1px solid #000;padding:5px 8px;vertical-align:top;font-size:16px}
					.o-post-content a{color:#dc0505}
					.o-post-content ul,.o-post-content ol{padding-left:20px}
					.o-post-content ul li,.o-post-content ol li{margin-bottom:8px;}
					p:empty {display: none;}

					@media screen and (max-width:767px) {
						.wp-block-table{overflow-x:auto}
						.o-post-content p{font-size:16px;line-height:28px}
						.o-post-content h2{font-size:1.375rem;line-height:1.5}
						.o-post-content table td,
						.o-post-content table th{font-size:16px;line-height:24px}
					}
				`}
			</style>

			<Schema data={data}/>
		</>
	);
}

export async function getServerSideProps(context) {
	const { query } = context;
	const idSlug = query.slug;


	// As per url structure we are getting post slug with id attached,
	// So, we have to filter slug from params
	let slug = null;
	let postId = null;
	if ( idSlug ) {
		const idSlugArr = idSlug.split( '-' );
		 postId = idSlugArr[idSlugArr.length -1];// get post id for metatags
		if ( Array.isArray( idSlugArr ) ) {
			const slugArr = idSlugArr.splice( 0, ( idSlugArr.length -1 ));			
			slug = slugArr.join( '-' ); 
		}
	}

	const signlePostMeta = await signlePostMetaTags(`${postId}`)

	const data = await getCommonPosts(`/singlebyslug/${slug}`);

	const commonLatestNews = await getCommonServerSideProps();
	const apiData          = await getMenu(`https://indianexpress-jansatta-develop.go-vip.net/amp-next-post/singlepost/843935/`);

	if (!['news', 'photos', 'videos', 'articles', 'web-stories'].includes(context.query.articles)) {
		return {
			notFound: true, // Set notFound to true to return a 404 status code
		};
	}

	return {
		props: {
			data: data.list[0].items[0],
			...commonLatestNews.props,
			isMobile: isDeviceMobile(context),
			metaTags : signlePostMeta,
			apiData
		}
	}
};
