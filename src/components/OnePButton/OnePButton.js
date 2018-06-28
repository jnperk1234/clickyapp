import React from "react";

class OnePButton extends React.Component {
    state = {
        id: this.props.id,
        clicked: false
    };

    render() {
        return (
            <div className="onepiece-button float-left" key={this.props.id} >
                <img className = "onepiece-img" id={this.props.id} alt={"op" + this.props.id} src= {"assets/img/op" + this.props.id + ".jpg"} onClick={this.props.clickOP}/>
            </div>
            
        );
    }
};

export default OnePButton