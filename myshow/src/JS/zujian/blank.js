import React, { Component } from 'react';
var $ = require("jquery");

let str=JSON.parse(localStorage.getItem('key'))
class Blank extends Component{
  constructor(props){
    super(props)
    this.state={
      data:str
    }
  }
 
  render(){
    let {data}=this.state
    let arr2=Object.assign(data)
    let arr=null
    arr=arr2.menmber.map((e,i)=>{
        let data={
          num:e.num,
          name:e.name,
          add:e.add,
          tel:e.tel,
          g:e.g,
          sale:e.sale,
          data:e.data,
          img:e.img,
          key:i
        }
        return <Li {...data}/>
     
    })
    return(
		<section id="sectin">
        <div id="heads">
           <span>会员<i>56</i></span>
           <span>关注<i>30</i></span>
           <span>消息<i>47</i></span>
           <span>留言<i>12</i></span>
          </div>    
        <ul id="memberList">
           
            {arr}
        </ul>
         
    </section>
    )
  }
}

class Li extends Component{
  // click=()=>{
  //   $('.acthide').toggle()
  //   $('.actshow').toggle()
  //   $('.mto b').toggleClass('btnsh')
  // }
   render(){
     return (
      <li className="lis">
      <div className="mto">
         <span>编号：{this.props.num}</span>
         <b onClick={this.click}></b>
        </div>
      <ol className="mbo">
         <li><img src={this.props.img} alt=""/></li> 
         <li>
           <div>
             <p>
               <i className="actshow">Name:{this.props.name}</i>
               <input type="text" className="acthide"/>
             </p>
             
             <i>Add:{this.props.add}</i>
             <i>Tel:{this.props.tel}</i>
           </div>
         </li>
         <li>G:{this.props.g}</li>
         <li>Sale:${this.props.sale}</li>
         <li>Data:{this.props.data}</li>
      </ol>
   </li>
     )
   }
}
export default Blank
