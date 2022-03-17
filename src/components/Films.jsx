import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Films = () => {
    const {id} = useParams()
    const [object, setObject] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`)
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
            <h1>{object.title}</h1>
            <p>Ep #: {object.episode_id}</p>
            <p>Director: {object.director}</p>
            <p>Release Date: {object.release_date}</p>
            <p>Proucer(s): {object.producer}</p>
        </div>:
            <h1>Doesnt Exist </h1>

        }
    </div>
  )
}

export default Films

