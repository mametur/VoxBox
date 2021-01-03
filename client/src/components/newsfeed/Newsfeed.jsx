import React from 'react'
import { Cards } from './Cards'
import { NewsfeedHeader } from './NewsfeedHeader'
import { SearchBar } from './SearchBar'

export const Newsfeed = () => {
    return (
        <div>
            <NewsfeedHeader />
            <SearchBar />
            <Cards />
        </div>
    )
}
