import React, { Component } from 'react';
var echarts = require('echarts');
var charts=require('./charts');
var $ = require("jquery");

class Chart extends Component{
  
  componentDidMount(){
    let box1 = echarts.init(document.getElementById('box1'));
    let box2 = echarts.init(document.getElementById('box2'));
    let box3 = echarts.init(document.getElementById('box3'));
    let box4 = echarts.init(document.getElementById('box4'));
    box1.setOption({
        title: {
            text: '',
            sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {     
                type : 'shadow'     
            },
            formatter: function (params) {
                var tar;
                if (params[1].value != '-') {
                    tar = params[1];
                }
                else {
                    tar = params[0];
                }
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        legend: {
            data:['支出','收入']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type : 'category',
            splitLine: {show:false},
            data :  function (){
                var list = [];
                for (var i = 1; i <= 11; i++) {
                    list.push('11月' + i + '日');
                }
                return list;
            }()
        },
        yAxis: {
            type : 'value'
        },
        series: [
            {
                name: '支出',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
            },
            {
                name: '收入',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
            },
            {
                name: '支出',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'bottom'
                    }
                },
                data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
            }
        ]
    })
     box2.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
     })
    box3.setOption({
        title: {
            text: '浏览器占比变化',
            subtext: '纯属虚构',
            top: 10,
            left: 10
        },
        tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
        },
        legend: {
            type: 'scroll',
            bottom: 10,
            data: (function (){
                var list = [];
                for (var i = 1; i <=28; i++) {
                    list.push(i + 2000 + '');
                }
                return list;
            })()
        },
        visualMap: {
            top: 'middle',
            right: 10,
            color: ['red', 'yellow'],
            calculable: true
        },
        radar: {
           indicator : [
               { text: 'IE8-', max: 400},
               { text: 'IE9+', max: 400},
               { text: 'Safari', max: 400},
               { text: 'Firefox', max: 400},
               { text: 'Chrome', max: 400}
            ]
        },
        series : (function (){
            var series = [];
            for (var i = 1; i <= 28; i++) {
                series.push({
                    name:'浏览器（数据纯属虚构）',
                    type: 'radar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                              width:1
                            }
                        },
                        emphasis : {
                            areaStyle: {color:'rgba(0,250,0,0.3)'}
                        }
                    },
                    data:[
                      {
                        value:[
                            (40 - i) * 10,
                            (38 - i) * 4 + 60,
                            i * 5 + 10,
                            i * 9,
                            i * i /2
                        ],
                        name: i + 2000 + ''
                      }
                    ]
                });
            }
            return series;
        })()
    })
    box4.setOption({
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '销售（sales）', max: 6500},
               { name: '管理（Administration）', max: 16000},
               { name: '信息技术（Information Techology）', max: 30000},
               { name: '客服（Customer Support）', max: 38000},
               { name: '研发（Development）', max: 52000},
               { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配（Allocated Budget）'
                },
                 {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销（Actual Spending）'
                }
            ]
        }]
    })
     
   
    }

  render(){
      console.log(this.props.id)
    return(
        <section id="sectin">
            <div id="con">
                <div id="showData">
                    <div id="btn">
                        <span>数据分析</span>
                        <span className="fa fa-angle-double-right"></span>
                        <span>数据图</span>
                    </div>
                  <ul className="anul">
                        <li>
                            <p id="box1" style={{width:500,height:400,float:'left'}}></p>              
                            <p id="box2" style={{width:500,height:400,float:'left'}}></p>
                        </li>
                        <li>
                            <p id="box3" style={{width:500,height:400,float:'left'}}></p>
                            <p id="box4" style={{width:500,height:400,float:'left'}}></p>
                        </li>
                   
                    </ul>
                    
                                    
                </div>


            </div>
     </section>
    )
  }
}
export default Chart
