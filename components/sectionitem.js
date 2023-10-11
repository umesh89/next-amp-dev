// "use client"
import Link from 'next/link';
import Image from 'next/image';
import TimeInfo from './common/timeinfo';

export default function SectionItem({imgSrc,anchor,title,timeStamp}){
	return(
		<>
			<article className="ie-article-item">
				<figure className="card-thumbnail">
					<Link href={anchor}>
						<Image src={imgSrc}
						height={184}
						width={310}
						alt={title}
						title={title}
						/>
					</Link>
				</figure>
				<div className="ie-desc">
					<Link href={anchor} ><h2 className='article-title'>{title}</h2></Link>
					<div className='time-meta'> Updated : <TimeInfo dateTime={timeStamp} /></div>
				</div>
			</article>
		</>
	)
}
