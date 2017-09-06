import React, { Component } from 'react';
import { Pagination } from 'antd';
var $ = require("jquery");


let n=0;


let str=JSON.parse(localStorage.getItem('key'))

class General extends Component{
  constructor(props){
    super(props)
    this.state={
      data:str,
      onOff:false,
      num:5,
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
            data:data2,
            onOff:false
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
                data:data2,
                onOff:false
              })
            }
      }

  }
  chickAll=()=>{
    console.log('点击全选')
    let str=JSON.parse(localStorage.getItem('key'))
    this.setState({
      data:str,
      onOff:false
    })
  }
  chickAdd=()=>{
    $('.disp').show()
  }
  chickSub=()=>{
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.sale.map(e=>{   
        if(e.checked){
          e.home=false;
          e.checked=false;
        }
    });
    this.setState({
      data:data2,
      onOff:true
    })
  }
  chickDel=()=>{
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.sale=data2.sale.filter(e=>{     
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
    console.log(data.sale)
    let arr2=Object.assign(data)
    let obj={}
        obj.id=n++;
        obj.xh=$('.disp input').eq(0).val();
        obj.img='img';
        obj.price=$('.disp input').eq(1).val();
        obj.num=$('.disp input').eq(2).val();
        obj.buyer=$('.disp input').eq(3).val();
        obj.zheko=0.8;
        obj.money=360;
        obj.tel=$('.disp input').eq(5).val();
        obj.address=$('.disp input').eq(4).val();
        obj.beizhu=$('.disp input').eq(6).val();
        obj.kucun=400;
        obj.checked=false;
        obj.home=true;
        obj.setdata='';
        obj.suredata=new Date();
    arr2.sale.push(obj)
    console.log(arr2)
    this.setState({
      data:arr2,
      onOff:true
    })
    $('.disp input').each((i,e)=>{
      $(e).val('')
   })  

  }
  check=(id)=>{
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    data2.sale.forEach(e=>{
      if(e.id === id){
        e.checked = !e.checked
      }
    });
    this.setState({
      data:data2,
      onOff:true
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
    console.log(data.sale)
    let arr2=Object.assign(data)
    let arr=null
    arr2.sale=arr2.sale.filter((e)=>{
        return e.home
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
          key:i,
          n:i,
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
                     <span>销售清单</span>
                     <span className="fa fa-angle-double-right"></span>
                     <span>待处理订单</span>
                </div>
                <form> 
                    
                      型号:<input type="text" className="se"/>
                      地区:<input type="text" className="se"/>           
              
                      <button type="button" onClick={this.chickSearch}>搜索</button>
                      <button type="button" onClick={this.chickAll}>全部</button>
                    <div>
                      <button type="button" onClick={this.chickAdd}>添加</button>
                      <button type="button" onClick={this.chickDel}>删除</button>
                      <button type="button" onClick={this.chickSub}>提交</button>
                  
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
                            <td>库存</td>
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
        this.props.check(this.props.id)
    }
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
          <td>{this.props.kucun}</td>
          <td><input type="checkbox" ref="myInput" onChange={this.change}/></td>
      </tr>
      )
    }
}


export default General
