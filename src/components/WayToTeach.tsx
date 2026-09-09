import { waysSlice } from "../slices/waysSlice";
import { useAppDispatch } from "../store";
import type Way from "../types/Way";
import Button from "./Button";

export default function WayToTeach(props: { way: Way }) {
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <p className="text-bold">{props.way.title}</p>
      <p>{props.way.description}</p>
      <Button
        isActive={false}
        onClick={() =>
          dispatch(waysSlice.actions.removeWay({ way: props.way }))
        }
      >
        Удалить
      </Button>
    </div>
  );
}
