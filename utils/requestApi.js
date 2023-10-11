import fetchData from "./dataFetching";
import {API_URL,SINGLEPOSTMETA} from '@/config/constants';

export const getPosts = async ( query = [] ) => {
	const data = await fetchData(`${API_URL}/posts`);
	return data;
}

export const getArticlePosts = async (storyid) =>{
	const data = await fetchData(`${API_URL}/posts/${storyid}`);
	return data;
}

export const getCommonPosts = async (endPoint) =>{
	const data = await fetchData(`${API_URL}${endPoint}`);
	return data;
}

export const getCanonicalPath = (asPath)=>{
	return asPath;
}
export const getMenu = async(url) => {
	let data = await fetchData(url);
	return data;
}

export const getMetaTags = (arr)=>{
	return arr;
}

export const truncateText = (text, maxLength)=>{
	if (text.length <= maxLength) {
	  return text;
	}
	return text.slice(0, maxLength) + '...';
  }
export const UrlStructure = (achors) =>{
	const url = achors.replace('https://education.indianexpress.com/','');
	return url;
}

export const signlePostMetaTags = async (postID) =>{
	const data = await fetchData(`${SINGLEPOSTMETA}${postID}`);
	return data;
}