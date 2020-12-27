import React, { FC } from 'react';
import { Container, HeadItem } from './styles';
import {InventoryType} from '../../redux/slices/inventorySlice';

export type ColumnItemType = {
  title?: string
  dataName: keyof InventoryType
  key: string
  render?: (item: string | number | undefined, record: InventoryType) => React.ReactNode | string
}

type PropsType = {
  columns: ColumnItemType[];
  data: InventoryType[];
  rowKey?: keyof InventoryType;
  borderless?: boolean;
  headless?: boolean;
}

export const Table: FC<PropsType> = ({
  columns = [],
  data,
  rowKey = 'id',
  borderless = false,
  headless = false,
}) => {

  return (
    <Container borderless={borderless}>
      {!headless && (
        <thead>
          <tr>
            {columns.map(item => (
              <HeadItem key={item.key}>{item.title}</HeadItem>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.length ? data.map((item) => (
          <tr key={item[rowKey]}>
            {columns.map(({ dataName, key, render }) =>
              dataName in item ? (
                <td key={key}>
                  {render ? render(item[dataName], item) : item[dataName]}
                </td>
              ) : (
                <td key={key} />
              )
            )}
          </tr>
        )) : <td>Нет данных</td>}
      </tbody>
    </Container>
  );
};
