import {Card, Box }from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function StudentCard({name, address, age, school, deleteStudent}) {
    return(
        <Card sx={{maxWidth: 345, padding: 2, margin: 1}}>
            <Box sx={{margin: 1}}>Name : {name}</Box>
            <Box sx={{margin: 1}}>Address : {address}</Box>
            <Box sx={{margin: 1}}>Age : {age}</Box>
            <Box sx={{margin: 1}}>School : {school}</Box>
            <Box sx={{display: 'flex', justifyContent: 'end'}}>
                <IconButton aria-label="delete" onClick={()=> deleteStudent()}>
                    <DeleteIcon color={'error'}/>
                </IconButton>
            </Box>
        </Card>
    )
}
