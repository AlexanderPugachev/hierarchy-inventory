import React from 'react';
import { useSelector } from 'react-redux';
import Structure from '../../../components/Structure/Structure';
import { RootState } from '../../../redux/store';
import Card from '../../../components/Card/Card';
import { placesActions } from '../../../redux/slices/placesSlice';

const PlacesCard: React.FC = () => {
  const { list, selected } = useSelector((s: RootState) => s.places);

  return (
    <Card title="Помещения">
      <Structure
        data={list}
        selected={selected}
        selectAction={placesActions.setSelected}
      />
    </Card>
  );
};

export default PlacesCard;