import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import EffectSection from "./components/EffectSection/EffectSection"
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header/>
      <main>
        <IntroSection />
        
        <TabsSection active={tab} onChange={setTab} />
        
        {tab === "main" && <>
          <TeachingSection />
          <DifferencesSection />
        </>}
        {tab === "feedback" && <FeedbackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  )
}

export default App
