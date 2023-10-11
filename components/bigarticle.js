import Link from 'next/link';
import Image from 'next/image';

export default function Bigarticle({ title, img,anchor,isSize}) {	
	const imgSize = isSize ? 384 : 675;
	const imgHeight = isSize ? 216 : 380;
	return (
		<>
			<div className="big-story">
				<Link href={anchor} >
					<figure className="big-img">
						<Image src={img}
							height={imgHeight}
							width={imgSize}
							alt={title}
						/>
						<figcaption className="post-title" dangerouslySetInnerHTML={{__html:title}}></figcaption>
					</figure>
				</Link>

			</div>
			<style jsx global>{`
				.big-story{ position:relative;margin-bottom:10px;				}
				.big-story figcaption{position:absolute;left:0px;width:100%;bottom:10px;font-size: 20px;line-height:24px;font-weight: 600;color: #fff;z-index: 99;padding:0 10px}
				.big-img{position: relative;z-index: 1;display:block;}
				.big-img::after {content: "";position: absolute;z-index:2;left: 0;top: 0;width: 100%;height: 100%;
				background-image: linear-gradient(180deg,transparent,transparent,#000);}
				.big-story a{color:#fff; display:block}
			`}</style>
		</>
	)
}
