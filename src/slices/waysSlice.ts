import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Way from "../types/Way";

interface InitialState {
  entities: Way[];
}

const initialState: InitialState = {
  entities: [
    {
      id: 1,
      title: "Фильтрация информации и технологий.",
      description:
        "Из огромного количества информации и навыков в IT, вы получаете только то, что необходимо и работает.",
    },
    {
      id: 2,
      title: "Формат обучения.",
      description:
        "Пока другие предлагают 50 страниц текста и вебинары по 2 часа, мы даем вам тот же объем знаний в одном тщательно подготовленном видео за 15 минут.",
    },
    {
      id: 3,
      title: "Применение разных форматов.",
      description:
        "Видео-уроки, практические задания, конспекты, мастер-классы, обсуждения в сообществе — все это дает полноценную картину и ускоряет процесс обучения.",
    },
    {
      id: 4,
      title: "Наши преподаватели",
      description:
        "ведущие специалисты VK, Avito, Тинькофф, Kaspersky — действующие разработчики с опытом преподавания для большой аудитории.",
    },
    {
      id: 5,
      title: "Наши наставники",
      description:
        "специалисты уровня middle и выше. Процесс отбора наставников в Result проходят лишь единицы из 1000 откликов.",
    },
  ],
};

export const waysSlice = createSlice({
  name: "ways",
  initialState: initialState,
  reducers: {
    removeWay: (state, action: PayloadAction<{ way: Way }>) => {
      state.entities = state.entities.filter(
        (way) => way.id !== action.payload.way.id,
      );
    },
  },
});
