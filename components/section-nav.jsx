import Link from "next/link";
import isEmpty from "@/utils/isEmpty";

export default function SectionNav(props) {
	return(
		<>
		<nav className="o-breadcrumb">
			<ol className="ie-breadcrumb">
				<li>
					<Link href="/" title="Home">
						<span>Home</span>
					</Link>
				</li>
				{
				isEmpty(props.pgCatagory)
					? null 
					: (<li>
						<Link href="/about" title={props.categorie} >
							<span> {props.pgCatagory} </span>
						</Link>
					</li>)
				}
				<li>
					<span>{props.pgName}</span>
				</li>
			
			</ol>
		</nav>
		</>
	)
}
