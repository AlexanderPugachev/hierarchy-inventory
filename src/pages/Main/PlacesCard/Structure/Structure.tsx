import React from 'react';
import { Container, Item, Level } from './styles';
import { PlaceType, SelectedPlaceType } from '../../../../redux/slices/placesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from '../../../../redux/store';
import Badge from '../../../../components/Badge/Badge';

type StructureType = {
  data: PlaceType[],
  selected: SelectedPlaceType,
  selectAction: ActionCreatorWithPayload<SelectedPlaceType>
}

export const Structure: React.FC<StructureType> = ({ data, selected, selectAction }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((s: RootState) => s.inventory);

  const selectItem = (id: string, name: string) => {
    dispatch(selectAction({ id, name }));
  };

  const getInventoryInfo = (id: string) => list
    .filter(item => item.placeId === id).length;

  const renderLevel = (source: PlaceType[], level = 0) => {
    level += 1;
    return source.map(item =>
      <Level key={item.id} level={level}>
        <Item
          onClick={() => selectItem(item.id, item.name)}
          current={item.id === selected.id}
        >{item.name}<Badge count={getInventoryInfo(item.id)}/></Item>
        {item?.children && renderLevel(item.children, level)}
      </Level>,
    );
  };

  return (
    <Container>
      {renderLevel(data)}
    </Container>
  );
};