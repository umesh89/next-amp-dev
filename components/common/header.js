
import Link from 'next/link';
import Image from "next/image";
import { Nav} from '@/utils/nav';
const Header = ({ads}) => {


  return (
	
	<header className="g-header" next-page-hide="hide">
			<div className="brand-logo">
				<Link className="brand-name" href="/">
					<Image
					src="/images/education-logo.svg"
					width={133}
					height={51}
					alt="Bengali Logo"
					/>
				</Link>
			</div>

			<nav id="navigation">
				<div className="navbar">
					<ul id="menu-education-header" className="exam-nav">
					{Nav && Nav.map((navlinks)=>{
						return <li key={navlinks}><Link href={navlinks.url}>{navlinks.name}</Link></li>
					})}
					</ul>
				</div>
			</nav>
			<style jsx global>{`
			.g-header{margin-bottom:30px;}
			.g-header .brand-logo{margin: 0 auto;margin-bottom:5px;margin-top: 10px;max-width: 1000px;}
			.brand-name{display: block;width: 133px;}

			#navigation{background: #051f57;height: 50px;}
			#navigation .navbar {display: flex; flex-wrap: nowrap; justify-content: space-between; max-width: 1000px; margin: 0 auto;}
			.navbar .exam-nav {align-items: center;scrollbar-width: none;list-style-type: none;display: flex;flex-wrap: nowrap;}
			.navbar .exam-nav li {text-align: center; font-size: 15px; font-weight: 700; font-family: 'Roboto', sans-serif;}
			.navbar .exam-nav li a {color: #f1f1f1;display: block;padding: 10px;line-height: 30px;}
			.adcodetop,.adcode300x250{background-color:#f2f2f2; text-align:center;}
			.adcode300x250{margin-bottom:20px;height:270px;}
			.adcodetop:before,.adcode300x250:before{content: "Advertisement";color: #bdbdbd;font-size: 9px;text-align: center;font-family: Roboto,sans-serif;text-transform: uppercase;display: flex;justify-content: center;padding-bottom: 3px;}
			@media print, screen and (min-width: 768px) {
				.adcodetop{max-width:1000px;margin: 10px auto 0;height:269px;}
				.adcode300x250{max-width: 300px;}
			}
			@media print, screen and (max-width: 767px) {
				#navigation .navbar {overflow-x: auto;padding-right: 0.625rem;padding-left: 15px;}
				.navbar .exam-nav{gap: 10px;}
				.navbar .exam-nav li {white-space: nowrap;}
				.g-header .brand-logo {padding-left: 15px;}
			}
			`}</style>

			{
				ads.isMobile
				? ( <div className='top-ads'><amp-ad width="300" height="250" type="doubleclick" data-slot="/1050432/www.malayalam.indianexpress.com/IEM_AMP_OTH_AS_ATF_300x250" data-multi-size="300x250" data-loading-strategy="prefer-viewability-over-views" data-multi-size-validation="false" data-enable-refresh="30"></amp-ad></div> )
				: <div className='adcodetop'><div id='div-gpt-ad-651545d63bcdd-0' className=''></div></div>
			}

		</header>

  );
};

export default Header;
