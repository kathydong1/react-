import React,{Component} from 'react';
var echarts = require('echarts');
class C extends Component{
	componentDidMount(){
    let myChart = echarts.init(document.getElementById('charts'));
    let box5 = echarts.init(document.getElementById('box5'));
    let box6 = echarts.init(document.getElementById('box6'));
		myChart.setOption({
			tooltip : {
				trigger: 'axis'
			},
			toolbox: {
				show : true,
				feature : {
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['产品一','产品而','产品三','产品四','产品五','产品六','产品其','8月','9月','10月','11月','12月']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'系列',
					type:'bar',
					data:[25, 18, 35, 70, 20, 76.7, 135.6, 162.2, 32.6, 20.0, 10, 9],
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				}
			]
        })
        box5.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['']
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
        box6.setOption({
            backgroundColor: '#2c343c',
                title: {
                    text: '',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },
            
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
            
                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series : [
                    {
                        name:'',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:274, name:'联盟广告'},
                            {value:235, name:'视频广告'},
                            {value:400, name:'搜索引擎'}
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
            
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
        })
   
        
        var prev = document.getElementById('prev');
        var oSpan = document.getElementById('oSpan');
        var next = document.getElementById('next');
        var oul = document.getElementById('oul');
        var n = 0;
        show();
        next.onclick = function(){
            n++;
            show();
        }
        prev.onclick = function(){
            n--;
            show();
        }
        function show(){
            var date = new Date();
            date.setDate(1);
            date.setMonth(date.getMonth()+n);
            oSpan.innerHTML = date.getFullYear()+'年'+(date.getMonth()+1)+'月';
            date.setMonth(date.getMonth()+1);
            date.setDate(0);
            var n1 = date.getDate();
            var date = new Date();
            date.setDate(1);
            date.setMonth(date.getMonth()+n);
            var n2 = date.getDay();
            if(n2==0){
                n2 = 7;
            }
            var date = new Date();
            var n3 = date.getDate();
            var str = '';
            for(var i=0;i<n2-1;i++){
                str += '<li><span></span></li>';
            }
            for(var i=0;i<n1;i++){
                str += '<li><span>'+(i+1)+'</span></li>';
            }
            oul.innerHTML = str;
            var lis = oul.getElementsByTagName('li');
            for(var i=0;i<lis.length;i++){
                if(n<0){
                    lis[i].className = 'gray';
                }else if(n==0){
                    if(i<n3-1+n2-1){
                        lis[i].className = 'gray';
                    }
                    if(i==n3-1+n2-1){
                        lis[i].className= 'actives';
                    }
                }
            }
            
        }
     
    

        
        
    
    }
	  render(){
       
        
        return(
		 <section id="sectin">
            <div id="con">
                <div id="left">  
                    <ul className="topPic">
                        <li>
                            <div className="leftLi">
                                <i className="fa fa-heart-o"></i>
                                <h3>933</h3>                               
                            </div>
                            <p>933 People liked your page the last 24hs. Whoohoo!</p>
                        </li>
                        <li>
                            <div className="leftLi">
                                <i className="fa fa-tablet"></i>
                                <h3>+48</h3>                               
                            </div>
                            <p>48 New files were added in your cloud storage.</p>
                        </li>
                        <li>
                            <div className="leftLi">
                                <i className="fa fa-comment-o"></i>
                                <h3>51</h3>                               
                            </div>
                            <p>You have 23 unread messages in your inbox.</p>
                        </li>
                        <li>
                            <div className="leftLi">
                                <i className="fa fa-gift"></i>
                                <h3>+10</h3>                               
                            </div>
                            <p>More than 10 news were added in your reader.</p>
                        </li>
                        <li>
                            <div className="leftLi">
                                <i className="fa fa-lemon-o"></i>
                                <h3>OK!</h3>                               
                            </div>
                            <p>Your server is working perfectly. Relax & enjoy.</p>
                        </li>
                    </ul>
                    <div id="indexCon">
                        <ul className="firstLine">
                            <li>
                                <div className="dta">
                                    <h5>一周数据</h5>
                                    <p><i className="fa fa-database"></i> 70%</p>
                                    <div className="dtabt">
                                        <h id="box5" style={{width:250,height:190}}></h>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dta">
                                    <h5>销量冠军</h5>
                                    <p><i className="fa fa-heart"></i> 35</p>
                                    <div className="dtabt">
                                    <img src={require('./img/img20.jpg')} alt=''/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dta">
                                    <h5>至尊会员</h5>
                                    <div className="fnn">
                                        <dl>
                                            <dt><img src={require('./img/ui-zac.jpg')} alt=''/></dt>
                                            <dd>Mr.lics</dd> 
                                        </dl>
                                        <aside className="mebot">
                                            <span className="merig">2016.7</span>
                                            <span className="melef">$59203</span>
                                        </aside>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="firstLine secondLine">
                             <li>
                                <div className="dta">
                                    <h5>库存告急</h5>
                                    <div className="fnn">
                                    <h id="box6" style={{width:250,height:190}}></h>
                                    </div>
                                   
                                </div>
                            </li>
                            <li>
                                <div className="dta">
                                <img src={require('./img/c.jpg')} alt=''/>
                                    <div className="fnn2">
                                          <i className="fa fa-instagram fa-4x"></i>
                                          <b>@me</b>
                                          <b>2min.ago</b>
                                          <span className="fa fa-commenting">关注：38</span>
                                          <span className="fa fa-commenting">消息：12</span>
                                    </div>
                                     
                                </div>
                            </li>
                           
                            <li>
                                <div className="dta">
                                    <h5>收入</h5>
                                    <div className="fnn">
                                        <div className="fnn3">
                                          <span>本周：6472RMB</span>
                                          <span>本月：32641RMB</span>
                                           <i className="fa fa-camera"></i>
                                          </div>
                                    </div>
                                      
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="chart">
                        <h3>本月销售折线图</h3>
                         <div id="charts"></div>
                    </div>
                </div>


                <div id="right">
                    <div id="member">
                        <h3>消息通知</h3>
                        <ul className="Lister">
                            <li>
                                <span className="badge"><i className="fa fa-clock-o"></i></span>
                                <p className="pcon">
                                    <span>2 Minutes Ago</span>
                                    <a className="javascript:;">James Brown</a>
                                    <i>subscribed to your newsletter.</i>
                                </p>
                            </li>
                            <li>
                                <span className="badge"><i className="fa fa-clock-o"></i></span>
                                <p className="pcon">
                                    <span>3 Hours Ago</span>
                                    <a href="javascript:;">Diana Kennedy</a>
                                    <i>purchased a year subscription.</i>
                                </p>
                            </li>
                            <li>
                                <span className="badge"><i className="fa fa-clock-o"></i></span>
                                <p className="pcon">
                                    <span>7 Hours Ago</span>
                                    <a href="javascript:;">Brandon Page</a>
                                    <i>purchased a year subscription.</i>
                                </p>
                            </li>
                            <li>
                                <span className="badge"><i className="fa fa-clock-o"></i></span>
                                <p className="pcon">
                                    <span>11 Hours Ago</span>
                                    <a href="javascript:;">Mark Twain</a>
                                    <i>commented your post.</i>
                                </p>
                            </li>
                            <li>
                                <span className="badge"><i className="fa fa-clock-o"></i></span>
                                <p className="pcon">
                                    <span>18 Hours Ago</span>
                                    <a href="javascript:;">Daniel Pratt</a>
                                    <i>purchased a wallet in your store.</i>
                                </p>
                            </li>
                        </ul>
                        <h3>会员列表</h3>
                        <ul className="Lister">
                            <li>
                                <span className="badge2">
								    <img src={require('./img/ui-sherman.jpg')} alt=''/>
								</span>
                                <p className="pcon"> 
                                    <a href="javascript:;">DIVYA MANIAN</a>
                                    <span>Available</span>
                                </p>
                            </li> 
                            <li>
                                <span className="badge2">
								<img src={require('./img/ui-danro.jpg')} alt=""/>
								</span>
                                <p className="pcon"> 
                                    <a href="javascript:;">DJ SHERMAN</a>
                                    <span>I am Busy</span>
                                </p>
                            </li> 
                            <li>
                                <span className="badge2">
								<img src={require('./img/ui-zac.jpg')} alt=""/>
								</span>
                                <p className="pcon"> 
                                    <a href="javascript:;">DAN ROGERS</a>
                                    <span>Available</span>
                                </p>
                            </li> 
                            <li>
                                <span className="badge2">
								<img src={require('./img/ui-sam.jpg')} alt=""/>
								</span>
                                <p className="pcon"> 
                                    <a href="javascript:;">Zac Sniders</a>
                                    <span>Available</span>
                                </p>
                            </li> 
                            <li>
                                <span className="badge2">
								<img src={require('./img/ui-divya.jpg')} alt=""/>
								</span>
                                <p className="pcon"> 
                                    <a href="javascript:;">Marcel Newman</a>
                                    <span>Available</span>
                                </p>
                            </li> 
                        </ul>

                        <div id="div1">
                              <div className="rili">
                               <p>
                                    <a href="javascript:;" id="prev">Prev</a>
                                    <span id="oSpan">xxxx年xx月</span>
                                    <a href="javascript:;" id="next">Next</a>
                               </p>
                               <ol>
                                    <li>一</li>
                                    <li>二</li>
                                    <li>三</li>
                                    <li>四</li>
                                    <li>五</li>
                                    <li>六</li>
                                    <li>日</li>
                                </ol>


                                <ul id="oul"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	  	)
	  }
}

class Divs extends Comment{
    render(){
        return(
            <div></div>
        )
    }
}
export default C
	//let fnn3=document.getElementsByClassName('fnn3')
    // var str3=''
    // var arr3=['yellow','blue','green','orange','pink','red','greenyellow','gold','paleturquoise']
    // for(var i=0;i<15;i++){
    //     let tops=Math.round(Math.random()*120)
    //     let left=Math.round(Math.random()*220)

    //     str3 +='<div style="left="></div>'
    // }