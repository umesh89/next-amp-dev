import Link from "next/link"
export default function WrittenBy({ author,achor }) {
	return (
		<>
			<div className="writtern">
				Written by <span> <Link href={`https://education.indianexpress.com/author/${achor}`}> {author}</Link></span> 
			</div>
			<style jsx global>{`
				.writtern{ font-size:12px; color:#555; line-height:24px; font-weight: 400;}
				.writtern a {color: #000; text-transform: capitalize;font-weight: 700; text-decoration: underline; }
			`}
			</style>	
		</>
	)
}
