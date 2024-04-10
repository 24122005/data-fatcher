// src/DataFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Fetcher</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='flx'>
          {data.map((item) => (
            <li key={item.id} className='hh'>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
              
              <img src={item.image} className='ui'></img>
              <h4>Price: {item.price}</h4>
              <button>Add to cart</button>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
