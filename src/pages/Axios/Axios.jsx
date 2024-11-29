
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import PostCard from "../../component/PostCard/PostCard.jsx";
import { Box } from '@mui/material';
import instance from "../../services/AxiosOrder.jsx";
export default function Axios() {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        instance.get('/posts')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setData(response.data);
                setLoader(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const postData = () => {
        instance.post('/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Axios</h1>
            {loader ?
                <Box sx={{display: 'flex' , justifyContent: 'center'}}>
                    <h1>Loading...</h1>
                </Box>
                :
                <Box sx={{display: 'flex' , flexWrap: 'wrap'}}>
                    {
                        data.map((val, index)=> (
                            <PostCard title={val.title} id={val.id} description={val.body}/>
                        ))
                    }
                </Box>
            }

            <br/>
            <Button variant="contained" onClick={()=> postData()}>Axios Post</Button>
        </div>
    )
}
