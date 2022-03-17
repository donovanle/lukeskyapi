import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Planets = () => {
    const { id} = useParams()
    const [object, setObject] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
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
            <p>Climate: {object.climate}</p>
            <p>Terrain: {object.terrain}</p>
            <p>Surface Water: {object.surface_water}</p>
            <p>Population: {object.population}</p>
        </div>:
            <h1>Doesnt Exist </h1>

        }
    </div>
  )
}

export default Planets