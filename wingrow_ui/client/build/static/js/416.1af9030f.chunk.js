"use strict";(self.webpackChunkwingrow=self.webpackChunkwingrow||[]).push([[416],{4416:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(1413),a=n(885),o=n(2791),s=n(5653),i=n(1840),l=n(6457),c=n(184),u=function(){var e=(0,o.useState)(),t=(0,a.Z)(e,2),n=t[0],u=t[1],d=(0,o.useState)(!1),f=(0,a.Z)(d,2),p=f[0],g=f[1],m=(0,o.useState)(!1),h=(0,a.Z)(m,2),b=h[0],j=h[1],v=(0,o.useState)(!1),x=(0,a.Z)(v,2),_=x[0],w=x[1],Z=(0,o.useRef)(""),y=(0,o.useState)({photo:""}),O=(0,a.Z)(y,2),N=O[0],P=O[1];(0,o.useEffect)((function(){s.Z.getAllUsers().then((function(e){var t=null===e||void 0===e?void 0:e.data;u(t[0])}))}),[]);return(0,c.jsx)("div",{children:!p&&n?(0,c.jsx)("div",{className:"profile",children:(0,c.jsxs)("div",{className:"profile_container",children:[(0,c.jsx)("div",{className:"profile_image_wrapper",children:(0,c.jsx)("img",{className:"profile_img",src:n.pic?n.pic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"profile"})}),(0,c.jsxs)("div",{className:"profile_details",children:[(0,c.jsxs)("div",{children:["Mobile No : ",n.phone]}),(0,c.jsxs)("div",{children:["Name : ",n.firstname," ",n.lastname]}),n.address&&(0,c.jsxs)("div",{children:["Address : ",n.address]})]}),(0,c.jsxs)("div",{className:"profile_btn_grp",children:[b?(0,c.jsxs)("form",{className:"form_uploaddata",onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("photo",N.photo),g(!0),t&&l.Z.addimage(t).then((function(e){u(e),window.location.reload(),g(!1)})),j(!b)},encType:"multipart/form-data",children:[(0,c.jsx)("input",{type:"file",accept:".png, .jpg, .jpeg",name:"photo",style:{marginLeft:"auto"},onChange:function(e){P((0,r.Z)((0,r.Z)({},N),{},{photo:e.target.files[0]}))}}),(0,c.jsx)("input",{type:"submit",className:"profile_btn_toggle"}),(0,c.jsx)("button",{className:"profile_btn_toggle",onClick:function(){return j(!b)},children:"cancel"})]}):(0,c.jsx)("button",{className:"profile_btn_toggle",onClick:function(){j(!b)},children:"Upload Profile"}),_?(0,c.jsxs)("form",{className:"form_uploaddata",onSubmit:function(e){e.preventDefault(),g(!0);var t=Z.current.value;t&&0!==t.length&&l.Z.addAddress(t).then((function(e){u(e),window.location.reload(),g(!1)})),w(!_)},children:[(0,c.jsx)("input",{type:"text",name:"address",ref:Z}),(0,c.jsx)("input",{type:"submit",className:"profile_btn_toggle"}),(0,c.jsx)("button",{className:"profile_btn_toggle",onClick:function(){return w(!_)},children:"cancel"})]}):(0,c.jsx)("button",{className:"profile_btn_toggle",onClick:function(){w(!_)},children:n.address?"Update Address":"Add Address"})]})]})}):(0,c.jsx)(i.Z,{})})}},5653:function(e,t,n){var r=n(4569),a=n.n(r),o=n(6456),s="http://localhost:4000/",i={getPublicContent:function(){return a().get(s+"all")},getStallsData:function(){return a().get(s+"stalls",{headers:(0,o.Z)()})},getAdminData:function(){return a().get(s+"admin",{headers:(0,o.Z)()})},getInOutdata:function(){return a().get(s+"inwardoutward",{headers:(0,o.Z)()})},getFarmers:function(){return a().get(s+"farmer",{headers:(0,o.Z)()})},getAllUsers:function(){return a().get(s+"allusers",{headers:(0,o.Z)()})},getUsers:function(){return a().get(s+"users",{headers:(0,o.Z)()})}};t.Z=i},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=416.1af9030f.chunk.js.map