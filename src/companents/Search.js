import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div className='container my-3'>

        <form>
            <div className='input-group'>
                    <input type="text" className='form-control' placeholder='What u Need'/>
                    <button classNAme='btn btn-primary'type="submit">Search</button>
                
            </div>
        </form>
      </div>
    )
  }
}

export default Search