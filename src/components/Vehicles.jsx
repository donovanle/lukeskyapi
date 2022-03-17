import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Vehicles = () => {
    const {id} = useParams()
    const [object, setObject] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/${id}`)
            .then(response => {
                console.log(response.data)
                setObject(response.data)
            })
            .catch(err => console.log(err))
    }, [id])
  return (
    <div className='d-flex justify-content-center'>
        {object?
        <div>
            <h1>{object.name}</h1>
            <p>Model: {object.model}</p>
            <p>Crew: {object.crew}</p>
            <p>Passengers: {object.passengers}</p>
            <p>Manufacturer: {object.manufacturer}</p>
        </div>:
            <h1>Doesnt Exist </h1>

        }
    </div>
  )
}

export default Vehicles

