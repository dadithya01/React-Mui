import {Box, Card, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

export default function AddStudent({saveStudent}) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [school, setSchool] = useState('');

    const AddStudentData = () => {
        if(name !== '' && address !== '' && age !== '' && school !== ''){
            saveStudent({name: name, address: address, age: age, school: school});
            clear();
        } else {
            alert('fill this details..!');
        }

    }

    const clear = () => {
        setName('');
        setSchool('');
        setAddress('');
        setAge('');
    }

    return(
        <Card sx={{maxWidth: 345, padding: 2}}>
            <TextField
                onChange={(val)=> setName(val.target.value)}
                value={name}
                sx={{marginY: 1}}
                fullWidth
                label="Name"
                variant="outlined"
            />
            <TextField
                onChange={(val)=> setAddress(val.target.value)}
                value={address}
                sx={{marginY: 1}}
                fullWidth
                label="Address"
                variant="outlined"
            />
            <TextField
                onChange={(val)=> setAge(val.target.value)}
                value={age}
                sx={{marginY: 1}}
                fullWidth
                label="Age"
                variant="outlined"
            />
            <TextField
                onChange={(val)=> setSchool(val.target.value)}
                value={school}
                sx={{marginY: 1}}
                fullWidth
                label="School"
                variant="outlined"
            />
            <Button onClick={()=> AddStudentData()} variant="contained">Save Student</Button>
        </Card>
    )
}
