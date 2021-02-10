import { CollectionPlacesType, PlaceType } from '../redux/types';

export const createStructure = (
  data: CollectionPlacesType[],
): Array<PlaceType | undefined> => {
  const childrenId: string[] = [];
  data.forEach(({ parts }) => parts && childrenId.push(...parts));

  const getChildren = (parts: string[]): Array<PlaceType> =>
    parts.map((item) => {
      const child = data.find(({ id }) => id === item);
      return {
        id: child?.id,
        name: child?.name,
        children: child?.parts ? getChildren(child.parts) : undefined,
      } as PlaceType;
    });

  return data
    .filter((item) => !childrenId.includes(item.id))
    .map(({ id, name, parts }) => ({
      id,
      name,
      children: parts ? getChildren(parts) : undefined,
    }));
};

export const createHashTable = (arr: any[], key = 'id'): any => {
  return arr.reduce((acc, cur) => {
    acc[cur[key]] = cur;
    return acc;
  }, {});
};