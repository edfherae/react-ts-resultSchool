import Button from "./Button";
import { differencesSlice } from "../slices/differencesSlice";
import { useAppDispatch, useAppSelector } from "../store";

export default function DifferencesSection() {
  const dispatch = useAppDispatch();
  const contentType = useAppSelector((state) => state.differences.contentType);
  const differences = useAppSelector((state) => state.differences.differences);

  return (
    <section>
      <h1 className="text-bold">Чем мы отличаемся от других</h1>
      <div style={{ display: "flex" }}>
        <Button
          isActive={contentType === "way"}
          onClick={() =>
            dispatch(
              differencesSlice.actions.changeContentType({
                contentType: "way",
              }),
            )
          }
        >
          Подход
        </Button>
        <Button
          isActive={contentType === "easy"}
          onClick={() =>
            dispatch(
              differencesSlice.actions.changeContentType({
                contentType: "easy",
              }),
            )
          }
        >
          Доступность
        </Button>
        <Button
          isActive={contentType === "program"}
          onClick={() =>
            dispatch(
              differencesSlice.actions.changeContentType({
                contentType: "program",
              }),
            )
          }
        >
          Концентрация
        </Button>
      </div>
      {contentType ? (
        <p className="card">{differences[contentType]}</p>
      ) : (
        <p className="card">Нажми на кнопку</p>
      )}
    </section>
  );
}
