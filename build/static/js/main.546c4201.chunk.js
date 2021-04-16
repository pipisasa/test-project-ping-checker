(this["webpackJsonpstatistics-chart"]=this["webpackJsonpstatistics-chart"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),i=c(18),n=c.n(i),r=c(19),j=c(20),l=c(22),d=c(21),b=c(33),o=c(35),h=c(14),O=c(0),u=Object(s.createContext)(null),x=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).data=[],s.totalSum=0,s.frequencyMap=new Map,s.missed_items_count=0,s.state={statisticData:null,isStarted:!1,socket:null},s.handleMessage=function(e){var t=JSON.parse(e.data);s.totalSum+=t.value,s.frequencyMap.set(t.value,(s.frequencyMap.get(t.value)||1)+1),s.data.length&&parseInt(s.data[s.data.length-1].id)+1!==parseInt(t.id)&&s.missed_items_count++,s.data.push(t)},s.getMediana=function(){var e=Object(o.a)(s.data).sort((function(e,t){return e.value-t.value})),t=Math.floor(e.length/2);return e.length%2?(e[t].value+e[t+1].value)/2:e[t].value},s.getMod=function(){var e,t,c=null,a=Object(b.a)(s.frequencyMap.entries());try{for(a.s();!(t=a.n()).done;){var i=t.value;(!c||c[1]<i[1])&&(c=i)}}catch(n){a.e(n)}finally{a.f()}return(null===(e=c)||void 0===e?void 0:e[0])||0},s.getStandardDeviation=function(e){var t=s.data.reduce((function(t,c){return t+Math.pow(c.value-e,2)}),0),c=Math.sqrt(t/s.data.length).toFixed(4);return parseFloat(c)},s.parseStatistic=function(){if(s.data.length){var e=Date.now(),t=parseFloat((s.totalSum/s.data.length).toFixed(4)),c=s.getMediana(),a=s.getMod(),i=s.getStandardDeviation(t),n=Date.now();s.setState({statisticData:{totalCount:s.data.length,mediana:c,mod:a,average:t,standard_deviation:i,missed_items_count:s.missed_items_count,time_of_calculation:n-e,totalSum:s.totalSum}})}},s.startStatistic=function(){s.socket=new WebSocket("wss://trade.trademux.net:8800/?password=1234"),s.socket.onopen=function(){s.setState({isStarted:!0})},s.socket.onmessage=s.handleMessage},s.handleMessage=s.handleMessage.bind(Object(h.a)(s)),s.startStatistic=s.startStatistic.bind(Object(h.a)(s)),s.parseStatistic=s.parseStatistic.bind(Object(h.a)(s)),s}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsx)(u.Provider,{value:{isStarted:this.state.isStarted,socket:this.state.socket,statisticData:this.state.statisticData,startStatistic:this.startStatistic,parseStatistic:this.parseStatistic},children:this.props.children})}}]),c}(s.Component),m=c(11),v=c(6),p=c(7),f=c.n(p);var g=function(){var e=Object(v.f)().pathname;return Object(O.jsx)("div",{className:"paper navbar",children:Object(O.jsxs)("ul",{className:"nav",children:[Object(O.jsx)("li",{className:f()("nav-item",{active:"/"===e}),children:Object(O.jsx)(m.b,{to:"/",className:"nav-link",children:"Home"})}),Object(O.jsx)("li",{className:f()("nav-item",{active:"/statistics"===e}),children:Object(O.jsx)(m.b,{to:"/statistics",className:"nav-link",children:"Statistics"})}),Object(O.jsx)("li",{className:f()("nav-item",{active:"/ping"===e}),children:Object(O.jsx)(m.b,{to:"/ping",className:"nav-link",children:"Ping"})})]})})};var S=function(e){var t=e.children;return Object(O.jsxs)("div",{className:"layout",children:[Object(O.jsx)(g,{}),Object(O.jsx)("main",{id:"main",className:"layout__body",children:t})]})},k=c(58),N=c(59),C=c(60),_=c(15),y=c(55),M=c(56),w=c(57),D=c(62);var F=function(e){var t=e.title,c=e.subTitle,a=e.description,i=e.link,n=Object(s.useState)(!1),r=Object(_.a)(n,2),j=r[0],l=r[1];return Object(O.jsx)(y.a,{children:Object(O.jsxs)(M.a,{children:[Object(O.jsx)("h4",{children:t}),Object(O.jsx)("p",{children:c}),Object(O.jsx)(w.a,{color:"success",onClick:function(){l(!j)},children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(D.a,{isOpen:j,children:a}),Object(O.jsx)(m.b,{to:i,children:Object(O.jsx)(w.a,{className:"w-100",color:"primary",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})})]})})};var P=function(){return Object(O.jsx)(k.a,{children:Object(O.jsxs)(N.a,{children:[Object(O.jsx)(C.a,{className:"mb-2 mb-md-0",md:6,children:Object(O.jsx)(F,{title:"Task #1",subTitle:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",link:"/statistics",description:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435:"}),Object(O.jsx)("br",{}),"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e \u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0430\u043c \u0441 \u0431\u0438\u0440\u0436\u0438.",Object(O.jsx)("br",{}),"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u043d\u043e\u043f\u043a\u0438 \u201c\u0421\u0442\u0430\u0440\u0442\u201d \u0438 \u201c\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430\u201d. \u041f\u043e \u043d\u0430\u0436\u0430\u0442\u0438\u044e \u043d\u0430 \u201c\u0421\u0442\u0430\u0440\u0442\u201d \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0443 \u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043e\u043a \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u0432\u0435\u0431\u0441\u043e\u043a\u0435\u0442\u0430",Object(O.jsx)("code",{children:" wss://trade.trademux.net:8800/?password=1234 "})," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043e\u043a \u043e\u043d\u043b\u0430\u0439\u043d.",Object(O.jsx)("br",{}),"\u041f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u201c\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430\u201d \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0442\u0430\u043a\u0438\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",Object(O.jsxs)("ul",{className:"def-list",children:[Object(O.jsx)("li",{children:"\u0441\u0440\u0435\u0434\u043d\u0435\u0435"}),Object(O.jsx)("li",{children:"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435"}),Object(O.jsx)("li",{children:"\u043c\u043e\u0434\u0443 (\u043f\u0440\u0438 \u043c\u0443\u043b\u044c\u0442\u0438\u043c\u043e\u0434\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0443 \u043c\u043e\u0434\u0443)"}),Object(O.jsx)("li",{children:"\u043c\u0435\u0434\u0438\u0430\u043d\u0443"}),Object(O.jsx)("li",{children:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u044b\u0445 \u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043e\u043a \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u0438\u0435 \u0435\u0441\u0442\u044c"}),Object(O.jsx)("li",{children:"\u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432"})]}),"\u0420\u0430\u0441\u0447\u0435\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u043e \u0432\u0441\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c \u043e\u0442 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0441\u0442\u0430\u0440\u0442\u0430 \u0434\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043a\u043d\u043e\u043f\u043a\u0438 \u201c\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430\u201d, \u043a\u043d\u043e\u043f\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0433\u043e\u0434\u043d\u043e \u0440\u0430\u0437 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f. \u0424\u043e\u0440\u043c\u0430\u0442 \u201c\u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438\u201d ",Object(O.jsx)("code",{children:"json"}),", \u043f\u043e\u043b\u044f:",Object(O.jsx)("br",{}),Object(O.jsx)("code",{children:"{id : id_\u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438, value : \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435_\u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438}"})]}),Object(O.jsx)("b",{children:"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f:"}),Object(O.jsxs)("ul",{className:"def-list",children:[Object(O.jsx)("li",{children:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u043f\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b."}),Object(O.jsx)("li",{children:"\u0412\u0440\u0435\u043c\u044f \u043c\u0435\u0436\u0434\u0443 \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c \u0421\u0442\u0430\u0440\u0442 \u0438 \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u043c (\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043d\u0435\u0439)"}),Object(O.jsx)("li",{children:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0434\u043e\u0431\u0435\u043d \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f."}),Object(O.jsx)("li",{children:"\u0421\u0442\u0438\u043b\u044c \u043f\u043e\u043b\u0435\u0439 \u0432\u0432\u043e\u0434\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c: \u0431\u043e\u0440\u0434\u0435\u0440 \u0440\u043e\u0432\u043d\u043e 1\u043f\u043a\u0441, \u0447\u0435\u0440\u043d\u044b\u0439, \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043c\u044b\u0448\u0438 \u043d\u0430 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0444\u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0441\u0435\u0440\u044b\u043c, \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u043f\u043e\u043b\u0435 \u0444\u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0436\u0435\u043b\u0442\u044b\u043c (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0442\u043e\u043b\u044c\u043a\u043e CSS / SCSS)."}),Object(O.jsx)("li",{children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e."})]}),Object(O.jsx)("b",{children:"\u0423\u0440\u043e\u0432\u043d\u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f:"}),Object(O.jsxs)("ul",{className:"def-list",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"junior \u0443\u0440\u043e\u0432\u0435\u043d\u044c:"})," \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435"]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"\u0411\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c:"})," \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0434\u0443 \u0438 \u043c\u0435\u0434\u0438\u0430\u043d\u0443                "]})]})]})})}),Object(O.jsx)(C.a,{md:6,children:Object(O.jsx)(F,{title:"Task #2",subTitle:"\u041f\u0438\u043d\u0433\u043e\u0432\u0430\u0442\u0435\u043b\u044c",link:"/ping",description:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),': \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c "\u043f\u0438\u043d\u0433\u043e\u0432\u0430\u0442\u0435\u043b\u044c" \u043b\u044e\u0431\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 JavaScript, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u0438\u043d\u0433\u0430 \u0434\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0432 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430.']}),Object(O.jsx)("b",{children:"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f:"}),Object(O.jsx)("ul",{className:"def-list",children:Object(O.jsx)("li",{children:"\u0421\u0442\u0438\u043b\u044c \u043f\u043e\u043b\u0435\u0439 \u0432\u0432\u043e\u0434\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c: \u0431\u043e\u0440\u0434\u0435\u0440 \u0440\u043e\u0432\u043d\u043e 1\u043f\u043a\u0441, \u0447\u0435\u0440\u043d\u044b\u0439, \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043c\u044b\u0448\u0438 \u043d\u0430 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0444\u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0441\u0435\u0440\u044b\u043c, \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u043f\u043e\u043b\u0435 \u0444\u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0436\u0435\u043b\u0442\u044b\u043c (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0442\u043e\u043b\u044c\u043a\u043e CSS / SCSS)."})})]})})})]})})},T=c(61);var I=function(){var e=Object(s.useState)(""),t=Object(_.a)(e,2),c=t[0],a=t[1],i=function(){var e=Object(s.useState)(!1),t=Object(_.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(null),n=Object(_.a)(i,2),r=n[0],j=n[1];return{loading:c,result:r,checkPing:Object(s.useCallback)((function(e){var t=Date.now();a(!0),fetch(e).then((function(){a(!1),j({ping:Date.now()-t,url:e})})).catch((function(c){console.log({error:c}),a(!1),j({ping:Date.now()-t,url:e})}))}),[])}}(),n=i.checkPing,r=i.loading,j=i.result;return Object(O.jsx)(k.a,{children:Object(O.jsx)(y.a,{children:Object(O.jsxs)(M.a,{children:[Object(O.jsx)("h3",{children:"\u041f\u0438\u043d\u0433\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(O.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c PING"}),Object(O.jsx)(T.a,{value:c,placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 URL...",onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)(w.a,{onClick:function(){n(c)},disabled:!(!r&&c),color:"primary",className:"w-100",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0438\u043d\u0433"}),j&&Object(O.jsxs)("ul",{className:"def-list",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"URL:"})," ",j.url]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"PING:"})," ",j.ping,"\u043c\u0441"]})]})]})})})};var q=function(){var e=Object(s.useContext)(u).statisticData;return Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{className:"def-list",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043e\u043a: "}),e.totalCount]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435: "}),e.average]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435: "}),e.standard_deviation]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"\u041c\u043e\u0434a: "}),e.mod]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"\u041c\u0435\u0434\u0438\u0430\u043da: "}),e.mediana]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u044b\u0445 \u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043e\u043a: "}),e.missed_items_count]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432: "}),e.time_of_calculation,"\u043c\u0441."]})]})})};var J=function(){var e=Object(s.useContext)(u),t=e.isStarted,c=e.statisticData,a=e.startStatistic,i=e.parseStatistic;return console.log(c),Object(O.jsx)(k.a,{children:Object(O.jsx)(y.a,{children:Object(O.jsxs)(M.a,{children:[Object(O.jsx)("h3",{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),t?c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:'\u041d\u0430\u0436\u0438\u0442\u0435 "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c" \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435'}),Object(O.jsx)(w.a,{onClick:i,color:"primary",children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"}),Object(O.jsx)(q,{})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:'\u041d\u0430\u0436\u0438\u0442\u0435 "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443" \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435'}),Object(O.jsx)(w.a,{onClick:i,color:"primary",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:["\u041f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",Object(O.jsx)("br",{}),"\u041d\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"]}),Object(O.jsx)(w.a,{onClick:a,color:"primary",children:"\u041d\u0430\u0447\u0430\u0442\u044c"})]})]})})})};var L=function(){return Object(O.jsx)(m.a,{children:Object(O.jsx)(S,{children:Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{path:"/",exact:!0,component:P}),Object(O.jsx)(v.a,{path:"/statistics",exact:!0,component:J}),Object(O.jsx)(v.a,{path:"/ping",exact:!0,component:I})]})})})},B=(c(53),function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsx)(x,{children:Object(O.jsx)(L,{})})}}]),c}(s.Component)),G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root")),G()}},[[54,1,2]]]);
//# sourceMappingURL=main.546c4201.chunk.js.map