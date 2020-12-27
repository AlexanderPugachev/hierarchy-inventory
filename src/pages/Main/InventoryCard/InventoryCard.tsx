import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { InventoryType } from '../../../redux/slices/inventorySlice';
import { ColumnItemType, Table } from '../../../components/Table/Table';
import Button from '../../../components/Button/Button';
import AddInventoryDrawer from '../AddInventoryDrawer/AddInventoryDrawer';
import { deleteInventory } from '../../../redux/thunks/InventoryThunks';

const InventoryCard: React.FC = () => {
  const dispatch = useDispatch();
  const { collection, selected } = useSelector((s: RootState) => s.places);
  const { list } = useSelector((s: RootState) => s.inventory);
  const [listData, setListData] = useState<InventoryType[] | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (selected.id) {
      const places: string[] = [];

      const getPlacesById = (id: string) => {
        places.push(id);
        collection.find(item => item.id === id)
          ?.parts?.forEach(item => getPlacesById(item));
      };
      getPlacesById(selected.id);

      setListData(list.filter(item => places.includes(item?.placeId ?? '')));
    }
  }, [list, selected, collection]);

  const columns: ColumnItemType[] = [
    {
      title: 'Наименование',
      dataName: 'name',
      key: 'name',
    },
    {
      title: 'Количество',
      dataName: 'count',
      key: 'count',
    },
    {
      dataName: 'id',
      key: 'actions',
      render: id =>
        <Button
          onClick={() => dispatch(deleteInventory({ id: `${id}` }))}
        >Удалить</Button>,
    },
  ];

  return (
    <Card
      extra={selected.isRoom && <Button onClick={() => setVisible(true)}>Добавить оборудование</Button>}
      title={`Оборудование ${selected.isRoom ? 'помещения' : 'здания/крыла'}: ${selected?.name ?? 'Не выбрано'}`}
    >
      {listData?.length ?
        <Table
          columns={columns}
          data={listData}
        />
        : `В выбранном ${selected.isRoom ? 'помещении' : 'здании/крыле'} нет оборудования`}

      <AddInventoryDrawer setVisible={setVisible} visible={visible} />
    </Card>
  );
};

export default InventoryCard;