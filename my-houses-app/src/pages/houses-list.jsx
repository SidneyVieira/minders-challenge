import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HousesList() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    window.amplitude.track('View_Houses_List');

    fetch('https://wizard-world-api.herokuapp.com/Houses')
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

  return (
    <div className="container">
      <h1>Lista de Casas</h1>
      <ul className="house-list">
        {houses.map((house) => (
          <li className="house-item" key={house.id}>
            <Link to={`/houses/${house.id}`} 
            onClick={() => window.amplitude.track('Click_View_Details',
            { houseId: house.id, houseName: house.name })}>{house.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}