import React, { useEffect, useContext } from 'react'
import Layout from '../component/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'
import VideoGrid from '../component/VideoGrid/VideoGrid'
import VideoGridItem from '../component/VideoGridItem/VideoGridItem'

const Top = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchPopularData().then((res) => {
            console.log('data', res)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
    })
    return (
        <Layout>
            <VideoGrid>
                {
                    globalState.popular && globalState.popular.map((popular) => {
                        return (
                            <VideoGridItem
                              id={popular.id}
                              key={popular.id}
                              src={popular.snippet.thumbnails.standard.url}
                              title={popular.snippet.title} />
                        )
                    })
                }
            </VideoGrid>
        </Layout>
    )
}

export default Top