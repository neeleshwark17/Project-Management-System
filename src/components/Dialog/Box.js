import React, { Component } from "react";

class Boxcard extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color
          }}s
        />
        
        <button onClick={this.props.removeBox}>X</button>
      </div>
    );
  }
}
export default Boxcard ;
