import React from 'react';
import Drawer from '../../../components/Drawer/Drawer';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import { Form } from '../../../components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addInventory } from '../../../redux/thunks/InventoryThunks';
import { RootState } from '../../../redux/store';

type Props = {
  visible: boolean,
  setVisible: (b: boolean) => void
}

const AddInventoryDrawer: React.FC<Props> = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const { handleSubmit, control, errors } = useForm({ mode: 'onBlur' });
  const { selected } = useSelector((s: RootState) => s.places);

  const onSubmit = handleSubmit((form) => {
    console.log('form', form);
    if (!selected.id) return setVisible(false);

    dispatch(addInventory({
      count: form.count,
      name: form.name,
      place: selected.id
    }))
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
    }
  ]

  return (
    <Drawer title="Добавление оборудования" visible={visible} setVisible={setVisible}>
      <Form formData={{ control, errors, content }} onSubmit={onSubmit}>
        <Button type="submit">Добавить</Button>
      </Form>
    </Drawer>
  );
};

export default AddInventoryDrawer;