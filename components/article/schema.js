export default function Schema({data}){
	 var intro = data.introduction.replace(/<[^>]*>/g, '');
	 var articleBody = data.body.replace(/<[^>]*>/g, '');

	const schemaMarkup = {
		"@context": "https://schema.org",
		"@type": "NewsArticle",
		"isAccessibleForFree": true,
		"inLanguage": "en",
		"url": data.link,
		 "articleSection": "Education News",
		 "headline": data.title,
		 "description":intro.replace(/\n/g, ''),
		 "articleBody":articleBody.replace(/\n/g, ''),
		 "datePublished": data.post_date,
		 "dateModified": data.post_modified,
		 "image": data.images[0].mediumImage,
		 "copyrightYear": "2023",
		// "keywords": [
		//    [
		// 	  "upcoming government exams 2023",
		// 	  " upcoming government exams",
		// 	  " upcoming government exams 2023-24",
		// 	  " upcoming government exams for law graduates"
		//    ]
		// ],
		// "speakable": {
		//    "@type": "SpeakableSpecification",
		//    "xpath": [
		// 	  "Upcoming Government Exams 2023: Check Latest Updates on UPSC IAS, NDA, CDS, RBI, IBPS PO and other Government Exams",
		// 	  "Stay up-to-date on the latest information about upcoming government exams in India for 2023-2024, including UPSC IAS, NDA, CDS, RBI, IBPS PO, and other government exams. Get exam notifications, dates, syllabus, and other important details."
		//    ]
		// },
		// "mainEntityOfPage": {
		//    "@type": "WebPage",
		//    "@id": "https://education.indianexpress.com/news/upcoming-government-exams-2023-check-latest-updates-on-upsc-ias-nda-cds-rbi-ibps-po-and-other-government-exams-2456120"
		// },
		// "author": [
		//    {
		// 	  "@type": "Person",
		// 	  "name": "Navya Singh",
		// 	  "url": "https://education.indianexpress.com/author/navya-singh/"
		//    }
		// ],
		// "contentLocation": {
		//    "@type": "AdministrativeArea",
		//    "name": "Noida, India"
		// },
		// "publisher": {
		//    "@type": "NewsMediaOrganization",
		//    "name": "",
		//    "url": "https://education.indianexpress.com/",
		//    "foundingDate": "1937-11-15",
		//    "ethicsPolicy": "https://indianexpress.com/privacy-policy/",
		//    "SameAs": [],
		//    "logo": {
		// 	  "@type": "ImageObject",
		// 	  "url": "",
		// 	  "width": "600",
		// 	  "height": "60"
		//    }
		// },
		// "associatedMedia": {
		//    "@type": "ImageObject",
		//    "url": "https://education.indianexpress.com/wp-content/uploads/2023/09/Upcoming-Exams-File-Image.jpg",
		//    "caption": "The upcoming government exams in 2023 are a great opportunity for those who are looking for a career in the public sector. (File Image)",
		//    "description": "Upcoming Government Exams 2023",
		//    "width": 1200,
		//    "height": 675
		// },
		// "hasPart": {
		//    "@type": "WebPageElement",
		//    "cssSelector": ".meteredContent",
		//    "isAccessibleForFree": true
		// },
		// "isPartOf": [],
		// "video": [],
		// "audio": []
	 }
	const schemaMarkupString = JSON.stringify(schemaMarkup)
  .replace(/</g, '\\u003c') // Escape '<' characters
  .replace(/>/g, '\\u003e'); // Escape '>' characters
  

	return(
		<>
			 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkupString }}
      />
		</>
	)
}