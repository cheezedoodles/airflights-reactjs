import './App.css';
import { useState, useCallback, useEffect } from 'react';

function App() {

  const [page, setPage] = useState(1)
  const [flightsData, setFlightsData] = useState({
    flights: [], page: 1, exists: false
  })
  const API_FETCH_FLIGHTS = `http://127.0.0.1:3001/api/flights?page=${page}`

  // const handleFetchFlights = useCallback( async () => {
  //   try {}
  // })

  return (
    <div className="App">
      <h1>Airflights</h1>
      <button type="submit" onClick={() => setPage(page + 1)}>
        Submit
      </button>
    </div>
  );
}

export default App;
