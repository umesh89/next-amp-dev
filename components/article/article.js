import React from 'react';
import TimeInfo from '../common/timeinfo';
import Heading from './heading';
import SubHeading from './sub-heading';
import WrittenBy from './writtenby'
import Image from 'next/image';
import Tags from './tags';
import isEmpty from '@/utils/isEmpty';

function Article({ data,isSize }) {
	const imgPath = data.images[0].mediumImage;
	const imgSize = isSize ? 384 : 675;
	const imgHeight = isSize ? 216 : 380;
	const authors = data.content_writer[0].name;
	const authorLink = data.content_writer[0].slug;
	
	return (
		<>
			<Heading title={data.title} />
			<SubHeading  intro={data.introduction} />			
			<WrittenBy author={authors} achor={authorLink} />			
			 
			<TimeInfo  dateTime={data.post_date} optionalClass='size'/> 

			{
				!isEmpty(data.images[0].mediumImage)
					? <figure className="article-img">
						<Image
							src={imgPath}
							title={data.title}
							alt={data.title}
							width={imgSize}
							height={imgHeight}
						/>
					</figure>
					: null
			}
			<div className="caption">{data.images[0].captionText}</div>
			<div dangerouslySetInnerHTML={{ __html: data.body }} className="o-post-content"></div>
			<Tags tags={data.tags}/>
			<amp-analytics type="googleanalytics" id="analytics1">
				<script type="application/json"  dangerouslySetInnerHTML={
				{
				__html: `{
					"vars": {
						"account": "UA-1403607-77"
					},
					"extraUrlParams": null,
					"triggers": {
						"trackPageview": {                                                      
							"on": "visible",
							"request": "pageview",
							"vars": {
								"title": "${data.title.rendered}",
								"ampdocUrl": "CANONICAL_URL"
							}
						}
					}
				}`                                     
				}
				} >
				</script>
			</amp-analytics>
		</>
	);
}

export default Article;
