import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const differences = {
  way: "Узконаправленный подход. Учим только фронтенду, поэтому вы получаете именно те знания, за которыми пришли.",
  easy: "Доступность обучения. Простыми словами объясняем сложные темы на понятных примерах.",
  program:
    "Концентрация знаний. Например, модуль «HTML&CSS» даст вам столько же умений и навыков, как и 6 месяцев обучения по этой программе в госуниверситете.",
};

type ContentType = keyof typeof differences;

interface InitialState {
  contentType: ContentType | null;
  differences: typeof differences;
}

const initialState: InitialState = {
  contentType: null,
  differences: differences,
};

export const differencesSlice = createSlice({
  name: "differences",
  initialState: initialState,
  reducers: {
    changeContentType: (
      state,
      action: PayloadAction<{ contentType: ContentType }>,
    ) => {
      state.contentType = action.payload.contentType;
    },
  },
});
