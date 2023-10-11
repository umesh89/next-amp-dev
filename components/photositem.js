import Link from 'next/link';
import Image from 'next/image';
import TimeInfo from './common/timeinfo';

export default function PhotosItem({imgSrc,anchor,title,timeStamp}){
	return(
		<> 
			<article className="is-card-item">
				<figure className='post-thumbnail'>
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
				<Link href={anchor}><h2 className='photo-title '>{title}</h2></Link>
				<TimeInfo dateTime={timeStamp} />
			</div>
			</article>
			
		</>
	)
}
