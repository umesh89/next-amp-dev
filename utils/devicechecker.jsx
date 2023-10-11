import React, { Component } from 'react';
import MobileDetect from "mobile-detect";

export class DeviceChecker extends Component {
	constructor() {
		super();
		this.state = {
			isMobile: false,
			isDesktop: false,
		}
	}

	checkWindowResoulation() {
		const currentScreen = window.innerWidth;
		const isMobile = currentScreen < 720;
		const isDesktop = ! isMobile;

		this.setState({
			isMobile,
			isDesktop,
		});
	}

	componentDidMount() {
		this.checkWindowResoulation();
		window.addEventListener( 'resize', this.checkWindowResoulation.bind( this ) );
	}

	render() {
		const { isDevice } = this.props;

		const {
			isMobile,
			isDesktop,
		} = this.state;

		if ( 
			( 'mobile' === isDevice && isMobile ) ||
			( 'desktop' === isDevice && isDesktop )
		) {
			return <>{ this.props.children}</>
		}

		return null;
	}
}

export const isDeviceMobile = ( context ) => {
	const userAgent = context.req.headers['user-agent'];
	const md = new MobileDetect( userAgent );

	return Boolean(md.mobile());
};

export default DeviceChecker


/*
 mobile
 384x216 -m
 675*380 - d

 if desktop = 240x135 else mobile = 112 x 63

 112 * 63

 */