import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { Box} from "./Card"
import Data from "./data.json"


export const Cards = () => {

    const [data, setData] = useState(Data)

    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setData(data))
    }

    useEffect(()=>{
        getData();
    }, []);

    console.log(data)
    // setData(response);
    return (
        <Container className="card-wrap">
           {
               data.map(
                   post => <Box post={post} />
               )
           }
        </Container>
    )
}
