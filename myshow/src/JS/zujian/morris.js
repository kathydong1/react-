import React, { Component } from 'react';




class Morris extends Component{
  render(){
    return(
      <section>
            <div id="con">
              <div id="showData">
              <div id="btn">
                     <span>数据分析</span>
                     <span className="fa fa-angle-double-right"></span>
                     <span>销售数据</span>
                </div>
                 <form>
                    <input type="text" placeholder="搜索"/>
                    <button>Search</button>
                 </form>
                <table>
                  <thead>
                      <tr>
                      <td>型号</td>
                      <td>价格(RMB)</td>
                      <td>进折</td>
                      <td>月销量</td>
                      <td>年销量</td>
                      <td>销售折扣</td>
                      <td>实洋</td>
                     
                      <td>库存数量</td>
                      <td>备注</td>
                
                      </tr>
                  </thead>
                  <tbody>
                   
                  </tbody>
                </table>
              </div>

            </div>
        </section>
    )
  }
}
export default Morris
