const corsOptions = {
	headers: { 
		accept:'application/json' 
		},
	timeout:10000
	};
async function fetchData(url) {
	try{
		const response = await fetch(url,{corsOptions});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		  }
		  const data = await response.json();
		  return data;
	}catch(error){
		console.log(error)
	}
}
export default fetchData;
  