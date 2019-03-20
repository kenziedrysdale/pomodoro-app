import React from "react";

class Timer extends React.Component {

	render() {
		return (
			<div>
			    <h3>time left: {this.props.time}</h3>

			</div>
			);
	}

};

export default Timer;