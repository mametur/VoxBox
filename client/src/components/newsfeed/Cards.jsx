import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { Box} from "./Card"


export const Cards = (props) => {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const getData = async () => {
        
        fetch("/api/posts")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setData(data);
            setFilteredData(data);
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData();
    }, [props.postFormState]);

    useEffect(()=>{
        const filtering = data.filter(item=>{
            const text = props.searchedValue.toUpperCase()
            const title = item.post_city.toUpperCase()
            return title.includes(text);
        })
        setFilteredData(filtering)
     }, [props.searchedValue])

    // setData(response);
    return (
        
        <Container fluid className="card-wrap justify-content-center">
            {filteredData.length === 0 ? <div className="spinner-border text-success m-5" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div> :
               filteredData.map(
                   post => <Box key={post.post_id} post={post} />
               )
        }
        </Container>
    )
}
