import React from 'react'
import { Song as SongModel } from './models'
import { Col, Card , Avatar, Icon} from 'antd';
import Axios from 'axios';

type SongProps = {
    song: SongModel
}

class Song extends React.Component<SongProps, { song: SongModel }> {
    constructor(props: SongProps){
        super(props);
        this.state = {
            song : props.song
        }
    }
    likeSong = () => {
        {
            const formData = new FormData()
            formData.append('id', this.state.song.id)
            if(!this.state.song.liked) {
                Axios.post('/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8', formData)
                .then(() => {
                    this.setState({song: Object.assign(this.state.song, { liked: true})})
                })
            }else {
                this.setState({song: Object.assign(this.state.song, { liked: false })})
            }
        }
    }

    render() {
        return (
        <Col span={8}>
        <Card
            actions={[
                <Icon type='like' 
                    theme={this.state.song.liked ? 'filled' : 'outlined' }
                    onClick={this.likeSong} />,
                <Icon type='edit' />
            ]}
        >
            <Card.Meta 
                avatar={<Avatar src={this.state.song.cover_image_path} />}
                title={this.state.song.name}
                description={this.state.song.artist.name}
                >
            </Card.Meta>
            <audio controls>
                    <source src={this.state.song.music_file_path} />
            </audio>,
        </Card>
    </ Col>)
    }
}
export default Song
