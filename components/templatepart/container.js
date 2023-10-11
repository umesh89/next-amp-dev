import PropTypes from 'prop-types';


export default function Container({ children, optClass='default' }) {
	return (
		<div className={`${optClass} o-container`}>
			
				{children}
		
		</div>
	)
}
Container.propTypes = {
	optClass: PropTypes.string
}

