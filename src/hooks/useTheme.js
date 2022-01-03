import ThemeContext from '../contexts/theme';
import evalTheme from '../utilities/evalTheme';

export default () => {
  const theme= React.useContext(ThemeContext);

  return evalTheme(theme);
}