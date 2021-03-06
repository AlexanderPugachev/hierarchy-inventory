import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Button, Table, Card, ColumnItemType } from '../../../components';
import AddInventoryDrawer from '../AddInventoryDrawer/AddInventoryDrawer';
import { deleteInventory } from '../../../redux/thunks/InventoryThunks';
import { commonActions, DrawersId } from '../../../redux/slices/commonSlice';
import { InventoryType } from '../../../redux/types';

const InventoryCard: React.FC = () => {
  const dispatch = useDispatch();
  const { collection, selected } = useSelector((s: RootState) => s.places);
  const { list } = useSelector((s: RootState) => s.inventory);
  const [listData, setListData] = useState<InventoryType[] | null>(null);

  useEffect(() => {
    if (selected.id) {
      const places: string[] = [];

      const getPlacesById = (id: string) => {
        places.push(id);
        collection[id]?.parts?.forEach((item) => getPlacesById(item));
      };
      getPlacesById(selected.id);

      setListData(list.filter((item) => places.includes(item?.placeId ?? '')));
    }
  }, [list, selected, collection]);

  const columns: ColumnItemType<InventoryType>[] = [
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
      render: (id, record) => (
        <>
          <Button onClick={() => dispatch(deleteInventory({ id: `${id}` }))}>
            Удалить
          </Button>
          <Button onClick={() => handleAdd(record)}>Изменить</Button>
        </>
      ),
    },
  ];

  const handleAdd = (record?: InventoryType | undefined) => {
    dispatch(
      commonActions.setDrawer({
        visible: true,
        id: DrawersId.AddInventory,
        data: record,
      }),
    );
  };

  return (
    <Card
      extra={
        selected.isRoom && (
          <Button onClick={() => handleAdd()}>Добавить оборудование</Button>
        )
      }
      title={`Оборудование ${selected.isRoom ? 'помещения' : 'здания/крыла'}: ${
        selected?.name ?? 'Не выбрано'
      }`}
    >
      {listData?.length ? (
        <Table<InventoryType> columns={columns} data={listData} />
      ) : (
        `В выбранном ${selected.isRoom ? 'помещении' : 'здании/крыле'}` +
        ' нет оборудования'
      )}

      <AddInventoryDrawer />
    </Card>
  );
};

export default InventoryCard;
