import ThemeContext from "../contexts/theme";

export default ({ theme, children }) => (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);