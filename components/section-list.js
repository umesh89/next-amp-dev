// "use client"
import Link from 'next/link';
import Image from 'next/image';
import TimeInfo from '@/components/common/timeinfo';
import {truncateText} from '@/utils/requestApi';
import isEmpty from '@/utils/isEmpty';
export default function SectionList({title,img,id,anchor,date,isSize,intro}){
	const imgSize = isSize ? 135 : 240;
	const imgHeight = isSize ? 63 : 112;
	const truncate = isEmpty(intro) ? null :  truncateText(intro, 110);

	return(
		<>
			{ <article className="ie-category-news ie-style-borders">
				{ <figure className="post-thumbnail">
					<Link href={anchor} >
						<Image src={img}
						height={imgHeight}
						width={imgSize}
						alt={title}
						loading="lazy"
					
						 />
					</Link>
				</figure> }
				<div className="ie-news-content">
					<h2 className="post-title"><Link href={anchor}>{title}</Link></h2>
					<TimeInfo dateTime={date} />
					{	truncate 
						? <div className='intro'>{truncate}</div>
						: null
					}
				</div>
			</article> }
		</>
	)
}
