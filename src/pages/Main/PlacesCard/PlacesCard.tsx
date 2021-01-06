import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Card } from '../../../components';
import { placesActions } from '../../../redux/slices/placesSlice';
import { Structure } from './Structure/Structure';

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
