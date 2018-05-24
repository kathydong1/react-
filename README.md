react:
   优势：组件化，虚拟DOM，跨平台（移动端）
   缺点：学习曲线陡峭，设计思想独特
react技术栈：react主体+webpack自动化构建工具+redux视图+react-router路由+flux布局+mocha测试+istanbul覆盖率

jsx：对js语法的一个增强：html代码可以直接写在js中，且不能直接运行，需要用babel编译jsx，例如var str=<div>内容</div>，需要注意的是有且只有一个根元素
   <script type="text/babel"></script>       {}表示输出内容
react-dom：操作dom元素
      ReactDom.render(jsx语法)
react组件封装：面向对象
       //扩展一个组件一定要继承自react.component,类似于自定义标签
       1.定义组件,组件属性
         class Person extends React.Component{
                 render(){
                    return   <div>
                                  <input type="text" onchange={this.say.bind(this)}/>
                                  <span>{this.props.name}</span>
                                  <span>{this.state.value}</span>
                             </div>
                    
                   
                 }
                 //ES6类写法
                 constructor(...args){ES6构造函数,和所有的参数
                    //代表父类的构造函数
                    super(...args);
                    this.state={value:''}
                 }
                 say(ev){say方法

                    this.setState({
                       value:ev.target.value
                    })
                }
         }  
      2.使用组件
          <Person/>传递一个name属性
          ReactDom.render(<Person name="东东"/>,Document.getElementById('box'))
react状态:
    constructor中可以直接给this.state赋值，在方法中要用this.setState({})修改state
    且constructor中必须要调用super()
