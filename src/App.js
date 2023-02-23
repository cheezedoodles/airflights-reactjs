import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [page, setPage] = useState(1)
  const [flightsData, setFlightsData] = useState({
    flights: [], page: 1, exists: false
  })
  const API_FETCH_FLIGHTS = `http://127.0.0.1:3001/api/flights?page=${page}`

  const handleFetchFlights = useCallback( async () => {
    try {
      let result = await axios.get(API_FETCH_FLIGHTS)
      setFlightsData(result.data) 
    } catch {
      console.log('failed fetching flights')
    }
  }, [API_FETCH_FLIGHTS])


  useEffect(() => {
    handleFetchFlights()
  }, [handleFetchFlights])


  return (
    <div className="App">
      <h1>Airflights</h1>
      <ul>
        <li className="Item">
          <span className="elem">Flight No.</span>
          <span className="elem">Departure airport</span>
          <span className="elem">Arrival airport</span>
          <span className="elem">Scheduled departure</span>
          <span className="elem">Scheduled arrival</span>
          <span className="elem">Status</span>
        </li>
        {flightsData.flights.map((flight) => (
          <li className="Item" key={flight.flight_id}>
            <span className="elem">{flight.flight_no}</span>
            <span className="elem">{flight.departure_airport}</span>
            <span className="elem">{flight.arrival_airport}</span>
            <span className="elem">{flight.scheduled_departure}</span>
            <span className="elem">{flight.scheduled_arrival}</span>
            <span className="elem">{flight.status}</span>
          </li>
      ))}
      </ul>
      <button type="submit" onClick={() => setPage(page + 1)}>
        Load more
      </button>
    </div>
  );
}

export default App;
