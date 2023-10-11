export const API_BASE_URL = () => {
  if(process.env.NODE_ENV === 'development'){
     return  <h1>You are on development mode</h1>
  }else{
    return <h1>You are on Production mode</h1>
  }
} 

export const ABOUT = 'About';
export const API_URL = 'https://education.indianexpress.com/wp-json/wp/v2';
export const MAX_RETRIES = 3;
export const TIMEOUT = 2000;
export const SINGLEPOSTMETA = 'https://indianexpress-jansatta-develop.go-vip.net/seo-meta-data/singlepost/'

