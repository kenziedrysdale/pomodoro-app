import React from "react";
import Button from 'react-bootstrap/Button';


class Input extends React.Component {
	render() {
		return (
			<div>
        <input
          class = "btn btn-success"
          type="button"
          value="startWorking"
          onClick={this.props.startPomodoro}
        />
                <input
          class="btn btn-warning"
          type="button"
          value="Take a short Break"
          onClick={this.props.startShortBreak}
        />

          <input
          class = "btn btn-primary"
          type="button"
          value="Take a long Break"
          onClick={this.props.startLongBreak}
        />


			</div>
			);
	}

};

export default Input;