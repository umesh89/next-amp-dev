import React from "react";

class TimeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publicationDate: new Date(props.timeStamp), // Replace with your publication date
    };
  }

  getDurationInWeeks = (publicationDate) => {
   // const currentDate = new Date();
    const oneMonthLater = new Date(publicationDate);
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

    const millisecondsInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    // Calculate the time difference in milliseconds
    const timeDifference = oneMonthLater - publicationDate;
	
    // Calculate the number of days and weeks
    const daysDifference = Math.ceil(timeDifference / millisecondsInDay);
    const weeksDifference = Math.floor(daysDifference / 7);
		if(weeksDifference > 4){
			//return weeksDifference +1
		}

    return weeksDifference;
  };

  getMonthsAgo = (publicationDate) => {
    const currentDate = new Date();
    const publicationMonth = publicationDate.getMonth();
    const currentMonth = currentDate.getMonth();
    const publicationYear = publicationDate.getFullYear();
    const currentYear = currentDate.getFullYear();
    const monthsAgo = (currentYear - publicationYear) * 12 + (currentMonth - publicationMonth);
	return monthsAgo;

  };

  render() {
    const { publicationDate } = this.state;
    const weeksDuration = this.getDurationInWeeks(publicationDate);
	//publicationDate.toDateString()
    const monthsAgo = this.getMonthsAgo(publicationDate);
		const renderHTMLTimes = weeksDuration <= 3 
								? weeksDuration +" weeks ago" 
								: monthsAgo +" month ago"
    return <>
	
	 <div className="webTimes">{renderHTMLTimes}</div>
	</>
  }
}

export default TimeDetails;
