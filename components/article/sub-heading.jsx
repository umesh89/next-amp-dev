export default function SubHeading({ intro }) {
	return (
		<>
			<h2 className="subHeader" dangerouslySetInnerHTML={{ __html: intro }}></h2>
			
		</>
	)
}