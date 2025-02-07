import { Surface, Typography } from "../../../../shared";
import { List, ListItem } from "../../../../shared/ui";
import { annMock } from "../../model/api/annMock.ts";
import { CaretRight } from "../../model/icons/caret-right.tsx";

const Announcements = () => {
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
      <Typography>Обьявления</Typography>
      <List>
        {annMock.map((item) => (
          <ListItem>
            {item?.withDots ? (
              <div className="flex gap-2 items-center text-[#636570] text-[14px] font-normal">
                <div
                  className={"w-2 h-2 rounded-[3px]"}
                  style={{ backgroundColor: item.color }}
                />
                {item?.title}
              </div>
            ) : (
              <div className={"text-[#636570] text-[14px] font-normal"}>
                {item?.title}
              </div>
            )}
            {item?.withArrow ? (
              <div className="flex gap-1 items-center">
                {item?.count} <CaretRight />
              </div>
            ) : (
              <div>{item?.count}</div>
            )}
          </ListItem>
        ))}
      </List>
    </Surface>
  );
};

export { Announcements };
