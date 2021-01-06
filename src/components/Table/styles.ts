import styled from 'styled-components';

type TableProps = {
  borderless?: boolean;
};

export const Container = styled.table<TableProps>`
  table-layout: auto;
  width: 100%;
  box-sizing: border-box;
  border: ${(p) => (p.borderless ? 0 : `1px solid gray`)};

  & tr th {
    border-bottom: ${(p) => (p.borderless ? 0 : `1px solid gray`)};
  }
  & tr:not(:last-child) td {
    border-bottom: ${(p) => (p.borderless ? 0 : `1px solid lightgray`)};
  }

  & td,
  th {
    padding: ${(p) => p.theme.spaces.m};
  }
`;

export const HeadItem = styled.th`
  text-align: left;
`;
