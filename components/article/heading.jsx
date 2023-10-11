import PropTypes from 'prop-types';
export default function Heading({title, optionClass='default'}){
	return (
		<>	
			<h1 className={`seoHeading ${optionClass}`} dangerouslySetInnerHTML={{__html:title}}></h1>
			
		</>
	)
}
Heading.propTypes = {
	optionClass: PropTypes.string
  };