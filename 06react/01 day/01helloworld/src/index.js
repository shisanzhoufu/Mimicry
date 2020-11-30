import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
let app = <App />
//函数式组件
function Hellowarld(props){
    let content  = <p>函数式组件的内容</p>
    return (
        <div>
            <h1>hello function</h1>
            {content}
            {props}
        </div>
    )
}

//类类型组件
class Hellofunction extends React.Component{
    render(){
        return (
            <div>
                <h1>hello class</h1>
                
                <Hellowarld fun="继承的函数"/>
            </div>
        )
    }
}
ReactDOM.render(
    <Hellofunction />,
    document.querySelector('#root')
)
reportWebVitals();