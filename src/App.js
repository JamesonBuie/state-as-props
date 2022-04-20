import Menu from "./menu/Menu";
const menuItems = [
  {
    id: 1,
    type: 'Default Jonesy',
    price: 2,
    qty: 0
  },
  {
    id: 2,
    type: 'Renegade Raider',
    price: 3,
    qty: 0
  },
  {
    id: 3,
    type: 'Skull Trooper ',
    price: 3,
    qty: 0
  }
];
function App() {
  return (
    <div>
      {/* Passing the menuItems array (Array of Objects) as the value for the startingItems prop in the Menu component */}
      <Menu startingItems={menuItems}/> 
    </div>
  );
}

export default App;
