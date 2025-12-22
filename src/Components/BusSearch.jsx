import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BusSearch = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState({
        from:"",
        to:"",
        date:""
    })


    const onchangeValue = (e) =>{
        const {name, value} = e.target;
        setSearch(prev =>
            ({...prev, [name]:value})
        )
    }


    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        const from = search.from.trim(" ").split(" ").join("+").toLocaleLowerCase()
        const to = search.to.trim(" ").split(" ").join("+").toLocaleLowerCase()
        console.log(from.toLocaleLowerCase())
        console.log(to)
        console.log(search.date)
        navigate(`/busticket?from=${from}&to=${to}&date=${search.date}`)
    }



  return (
       <div className="search-container">
            <form className="search-form" onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="from">From</label>
                    <input type="text"  id="from" name='from' defaultValue={search.from} onChange={onchangeValue} placeholder="Enter departure city" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="to">To</label>
                    <input type="text" id="to"  name="to" defaultValue={search.to} onChange={onchangeValue}  placeholder="Enter destination" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date"  data-provide="datepicker" data-date-format="yyyy-mm-dd" name="date" defaultValue={search.date} onChange={onchangeValue}  min="2024-12-16" required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="search-btn">Search</button>
                </div>
            </form>
        </div>
  )
}

export default BusSearch
