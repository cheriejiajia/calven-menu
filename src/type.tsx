export type itemType = {
  title: string;
  subMenu?: string[];
};

export type configType = { config: itemType[] };

export type menuItemPropsType = {
  item: itemType;
  itemExpanded: string;
  handleButtonClick: (title: string) => void;
};
