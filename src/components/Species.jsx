import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Species = () => {
    const {id} = useParams()
    const [object, setObject] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
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
            <p>Classification: {object.classification}</p>
            <p>Avg Lifespan: {object.average_lifespan}</p>
            <p>Language: {object.language}</p>
            <p>Avg Height: {object.average_height}</p>
        </div>:
            <h1>ID Doesn't Exist</h1>

        }
    </div>
  )
}

export default Species

