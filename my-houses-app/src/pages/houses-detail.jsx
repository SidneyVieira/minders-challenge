import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function HouseDetail() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    window.amplitude.track('View_House_Detail', { houseId: id });

    fetch(`https://wizard-world-api.herokuapp.com/houses/${id}`)
      .then((res) => res.json())
      .then((data) => setHouse(data));
  }, [id]);

  if (!house) return <p>Carregando...</p>;

  return (
    <div className="detail-container">
      <h1 className="detail-title">{house.name}</h1><button onClick={() => window.amplitude.track('Click_Favorite_House', { houseId: id, houseName: house.name })}>
  ❤️ Favoritar
</button>
      <p className="detail-info">{house.animal}</p>
      <p className="detail-info"> {house.ghost}</p>
      <p className="detail-info">{house.heads[0].lastName}</p>
  
  <div className="detail-buttons">
      <button onClick={() => {
      window.amplitude.track('Click_Back_To_List');
      window.history.back();
      }}>
      Voltar para lista
      </button>
    </div>
  </div>
    
  );
}
