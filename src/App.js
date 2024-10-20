import logo from './logo.svg';
import './App.css';
import Header from './myComponent/header';
import Todos from "./myComponent/todos";
import Footer from "./myComponent/footer";

function App() {
  const onDelete = (todo)=>{
    console.log("onDelete", todo)
  }
  let todo = [
    {
      sn : "01",
      title : "go to market",
      desc : "get that work done"
    },
    {
      sn : "02",
      title : "go to collage",
      desc : "get that work done"
    },
    {
      sn : "03",
      title : "go to hospital",
      desc : "get that work done"
    }
  ]
  return (
    <>
      <Header title="My Todo List" searchBar ={false} />
      <Todos todo={todo} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
