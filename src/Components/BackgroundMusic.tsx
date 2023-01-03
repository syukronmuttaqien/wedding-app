import React from 'react'
import { Fade } from 'react-awesome-reveal'

// @ts-ignore
import Sound from 'react-sound'

// @ts-ignore
import music from '../musics/music.mp3'
import vinyl from '../images/vinylblack.png'

type BackgroundMusicProps = {
    isPlaying: boolean
    onFinishedPlaying: () => void
}

enum MusicStatus {
    PLAYING,
    STOPPED
}

type MusicTriggerProps = {
    isPlaying: boolean
    onChangeStatus: (status: MusicStatus) => void
}

const BackgroundMusic = (props: BackgroundMusicProps) => {
    const {isPlaying, onFinishedPlaying} = props;
    return (
        <Sound
            url={music}
            playStatus={isPlaying ? 'PLAYING' : 'STOPPED'}
            playFromPosition={6800 /* in milliseconds */}
            onLoading={() => {}}
            onPlaying={() => {}}
            onFinishedPlaying={onFinishedPlaying}
      />
    );
}

export const MusicTrigger = (props: MusicTriggerProps) => {
    const {isPlaying, onChangeStatus} = props

    const status = isPlaying ? MusicStatus.STOPPED : MusicStatus.PLAYING

    return (
        
        <div className='music-trigger'>
             <Fade triggerOnce>
                <img src={vinyl} className={isPlaying ? 'music-trigger-inside-play' : 'music-trigger-inside'} onClick={() => onChangeStatus(status)} alt="vinyl" />
            </Fade>
        </div>
    )
}

export default React.memo(BackgroundMusic)