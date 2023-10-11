import {API_URL} from '@/config/constants'
export async function getCommonServerSideProps() {
	const response = await fetch(`${API_URL}/category/news/0/5`,{ next: { revalidate:300 }});
	const latestNewsData =  await response.json();  
	return {
	  props: { latestNewsData},
	};
  }