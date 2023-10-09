import React from 'react'
import style from './video.module.css'

export default function Video() {
    return (
        <iframe
            title='video'
            className={style.video}
            src="https://player-vz-9060ea54-8bf.tv.pandavideo.com.br/embed/?v=066f01ca-6df6-46d7-be82-4854448dfee7"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowFullScreen={true}
            allowTransparency={true}
            fetchpriority="high"
        />
    )
}
