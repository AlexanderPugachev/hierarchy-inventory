import React, { useEffect } from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import { Form } from '../../../components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addInventory, updateInventory } from '../../../redux/thunks/InventoryThunks';
import { RootState } from '../../../redux/store';
import { commonActions, DrawersId } from '../../../redux/slices/commonSlice';

const AddInventoryDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control, errors, setValue } = useForm({ mode: 'onBlur' });
  const { selected } = useSelector((s: RootState) => s.places);
  const { [DrawersId.AddInventory]: drawer } = useSelector((s: RootState) => s.common.drawers);

  useEffect(() => {
    if (drawer?.data) {
      setValue('count', drawer.data.count);
      setValue('name', drawer.data.name);
    } else {
      setValue('count', '');
      setValue('name', '');
    }
  }, [drawer]);

  const onSubmit = handleSubmit((form) => {
    if (!selected.id) return dispatch(commonActions.setDrawer({
      visible: false,
      id: DrawersId.AddInventory,
    }));

    if (drawer.data) {
      dispatch(updateInventory({
        id: drawer.data.id,
        count: form.count,
        name: form.name,
        placeId: selected.id,
      }));
    } else {
      dispatch(addInventory({
        count: form.count,
        name: form.name,
        placeId: selected.id,
      }));
    }
  });

  const content = [
    {
      name: 'name',
      type: 'text',
      label: 'Наименование',
      rules: { required: 'Обязательное поле' },
    },
    {
      name: 'count',
      type: 'number',
      label: 'Количество',
      rules: { required: 'Обязательное поле' },
    },
  ];

  const setVisible = (bool: boolean) => {
    dispatch(commonActions.setDrawer({
      visible: bool,
      id: DrawersId.AddInventory,
    }));
  }

  return (
    <Drawer title="Добавление оборудования" visible={drawer?.visible ?? false} setVisible={setVisible}>
      <Form formData={{ control, errors, content }} onSubmit={onSubmit}>
        <Button type="submit">Добавить</Button>
      </Form>
    </Drawer>
  );
};

export default AddInventoryDrawer;