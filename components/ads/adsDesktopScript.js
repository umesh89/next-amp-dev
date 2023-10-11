
export default function AdDesktopScript(){
	return (
		<>
		 <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
			<script async dangerouslySetInnerHTML={{
				__html: `window.googletag = window.googletag || {cmd: []};
				`}}
			>
			</script>
			<script async dangerouslySetInnerHTML={{
			__html:`googletag.cmd.push(function() {

					googletag.defineSlot('/1050432/www.Education.indianexpress.com\/IEE__ROS_NEWS_AS_ATF_728x90', [[970, 250], 'fluid', [970, 90], [728, 90]], 'div-gpt-ad-651545d63bcdd-0').addService(googletag.pubads());
					googletag.defineSlot('/1050432/www.Education.indianexpress.com\/IEE__ROS_NEWS_AS_SKIN_LHS', [[120,600],[160,600]], 'div-gpt-ad-6515541b2504b-0').addService(googletag.pubads());
					googletag.defineSlot('/1050432/www.Education.indianexpress.com\/IEE__ROS_NEWS_AS_SKIN_RHS', [[120,600],[160,600]], 'div-gpt-ad-6515541b254af-0').addService(googletag.pubads());

					googletag.defineSlot('/1050432/www.Education.indianexpress.com\/IEE__ROS_NEWS_AS_ATF_300x250', [[300,250]], 'div-gpt-ad-651545d64d244-0').addService(googletag.pubads());

					googletag.pubads().enableSingleRequest();
					googletag.enableServices();

					if ( document.getElementById( 'div-gpt-ad-651545d63bcdd-0' ) ) {
						googletag.display( 'div-gpt-ad-651545d63bcdd-0' );
					}
					if ( document.getElementById( 'div-gpt-ad-6515541b2504b-0' ) ) {
						googletag.display( 'div-gpt-ad-6515541b2504b-0' );
					}
					if ( document.getElementById( 'div-gpt-ad-6515541b254af-0' ) ) {
						googletag.display( 'div-gpt-ad-6515541b254af-0' );
					}
					if ( document.getElementById( 'div-gpt-ad-651545d64d244-0' ) ) {
						googletag.display( 'div-gpt-ad-651545d64d244-0' );
					}
				});
				`
			}} >
			</script>
		</>
	);
}
