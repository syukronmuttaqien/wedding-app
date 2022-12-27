import React from 'react'

// @ts-ignore
import Sound from 'react-sound'

// @ts-ignore
import music from '../musics/music.mp3'

type BackgroundMusicProps = {
    isPlaying: boolean
}

const BackgroundMusic = (props: BackgroundMusicProps) => {
    const {isPlaying} = props;
    return (
        <Sound
            url={music}
            playStatus={isPlaying ? 'PLAYING' : 'STOPPED'}
            playFromPosition={6800 /* in milliseconds */}
            onLoading={() => {}}
            onPlaying={() => {}}
            onFinishedPlaying={() => {}}
      />
    );
}

export default React.memo(BackgroundMusic)