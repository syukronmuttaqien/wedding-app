import React from 'react'

// @ts-ignore
import Sound from 'react-sound';

// @ts-ignore
import music from '../music/music.mp3';

type BackgroundMusicProps = {
    isPlaying: boolean
    onLoading?: () => void
    onLoad?: () => void
    onPlaying?: () => void
    onFinishedPlaying?: () => void
}

const BackgroundMusic = (props: BackgroundMusicProps) => {
    const {isPlaying, onLoad, onLoading, onPlaying, onFinishedPlaying} = props;

    return (
        <Sound
            url={music}
            playStatus={isPlaying ? 'PLAYING' : 'STOPPED'}
            playFromPosition={6900 /* in milliseconds */}
            onLoading={onLoading}
            autoLoad={true}
            onLoad={onLoad}
            onPlaying={onPlaying}
            onFinishedPlaying={onFinishedPlaying}
      />
    );
}

export default BackgroundMusic;