"use strict";(self.webpackChunkwingrow=self.webpackChunkwingrow||[]).push([[344],{2344:function(e,a,t){t.r(a),t.d(a,{default:function(){return F}});var s=t(7762),r=t(9439),n=t(2791),l=t(7689),i=t(184),d=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.j3,{})})},c=t(5194),o=t(4565),m=function(e){var a=e.header,t=e.value;return(0,i.jsx)("div",{className:"card_layout",children:(0,i.jsxs)(c.Z,{className:"card-content",children:[(0,i.jsx)(o.Z,{variant:"h5",component:"div",children:(0,i.jsx)("b",{className:"total-number",children:t})}),(0,i.jsx)(o.Z,{className:"tag",sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:a})]})})},u=t(1840),h=t(8745),f=t(9365),v=t(4020),x=t(8055),j=t(988),_=t(3223);function p(e){var a=e.handleChangeMarket,t=e.fromDate,s=e.setfromDate,r=e.toDate,n=e.settoDate,l=e.value,d=e.setValue,c=e.handleSearch,o=e.farmersMarket,m=e.market,u=e.handleClose,p=e.handleOpen,N=e.open,Z=e.handleSearchmarkets,g=e.handleSearchDate;return(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"filter_btn_admin",onClick:p,children:(0,i.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/1159/1159641.png",width:"30px"})}),(0,i.jsx)(h.Z,{open:N,onClose:u,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsxs)("div",{className:"box_filter",children:[(0,i.jsx)("h2",{style:{margin:"0 auto",fontSize:"30px"},children:"Filters"}),(0,i.jsxs)("div",{className:"header_items",children:[(0,i.jsx)("span",{className:"date_picker_label",children:"Filter by date"}),(0,i.jsx)("div",{className:"date_picker",children:(0,i.jsx)(_.Z,{setValue:d,value:l})}),(0,i.jsx)("button",{className:"filter_btn",onClick:g,children:"Search"})]}),(0,i.jsxs)("div",{className:"header_items_center",children:[(0,i.jsxs)("div",{className:"header_items_filter",children:[(0,i.jsx)("span",{className:"date_picker_label",children:"Filter between dates from"}),(0,i.jsx)("div",{className:"date_picker",children:(0,i.jsx)(_.Z,{setValue:s,value:t})})]}),(0,i.jsxs)("div",{className:"header_items_filter",children:[(0,i.jsx)("span",{className:"date_picker_label",children:"Filter between dates to"}),(0,i.jsx)("div",{className:"date_picker",children:(0,i.jsx)(_.Z,{setValue:n,value:r})})]}),(0,i.jsx)("button",{className:"filter_btn",onClick:c,children:"Search"})]}),(0,i.jsxs)("div",{className:"header_items",children:[(0,i.jsx)("span",{className:"filter-market",children:"Filter market wise :"}),(0,i.jsxs)(x.Z,{sx:{m:1,minWidth:150},size:"small",children:[(0,i.jsx)(f.Z,{id:"demo-select-small",children:"Market"}),(0,i.jsx)(j.Z,{labelId:"demo-select-small",id:"demo-select-small",value:m,label:"Market",onChange:a,children:0!==o.length&&o.map((function(e,a){return(0,i.jsx)(v.Z,{value:e,children:e},a)}))})]}),(0,i.jsx)("button",{className:"filter_btn",onClick:Z,children:"Search"})]})]})})]})}var N=t(1087),Z=function(e){var a=e.handleChangeMarket,t=e.fromDate,s=e.setfromDate,r=e.toDate,n=e.settoDate,l=e.value,d=e.setValue,c=e.handleSearch,o=e.market,h=e.farmersMarket,f=e.open,v=e.setOpen,x=e.handleClose,j=e.handleOpen,_=e.handleSearchmarkets,Z=e.handleSearchDate,g=e.filteredInData,D=e.filteredOutData,k=e.purchaseQty,S=e.purchaseAmount,Y=e.salesQty,C=e.salesAmount,b=e.noOfBookedStalls,y=e.totalFarmers,M=(e.farmers,e.Farmers),w=e.Customer,F=[],A=new Map;return M&&M.forEach((function(e){A.has(e.farmertype)?A.set(e.farmertype,A.get(e.farmertype)+1):A.set(e.farmertype,1)})),A.forEach((function(e,a){F.push({farmertype:a,count:e})})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"admin_main_component",children:[(0,i.jsx)(p,{handleChangeMarket:a,fromDate:t,setfromDate:s,toDate:r,settoDate:n,value:l,setValue:d,handleSearch:c,market:o,farmersMarket:h,open:f,setOpen:v,handleClose:x,handleOpen:j,handleSearchmarkets:_,handleSearchDate:Z}),(0,i.jsxs)("div",{className:"farmers-stats-main",children:[(0,i.jsx)("h2",{className:"overalldata_header stats",children:"Farmers Statistics"}),(0,i.jsxs)("div",{className:"farmers-stats-holder",children:[g&&D&&(0,i.jsxs)("div",{className:"total-stall-market",children:[(0,i.jsx)(m,{header:"Total Market",value:y.size}),(0,i.jsx)(m,{header:"Stalls Booked",value:b})]}),(0,i.jsxs)("div",{className:"quantity",children:[(0,i.jsx)("h2",{children:"Quantity"}),g&&D&&(0,i.jsxs)("div",{className:"total-quantity",children:[(0,i.jsx)(m,{header:"Purchase:",value:k}),(0,i.jsx)(m,{header:"Sales:",value:Y})]})]}),(0,i.jsxs)("div",{className:"amount",children:[(0,i.jsx)("h2",{children:"Amount"}),g&&D&&(0,i.jsxs)("div",{className:"total-amount",children:[(0,i.jsx)(m,{header:"Purchase:",value:S}),(0,i.jsx)(m,{header:"Sales:",value:C})]})]})]})]}),(0,i.jsxs)("div",{className:"farmers-stats-main",children:[(0,i.jsx)("h2",{className:"overalldata_header farmers-type",children:"Types of Farmers"}),F&&(0,i.jsx)("div",{className:"cards_container",children:F.map((function(e,a){return(0,i.jsx)(m,{header:e.farmertype,value:e.count},a)}))})]}),(0,i.jsxs)("div",{className:"total-customers",children:[(0,i.jsx)("h2",{className:"overalldata_header no-consumers",children:"Total No. Of Customers"}),w&&(0,i.jsx)("div",{className:"customers_count",children:w.length})]}),(0,i.jsxs)("div",{className:"admin_links",children:[(0,i.jsxs)("div",{className:"two",children:[(0,i.jsx)(N.rU,{className:"admin_links_details",to:"../listoffarmers",children:"Farmers List"}),(0,i.jsx)(N.rU,{className:"admin_links_details",to:"../listofCustomers",children:"Customers List"})]}),(0,i.jsx)("div",{className:"one",children:(0,i.jsx)(N.rU,{className:"admin_link",to:"../cancelledstalls",children:"Cancelled Stalls List"})})]})]}),!g&&!D&&!M&&(0,i.jsx)(u.Z,{})]})},g=function(e){var a=e.Farmers;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"farmers_data_entries",children:(0,i.jsxs)("div",{className:"farmers_entries",children:[(0,i.jsxs)("div",{className:"farmers_entries_nav",children:[(0,i.jsx)("span",{className:"farmers_entries_nav_farmername",children:"Name"}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmerstype",children:"Type"}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmersContact",children:"Contact"}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmersaddress",children:"Address"})]}),(0,i.jsx)("div",{className:"farmers_entries_body",children:a&&a.map((function(e,a){return(0,i.jsxs)("div",{className:"farmers_entries_section",children:[(0,i.jsxs)("span",{className:"farmers_entries_nav_farmername",children:[e.firstname," ",e.lastname]}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmerstype",children:e.farmertype}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmersContact",children:e.phone}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmersaddress",children:e.address})]},a)}))})]})})})},D=function(e){var a=e.Customer;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"farmers_data_entries",children:(0,i.jsxs)("div",{className:"farmers_entries",children:[(0,i.jsxs)("div",{className:"farmers_entries_nav",children:[(0,i.jsx)("span",{className:"farmers_entries_nav_farmername",children:"Customers Name"}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmerstype",children:"Phone No."}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmersaddress",children:"Address"})]}),(0,i.jsxs)("div",{className:"farmers_entries_body",children:[a&&0!==a.length&&a.map((function(e,a){return(0,i.jsxs)("div",{className:"farmers_entries_section",children:[(0,i.jsxs)("span",{className:"farmers_entries_nav_farmername",children:[e.firstname," ",e.lastname]}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmerstype",children:e.phone}),(0,i.jsx)("span",{className:"farmers_entries_nav_farmerstype",children:e.address})]},a)})),!a&&(0,i.jsx)(u.Z,{}),a&&0===a.length&&(0,i.jsx)("div",{className:"farmers_entries_section",children:"No data available"})]})]})})})},k=function(e){var a=e.CancelledStalls,t=e.Farmers,s=e.handleRefundDelete;return(0,i.jsx)(i.Fragment,{children:a&&(0,i.jsx)("div",{className:"cancellation_feed",children:(0,i.jsxs)("div",{className:"cancellation_feed_container",children:[(0,i.jsx)("h2",{className:"cancellation_header",children:"Cancellation Data"}),(0,i.jsxs)("div",{className:"cancellation_body",children:[a&&0!==a.length&&a.map((function(e,a){var n=t&&t.filter((function(a){return a._id===e.bookedBy})),l=(0,r.Z)(n,1)[0];return(0,i.jsxs)("div",{className:"cancellation_card",children:[(0,i.jsx)("h2",{style:{textAlign:"center",padding:"0.5rem",textTransform:"capitalize"},children:l.firstname+" "+l.Datelastname}),(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Phone No : "}),l.phone]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Stall Address : "}),e.address]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Cancellation Date : "}),e.cancelledAt]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Booked Date : "}),e.bookedAt]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Stall Name :"}),e.stallName]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Refund Status :"}),"Not Refunded"]}),(0,i.jsx)("div",{className:"refund_btn_wrapper",children:(0,i.jsx)("button",{className:"refund_btn",id:e._id,onClick:s,children:"Mark as Refunded"})})]},a)})),a&&0===a.length&&(0,i.jsx)("h2",{style:{margin:"auto"},children:"No Cancellation Data!"}),!a&&(0,i.jsx)(u.Z,{})]})]})})})},S=t(5653),Y=t(4569),C=t.n(Y),b=t(6456),y=t(6525),M=t(7892),w=t.n(M),F=function(){var e=(0,n.useState)(),a=(0,r.Z)(e,2),t=a[0],c=a[1],o=(0,n.useState)(),m=(0,r.Z)(o,2),u=m[0],h=m[1],f=(0,n.useState)(w()(Date.now()).format("YYYY-MM-DD")),v=(0,r.Z)(f,2),x=v[0],j=v[1],_=(0,n.useState)(),p=(0,r.Z)(_,2),N=p[0],Y=p[1],M=(0,n.useState)(),F=(0,r.Z)(M,2),A=F[0],O=F[1],I=(0,n.useState)(w()(Date.now()).format("YYYY-MM-DD")),T=(0,r.Z)(I,2),B=T[0],R=T[1],V=(0,n.useState)(w()(Date.now()).format("YYYY-MM-DD")),q=(0,r.Z)(V,2),E=q[0],P=q[1],U=n.useState(""),W=(0,r.Z)(U,2),z=W[0],Q=W[1],L=(0,n.useState)(),$=(0,r.Z)(L,2),G=$[0],H=$[1],J=(0,n.useState)(),K=(0,r.Z)(J,2),X=K[0],ee=K[1],ae=n.useState(!1),te=(0,r.Z)(ae,2),se=te[0],re=te[1],ne=function(){return re(!1)},le=(0,n.useState)(),ie=(0,r.Z)(le,2),de=ie[0],ce=ie[1],oe=(0,n.useState)(),me=(0,r.Z)(oe,2),ue=me[0],he=me[1];(0,n.useEffect)((function(){y.Z.getBookedStalls().then((function(e){var a=null===e||void 0===e?void 0:e.data;ee(a)})),y.Z.getInwardData().then((function(e){c(null===e||void 0===e?void 0:e.data),Y(null===e||void 0===e?void 0:e.data)})),y.Z.getOutwardData().then((function(e){h(null===e||void 0===e?void 0:e.data),O(null===e||void 0===e?void 0:e.data)})),y.Z.getcancelledStalls().then((function(e){H(null===e||void 0===e?void 0:e.data)})),S.Z.getFarmers().then((function(e){ce(null===e||void 0===e?void 0:e.data)})),S.Z.getUsers().then((function(e){he(null===e||void 0===e?void 0:e.data)}))}),[]);var fe=new Set,ve=new Set,xe=new Set,je=[],_e=0,pe=0,Ne=0,Ze=0,ge=null===X||void 0===X?void 0:X.length;t&&t.forEach((function(e){xe.add(e.market)})),N&&N.forEach((function(e){fe.add(e.market),ve.add(e.userId),_e+=e.purchase_quantity,pe+=e.purchase_rate})),A&&A.forEach((function(e){Ne+=e.sales_quantity,Ze+=e.sales_rate}));var De,ke=(0,s.Z)(xe);try{for(ke.s();!(De=ke.n()).done;){var Se=De.value;je.push(Se)}}catch(Ye){ke.e(Ye)}finally{ke.f()}return(0,i.jsx)(l.Z5,{children:(0,i.jsxs)(l.AW,{path:"/",element:(0,i.jsx)(d,{}),children:[(0,i.jsx)(l.AW,{index:!0,element:(0,i.jsx)(Z,{handleChangeMarket:function(e){Q(e.target.value)},fromDate:B,setfromDate:R,toDate:E,settoDate:P,value:x,setValue:j,handleSearch:function(){var e=t&&t.filter((function(e){var a=e.time.split("T"),t=(0,r.Z)(a,1)[0];return t>=w()(B).format("YYYY-MM-DD")&&t<=w()(E).format("YYYY-MM-DD")})),a=u&&u.filter((function(e){var a=e.time.split("T"),t=(0,r.Z)(a,1)[0];return t>=w()(B).format("YYYY-MM-DD")&&t<=w()(E).format("YYYY-MM-DD")})),s=X&&X.filter((function(e){var a=e.bookedAt.split("T"),t=(0,r.Z)(a,1)[0];return t>=w()(B).format("YYYY-MM-DD")&&t<=w()(E).format("YYYY-MM-DD")}));ee(s),Y(e),O(a),ne()},market:z,farmersMarket:je,open:se,setOpen:re,handleClose:ne,handleOpen:function(){return re(!0)},handleSearchmarkets:function(){var e=t&&t.filter((function(e){return e.market===z}));Y(e),ne()},handleSearchDate:function(){var e=t&&t.filter((function(e){var a=e.time.split("T");return(0,r.Z)(a,1)[0]===w()(x).format("YYYY-MM-DD")})),a=u&&u.filter((function(e){var a=e.time.split("T");return(0,r.Z)(a,1)[0]===w()(x).format("YYYY-MM-DD")})),s=X&&X.filter((function(e){return e.bookedAt===w()(x).format("YYYY-MM-DD")}));ee(s),Y(e),O(a),ne()},filteredInData:N,filteredOutData:A,purchaseQty:_e,purchaseAmount:pe,salesQty:Ne,salesAmount:Ze,noOfBookedStalls:ge,totalFarmers:fe,farmers:ve,Farmers:de,Customer:ue})}),(0,i.jsx)(l.AW,{path:"/listoffarmers",element:(0,i.jsx)(g,{Farmers:de})}),(0,i.jsx)(l.AW,{path:"/listofCustomers",element:(0,i.jsx)(D,{Customer:ue})}),(0,i.jsx)(l.AW,{path:"/cancelledstalls",element:(0,i.jsx)(k,{Farmers:de,CancelledStalls:G,handleRefundDelete:function(e){var a=e.target.id;!0===window.confirm("Confirm Refunded?")&&C().delete("http://localhost:4000/cancelledstalls",{headers:(0,b.Z)(),data:{id:a}}).then((function(e){var a=null===e||void 0===e?void 0:e.data,t=G.filter((function(e){return e._id!==a._id}));H(t)}))}})})]})})}},3223:function(e,a,t){t.d(a,{Z:function(){return o}});var s=t(1413),r=(t(2791),t(4162)),n=t(5017),l=t(6571),i=t(7792),d=t(3484),c=t(184);function o(e){var a=e.setValue,t=e.value;return(0,c.jsx)(l._,{dateAdapter:i.y,children:(0,c.jsx)(r.Z,{spacing:3,children:(0,c.jsx)(d.$,{label:"Date",inputFormat:"MM/DD/YYYY",value:t,onChange:function(e){a(e)},renderInput:function(e){return(0,c.jsx)(n.Z,(0,s.Z)({},e))}})})})}},6525:function(e,a,t){var s=t(4569),r=t.n(s),n=t(6456),l="http://localhost:4000/",i={postInward:function(e,a,t,s,i){return r().post(l+"inward",{commodity:e,purchase_quantity:a,purchase_rate:t,market:s,time:i},{headers:(0,n.Z)()})},postOutward:function(e,a,t,s,i){return r().post(l+"outward",{commodity:e,sales_quantity:a,sales_rate:t,market:s,time:i},{headers:(0,n.Z)()})},getInward:function(){return r().get(l+"inward",{headers:(0,n.Z)()})},getOutward:function(){return r().get(l+"outward",{headers:(0,n.Z)()})},getMyStalls:function(){return r().get(l+"stalls",{headers:(0,n.Z)()})},getInwardData:function(){return r().get(l+"inwardData",{headers:(0,n.Z)()})},getOutwardData:function(){return r().get(l+"outwardData",{headers:(0,n.Z)()})},getBookedStalls:function(){return r().get(l+"bookedstalls",{headers:(0,n.Z)()})},getcancelledStalls:function(){return r().get(l+"cancelledstalls",{headers:(0,n.Z)()})}};a.Z=i},5653:function(e,a,t){var s=t(4569),r=t.n(s),n=t(6456),l="http://localhost:4000/",i={getPublicContent:function(){return r().get(l+"all")},getStallsData:function(){return r().get(l+"stalls",{headers:(0,n.Z)()})},getAdminData:function(){return r().get(l+"admin",{headers:(0,n.Z)()})},getInOutdata:function(){return r().get(l+"inwardoutward",{headers:(0,n.Z)()})},getFarmers:function(){return r().get(l+"farmer",{headers:(0,n.Z)()})},getAllUsers:function(){return r().get(l+"allusers",{headers:(0,n.Z)()})},getUsers:function(){return r().get(l+"users",{headers:(0,n.Z)()})}};a.Z=i},5194:function(e,a,t){t.d(a,{Z:function(){return x}});var s=t(7462),r=t(3366),n=t(2791),l=t(8182),i=t(4419),d=t(277),c=t(5513),o=t(5878),m=t(1217);function u(e){return(0,m.Z)("MuiCardContent",e)}(0,o.Z)("MuiCardContent",["root"]);var h=t(184),f=["className","component"],v=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,a){return a.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),x=n.forwardRef((function(e,a){var t=(0,c.Z)({props:e,name:"MuiCardContent"}),n=t.className,d=t.component,o=void 0===d?"div":d,m=(0,r.Z)(t,f),x=(0,s.Z)({},t,{component:o}),j=function(e){var a=e.classes;return(0,i.Z)({root:["root"]},u,a)}(x);return(0,h.jsx)(v,(0,s.Z)({as:o,className:(0,l.Z)(j.root,n),ownerState:x,ref:a},m))}))}}]);
//# sourceMappingURL=344.e5b38b47.chunk.js.map