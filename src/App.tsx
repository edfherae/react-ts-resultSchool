import Layout from "./components/Layout/Layout";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import EffectSection from "./components/EffectSection/EffectSection"

import { Route, Routes } from "react-router"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<>
            <IntroSection />
            <TeachingSection />
            <DifferencesSection />
          </>} />
          <Route path="feedback" element={<FeedbackSection />} />
          <Route path="effect" element={<EffectSection />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
