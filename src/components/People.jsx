import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const People = () => {
    const { id} = useParams()
    const [object, setObject] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
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
            <p>Height: {object.height}</p>
            <p>Gender: {object.gender}</p>
            <p>Eye Color: {object.eye_color}</p>
            <p>Hair Color: {object.hair_color}</p>
            <p>Birth Year: {object.birth_year}</p>
        </div>:
            <h1>Doesnt Exist </h1>

        }
    </div>
  )
}

export default People