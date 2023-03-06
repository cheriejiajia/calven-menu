import Menu from './Menu';

function App() {
  const menuConfig = [
    { title: 'Home' },
    { title: 'City', subMenu: ['Sydney', 'Melbourne', 'Perth'] },
    { title: 'State', subMenu: ['NSW', 'QLD', 'SA', 'NT'] },
  ];
  return (
    <div className="App">
      <Menu config={menuConfig} />
    </div>
  );
}

export default App;
