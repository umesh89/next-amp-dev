
import PhotosItem from "./photositem";
import {UrlStructure } from '@/utils/requestApi';

const PhotosListing = ({ myList }) => {
	

//
	return (
		<>
		<div className="is-style-card">
		{
			myList.map((val) => {
				const anchor = UrlStructure(val.post_url);
				return <PhotosItem 
					title={val.title}
					imgSrc={val.images[0].mediumImage}
					anchor={anchor}
					timeStamp={val.post_date}
					key ={val.id}
				/>
			})
		}
		</div>
		<style jsx global>{`
		.is-style-card{display:flex;flex-wrap: wrap;justify-content: space-between;}
		.is-card-item {border: 1px solid #e2e2e2;border-radius:2px;display: flex;flex-direction: column;padding: 6px;margin-bottom:20px;}
		.is-style-card .post-thumbnail{margin-bottom:6px;}
		.is-style-card .photo-title {color: #000;font-size:16px;line-height: 20px;font-weight: 700;margin-bottom: 10px;}
		@media print, screen and (min-width: 768px) {
			.is-card-item {width: calc(50% - 10px);}
			.is-style-card .post-thumbnail{max-height:178px;overflow:hidden;}
		}
		`}</style>
		</>
		
	)
};

export default PhotosListing;