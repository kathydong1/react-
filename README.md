react:
   优势：组件化，虚拟DOM，跨平台（移动端）
   缺点：学习曲线陡峭，设计思想独特
react技术栈：react主体+webpack自动化构建工具+redux视图+react-router路由+flux布局+mocha测试+istanbul覆盖率

jsx：对js语法的一个增强：html代码可以直接写在js中，且不能直接运行，需要用babel编译jsx，例如var str=<div>内容</div>，需要注意的是有且只有一个根元素
   <script type="text/babel"></script>       {}表示输出内容模板字符
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
style的标签中需要{{}}
react组件生命周期
    componentWillMount(){}创建之前
    componentDidMount(){}创建之后
    componentWillUpdate(){}更新之前
    componentDidpdate(){}更新之后
    componentWillUnmount(){}卸载之前
    componentWillReceiveProps(){}组件参数更新之后

创建列表的要给子组件加上key属性{i}

react获取DOM元素的方法是给元素标签添加ref，相当于id,获取的方式是用this.refs['idname']------>获取的是DOM元素

表单问题：
   表单输入框中value要从父组件接受动态的默认值，需要用defaultValue来定义，用value是只读状态
   选中框也是用defaultChecked
  <input type="text" defaultValue={this.props.value}/>

事件冒泡：
ev.nativeEvent.stopImmediatePropagation()

组件通信
   父传子   父写法：name="comm"   ---->子写法：this.props.name
   子传父   在父级中定义执行函数fn  ----->子写法：this.props.fn(传入子集参数)
   
webpack打包工具结合react：
   配置webpack   ---->cnpm install -g webpack -D环境
                 ---->cnpm install -g -dev-server-D安装服务器
                 ---->cnpm install babel-core -D安装后台编译babel工具
                 ---->cnpm install babel-preset-es2015 -D安装config
                 ---->cnpm install babel-loader -D
                 
                 cnpm install webpack -dev-server -D   webpack服务器本地依赖
                 
                 
                 这些命令结束会在packjson.json文件中生成一个配置，之后会根据json中配置执行npm install安装依赖
                 
                 
    

