import { formatNumbers, Surface, Typography } from "../../../../shared";
import { List, ListItem } from "../../../../shared/ui";
import { orderData } from "../../model/api/orderMock.ts";

const OrderIncome = () => {
  return (
    <Surface
      style={{
        width: 430,
        height: 297,
        display: "flex",
        gap: 10,
        flexDirection: "column",
      }}
    >
      <Typography>Доходы от заказов</Typography>
      <List>
        {orderData.map((item) => (
          <ListItem key={item.title}>
            <div className="text-[#636570] text-[14px] font-normal">
              {item.title}
            </div>
            <div>{formatNumbers(item.count)}₽</div>
          </ListItem>
        ))}
      </List>
    </Surface>
  );
};

export { OrderIncome };
