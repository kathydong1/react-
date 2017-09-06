import React, { Component } from 'react';
import { Pagination } from 'antd';
var $ = require("jquery");



class Panels extends Component{
  constructor(props){
    super(props)
    this.state={
      data:JSON.parse(localStorage.getItem('key')),
      page:1
    }
  }
  chickSearch=()=>{
    let val=$('.se').eq(0).val();
    let peop=$('.se').eq(1).val();
    if(val){
        let {data} = this.state;
        let data2 = Object.assign(data);
          data2.sale=data2.sale.filter((e,i)=>{
              if(e.xh===val){
                  if(peop){
                    if(e.address===peop){
                      return e
                    }
                  }else{
                    return e
                  }
              }
          })
          this.setState({
            data:data2
          })
      }else{
        if(peop){
          let {data} = this.state;
          let data2 = Object.assign(data);
            data2.sale=data2.sale.filter((e,i)=>{
                if(e.address===peop){
                  return e
                }
              })
              this.setState({
                data:data2
              })
            }
      }

  }
  chickAll=()=>{
    this.setState({
      data:JSON.parse(localStorage.getItem('key'))
    },function(){
      console.log(this.state.data.sale)
    })
  }

  render(){
    let {data}=this.state
    let arr2=Object.assign(data)
    console.log(this.state.data.sale)
    let arr=null
    arr2.sale=arr2.sale.filter((e)=>{
      return !e.home
    }) 
    arr=arr2.sale.map((e,i)=>{
      let data={
          id:e.id,
          xh:e.xh,
          img:e.img,
          price:e.price,
          num:e.num,
          buyer:e.buyer,
          zheko:e.zheko,
          tel:e.tel,
          address:e.address,
          money:e.zheko*e.num*e.price,
          beizhu:e.beizhu,
          checked:e.checked,
          kucun:e.kucun,
          key:i
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
                     <span>销售清单</span>
                     <span className="fa fa-angle-double-right"></span>
                     <span>已处理订单</span>
              </div>
              <form>
                 型号:<input type="text" className="se"/>         
                 地区：<input type="text" className="se"/>
                 <button type="button" onClick={this.chickSearch}>搜索</button>
                 <button type="button" onClick={this.chickAll}>全部</button>
                
              </form>
              <div id="tab">
                  <div id="tabbox">
                    <table>
                      <thead>
                          <tr>
                          <td>编号</td>
                          <td>购买型号</td>
                          <td>图片</td>
                          <td>价格(RMB)</td>
                          <td>数量</td>   
                          <td>折扣</td>
                          <td>实洋</td>
                          <td>收货人</td>
                          <td>收货电话</td>
                          <td>收货地址</td>
                          <td>客户备注</td>
                          <td>状态</td>
                          <td>发货日期</td>
                          <td>订单日期</td>
                    
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
        <td>{this.props.xh}</td>
        <td><img src={this.props.img} alt=""/></td>
        <td>{this.props.price}</td>
        <td>{this.props.num}</td>         
        <td>{this.props.zheko}</td>
        <td>{this.props.money}</td>
        <td>{this.props.buyer}</td>
        <td>{this.props.tel}</td>
        <td>{this.props.address}</td>
        <td>{this.props.beizhu}</td>
        <td>已发货</td>
        <td>2017-8-10</td>
        <td>2017-8-10</td>
    </tr>
    )
  }
}
export default Panels
