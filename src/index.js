import _ from 'lodash';
import './style.css';
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
 console.log('Looks like we are in development mode!');
}
import Myimg from '../static/imgs/one.png';
import Date from './data.xml'
import print from './print.js';
import {cube} from './math.js';
function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var element = document.createElement('pre');
    element.innerHTML = _.join(['hello', 'webpack'],' ');
    btn.innerHTML = 'Click me add cjeck the console!';
    btn.onclick=print;
    element.appendChild(btn);
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Myimg;
    element.appendChild(myIcon);
    console.log(Date)

    element.innerHTML = [
    'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
     ].join('\n\n');
    return element;
}
document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!');
        print();
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}