(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{fvEV:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r("f3/d");var a=r("q1tI"),n=r.n(a),c=(r("VMxe"),r("3Z9Z")),s=r("JI6e"),o=r("nOaX"),i=r("pc+1");o.a;var l=function(e){var t,r;function a(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).cards=[],t.GSAP=i.v.registerPlugin(i.c),t.tl=new i.c({paused:!0,delay:.5}),t.state={servicesList:t.props.data},t}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=a.prototype;return o.componentDidMount=function(){},o.render=function(){var e=this;return this.state.servicesList?n.a.createElement("div",null,n.a.createElement("h1",null,"Services"),n.a.createElement(c.a,null,this.state.servicesList.map((function(t,r){var a;return n.a.createElement(s.a,((a={xs:12,sm:6,md:4}).md=3,a.key=r,a.ref=function(t){return e.cards[r]=t},a),n.a.createElement("div",{className:"service"},n.a.createElement("div",{className:"service-img"},n.a.createElement("img",{src:t.data.image.url})),n.a.createElement("div",{className:"service-desc"},n.a.createElement("div",{className:"service-name"},t.data.name.text),n.a.createElement("div",{className:"service-desc"},t.data.description.text))))})))):n.a.createElement("div",null,n.a.createElement("h1",null,"No data!"))},a}(a.Component)},wCYt:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return o})),r.d(t,"default",(function(){return i}));var a=r("q1tI"),n=r.n(a),c=r("Bl7J"),s=r("fvEV");var o="684709123",i=function(e){var t,r;function a(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={services:t.props.data.allPrismicServ.nodes},t}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){return n.a.createElement(c.a,null,n.a.createElement(s.a,{data:this.state.services}))},a}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-services-js-21c3e7985a2fdf7687f7.js.map