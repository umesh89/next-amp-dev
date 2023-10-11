
import Link from 'next/link';
import Image from 'next/image';
import isEmpty from '@/utils/isEmpty';
import {UrlStructure} from '@/utils/requestApi'


export default function LatestNews ({newsData}) {
	const data = newsData.list[0].items;
	const renderLatestNews = data.map((val)=>{
			const cleanURL = UrlStructure(val.post_url)
		return <div className='ie-latest-news' key={val.id}>
			<Link 
				href={`/${cleanURL}`}
				aria-label={val.title} 
				className='ie-latest-news__item'
			>
			{
			!isEmpty(val.images[1].thumbImage)
				? <figure className="lates-news-thumbnail">
					<Image 
						src={val.images[1].thumbImage} 
						width={112} height={63}
						title={val.title}
						loading="lazy"
					/>
			 	 </figure>
			: null	
		}
			<div className='lates-news-desc'>{val.title}</div>
		</Link> 
	</div> 
	})
  return (
    <>
		<div className='ie-latest-news__title'>Latest News</div>
		{renderLatestNews}
	</>
  );
}

