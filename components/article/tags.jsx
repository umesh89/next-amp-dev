import React from 'react';
import Link from 'next/link';
import isEmpty from '@/utils/isEmpty';

export default function Tags({tags}) {
	if(isEmpty(tags)) {
		return
	}

	return (
		<>
			<ul className="tag">
				<li className="tags-heading">More Stories on</li>
				{
					tags.map((tag, Index) => (
						<li key={Index}>
							<Link href={`/about/${tag.slug}`}>
								{tag.name}
							</Link>
						</li>)
					)
				}
			</ul>

			<style jsx global>{`
				.tag{ list-style-type:none; display:flex; flex-wrap:wrap; margin-bottom:30px}
				.tag li{padding: 5px 16px; background-color: #f2f2f2; margin-bottom: 8px; border-radius: 8px; margin-right:18px; line-height:22px; font-size:12px; color: #000; }
				.tag li.tags-heading{color: #e70602;background:none;padding-left:0;margin-right:0;font-size:12px;text-transform: uppercase;font-weight: 700;}
				.tag li a{color:inherit}
			`}</style>
		</>
	);
}
