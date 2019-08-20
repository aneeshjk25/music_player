import React from 'react'
import { Song as SongModel } from './models'
import { Col, Card , Avatar, Icon} from 'antd';
import Axios from 'axios';
import EditComment from './EditComment';
import Comments from './Comments';

type SongProps = {
    song: SongModel
}

class Song extends React.Component<SongProps, { song: SongModel, showAddComment: boolean }> {
    constructor(props: SongProps){
        super(props);
        this.state = {
            song : props.song,
            showAddComment: false
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
                .catch(() => {
                    alert('Failed to like to song!')
                })
            }else {
                this.setState({song: Object.assign(this.state.song, { liked: false })})
            }
        }
    }
    toggleAddComment = () =>  {
        this.setState({ showAddComment: !this.state.showAddComment })
    }
    onComment = (comment:string) => {
        const formData = new FormData()
        formData.append('id', this.state.song.id)
        formData.append('type', 'song')
        formData.append('message', comment)

        return Axios.post('/interact/comment?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8', formData)
        .then(() => {
            const newComments : string[]= [];
            if(this.state.song.commentList){
                newComments.push(...this.state.song.commentList, comment)
            }else {
                newComments.push(comment)
            }
            this.setState(
                {
                    song: Object.assign(this.state.song, { commentList: newComments })
                }
            )
            return comment
        })

    }

    render() {
        return (
        <Col span={8}>
        <Card
            actions={[
                <Icon type='like' 
                    theme={this.state.song.liked ? 'filled' : 'outlined' }
                    onClick={this.likeSong} />,
                <Icon type='edit' 
                    theme={this.state.showAddComment? 'filled' : 'outlined' }
                    onClick={this.toggleAddComment}
                />
            ]}
        >
            <Card.Meta
                style={{marginBottom : '10px'}}
                avatar={<Avatar src={this.state.song.cover_image_path} />}
                title={this.state.song.name}
                description={this.state.song.artist.name}
                >
            </Card.Meta>
            <audio controls>
                    <source src={this.state.song.music_file_path} />
            </audio>,
        </Card>
        {this.state.song.commentList ? <Comments comments={this.state.song.commentList} /> : ''}
        {this.state.showAddComment ? <EditComment onComment={this.onComment}/> : ''}
    </ Col>)
    }
}
export default Song
