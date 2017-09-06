import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './My.css';
import './JS/zujian/css/css/font-awesome.css';
import {BrowserRouter as Router,Route,Link,Switch,Redirect}from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//组件
import Content from './JS/zujian/content';
import General from './JS/zujian/general';
import Calendar from './JS/zujian/Calendar';
import Gallery from './JS/zujian/Gallery';
import Panels from './JS/zujian/Panels';
import Todo from './JS/zujian/Todo';
import Blank from './JS/zujian/blank';
import Lock from './JS/zujian/lock';
import Form from './JS/zujian/form';
import Basic from './JS/zujian/basic';
import Responsive from './JS/zujian/responsive';
import Morris from './JS/zujian/morris';
import Chart from './JS/zujian/charts';
 
    var $ = require("jquery");
    //数据
    let data2={
      sale:[
                  {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRG1A',
                  home:true,
                  img:require('./JS/zujian/img/img5.jpg'),
                  price:'12000',
                  num:2,
                  buyer:'梦雅',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'北京',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                  setdata:'',
                  suredata:'2017-8-25'
                },
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRG1A',
                  home:true,
                  img:require('./JS/zujian/img/img5.jpg'),
                  price:'12000',
                  num:2,
                  buyer:'梦雅',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'北京',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                  setdata:'',
                  suredata:'2017-8-25'
                },
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRG1A',
                  home:false,
                  img:require('./JS/zujian/img/img5.jpg'),
                  price:'12000',
                  num:2,
                  buyer:'梦雅',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'北京',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                  setdata:'',
                  suredata:'2017-8-25'
                },
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRG1A4',
                  home:false,
                  img:require('./JS/zujian/img/img17.jpg'),
                  price:'19000',
                  num:2,
                  buyer:'周大福',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'北京',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                  
                  setdata:'',
                  suredata:'2017-8-25'
                },
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRG9A',
                  home:true,
                  img:require('./JS/zujian/img/img6.jpg'),
                  price:'45000',
                  num:2,
                  buyer:'赵四',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'北京',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                 
                  setdata:'2017-8-25',
                  suredata:'2017-8-25'
                },
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRG1A',
                  home:true,
                  img:require('./JS/zujian/img/img9.jpg'),
                  price:'17000',
                  num:2,
                  buyer:'尼古拉',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'山东',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                 
                  setdata:'2017-8-25',
                  suredata:'2017-8-25'
                },
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRGT1',
                  home:true,
                  img:require('./JS/zujian/img/img12.jpg'),
                  price:'24000',
                  num:2,
                  buyer:'小小',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'山东',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                 
                  setdata:'2017-8-25',
                  suredata:'2017-8-25'
                }
                ,
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRGT1',
                  home:false,
                  img:require('./JS/zujian/img/img14.jpg'),
                  price:'24000',
                  num:2,
                  buyer:'丽丽',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'黑背',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                 
                  setdata:'2017-8-25',
                  suredata:'2017-8-25'
                }     
                ,
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MRGT1',
                  home:true,
                  img:require('./JS/zujian/img/img13.jpg'),
                  price:'24000',
                  num:2,
                  buyer:'明丽',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'吉林',
                  beizhu:'请包装',
                  kucun:'530支',
                  checked:false,
                  
                  setdata:'2017-8-25',
                  suredata:'2017-8-25'
                }  
                ,
                {
                  id:(+new Date)+Math.round(Math.random()*1000),
                  xh:'MR1',
                  home:true,
                  img:require('./JS/zujian/img/img18.jpg'),
                  price:'24000',
                  num:2,
                  buyer:'习大大',
                  zheko:0.8,
                  money:0,
                  tel:'188888888888',
                  address:'云南',
                  beizhu:'请包装',
                  kucun:'500支',
                  checked:false,
                  
                  setdata:'2017-8-25',
                  suredata:'2017-8-25'
                }   
      ], 
      menmber:[
        { 
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/friends/fr-01.jpg'),
          name:'kathy',
          add:'洛杉矶',
          tel:'1846039521',
          g:'金牌',
          sale:'20903',
          data:'2015.5.23',
          n:1
        },
        {
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/friends/fr-02.jpg'),
          name:'youko',
          add:'旧金山',
          tel:'010-1336543',
          g:'金牌',
          sale:'20003',
          data:'2015.5.23',
          n:1
        },
        {
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/friends/fr-04.jpg'),
          name:'Cristina',
          add:'加拿大',
          tel:'1223453743',
          g:'金牌',
          sale:'10903',
          n:1,
          data:'2015.5.23'
        }
        ,
        {
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/friends/fr-06.jpg'),
          name:'Cristi',
          add:'加拿大',
          tel:'1223453743',
          g:'金牌',
          sale:'10903',
          n:1,
          data:'2015.5.23'
        },
        {
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/friends/fr-07.jpg'),
          name:'Ann',
          add:'巴黎',
          tel:'13445453743',
          g:'金牌',
          sale:'10903',
          n:1,
          data:'2015.5.23'
        }
        
      ],
      prod:[
        {
          
          num:(+new Date)+Math.round(Math.random()*1000),
          name:'casio1',
          price:'19000',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          beizhu:'来呀',
          checked:false,
          kucun:10,
          kexiaoshou:10,
          gongyingshang:'北京新雅特',
          img:require('./JS/zujian/img/img5.jpg')
        },
        {
          name:'casio2',
          price:'570RMB',
          img:require('./JS/zujian/img/img6.jpg'),
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          checked:false,
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:10,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
        }
        ,
        {
          name:'casio3',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          checked:false,
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img7.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          checked:false,
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img8.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          checked:false,
          data:'2017.9.1',
          ks:'经典男款',
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:70,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img9.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          beizhu:'来呀',
          checked:false,
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img10.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          checked:false,
          ks:'经典男款',
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:30,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img15.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          checked:false,
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img12.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          beizhu:'来呀',
          checked:false,
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img13.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          checked:false,
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img14.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          checked:false,
          ks:'经典男款',
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img17.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          checked:false,
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:60,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img18.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          checked:false,
          ks:'经典男款',
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img19.jpg')
        }
        ,
        {
          name:'casio2',
          price:'570RMB',
          cd:'新加坡',
          ms:'完美品质',
          data:'2017.9.1',
          ks:'经典男款',
          checked:false,
          beizhu:'来呀',
          kucun:1000,
          kexiaoshou:900,
          gongyingshang:'北京新雅特',
          num:(+new Date)+Math.round(Math.random()*1000),
          img:require('./JS/zujian/img/img20.jpg')
        }
      ]
    }
    localStorage.setItem('key',JSON.stringify(data2))
    //添加数据
     
    //设置路由
    let data = [
      {
        name:'index',
        component:<Content data={data2} id={+new Date}/>
      },
      {
        name:'general',
        component:<General data={data2} id={+new Date}/>
      },
      {
        name:'calendar',
        component:<Calendar data={data2} id={+new Date}/>
      },
      {
        name:'gallery',
        component:<Gallery data={data2} id={+new Date}/>
      },
      {
        name:'panels',
        component:<Panels data={data2} id={+new Date}/>
      },
      {
        name:'todo_list',
        component:<Todo data={data2} id={+new Date}/>
      },
      {
        name:'blank',
        component:<Blank data={data2} id={+new Date}/>
      },  
      {
        name:'lock_screen',
        component:<Lock data={data2} id={+new Date}/>
      },
      {
        name:'form_component',
        component:<Form data={data2} id={+new Date}/>
      },
      {
        name:'basic_table',
        component:<Basic data={data2} id={+new Date}/>
      },
      {
        name:'responsive_table',
        component:<Responsive data={data2} id={+new Date}/>
      },
      {
        name:'morris',
        component:<Morris data={data2} id={+new Date}/>
      },
      {
        name:'chartjs',
        component:<Chart data={data2} id={+new Date}/>
      }
    
    ]

    let Child = (obj) => {
    
          let {match} = obj;
          let f = null;
          f = data.find(e=>{
            if(e.name === match.params.id){
              return e;
            }
          });
          if(!f){
            return <Content />;
          }else{
            return f.component;
          }
    }


    //组件结构
    class App extends Component{
      constructor(){
        super()
        this.state={
          arr:[
            {
              name:'销售清单',
              classn:'fa fa-desktop',
              con:['待处理订单','已处理订单'],
              html:['general','panels']
            },
            {
              name:'会员管理',
              classn:'fa fa-book',
              con:['全部会员'],
              html:['blank']
            },
            {
              name:'库存清单',
              classn:'fa fa-cogs',
              con:['库存清单','需备货'],
              html:['calendar','gallery']
            },
            
            {
              name:'商品管理',
              classn:'fa fa-tasks',
              con:['商品维护'],
              html:['form_component']
            },
            {
              name:'收入支出',
              classn:'fa fa-th',
              con:['利润分析'],
              html:['basic_table']
            },
            {
              name:'数据分析',
              classn:'fa fa-bar-chart-o',
              con:['数据图'],
              html:['chartjs']
            }
          ]
        }
      }
      componetDidMount(){
         
      }
      click1=()=>{
        $('#sider').toggle('easing')
      
      }
      menter=()=>{
        $('.titbox').eq(0).toggle('easing')
      }
      menter2=()=>{
        $('.titbox').eq(1).toggle('easing')
      }
      render(){
        let {arr}=this.state;
        let List=Object.assign(arr);
        List=List.map((e,i)=>{
          let data={
            num:i,
              key:i,
              txt:e.name,
              con:e.con,
              html:e.html,
              classn:e.classn
          }
          return <LIS {...data}/>
        })
        return(
          <Router>
          <div>
                  <header id="header">
                      <div className="headerCon">
                          <div className="title">
                                  <div className="fa fa-bars" id="pic"></div>
                          </div>
                          <a className="logo" href="/index.html">BACKSTAGE</a>
                          <div className="notic">
                                <span className="noticList" onClick={this.menter}>
                                      <i className="fa fa-tasks"></i>
                                      <b className="noticNum">4</b>
                                      <em className="titbox">亲呀！您有4的订单待处理哟</em>
                                </span>
                                <span className="noticList" onClick={this.menter2}>
                                      <i className="fa fa-envelope-o"></i>
                                      <b className="noticNum">5</b>
                                      <em className="titbox">亲呀！您还有5的消息哟</em>
                                </span>
                          </div>
                          <div className="logoutDiv">
                           
                            <Link className="logout" to="/Login">Logout</Link>
                            
                          </div>
                      </div>
                  </header>
                  <aside id="sider">
                    <ul className="navList">
                        <p>
                            <Link to="/profile.html"><img src={require('./JS/zujian/img/ig7.jpg')} alt=""/></Link>         
                        </p>
                        <h5>casio.co</h5>
                        <ul className="navUl">
                            <li>
                                    <Link className="active navLi" to="/index.html">
                                            <i className="fa fa-dashboard"></i>
                                            <span>首页</span>
                                    </Link>
                            </li>
                            {List}
                        </ul>
                    </ul>
                  </aside>                 
                  <div id="part">
                        <Route strict path="/:id" render={Child}/>
                  </div>  
                  <footer className="site-footer">
                          <div className="text-center">
                              2017 - casio.is
                              <Link to="/index.html" className="go-top">
                                  <i className="fa fa-angle-up"></i>
                              </Link>
                          </div>
                      </footer>                
                  
          </div>
        </Router>
        )
      }
    }
   //生成li
    class LIS extends Component{

      click=()=>{
          let sub=$('.sub')[this.props.num]
          $(sub).slideToggle(400)
      }
      render(){
        let data=null;
        data=this.props.con.map((e,i)=>{
              return <li key={i}><Link to={this.props.html[i]}>{e}</Link></li>
            })
        return(
          <li>
                <a href="javascript:;" className="navLi" onClick={this.click}>
                  <i className={this.props.classn}></i>
                  <span>{this.props.txt}</span>
              </a>
              <ul className="sub">
                {data}
              </ul>
          </li>
        )
      }
    }

    //登陆
    class Login extends Component{
      constructor(props){
          super(props)
          this.state={
             bol:false,
             bols:false
          }
      }
      click2=()=>{
        this.setState({
          bols:true
        })
      }
      click=()=>{
          let val=$('#non input').eq(0).val()
          let password=$('#non input').eq(1).val()
          if(val){
            let bool=data2.menmber.some((e)=>{
                  return e.name==val&&e.n==password
                
               })
            if(!bool){
              alert('请输入正确的用户名和密码')
            }
            this.setState({
              bol:bool
            })

          }else{
                 alert('请输入用户名')
          }
        }
          
      render(){
       
        if(this.state.bols){
          return (<Redirect to="/protected/" />);
        }
        if(this.state.bol){
          return (<Redirect to="/index.html" />);
        }
        return(
              <div id="conss">
                <img src={require('./JS/zujian/img/login-bg.jpg')} alt=""/>
                <div id="conten">
                  <h5 id="bt">Login Form</h5>
                  <ul id="non">
                    <li><input type='text' placeholder="用户名" id="txt1"/></li>
                    <li><input type="password" placeholder="密码" id="txt2"/></li>
                    <li><b id="logIn" onClick={this.click2}>注册</b></li>
                    <li><button type="button" id="btn1" onClick={this.click}><span className="fa fa-lock"></span>Login in</button></li>
                        
                    <div className="lines">
                      <p>Don't have an account yet?</p>
                      <p>Create an account</p></div>
                  </ul>
              
            </div>
          </div>
        )
      }
    }

  //注册
    class ZhuChe extends Component{
      render(){
        return(
          <div style={{width:300,height:300,background:'red'}}></div>
        )
      }
    }
    

    //渲染DOM
    ReactDOM.render(
      <Router>  
        <div>
          <Switch>
              <Route exact path="/protected/" component={ZhuChe}/>
              <Route exact path="/" component={Login}/>
              <Route strict path="/:id" component={App}/>
          </Switch>
        </div>  
      </Router>
    ,document.getElementById('root'));
    registerServiceWorker();
    if (module.hot) {
      module.hot.accept();
      }

      

  //     <Router>
      // <Route path="/index.html" render = {()=>{
      //       if(this.state.bol){
      //         return <Content />
      //       }else{
      //         return <Redirect to="/login" />
      //       }
      //       }}/>
        
  //     <Route path="/login" render={(props)=>{
  //           return <Login changeBl={this.changeBl}/>}}/>
    
  // </Router>