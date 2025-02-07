type IBadgesId = {
  id: number;
};

type IBadgesTitle = {
  title: string;
};

type IBadgesCount = {
  count: number;
};

type IBadgesConversion = {
  conversion?: number;
};

type IBadgesIsNegative = {
  isNegative?: boolean;
};

type IBadges = IBadgesId &
  IBadgesTitle &
  IBadgesCount &
  IBadgesConversion &
  IBadgesIsNegative;

const badges: IBadges[] = [
  {
    id: 1,
    title: "Просмотры",
    count: 174,
    conversion: 5.5,
    isNegative: false,
  },
  {
    id: 2,
    title: "Контакты",
    count: 0,
    conversion: 100,
    isNegative: true,
  },
  {
    id: 3,
    title: "Избранное",
    count: 8,
  },
  {
    id: 4,
    title: "Заказано товаров",
    count: 0,
    conversion: 100,
    isNegative: false,
  },
];

type IColId = {
  id: number;
};
type IColFill = {
  fill: number;
};
type IColDate = {
  date: string;
};

type IColData = IColId & IColFill & IColDate;

const colData: IColData[] = [
  { id: 1, fill: 40, date: "21, сб" },
  { id: 2, fill: 65, date: "22, вс" },
  { id: 3, fill: 20, date: "23, пн" },
  { id: 4, fill: 80, date: "24, вт" },
  { id: 5, fill: 55, date: "25, ср" },
  { id: 6, fill: 30, date: "26, чт" },
  { id: 7, fill: 90, date: "27, пт" },
];

export {
  badges,
  type IBadges,
  type IBadgesId,
  type IBadgesTitle,
  type IBadgesCount,
  type IBadgesConversion,
  type IBadgesIsNegative,
  colData,
  type IColData,
  type IColId,
  type IColDate,
  type IColFill,
};
