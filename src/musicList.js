import React from "react";
import musicList from "./data.js";
class MusicList extends React.Component {
    constructor(props) {
        super(props);
        this.createMusicList = this.createMusicList.bind(this);
    }

    createMusicList(music, key) {
        return (<li
            key={music.id}
            className={this.props.currentTrackIndex === music.id ? "selected" : ""}
            ref={cur => {
                if (this.props.currentTrackIndex === music.id) {
                    this.activeTrack = cur;
                }
            }}
            onClick={() => this.props.selectTrack(music.id)}>
            <img className="image" src={music.image} alt="music"/>
            <div className="title">{music.name}</div>
            <div className="singer">Singer: {music.singers}</div>
        </li>
        )
    }
    render() {
        return (
            <div class="musicList">
                <ul>
                    {musicList.map(this.createMusicList)}
                </ul>
            </div>
        );
    }
}

export default MusicList;