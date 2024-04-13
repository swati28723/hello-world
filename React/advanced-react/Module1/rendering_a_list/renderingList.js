import './index.css';
const topDesserts = [
  {
      id:"1",
      title:"Tiramisu",
      description:"The best tiramisu in town",
      image:"0",
      price:"$5.00"
  },
  {
      id:"2",
      title:"Lemon Ice Cream",
      description:"Mind blowing tast",
      image:"0",
      price:"$4.50"
  },
  {
      id:"3",
      title:"Chocolate mouse",
      description:"Unexplored flavour",
      image:"0",
      price:"$6.00"
  }
];

function App() {
  const listItem = topDesserts.map(dessert => {
    const itemTest = `${dessert.title} - ${dessert.price}`
    return <li>{itemTest}</li>
  })
  return (
    <div>
      <ul>
        {listItem}
      </ul>
    </div>
  )
}

export default App