import React, { Component } from 'recat';


class MoviePlayer extends Component {
    render() {
        return (
            <div className='moviePlayer'>
                <VideoPlayer />
                <MvPlayerList />

            </div>
        )
    }
}

export { MoviePlayer };