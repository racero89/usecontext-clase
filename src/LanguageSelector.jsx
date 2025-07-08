import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();

  const handleChangeLanguage = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleChangeLanguage}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default LanguageSelector;
