import Link from "next/link"
import Image from "next/image"
import TimeDetails from "./common/time-details"
export default function WebStoriesItem({title,anchor,imgSrc,timeStamp}){
	return(				
		<>
			<article className="webstory-cols">
				<figure className="webstory-thumb">
					<Link href={anchor} >
						<Image src={imgSrc}
						height={184}
						width={310}
						alt={title} />
					</Link>
				</figure>
				<div className="entry-wrapper">
					<div className="entry-title">{title}</div>
					<TimeDetails timeStamp={timeStamp} />
				</div>
			</article>
		</>

	)
}