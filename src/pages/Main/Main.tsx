import React, { useEffect } from 'react';
import { Container } from './styles';
import { useDispatch } from 'react-redux';
import InventoryCard from './InventoryCard/InventoryCard';
import PlacesCard from './PlacesCard/PlacesCard';
import { getInventory } from '../../redux/thunks/InventoryThunks';
import { getPlaces } from '../../redux/thunks/placesThunks';

const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInventory());
    dispatch(getPlaces());
  }, [dispatch]);

  return (
    <Container>
      <PlacesCard />
      <InventoryCard />
    </Container>
  );
};

export default Main;
