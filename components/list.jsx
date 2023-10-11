import WebStoriesItem from '@/components/webstories-item';
import HOC from './hoc';

 const List = ( props ) => {
	const myList = props.list[0].items;
	return myList.map((val) => {
			return <WebStoriesItem 
				title={val.title}
				imgSrc={val.images[0].mediumImage}
				anchor={val.post_url}
				timeStamp={val.post_date}
				key ={val.id}
				
				/>
		})
	
};
export default HOC(List);