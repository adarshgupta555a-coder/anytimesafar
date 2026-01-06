import React, { useState } from 'react'
import "../css/AddRoute.css"
import { toast } from 'react-toastify';
import { supabase } from '../lib/supabase';

const AddRoutes = () => {
   const toastError = (msg) => toast.error(msg);
    const toastSuccess = (msg) => toast.success(msg);
  const [route, setRoute] = useState({
    fromCity: "",
    toCity: "",
    operatorName: "",
    busType: "",
    fromDate: "",
    departureTime: "",
    arrivalTime: "",
    duration: "",
    price: "",
    availableSeats: "",
    rating: "",
    features: {
      wifi: false,
      water: false,
      blanket: false,
      charging: false,
      emergency: false,
      tv: false,
      reading: false,
      gps: false
    }

  })


  const OnhandleForm = async (e) => {
    e.preventDefault();
    console.log(route)

    let arr = [];
    //agar features mein jo true hai sirf usko hi daalo arr mein
    for (let x in route.features) {
      if (route.features[x] === true) {
        arr.push(x)
      }
    }

    console.log(arr)

    const busData = {
      from_city: route?.fromCity,
      to_city: route?.toCity,
      operator_name: route?.operatorName,
      bus_type: route?.busType,
      from_date: route?.fromDate,
      departure_time: route?.departureTime,
      arrival_time: route?.arrivalTime,
      duration: route?.duration,
      price: route?.price,
      available_seats: route?.availableSeats,
      rating: route?.rating,
      features: arr
    };

    const { data, error } = await supabase
      .from('bus_routes')
      .insert([
       busData
      ])
      .select()

    if (error) {
      console.log(error)
      toastError("Something went wrong!")
    } else{
      console.log(data)
      toastSuccess("Route Inserted Successfully.")
    }


  }

  const OnchangeForm = (e) => {
    const { name, value, type, checked } = e.target;
  //agar checkbox hai toh features mein jakar add karo warna direct add karo
    if (type === "checkbox") {
      setRoute(prev => ({
        ...prev, features: {
          ...prev.features, [name]: checked
        },
      }))

    } else {
      setRoute(prev => ({ ...prev, [name]: value }))

    }
  }
  return (
    <div className="container">
      {/* Route Information Form */}
      <div className="form-section">
        <h2 className="section-title">
          <span>🚌</span>
          <span>Route Information</span>
        </h2>
        <div className="info-box">
          <p>
            <strong>Note:</strong> All fields marked with an asterisk (*) are
            required. Make sure to provide accurate information for route, timing,
            and pricing details.
          </p>
        </div>
        <form className="route-form" onSubmit={OnhandleForm}>
          {/* Route Details */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fromCity">
                From City <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">📍</span>
                <input
                  type="text"
                  name="fromCity"
                  placeholder="e.g., Bangalore"
                  value={route.fromCity}
                  required
                  onChange={OnchangeForm}
                />
              </div>
              <span className="helper-text">Starting point of the route</span>
            </div>
            <div className="form-group">
              <label htmlFor="toCity">
                To City <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">📍</span>
                <input
                  type="text"
                  name="toCity"
                  placeholder="e.g., Chennai"
                  value={route.toCity}
                  required
                  onChange={OnchangeForm}

                />
              </div>
              <span className="helper-text">Destination point of the route</span>
            </div>
          </div>
          {/* Operator & Bus Type */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="operatorName">
                Operator Name <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">🏢</span>
                <input
                  type="text"
                  name="operatorName"
                  placeholder="e.g., KPN Travels"
                  value={route.operatorName}
                  required
                  onChange={OnchangeForm}

                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="busType">
                Bus Type <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">🚌</span>
                <select name="busType" value={route.busType} required onChange={OnchangeForm}>
                  <option value="">Select Bus Type</option>
                  <option value="AC Sleeper">AC Sleeper</option>
                  <option value="Non-AC Sleeper">Non-AC Sleeper</option>
                  <option value="AC Seater">AC Seater</option>
                  <option value="Non-AC Seater">Non-AC Seater</option>
                  <option value="Volvo AC">Volvo AC</option>
                  <option value="Deluxe">Deluxe</option>
                </select>
              </div>
            </div>
          </div>
          {/* Date & Time */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fromDate">
                Travel Date <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">📅</span>
                <input type="date" name="fromDate" value={route.fromDate} required onChange={OnchangeForm} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="departureTime">
                Departure Time <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">🕐</span>
                <input
                  type="time"
                  name="departureTime"
                  placeholder="23:30:00"
                  required
                  value={route.departureTime}
                  onChange={OnchangeForm}
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="arrivalTime">
                Arrival Time <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">🕐</span>
                <input
                  type="time"
                  name="arrivalTime"
                  placeholder="06:00:00"
                  required
                  value={route.arrivalTime}
                  onChange={OnchangeForm}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="duration">
                Duration <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">⏱️</span>
                <input
                  type="time"
                  name="duration"
                  placeholder="06:30:00"
                  required
                  value={route.duration}
                  onChange={OnchangeForm}
                />
              </div>
              <span className="helper-text">Format: HH:MM:SS (e.g., 06:30:00)</span>
            </div>
          </div>
          {/* Pricing & Seats */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">
                Price (₹) <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">💰</span>
                <input
                  type="number"
                  name="price"
                  placeholder={1500}
                  min={0}
                  step={10}
                  required
                  value={route.price}
                  onChange={OnchangeForm}
                />
              </div>
              <span className="helper-text">Base price per seat</span>
            </div>
            <div className="form-group">
              <label htmlFor="availableSeats">
                Available Seats <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">💺</span>
                <input
                  type="number"
                  name="availableSeats"
                  placeholder={10}
                  min={1}
                  max={60}
                  required
                  value={route.availableSeats}
                  onChange={OnchangeForm}
                />
              </div>
              <span className="helper-text">Total number of bookable seats</span>
            </div>
          </div>
          {/* Rating */}
          <div className="form-group">
            <label htmlFor="rating">Rating (Optional)</label>
            <div className="input-wrapper">
              <span className="input-icon">⭐</span>
              <input
                type="number"
                name="rating"
                placeholder="4.3"
                min={0}
                max={5}
                step="0.1"
                value={route.rating}
                onChange={OnchangeForm}
                required
              />
            </div>
            <span className="helper-text">Rating out of 5 (e.g., 4.3)</span>
          </div>
          {/* Features/Amenities */}
          <div className="form-group">
            <label>Features &amp; Amenities</label>
            <div className="features-grid">
              <div className="checkbox-item">
                <input type="checkbox" name="wifi" checked={route.features.wifi} onChange={OnchangeForm} />
                <label htmlFor="wifi">📶 WiFi</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="charging"
                  checked={route.features.charging}
                  onChange={OnchangeForm}
                />
                <label htmlFor="charging">🔌 Charging Point</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" name="water" checked={route.features.water} onChange={OnchangeForm} />
                <label htmlFor="water">💧 Water Bottle</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" name="blanket" checked={route.features.blanket} onChange={OnchangeForm} />
                <label htmlFor="blanket">🛏️ Blanket</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" name="tv" checked={route.features.tv} onChange={OnchangeForm} />
                <label htmlFor="tv">📺 TV/Entertainment</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="emergency"
                  checked={route.features.emergency}
                  onChange={OnchangeForm}
                />
                <label htmlFor="emergency">🚪 Emergency Exit</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" name="reading" checked={route.features.reading} onChange={OnchangeForm} />
                <label htmlFor="reading">💡 Reading Light</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" name="gps" checked={route.features.gps} onChange={OnchangeForm} />
                <label htmlFor="gps">🛰️ GPS Tracking</label>
              </div>
            </div>
            <span className="helper-text">
              Select all amenities available on this bus
            </span>
          </div>
          {/* Form Actions */}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <span>✓</span>
              <span>Create Route</span>
            </button>
            <button type="button" className="btn btn-draft">
              <span>📝</span>
              <span>Save as Draft</span>
            </button>
            <button type="reset" className="btn btn-secondary">
              <span>✕</span>
              <span>Cancel</span>
            </button>
          </div>
        </form>
      </div>

    </div>

  )
}

export default AddRoutes
