import React, { Component } from 'react';
import { Pagination } from 'antd';
var $ = require("jquery");
let str=JSON.parse(localStorage.getItem('key'))

class Calendar extends Component{
  constructor(props){
     super(props)
     this.state={
       data:str,
       onOff:false,
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
            data:data2,
            onOff:false
          })
      }

  }
  chickAll=()=>{
    this.setState({
      data:JSON.parse(localStorage.getItem('key')),
      onOff:false
    })
  }
  chickAdd=()=>{
    $('.disp').show()
  }
  chickDel=()=>{
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.prod=data2.prod.filter(e=>{  
        if(!e.checked){
           return e
          }
        });
        this.setState({
          data:data2,
          onOff:true
       })
  }
  clickClose=()=>{
    $('.disp').hide()
    $('.disp input').each((i,e)=>{
       $(e).val('')
    })
  }
  clickShow=()=>{
    $('.disp').hide()
    let {data}=this.state
    let arr2=Object.assign(data)
    let obj={}
        obj.num=(+new Date)+Math.round(Math.random()*1000);
        obj.name=$('.disp input').eq(0).val();
        obj.img='img';
        obj.price=$('.disp input').eq(1).val();
        obj.cd=$('.disp input').eq(2).val();
        obj.ms=$('.disp input').eq(3).val();
        obj.data='2017.8';
        obj.ks=$('.disp input').eq(4).val();
        obj.beizhu=$('.disp input').eq(6).val();
        obj.kucun=400;
        obj.checked=false;
        obj.kexiaoshou='1000';
        obj.gongyingshang='北京好莱坞';
    arr2.prod.push(obj)
    this.setState({
      data:arr2,
      onOff:true
    })
    $('.disp input').each((i,e)=>{
      $(e).val('')
   })  

  }
  check=(num)=>{
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    data2.prod.forEach(e=>{
      if(e.num === num){
        e.checked = !e.checked
      }
    });
    
    this.setState({
      data:data2,
      onOff:false
    });
    
  }
  onChange=(page)=>{
    this.setState({
      page:page
    })
    
  }

  render(){
    if(this.state.onOff){
      let data2=decodeURI(JSON.stringify(this.state.data))
      localStorage.setItem('key',data2)
    }

    let {data}=this.state
    let arr2=Object.assign(data)
     let arr=null
     
    arr=arr2.prod.map((e,i)=>{
        let data={
          num:e.num,
          name:e.name,
          price:e.price,
          kucun:e.kucun,
          key:i,
          date:e.data,
          beizhu:e.beizhu,
          gongyingshang:e.gongyingshang,
          kexiaoshou:e.kexiaoshou,
          img:e.img,
          checked:e.checked,
          check:this.check
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
                      <span>库存管理</span>
                      <span className="fa fa-angle-double-right"></span>
                      <span>库存清单</span>
                  </div>

                 <form>
                    型号：<input type="text" className="se"/>
                    <button type="button" onClick={this.chickSearch}>Search</button>
                    <button type="button" onClick={this.chickAll}>CheckAll</button>
                    <div>
                      <button type="button" onClick={this.chickAdd}>添加</button>
                      <button type="button" onClick={this.chickDel}>删除</button>
                      <ul className="disp">
                          <li><span>型号：</span><input type="text"/></li>
                          <li><span>价格：</span><input type="text"/></li>
                          <li><span>数量：</span><input type="text"/></li>
                          <li><span>收货人：</span><input type="text"/></li>
                          <li><span>收货地址：</span><input type="text"/></li>
                          <li><span>电话：</span><input type="text"/></li>
                          <li><span>备注：</span><input type="text"/></li>
                          <li id="differ">
                            <span className="fa fa-check-square-o" onClick={this.clickShow}></span>
                            <span className="fa fa-power-off" onClick={this.clickClose}></span>
                          </li>
                        </ul>
                    </div>
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
                          <td>选择</td>            
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
  change=()=>{
        this.props.check(this.props.num)
    }
  render(){
    return(
      <tr>
        <td>{this.props.num}</td>
        <td>{this.props.name}</td>
        <td><img src={this.props.img}/></td>
        <td>{this.props.price}</td>
        <td>{this.props.kucun}</td>
        <td>{this.props.kexiaoshou}</td>
        <td>{this.props.beizhu}</td>
        <td>{this.props.date}</td>
        <td>{this.props.gongyingshang}</td>
        <td><input type="checkbox" ref="myInput" onChange={this.change}/></td>
    </tr>
    )
  }
}
export default Calendar
