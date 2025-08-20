export type ItemProps = {
  type: string;
  subtype: string;
  id: string;
  sleeve: string;
  fabric: string;
  cut: string;
  waist: string;
  pattern: string;
  neck: string;
  colors: string[];
};

export type ItemsProps = {
  data: ItemProps[];
};

export type ScrollViewItemProps = {
  data: ItemProps[];
  text: string;
};

export type OtherHeaderProps = { title: string };

export type CreditCategoryProps = {
  isSelected?: boolean;
  quantity: number;
  cost: number;
  onPress?: () => void;
};

export type SelectProps = {
  arr: string[];
  title: string;
  stateToCheck: string; // this is the state to cross-check with to change the background
  action: (s: string) => void;
};

export type ImageDataRes = {
  colors: { red: number; blue: number; green: number; alpha?: number }[];
  labels: string[];
};

export type ColorSelectionProps = {
  stateToCheck?: string; // this is the state to cross-check with to change the background
  title: string;
  arr: string[];
  action: () => void;
};

export type Colors = { name: string; mainColor: string; shades: string[] };
