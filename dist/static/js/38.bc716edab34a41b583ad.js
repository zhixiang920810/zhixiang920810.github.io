webpackJsonp([38],{K74Q:function(t,e){},eaUP:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l,a=s("bOdI"),i=s.n(a),o=(s("+05Q"),s("2A8A")),n=s("1zLI"),r=s("SkgI"),c={name:"control",components:{dialogControl:o.a,Controlunit:n.a},data:function(){return{userinfo:{},xkform:{id:"",spbz:"",xksj:""},rules:{spbz:[{required:!0,trigger:"blur",message:"请输入审批原因"}]},bk_count:0,input:"",loading:!0,loading1:!0,dropdownd:"高级筛选",oftenLists:["王萌琪","张一兵","孙楠","赵天赐","孙仪涵","王雪莉","朱萌琦"],zhankai1:!1,spanlist:["派出所下发","管控","侦控","阳光信访","进京维权"],outerVisible:!1,selist:[{name:"批量布控人员",value:29,ico:s("1KWF"),lx:1,selected:!0},{name:"单人布控人员",value:19,ico:s("GsfB"),lx:0,selected:!1}],selistnum:["a","b","c"],oftenselectd:"",logfrom:{page:1,limit:10,xxzjbh:"",ablx:"",count:null,pagesizes:null},pageSizes:null,count:null,tags:[{name:"布控人员",value:29,ico:s("1KWF")},{name:"待审批人员",value:19,ico:s("GsfB")},{name:"审批未通过人员",value:10,ico:s("F+5j")},{name:"已审批人员",value:10,ico:s("RpmB")}],tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}],currentPage4:4,dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1}},watch:{},filters:{time_gsh:function(t){return""!=t&&void 0!=t?t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6,8):""},bkzt_filter:function(t){return"0"==t?"布控中":"1"==t?"续控中":"2"==t?"撤控":""}},created:function(){this.getlist(),this.gettjbkcount(),this.userinfo=JSON.parse(localStorage.getItem("userinfo"))},mounted:function(){},methods:(l={handleClickQh:function(t){console.log(t),0==t&&this.$router.push({name:"controlexamine_dr"})},gettjbkcount:function(){var t=this;r.a.selectBKTjList({}).then(function(e){0==e.data.code?t.bk_count=e.data.count:t.$message.error(e.data.msg)})},getlist:function(){var t=this;console.log(this.logfrom),this.loading=!0,r.a.selectBkSqxxList(this.logfrom).then(function(e){t.loading=!1,0==e.data.code?(t.tableData=e.data.data,t.count=e.data.count,t.pageSizes=Math.ceil(t.count/t.logfrom.limit)):t.$message.error(e.data.msg)})},resetlist:function(){this.logfrom.bkbt="",this.logfrom.bksy="",this.logfrom.kssj="",this.logfrom.jssj="",this.logfrom.bksqr="",this.logfrom.bkbt="",this.logfrom.sp_state="",this.logfrom.bkzt=""},tableRowClassName:function(t){t.row;return t.rowIndex%2==0?"":"success-row"},selgaoji:function(){this.zhankai1=!this.zhankai1},handleClick:function(t){this.logfrom.page=t,this.getlist()},nextclick:function(t){this.logfrom.page=t,this.getloglist()},getloglist:function(){var t=this;r.a.queryMrgk(this.logfrom).then(function(e){0==e.data.code?(t.logdata=e.data.data,t.logfrom.count=e.data.count,t.logfrom.pagesizes=Math.ceil(t.logfrom.count/t.logfrom.limit)):t.$message.error(e.data.msg)})},seldw:function(){this.outerVisible=!0},closedailog:function(){this.outerVisible=!1},closfxdialog:function(t){this.outerVisible=!1,t&&(this.search.orgId=t.id,this.search.orgname=t.name)},handleCommand:function(t){console.log(t),this.dropdownd=t},oftenselect:function(t){console.log(t),this.oftenselectd=t},add:function(){this.dialogVisible=!0}},i()(l,"handleClick",function(t){}),i()(l,"handleSizeChange",function(t){console.log("每页 "+t+" 条")}),i()(l,"handleCurrentChange",function(t){this.logfrom.page=t,this.getlist()}),i()(l,"dialogHandleClose",function(){console.log(11111),this.dialogVisible=!1}),i()(l,"dialogHandleOpen2",function(){this.dialogVisible2=!0}),i()(l,"dialogHandleClose2",function(){this.dialogVisible=!1,this.dialogVisible2=!1,this.getlist()}),i()(l,"dialogHandleClose3",function(){this.dialogVisible3=!1}),i()(l,"toDetail",function(t){this.$router.push({name:"controlapplicationinfo",params:{id:t.ID}})}),i()(l,"ryspClick",function(t){this.dialogVisible3=!0,this.xkform.id=t.ID,this.xkform.flag=t.FLAG}),i()(l,"spclick",function(t){var e=this;console.log(this.xkform),this.xkform.sfpl="1",this.xkform.spzt=t,"1"!=t||""!=this.xkform.spbz&&"不同意"!=this.xkform.spbz?"2"!=t||""!=this.xkform.spbz&&"同意"!=this.xkform.spbz||(this.xkform.spbz="不同意"):this.xkform.spbz="同意",this.$refs.xkform.validate(function(t){t&&e.$confirm("即将审批是否确定？","审批",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.loading1=e.$loading({lock:!0,text:"审批中......",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),r.a.updateBkSpxxList(e.xkform).then(function(t){console.log(t),"0"==t.data.code?(e.getlist(),e.dialogVisible3=!1,e.xkform.spbz="",e.$message({message:t.data.message,type:"success"})):e.$message({message:"审批失败，请联系管理员!",type:"error"}),e.loading1.close()})}).catch(function(){e.$message({type:"info",message:"已取消！"})})})}),l)},d={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main-ba"},[0==t.zhankai1?l("div",{staticClass:"selheader"},[l("div",{staticStyle:{display:"flex",margin:"10px 0 20px 0"}},[l("div",{staticClass:"personlist1"},[l("div",{staticStyle:{display:"flex"}},[l("el-input",{staticClass:"sec_ipt",attrs:{placeholder:"支持模糊查询"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),l("el-button",{staticClass:"sec_btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.getlist()}}},[t._v("查询\n          ")])],1),t._v(" "),l("span",{staticClass:"selbox2"},[l("span",{on:{click:t.selgaoji}},[t._v("\n            高级筛选"),l("img",{attrs:{src:s("yvm4"),alt:""}})]),t._v(" "),l("span",{staticClass:"sel_tex"},[t._v("常用搜索条件："),t._l(t.spanlist,function(e,s){return l("span",{key:s},[t._v(t._s(e)+"  /")])})],2)])])])]):t._e(),t._v(" "),1==t.zhankai1?l("div",{staticClass:"personlist2"},[l("el-descriptions",{staticClass:"label_box",attrs:{title:"",column:3,border:""}},[l("el-descriptions-item",{attrs:{label:"布控标题"}},[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.logfrom.bkbt,callback:function(e){t.$set(t.logfrom,"bkbt",e)},expression:"logfrom.bkbt"}})],1),t._v(" "),l("el-descriptions-item",{attrs:{label:"布控事由"}},[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.logfrom.bksy,callback:function(e){t.$set(t.logfrom,"bksy",e)},expression:"logfrom.bksy"}})],1),t._v(" "),l("el-descriptions-item",{attrs:{label:"申请人姓名"}},[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.logfrom.bksqr,callback:function(e){t.$set(t.logfrom,"bksqr",e)},expression:"logfrom.bksqr"}})],1),t._v(" "),l("el-descriptions-item",{attrs:{label:"申请人证件号"}},[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.logfrom.bbkrzjhm,callback:function(e){t.$set(t.logfrom,"bbkrzjhm",e)},expression:"logfrom.bbkrzjhm"}})],1),t._v(" "),l("el-descriptions-item",{attrs:{label:"审批状态"}},[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.logfrom.sp_state,callback:function(e){t.$set(t.logfrom,"sp_state",e)},expression:"logfrom.sp_state"}})],1),t._v(" "),l("el-descriptions-item",{attrs:{label:"布控状态"}},[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.logfrom.bkzt,callback:function(e){t.$set(t.logfrom,"bkzt",e)},expression:"logfrom.bkzt"}})],1),t._v(" "),l("el-descriptions-item",{attrs:{label:"开始时间"}},[l("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.logfrom.kssj,callback:function(e){t.$set(t.logfrom,"kssj",e)},expression:"logfrom.kssj"}})],1),t._v(" "),l("el-descriptions-item",{attrs:{label:"结束时间"}},[l("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.logfrom.jssj,callback:function(e){t.$set(t.logfrom,"jssj",e)},expression:"logfrom.jssj"}})],1),t._v(" "),l("el-descriptions-item",{attrs:{label:"管控单位"}},[l("el-input",{staticStyle:{width:"20.5rem"},attrs:{placeholder:"请点击+选择"},model:{value:t.logfrom.orgId,callback:function(e){t.$set(t.logfrom,"orgId",e)},expression:"logfrom.orgId"}}),t._v(" "),l("i",{staticClass:"el-icon-plus",staticStyle:{margin:"12px 10px 0px 10px",cursor:"pointer"},on:{click:t.seldw}}),t._v(" "),l("i",{staticClass:"el-icon-minus",staticStyle:{margin:"12px 0 0 0",cursor:"pointer"}})],1)],1),t._v(" "),l("div",{staticClass:"card_right"},[l("el-button",{staticStyle:{background:"#7db3ed",height:"40px","margin-right":"15px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.getlist()}}},[t._v("查询")]),t._v(" "),l("el-button",{staticStyle:{height:"40px"},attrs:{icon:"el-icon-refresh"},on:{click:function(e){return t.resetlist()}}},[t._v("重置")]),t._v(" "),l("div",[1==t.zhankai1?l("span",{staticClass:"selbox",on:{click:t.selgaoji}},[t._v("普通筛选"),l("img",{attrs:{src:s("bT2u"),alt:""}})]):t._e()])],1)],1):t._e(),t._v(" "),l("div",{staticClass:"card_content"},[t._l(t.selist,function(e,s){return l("div",{key:s,staticClass:"card_left",on:{click:function(s){return t.handleClickQh(e.lx)}}},[l("div",{class:e.selected?"card1 tag_selected":"card1"},[l("div",[l("img",{attrs:{src:e.ico}})]),t._v(" "),l("p",[t._v(t._s(e.name))]),t._v(" "),l("p",{staticClass:"counts"},[t._v(t._s(e.value))])])])}),t._v(" "),l("div",{staticClass:"btn_xz"},[l("span",{staticClass:"tagtotal"},[t._v("布控人数："),l("span",{staticClass:"tagtotalnum"},[t._v(t._s(t.bk_count))]),t._v("人")])])],2),t._v(" "),l("div",{staticClass:"per_bottom"},[l("div",{staticClass:"tabled"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.tableData,border:"","row-class-name":t.tableRowClassName}},[l("el-table-column",{attrs:{prop:"ROW_ID",label:"序号",align:"center",width:"85.5"}}),t._v(" "),l("el-table-column",{attrs:{label:"布控标题",width:"120",prop:"BKBT",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",{staticStyle:{color:"#408ad9"},on:{click:function(s){return t.toDetail(e.row)}}},[t._v(t._s(e.row.BKBT))])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"布控事由",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",{staticStyle:{color:"#408ad9"}},[t._v(t._s(e.row.BKSY))])]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"BKSY",label:"布控事由",width:"120",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"CREATER_XM",label:"申请人",width:"120",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ORG_NAME",label:"申请单位",width:"200",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"KSSJ",label:"布控开始时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(t._f("time_gsh")(e.row.KSSJ)))])]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"JSSJ",label:"布控结束时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(t._f("time_gsh")(e.row.JSSJ)))])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"审批状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.SP_STATE))])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"布控状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(t._f("bkzt_filter")(e.row.BKZT)))])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.BTN_SPZT?l("el-button",{staticClass:"cz_btn",attrs:{round:"",size:"small"},on:{click:function(s){return t.ryspClick(e.row)}}},[t._v("审批")]):t._e()]}}])})],1)],1)]),t._v(" "),l("div",{staticClass:"pagea_data"},[l("div",{staticStyle:{"line-height":"33px"}},[t._v("\n      当前第"+t._s(t.logfrom.page)+"页,每页"+t._s(t.logfrom.limit)+"条记录,共"+t._s(t.count)+"条记录,共"+t._s(t.pageSizes)+"页\n    ")]),t._v(" "),l("div",{staticClass:"pagedata"},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.count,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleCurrentChange}})],1)]),t._v(" "),l("el-dialog",{staticClass:"dialog2",attrs:{title:"审批",visible:t.dialogVisible3,width:"30%","before-close":t.dialogHandleClose3},on:{"update:visible":function(e){t.dialogVisible3=e}}},[l("el-form",{ref:"xkform",attrs:{inline:!0,model:t.xkform,"label-width":"100px",rules:t.rules}},[l("table",{staticClass:"form_table",attrs:{border:""}},[l("tbody",[l("tr",[l("td",{staticClass:"td_left"},[t._v("审批备注")]),t._v(" "),l("td",{staticClass:"td_right",attrs:{colspan:"5"}},[l("el-form-item",{attrs:{prop:"spbz"}},[l("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.xkform.spbz,callback:function(e){t.$set(t.xkform,"spbz",e)},expression:"xkform.spbz"}})],1)],1)]),t._v(" "),l("tr",[l("td",{staticClass:"td_left"},[t._v("审批人")]),t._v(" "),l("td",{staticClass:"td_right",staticStyle:{width:"35%"}},[t._v("\n              "+t._s(t.userinfo.STAFF_NAME)+"\n            ")]),t._v(" "),l("td",{staticClass:"td_left"},[t._v("审批单位")]),t._v(" "),l("td",{staticClass:"td_right",staticStyle:{width:"35%"}},[t._v("\n              "+t._s(t.userinfo.ORG_NAME)+"\n            ")])])])])]),t._v(" "),l("div",{staticClass:"subbuttons"},[l("button",{staticClass:"el-button submit el-button--default",attrs:{type:"button"},on:{click:function(e){return t.spclick("1")}}},[l("span",[l("i",{staticClass:"el-icon-check"}),t._v("同意")])]),t._v(" "),l("button",{staticClass:"el-button el-button--danger",attrs:{type:"button"},on:{click:function(e){return t.spclick("2")}}},[l("span",[l("i",{staticClass:"el-icon-check"}),t._v("不同意")])])])],1),t._v(" "),l("el-dialog",{staticClass:"new-dialog",attrs:{title:"管控单位",visible:t.outerVisible,width:"70%"},on:{"update:visible":function(e){t.outerVisible=e}}},[t.outerVisible?l("Controlunit",{on:{closfxdialog:t.closfxdialog}}):t._e()],1)],1)},staticRenderFns:[]};var u=s("VU/8")(c,d,!1,function(t){s("K74Q")},"data-v-a25e2dd8",null);e.default=u.exports}});