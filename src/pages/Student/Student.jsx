import { Box} from "@mui/material";
import StudentCard from "../../component/StudentCard/StudentCard.jsx";
import AddStudent from "../../component/AddStudent/AddStudent.jsx";
import {useState} from "react";

export default function Student() {

    const [data, setData] = useState([]);

    const studentDataSave = (val) => {
        const  arr = [...data];
        arr.push(val);
        setData(arr);
    }

    const deleteStu = (index) => {
        const  arr = [...data];
        arr.splice(index, 1);
        setData(arr);
    }

    return(
        <div>
            <h1>Student</h1>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <AddStudent saveStudent={(val)=> studentDataSave(val)}/>
            </Box>

                <Box sx={{
                    padding: 2,
                    marginTop: 2,
                    display: 'flex',
                    justifyContent: 'around',
                    borderRadius: 2,
                    backgroundColor: '#c2c1c1'
                }}>
                    {data.map((val, index) => (
                        <StudentCard deleteStudent={()=> deleteStu(index)} key={index} age={val.age} address={val.address} name={val.name} school={val.school}/>
                    ))}
                </Box>
        </div>
)
}
