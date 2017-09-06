import React, { Component } from 'react';
var echarts = require('echarts');



class Basic extends Component{
 
 componentDidMount(){
    var axisData = ['周一','周二','周三','很长很长的周四','周五','周六','周日'];
    var data = axisData.map(function (item, i) {
        return Math.round(Math.random() * 1000 * (i + 1));
    });
    var links = data.map(function (item, i) {
        return {
            source: i,
            target: i + 1
        };
    });
    links.pop();
    let into = echarts.init(document.getElementById('into'));
    let into2 = echarts.init(document.getElementById('into2'));
    into.setOption({
        title: {
            text: '笛卡尔坐标系上的 Graph'
        },
        tooltip: {},
        xAxis: {
            type : 'category',
            boundaryGap : false,
            data : axisData
        },
        yAxis: {
            type : 'value'
        },
        series: [
            {
                type: 'graph',
                layout: 'none',
                coordinateSystem: 'cartesian2d',
                symbolSize: 40,
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                data: data,
                links: links,
                lineStyle: {
                    normal: {
                        color: '#2f4554'
                    }
                }
            }
        ]
    })
    into2.setOption({
        title: {
            text: '笛卡尔坐标系上的 Graph'
        },
        tooltip: {},
        xAxis: {
            type : 'category',
            boundaryGap : false,
            data : axisData
        },
        yAxis: {
            type : 'value'
        },
        series: [
            {
                type: 'graph',
                layout: 'none',
                coordinateSystem: 'cartesian2d',
                symbolSize: 40,
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                data: data,
                links: links,
                lineStyle: {
                    normal: {
                        color: '#2f4554'
                    }
                }
            }
        ]
    })
  
 }
  render(){
    return(
      <section id="sectin">
            <div id="con">
              <div id="showData">
                  <div id="basicT">
                      <div id="btn">
                          <span>销售清单</span>
                          <span className="fa fa-angle-double-right"></span>
                          <span>收入</span>
                      </div>
                      <div id="into"></div>
                       
                        </div>
                  <div id="basicB">
                        <div id="btn">
                          <span>销售清单</span>
                          <span className="fa fa-angle-double-right"></span>
                          <span>支出</span>
                        </div>
                        <div id="into2"></div>
                        
                    </div>
              </div>
            </div>
        </section>
    )
  }
}
export default Basic
