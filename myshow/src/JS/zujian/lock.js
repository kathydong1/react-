import React, { Component } from 'react';




class Lock extends Component{
  render(){
    return(
      <section>
            <div id="con">
              <div id="lock">
                  <h3>基本信息</h3>
                        <div className="mesTab">
                                <p><span>姓名:</span><input type="text"/></p>
                                <p><span>部门:</span><input type="text"/></p>
                                <p><span>性别:</span><input type="text"/></p>
                                <p><span>地址:</span><input type="text"/></p>
                                <p><span>电话:</span><input type="text"/></p>
                                <p><span>会员等级:</span><input type="text"/></p>
                                <p><span>描述:</span><input type="text"/></p>
                                <p><span>提交:</span><input type="submit"/></p>
                                <div className="file">
                                  <input type="file" className="shanchuan"/>
                                </div>
                        </div>
                  </div>
            
            </div>
        </section>
    )
  }
}
export default Lock
