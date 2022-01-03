import ModuleContext from '../contexts/module';

export default () => {
  const context = React.useContext(ModuleContext);

  return context;
}