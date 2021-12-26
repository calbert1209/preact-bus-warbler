import { FunctionComponent as FC } from "preact";
import { useAppState } from "../contexts/AppState";
import { ScheduleType as Type } from "../services/entities";

const kScheduleTypeIcons: Map<Type, string> = new Map([
  [Type.weekday, "平"],
  [Type.saturday, "土"],
  [Type.holiday, "祝"],
]);

type TypeMenuItemProps = {
  key: string;
  label: string;
  type: Type;
  isSelected: boolean;
  onClick: (type: Type) => void;
};

const TypeMenuItem: FC<TypeMenuItemProps> = ({
  key,
  label,
  type,
  isSelected,
  onClick,
}) => {
  const handleOnClick = () => {
    if (!isSelected) {
      onClick(type);
    }
  };

  return (
    <li key={key} data-checked={isSelected} onClick={handleOnClick}>
      {label}
    </li>
  );
};

export const TypeMenuLayer: FC = ({ children }) => {
  const { scheduleType, setScheduleType } = useAppState();
  return (
    <>
      {children}
      <ul className="scheduleTypeMenu">
        {[...kScheduleTypeIcons.entries()].map(([type, label]) => (
          <TypeMenuItem
            {...{ type, label, key: type }}
            isSelected={type === scheduleType}
            onClick={setScheduleType}
          />
        ))}
      </ul>
    </>
  );
};
