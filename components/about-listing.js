import Link from 'next/link';
import Image from 'next/image';
import TimeInfo from '@/components/common/timeinfo';


export default function AboutListing({data,isMobile}){
	const imgSize = isMobile ? 135 : 240;
	const imgHeight = isMobile ? 63 : 112;
	//const Texttruncate = truncateText(data.introduction, 110);
	console.log(data)
	return(
		<>
			{
				<article className="ie-category-news ie-style-borders">
				{ <figure className="post-thumbnail">
					<Link href={`/${data.categories[0].slug}/${data.id}`}>
					<Image src={data.images[1].thumbImage}
						height={imgHeight}
						width={imgSize}
						alt={data.title} />
					</Link>
				</figure> }
				<div className="ie-news-content">
					<h2 className="post-title">
						<Link href={`/${data.categories[0].slug}/${data.id}`} >
							{data.title}
						</Link>
					</h2>
				 <TimeInfo dateTime={data.post_date} />
					<div className='intro'>{Texttruncate}</div>
					
				</div>
			</article>
			 } 
		</>
	)
}
