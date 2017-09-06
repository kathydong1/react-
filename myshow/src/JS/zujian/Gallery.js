import React, { Component } from 'react';
import { Pagination } from 'antd';
var $ = require("jquery");
let n=0;

let str=JSON.parse(localStorage.getItem('key'))

class Calendar extends Component{
  constructor(props){
     super(props)
     this.state={
      data:str,
      page:1 
     }
  }

  chickSearch=()=>{
    let val=$('.se').eq(0).val();
    if(val){
        let {data} = this.state;
        let data2 = Object.assign(data);
          data2.prod=data2.prod.filter((e,i)=>{
              if(e.name===val){  
                    return e
              }
          })
          this.setState({
            data:data2
          })
      }

  }
  chickAll=()=>{
    this.setState({
      data:JSON.parse(localStorage.getItem('key'))
    })
  }

  render(){
    let {data}=this.state
    let arr2=Object.assign(data)
    let arr=null
    arr2.prod=arr2.prod.filter((e)=>{
      return e.kexiaoshou<100
  })
    arr=arr2.prod.map((e,i)=>{
   
        let data={
          id:e.num,
          name:e.name,
          img:e.img,
          price:e.price,
          kucun:e.kucun,
          key:i,
          date:e.data,
          beizhu:e.beizhu,
          gongyingshang:e.gongyingshang,
          kexiaoshou:e.kexiaoshou
        }
        if(i>(this.state.page-1)*5-1 && i<=this.state.page*5-1){
          return <Tr {...data}/>
        }  
      
    })
    let total=Math.ceil(arr.length/5)*10;
    return(
      <section id="sectin">
            <div id="con">
              <div id="showData">
                  <div id="btn">
                        <span>库存清单</span>
                        <span className="fa fa-angle-double-right"></span>
                        <span>需备货</span>
                    </div>
                 <form>
                  型号：<input type="text" className="se"/>
                 <button type="button" onClick={this.chickSearch}>Search</button>
                 <button type="button" onClick={this.chickAll}>CheckAll</button>
                   
                 </form>
                 <div id="tab">
                  <div id="tabbox">
                    <table>
                      <thead>
                          <tr>
                          <td>编号</td>
                          <td>型号</td>
                          <td>图片</td>
                          <td>价格(RMB)</td>
                          <td>可销售数量</td>
                          <td>库存数量</td>
                          <td>产品备注</td>
                          <td>进存日期</td>
                          <td>供应商</td>             
                          </tr>
                      </thead>
                      <tbody>
                      {arr}
                      </tbody>
                    </table>
                  </div>
                  <div id="pages">
                  <Pagination defaultCurrent={1} onChange={this.onChange} total={total} />
                  </div>
                </div>
                
              </div>
            

            </div>
        </section>
    )
  }
}
class Tr extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td><img src={this.props.img}/></td>
        <td>{this.props.price}</td>
        <td>{this.props.kucun}</td>
        <td>{this.props.kexiaoshou}</td>
        <td>{this.props.beizhu}</td>
        <td>{this.props.data}</td>
        <td>{this.props.gongyingshang}</td>
    </tr>
    )
  }
}
export default Calendar
