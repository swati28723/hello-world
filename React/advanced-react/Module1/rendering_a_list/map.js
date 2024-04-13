const data = [
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

const topDesserts = data.map(dessert => {
    return {
        content: `${dessert.title} - ${dessert.description}`,
        price: dessert.price
    }
})

export default function App (){
    console.log(topDesserts);
    return <h1>Example the console output</h1>;
}
