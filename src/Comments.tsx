import React from 'react'
import { List } from 'antd';

interface Props {
    comments: string[]
}
const Comments: React.FunctionComponent<Props> = (props) => {
    return (
        <List
        size="large"
        bordered
        dataSource={props.comments}
        renderItem={(comment:string) => <List.Item>{comment}</List.Item>}
      />
    )
}
export default Comments
