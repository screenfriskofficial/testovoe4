type IAnnMockTitle = {
  title: string;
};
type IAnnMockCount = {
  count: number;
};
type IAnnMockWithArrow = {
  withArrow?: boolean;
};
type IAnnMockWithColor = {
  color?: string;
};

type IAnnMockWithDots = { withDots?: boolean };

type IAnnMockData = IAnnMockTitle &
  IAnnMockCount &
  IAnnMockWithArrow &
  IAnnMockWithDots &
  IAnnMockWithColor;

const annMock: IAnnMockData[] = [
  {
    title: "Активные",
    count: 14,
    withArrow: true,
    withDots: true,
    color: "#74B200",
  },
  {
    title: "Неактивные",
    count: 2,
    withArrow: true,
    withDots: true,
    color: "#FF9F31",
  },
  {
    title: "Черновики",
    count: 3,
    withArrow: true,
    withDots: true,
    color: "#636570",
  },
  {
    title: "Проданные",
    count: 0,
    withArrow: true,
    withDots: true,
    color: "#898B94",
  },
];

export {
  annMock,
  type IAnnMockWithDots,
  type IAnnMockWithArrow,
  type IAnnMockTitle,
  type IAnnMockData,
  type IAnnMockCount,
};
