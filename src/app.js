import React from "react";
import Button from 'react-bootstrap/Button';
import Lyric from './lyric';
import musics from './data';
import Controller from './controller';
import MusicList from './musicList';

class MusicApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: true,
            currentTrack: 1,
            loadMusic: true,
            currentTime: 0
        };
        this.onClicked = this.onClicked.bind(this);
        this.selectTrackNumber = this.selectTrackNumber.bind(this);
        this.updateTrackTime = this.updateTrackTime.bind(this);
    }
    onClicked(e) {
        let currentTrackNum = this.state.currentTrack;
        switch (e.target.id) {
            /*
            case "play":
                if (currentTrackNum === 0) {
                    currentTrackNum = 1;
                }
                this.setState({
                    paused: false,
                    currentTrack: currentTrackNum
                }, this.playAudio);
                break;
            case "pause":
                this.setState({ paused: true }, this.pauseAudio);
                break;
            */
            case "prev":
                if (currentTrackNum > 1) {
                    this.setState({
                        paused: false,
                        currentTrack: currentTrackNum - 1,
                    }, this.playAudio)
                }
                break;
            case "next":
                if (currentTrackNum <= musics.length - 1) {
                    this.setState({
                        paused: false,
                        currentTrack: currentTrackNum + 1,
                    }, this.playAudio);
                }
                break;
            default:
                break;
        }
    }

    selectTrackNumber(trackId) {
        this.setState({
            paused: false,
            currentTrack: trackId,
        }, this.playAudio);
    }

    playAudio() {
        this.music.play();
    }

    pauseAudio() {
        this.music.pause();
    }

    updateTrackTime(track){
        let audio = document.getElementById("currentMusic");
        this.setState({currentTime: audio.currentTime});
    }
    
    render() {
        return (
            <div className="musicApp">
                <div className="buttons">
                    <Button className = {this.state.loadMusic ? "selectedButton" : "button"} variant="primary" onClick={() => {this.setState({loadMusic: true})}}>Load Music</Button>
                    <Button className= {!this.state.loadMusic ? "selectedButton" : "button"} variant="primary" onClick={() => {this.setState({loadMusic: false})}}>Load Lyric</Button>
                </div>
                
                {this.state.loadMusic && <MusicList
                    currentTrackIndex={this.state.currentTrack}
                    selectTrack={this.selectTrackNumber}
                />}
                {!this.state.loadMusic && <Lyric music={musics[this.state.currentTrack-1]} currentTime={this.state.currentTime} />}
                <Controller onClick={this.onClicked} paused={this.state.paused} />
                <audio controls='controls' id="currentMusic" ref={(audio) => { this.music = audio }} src={musics[this.state.currentTrack-1].src} onTimeUpdate={this.updateTrackTime}
                preload="auto"/>
        </div>
        );
    }
}

export default MusicApp;
