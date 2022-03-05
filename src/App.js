import React from 'react'
import './App.css';



class App extends React.Component {

constructor () {

  super()
  this.state={
  //   data:{
  //   product:"",
  //   quantity:"",
  //   price:"",
  //   list: [""]
  // },
  productvalue:'',
  quantityvalue:'',
  pricevalue:'',
  list:[{
    name:'eggs',
    num:5,
    pr:100,
        isSelected: true
      },{
        name:'carots',
        num:7,
        pr:500,
        isSelected:false
      }
  ]

    
  };
}

addtolist =()=>{
  // const {product,quantity,price}=data;

  // if (!data)  return alert ('type s.th plz')
  // const arr=[...this.state.list]
  // arr.push(this.state.data)
  // this.setState({list:arr, data:''})

  const productN= this.state.productvalue
  const quantityN= this.state.quantityvalue
  const priceN= this.state.pricevalue


   if (!productN||!quantityN||!priceN) return alert ('plz type s.th');
  const arr=[...this.state.list]
  arr.push({name: productN,
            num:quantityN,
            pr:priceN
  })
  this.setState({list:arr,productvalue:'',quantityvalue:'', pricevalue:''})

}

switchDone(i){
  const arr=[...this.state.list]
  arr[i].isSelected= !arr[i].isSelected
  this.setState({list: arr})
}

delete=(index)=>{
  let list2=[...this.state.list]
  list2.splice(index,1);
  this.setState({list:list2})
}



render(){
  console.log(this.state);
  return(
    <div style={{margin:40}}>

      
       <input onKeyUp= {(e)=>{
        if(e.keyCode===13){
        this.addTodo()
        }}
      }
      value={this.state.productvalue}
      onChange={(e)=> this.setState({productvalue:e.target.value})}
      placeholder='product name'/>
      <input 
      value={this.state.quantityvalue}
      onChange={(e)=> this.setState({quantityvalue:e.target.value})}
      placeholder='quantity' />
      <input 
      value={this.state.pricevalue}
      onChange={(e)=> this.setState({pricevalue:e.target.value})}
      placeholder='price'/>

      <button  onClick={()=> this.addtolist()}
      style={{margin:20}}>submit</button> 

      <br/>
      <br/>
      <table>
      <tr>
        <th> نام محصول</th>
        <th>تعداد</th>
        <th>	قیمت فی</th>
        <th>قیمت کل</th>
        <th>done/delete</th>
      </tr>

      
         
      {this.state.list.map((item,i) =>
              <tr style={{textDecoration:item.isSelected?'line-through':'none'}} > 
                <td>{item.name}</td>
                <td>{item.num}</td>
                <td>{item.pr}</td>
                <td>{item.num*item.pr}</td>
                <td>
                <button onClick={()=> this.delete(i)} > delete </button> 
                <button onClick={() => this.switchDone(i)}> done </button></td>


              </tr>
              )   
              
            
          }
          
              
      </table>

     
    </div>



  )
}










}












export default App;