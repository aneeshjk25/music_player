import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import axios from 'axios'
import { Song } from './models'
import './App.css';
import Songs from './Songs';

const App: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    axios.get<Song[]>('/song/trending').then(({data}) => {
      setSongs(data)
    })
  }, [])

  return (
    <Layout>
      <Layout.Content>
        <Songs songs={songs}></Songs>
      </Layout.Content>
    </Layout>
  )
}

export default App;
