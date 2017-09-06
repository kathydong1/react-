import React, { Component } from 'react';




class Todo extends Component{
  render(){
    return(
      <section>
            <div id="con">
                 <h5 id="btn">待处理订单</h5>
                 <form>
                    <input type="text" placeholder="搜索"/>
                    <button>button</button>
                    <button>确认发货</button>
                 </form>
                <table>
                  <thead>
                      <tr>
                      <td>编号</td>
                      <td>购买型号</td>
                      <td>图片</td>
                      <td>价格(RMB)</td>
                      <td>数量</td>
                      <td>收货人</td>
                      <td>折扣</td>
                      <td>实洋</td>
                      <td>收货电话</td>
                      <td>收货地址</td>
                      <td>客户备注</td>
                      <td>选择</td>
                
                      </tr>
                  </thead>
                  <tbody>
                   
                  </tbody>
                </table>
              </div>
        </section>
    )
  }
}
export default Todo
