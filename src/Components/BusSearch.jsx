import React from 'react'

const BusSearch = () => {
  return (
       <div className="search-container">
            <form className="search-form">
                <div className="form-group">
                    <label for="from">From</label>
                    <input type="text" id="from" placeholder="Enter departure city" required/>
                </div>
                <div className="form-group">
                    <label for="to">To</label>
                    <input type="text" id="to" placeholder="Enter destination" required/>
                </div>
                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="date" id="date" min="2025-12-16" required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="search-btn">Search</button>
                </div>
            </form>
        </div>
  )
}

export default BusSearch
