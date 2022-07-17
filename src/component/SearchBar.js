import React, { useState } from 'react'
import {Paper,TextField} from '@material-ui/core'

function SearchBar({onFormSubmit}) {
    const [searchTerm,setSearchTerm] = useState('')
    const handleChange = (e) => {
        setSearchTerm(state => e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        onFormSubmit(searchTerm)
        setSearchTerm('')
     }
    
  return (
    
      <Paper elevation={6} style={{padding : '25px'}}>
          <form onSubmit={handleSubmit}>
              <TextField fullWidth label='Search...'  onChange={handleChange}/>
          </form>
      </Paper>
  )
}

export default SearchBar