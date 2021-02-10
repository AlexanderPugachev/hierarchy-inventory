
export type InventoryType = {
  id: string;
  name: string;
  count: number;
  placeId: string;
};

export type InventoryHash = {
  [id: string]: InventoryType;
};

export type AddInventoryType = Omit<InventoryType, 'id'>;

export type DrawerType = {
  visible: boolean;
  data?: InventoryType;
};

export type SetDrawerType = DrawerType & {
  id: number;
};

export type CollectionPlacesType = {
  id: string;
  name: string;
  parts: string[];
};

export type PlacesHash = {
  [id: string]: CollectionPlacesType;
}

export type PlaceType = {
  id: string;
  name: string;
  children: PlaceType[] | undefined;
};


export type SelectedPlaceType = {
  id: string | null;
  name: string | null;
  isRoom?: boolean;
};