import { useContext } from "react";
import LanguageContext from "./LanguageContext";

function Hello() {
  const language = useContext(LanguageContext);

  return (
    <>
      <h2>{language}</h2>
    </>
  );
}

export default Hello;
