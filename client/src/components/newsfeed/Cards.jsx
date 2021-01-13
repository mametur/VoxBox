import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { Box} from "./Card"
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/actions/loginActions'
import { useHistory } from 'react-router-dom'


export const Cards = (props) => {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [updatePost, setUpdatePost] = useState(true)

    const dispatch = useDispatch()
    const history = useHistory()

    const getData = async () => {
        
        fetch("/api/posts")
        .then((response)=>{
           console.log('response', response)
            return response.json()
        })
        .then((data)=>{
            console.log('data', data)
            if(data.auth === false){ 
                history.push('/session_expired')
                dispatch(logOut())
                 return
                }else{
                    setData(data);
                    setFilteredData(data);
                }
        }).catch((err)=>{
            console.log(err)
           
        })
    }

    useEffect(()=>{
        getData();
    }, [props.postFormState, updatePost]);

    useEffect(()=>{
        const filtering = data.filter(item=>{
            const text = props.searchedValue.toUpperCase()
            const title = item.post_city.toUpperCase()
            return title.includes(text);
        })
        setFilteredData(filtering)
     }, [props.searchedValue])


     //console.log(filteredData[0].solved)
    // setData(response);
    return (
        
        <Container fluid className="card-wrap justify-content-center">
            {filteredData.length === 0 ? <div className="spinner-border text-success m-5" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div> :
               filteredData.map(
                   post => {
                       return post.solved === true ? <Box key={post.post_id} post={post} setUpdatePost={setUpdatePost}/> : null ; 
                   }
               )
        }
        </Container>
    )
}
