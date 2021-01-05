import React, {useState} from 'react'
import { Cards } from './Cards'
import { NewsfeedHeader } from './NewsfeedHeader'
import { SearchBar } from './SearchBar'

export const Newsfeed = () => {

    const [searchedValue, setSearchedValue] = useState();

    return (
        <div>
            <NewsfeedHeader />
            <SearchBar searching={setSearchedValue}/>
            <Cards searchedValue={searchedValue}/>
        </div>
    )
}
