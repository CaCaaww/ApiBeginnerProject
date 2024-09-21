import React, { useEffect, useState } from 'react';

function FetchData(){
    const [avg, setAvg] = useState(0);
    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbxv2OI0TfiLo_fvdsjIXDruhfY0hmhELlZIkTTaYLmxKZ1aTU4thr7Uc4i_tlhGSRLaLA/exec', {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setAvg(data)
        });
    }, []);
    if (avg == 0){
        return (
            <div>Loading... </div>
        );
    }

    return (
        <div>{avg}</div>
    )
}

export default FetchData
