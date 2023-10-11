import AdDesktopScript from "../ads/adsDesktopScript";

const Footer = ({ads}) => {
	return (
		<footer className="footer " next-page-hide="hide">
			<div className="footer_container">
				<div className="footer_policy">
					<span className="footer_copyright">Copyright © 2023 The Indian Express [P] Ltd. All Rights Reserved</span>
				</div>
			</div>
			{
				ads.isMobile
				? null
				: <AdDesktopScript />
			}

			<style jsx global>
				{`
				.footer {background-color: var(--black-color);padding-top: 20px;padding-bottom: 20px;}
				.footer_container{max-width: var(--fluid-width);}
				.footer_policy{text-align: center;}
				.footer_copyright{color: var(--white-color);}
				`}
			</style>
		</footer>
	);
};

export default Footer;
