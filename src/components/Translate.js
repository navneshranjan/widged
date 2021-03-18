import React, { useState } from "react";
import Dropdown from "./Dropdown";
const options = [
  {
    label: "Afrikans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState([0]);
  return (
    <div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};
export default Translate;
