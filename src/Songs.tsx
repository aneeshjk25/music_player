import React from 'react'
import { Song as SongModel } from './models'
import { Row } from 'antd';
import Song from './Song'

type SongsProps = {
    songs: SongModel[]
}
const Songs = ({songs}: SongsProps) => {
    return <Row>{songs.map((song) => {
        return <Song song={song} key={song.id} />
    })}</ Row>
}
export default Songs