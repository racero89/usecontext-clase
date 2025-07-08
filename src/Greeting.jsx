import { useLanguage } from "./LanguageContext";

const Greeting = () => {
  const { language } = useLanguage();

  const greeting = {
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };
  return (
    <>
      <h2>{greeting[language]} </h2>
    </>
  );
};
export default Greeting;
