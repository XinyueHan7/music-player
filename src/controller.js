import React from "react";
class Controller extends React.Component {
    render() {
        return (
            <div className="controller">
                <i id="prev" className="fa fa-fw fa-fast-backward" onClick={this.props.onClick}
                />
                {this.props.paused && <i id="play" className="fa fa-fw fa-play" onClick={this.props.onClick}
                />}
                {!this.props.paused && <i id="pause" className="fa fa-fw fa-pause" onClick={this.props.onClick}
                />}
                <i id="next" className="fa fa-fw fa-fast-forward" onClick={this.props.onClick}
                />
            </div>
        )
    }
}
export default Controller;