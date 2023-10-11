
import MetaTag from "../common/metaTag";

const Layout = ({postMeta, canonical, children}) => {
	return (
		<>	
			<MetaTag metaTags={postMeta} canonical={canonical}  />
			{children}
			
			<style jsx global>{`
		:root {
			--black-color: #000;
			--white-color: #fff;
			--navi-blue-color: #051f57;
			--fluid-width: 1000px;

			--border-navy-blue: #122241;
			--border-light-gray: #bbb;
			--font-size-small: 15px;
			--line-height-small: 20px;
			--font-weight-normal: 400;
			--font-weight-bold: 600;
			--font-size-medium: 18px;
			--line-height-medium: 25px;
			--article-padding: 15px 0;
		}
		html {
			box-sizing: border-box;
		}
		*,
		*::after,
		*::before {
			box-sizing: inherit;
		}
		body {
			margin: 0;
			padding: 0;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.8;
			color: #000;
			font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
			'Lucida Grande', sans-serif;
			text-rendering: optimizeLegibility;
		}
		ul,ol,figure{margin:0;padding:0;}
		h1,h2,h3,h4,h5,h6{margin:0;padding:0;}
		a {text-decoration: none;}
		img {height: auto;max-width: 100%;vertical-align: middle;}

		.site-wrapper{ backround:#fff}
		.top-ads{max-width:300px;margin:15px auto; 10px;}

		.o-container{margin-left:auto;margin-right:auto;max-width:var(--fluid-width);}
		.o-container.noflex{display:block}

		.o-block__lhs{flex-basis: 680px;}
		.o-block__rhs{flex-basis: 300px;}
		.post-title{color:#000;font-size: 1.25rem;line-height: 1.625rem;font-weight: 700;margin-bottom:10px}
		.post-title a {color: inherit;}
		.post-excerpt{font-size: .875rem;font-weight: 400;}
		.entry-meta{color: #787676;font-size:11px;align-items: center;justify-content: flex-start;}
		.entry-meta>* {display: inline;}
		.entry-meta>*+:before {content: "|";margin-left: 5px;margin-right: 5px;}
		.cat-links a {color: inherit;text-transform: capitalize;}
		.cat-links a:hover {text-decoration: underline;}
		.ie-category-news {display: flex;align-items: flex-start;}
		.ie-category-news.ie-style-borders {border: dotted rgba(0,0,0,.2);border-width: 0 0 1px;margin-bottom: 12px;padding-bottom: 12px;position: relative;justify-content:space-between;}
		.is-block-amp .post-thumbnail {margin-left: 14px;}
		.ie-news-content{flex-basis: 63%;order: -1;display: flex;flex-direction: column;}
		.post-thumbnail img{width:100%;}
		.intro{font-size:14px;font-weight:500;line-height:24px;color:#000;}

		.ie-latest-news{position: relative;border-top: 1px dotted var(--border-light-gray);padding: var(--article-padding);}
		.ie-latest-news__title {font-size: 18px;font-weight: 700;}

		.ie-latest-news__item{display: flex;align-items: flex-start;}
		.lates-news-thumbnail{max-width: 108px;overflow: hidden;flex-basis: 33%;margin-left: 15px;}
		.lates-news-desc{flex-basis: 67%;order: -1;color: #000;font-size: var(--font-size-small);font-weight: var(--font-weight-bold);line-height: var(--line-height-small);}
		.timeinfo {font-size: 11px;color: #474747;display: block;}
		.post-city.size .timeinfo {font-size:12px;color: #000;    font-weight: 500;}

		.webTimes {color: #787676;font-size: 12px;}
		.o-breadcrumb{max-width:var(--fluid-width);margin-right:auto;}
		.ie-breadcrumb {list-style: none;margin: 7px 0;font-size: 14px;color: #787676;line-height: 1.5rem;font-weight: 500;text-transform: capitalize;}
		.ie-breadcrumb li{display: inline;}
		.ie-breadcrumb a {color: #dc0505;}
		.ie-breadcrumb li+li:before {content: "/";padding: 0 6px;color: #787676;}

		.seoHeading{font-family:'Roboto',sans-serif;margin-bottom:10px;font-size:32px;font-weight:700;line-height:40px;color:#000}
		.seoHeading.about{text-transform:capitalize}
		.subHeader{font-size:16px;line-height:22px;text-align:left;font-weight:600;color:#555;font-family:'Roboto',sans-serif;margin-bottom:10px}

		@media print, screen and (min-width: 768px) {
			.o-container{display:flex;flex-wrap: wrap;justify-content:space-between;gap:20px;}
			.is-block-amp .post-thumbnail {flex-basis: 37%;}
			.entry-meta{display: flex;}
		}
		@media print, screen and (max-width: 767px) {
			.o-container{padding-left:15px;padding-right:15px;}
			.is-block-amp .post-thumbnail {flex-basis: 33%;}
			.post-title{font-size: 16px;line-height: 22px;font-weight:600;}
			.seoHeading{font-size:22px;line-height:30px}
			.hide-small{display:none}
		}
		`}</style>
		</>
	);
};

export default Layout;
