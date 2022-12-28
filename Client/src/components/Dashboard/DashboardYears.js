import React, {useEffect, useState}  from 'react'
import {NativeSelect} from '@mui/material'

export default function DashboardYears() {
    const [theYear, setTheYear] = useState('');
    const [options, setOptions] = useState(); 
    let date = new Date().getFullYear(); 
    
    
    useEffect(()=>{
        let dateArray = []; 

        for(let i = 0; i < 10; i++){
            dateArray.push(date-i); 
        }

        setOptions(
            dateArray.map((date, index) => 
                <option value={date} key={index}>{date}</option>
            )
        )
    }, [])

    return (
        <NativeSelect 
            sx={{marginRight: '1.5em'}}
        >
            {options}
        </NativeSelect>
    )
}
