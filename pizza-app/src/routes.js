import VueRouter from 'vue-router'
import Home from './componends/Home'
import Meanue from './componends/Meanue'
import Admin from './componends/Admin'
import About from './componends/About/About'
import Login from './componends/Login'
import Register from './componends/Register'
import Contact from './componends/About/Contact'
import Deliv from './componends/About/Deliv'
import Order from './componends/About/Order'
import History from './componends/About/History'
import PersonName from './componends/About/contact/PersonName'
import Phone from './componends/About/contact/Phone'
export const routes=[
       {path:"/",name:"homeLink", components:{
            default:Home,
            'order':Order,
            'deliv':Deliv,
            'history':History
       }},
       {path:"/meanue",name:"meaLink", component:Meanue},
       {path:"/admin",name:"adminLink",component:Admin},
       {path:"/about",name:"aboutLink",redirect:'/about/contact',component:About,children:[

       		{path:'/about/contact',name:"contactLink",redirect:'/phone',component:Contact,children:[
       			{path:'/phone',name:"phoneNumber",component:Phone},
       			{path:'/personname',name:"personName",component:PersonName},
       		]},
       		{path:'/history',name:"historyLink",component:History},
       		{path:'/order',name:"orderLink",component:Order},
       		{path:'/deliv',name:"delivLink",component:Deliv},
       		
       ]},
       {path:"/login",name:"loginLink",component:Login},
       {path:"/register",name:"registerLink",component:Register},
       {path:"*",redirect:'/'}
      ]