import ThemeContext from '../contexts/theme';
import evalTheme from '../utilities/evalTheme';

export default (context = ThemeContext) => {
  const theme = React.useContext(context);

  return evalTheme(theme);
}