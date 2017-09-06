import React, { Component } from 'react';
import { Pagination } from 'antd';

let str=JSON.parse(localStorage.getItem('key'))
class Form extends Component{
  constructor(props){
    super(props)
    this.state={
      data:str,
      page:1
    }
  }

  onChange=(page)=>{
    this.setState({
      page:page
    })   
  }

  render(){
    let {data}=this.state
    let arr=Object.assign(data)
    let arr2=null
    arr2=arr.prod.map((e,i)=>{
         return <div className="showLine" key={i}><img src={e.img} alt=""/></div>
    })
    let data1=Object.assign(data)
    let data2=null
    data2=data1.prod.map((e,i)=>{
      let data={
        num:e.num,
        name:e.name,
        cd:e.cd,
        tel:e.tel,
        price:e.price,
        data:e.data,
        ks:e.ks,
        ms:e.ms,
        img:e.img,
        key:i
      }
      if(i>(this.state.page-1)*5-1 && i<=this.state.page*5-1){  
          return <Ul {...data}/>
      }

    })
    let total=Math.ceil(data2.length/5)*10;
    return(
      <section id="sectin">
            <div id="con">
              
                 <div className="line">
                     <div className="lineLeft">上一页</div>
                     <div className="lineCenter">{arr2}</div>                  
                     <div className="lineRight">下一页</div>
                 </div>
                 
                <div>
                  {data2}
                </div>
                <div id="pages">
                
                  <Pagination defaultCurrent={1} onChange={this.onChange} total={total} /> 
                </div>                        
            
            </div>
        </section>
    )
  }
}

class Ul extends Component{
  render(){
    return (
      <ul id="memberList">
                    <li className="lis">
                      <div className="mto">编号：{this.props.num}</div>
                      <ol className="mbo">
                          <li><img src={this.props.img} alt=""/></li> 
                          <li>
                            <p>
                              <i>系列:{this.props.name}</i>
                              <i>产地:{this.props.cd}</i>
                              <i>款型:{this.props.ks}</i>
                            </p>
                          </li>
                          <li>描述:{this.props.ms}</li>
                          <li>Sale:${this.props.price}</li>
                          <li>Data:{this.props.data}</li>
                      </ol>
                    </li>
                 </ul> 
    )
  }
}


export default Form
