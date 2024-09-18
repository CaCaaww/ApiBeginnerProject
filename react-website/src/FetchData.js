import React, { useEffect, useState } from 'react';

function FetchData(){
    const [avg, setAvg] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://script.google.com/macros/s/AKfycbxv2OI0TfiLo_fvdsjIXDruhfY0hmhELlZIkTTaYLmxKZ1aTU4thr7Uc4i_tlhGSRLaLA/exec', {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setAvg(data)
        });
        setIsLoading(false);
    }, []);
    if (isLoading){
        return (
            <div>Loading... </div>
        );
    }

    return (
        <div> 
            <p> Average of the day is: {avg}</p>
        </div>
    )
}

export default FetchData