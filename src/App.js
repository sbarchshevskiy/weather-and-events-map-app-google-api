import Map from "./components/Map";
import React, { useState, useEffect } from 'react';
import Loading from "./components/Loading";

require('dotenv').config()

export default function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false);

  const MAP_API = process.env.REACT_APP_MAP_API

  useEffect(() =>{
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(MAP_API);
      const { events } = await response.json();

      setEventData(events);
      setLoading(false);
    }
    fetchData();
  }, [])

  return (
    <div>
      { !loading ? <Map eventData={eventData} /> : <Loading/> }
    </div>
  );
}


