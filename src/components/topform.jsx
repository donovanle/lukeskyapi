import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const TopForm = () => {
    const [type, setType] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push(`/${type}/${id}`)
    }

  return (
    <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-around w-50">
            Search For:
            <select name="type" value={type} onChange={e=>setType(e.target.value)}>
                <option value="planets">Planets</option>
                <option value="spaceships">Spaceships</option>
                <option value="vehicles">Vehicles</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
            </select>
            ID:
            <input type="number" name="id" value={id} onChange={e=>setId(e.target.value)}/>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default TopForm