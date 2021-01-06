import React from 'react';
import { Container, HeadItem } from './styles';

export type ColumnItemType<T> = {
  title?: string;
  dataName: keyof T;
  key: string;
  render?: (item: T[keyof T], record: T) => React.ReactNode | string;
};

type PropsType<T> = {
  columns: ColumnItemType<T>[];
  data: T[];
  rowKey?: keyof T;
  borderless?: boolean;
  headless?: boolean;
};

export const Table = <T extends { id: string }>
({
   columns = [],
   data,
   rowKey = 'id',
   borderless = false,
   headless = false,
 }: PropsType<T>): JSX.Element => {
  return (
    <Container borderless={borderless}>
      {!headless && (
        <thead>
        <tr>
          {columns.map((item) => (
            <HeadItem key={item.key}>{item.title}</HeadItem>
          ))}
        </tr>
        </thead>
      )}
      <tbody>
      {data.length ? (
        data.map((item) => (
          <tr key={`${item[rowKey]}`}>
            {columns.map(({ dataName, key, render }) =>
              dataName in item ? (
                <td key={key}>
                  {render ? render(item[dataName], item) : item[dataName]}
                </td>
              ) : (
                <td key={key} />
              ),
            )}
          </tr>
        ))
      ) : (
        <td>Нет данных</td>
      )}
      </tbody>
    </Container>
  );
};
