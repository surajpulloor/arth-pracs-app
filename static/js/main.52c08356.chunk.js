(this["webpackJsonparth-pracs"]=this["webpackJsonparth-pracs"]||[]).push([[0],{33:function(e,t,a){e.exports=a(50)},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),o=a.n(r),i=a(13);var m=a(3),l=a(8),u=a(9),c=a(11),d=a(10),p=a(4),h=(a(42),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){if(e.preventDefault(),n.state.num1ValidationFailure||n.state.num2ValidationFailure||n.state.num2ValidationFailureTo||n.state.data.isTimeBound&&n.state.timeInvalid)return!1;n.setState((function(e,t){if(e.data.isTimeBound)return{data:Object(m.a)(Object(m.a)({},e.data),{},{timeBound:parseInt(e.data.timeBound)})}}),(function(){n.props.onSetup(n.state.data),n.props.history.push("/practise")}))},n.getChoiceValue=function(e){n.setState((function(t){return{data:Object(m.a)(Object(m.a)({},t.data),{},{op:e.target.value})}})),e.persist()},n.validateNum1Range=function(){""!==n.state.data.num1Range.to&&n.state.data.num1Range.from>n.state.data.num1Range.to?n.setState({num1ValidationFailure:!0,num1ValidationMessage:"It's greater than Num1's Range \"to\". It has to be less"}):n.setState({num1ValidationFailure:!1,num1ValidationMessage:""})},n.validateNum2Range=function(){""!==n.state.data.num2Range.to&&n.state.data.num2Range.from>n.state.data.num2Range.to?n.setState({num2ValidationFailure:!0,num2ValidationMessage:"It's greater than Num2's Range \"to\". It has to be less",num2ValidationFailureTo:!1,num2ValidationMessageTo:""}):""!==n.state.data.num1Range.from&&n.state.data.num2Range.from>n.state.data.num1Range.from?n.setState({num2ValidationFailure:!0,num2ValidationMessage:'Num2 "from" is greater than Num1 "from"',num2ValidationFailureTo:!1,num2ValidationMessageTo:""}):""!==n.state.data.num1Range.to&&n.state.data.num2Range.to>n.state.data.num1Range.to?n.setState({num2ValidationFailureTo:!0,num2ValidationMessageTo:'Num2 "to" is greater than Num1 "to"',num2ValidationFailure:!1,num2ValidationMessage:""}):n.setState({num2ValidationFailure:!1,num2ValidationMessage:"",num2ValidationFailureTo:!1,num2ValidationMessageTo:""})},n.setTimeBound=function(){n.setState((function(e){return{data:Object(m.a)(Object(m.a)({},e.data),{},{isTimeBound:!e.data.isTimeBound,timeBound:""}),timeInvalid:!e.timeInvalid,timeBoundValMsg:""}}),(function(){n.ref.current.focus()}))},n.setTimeBoundValue=function(e){e.persist();var t="",a=!0,s=e.target.value;""===s?(t="Please enter number",a=!1):/^(\d+)?\.\d+$/g.test(s)?(t="Decimal numbers not allowed",a=!1):/^\-\d+$/g.test(s)?(t="Negative numbers are not allowed",a=!1):/^\d+$/g.test(s)?parseInt(s)>3600?(t="Sorry, you cannot practise for more than an hour at a given time",a=!1):0===parseInt(s)&&(t="Sorry, you cannot enter 0. You'll need some time to solve",a=!1):(t="Only numbers allowed",a=!1),n.setState((function(e){return{data:Object(m.a)(Object(m.a)({},e.data),{},{timeBound:s}),timeInvalid:!a,timeBoundValMsg:t}}))},n.state={data:{num1Range:{from:"",to:""},num2Range:{from:"",to:""},op:"",isTimeBound:!1,timeBound:""},sameAsNum1Range:!1,enableCheckbox:!1,num1ValidationFailure:!1,num1ValidationMessage:"",num2ValidationFailureTo:!1,num2ValidationMessageTo:"",timeInvalid:!1,timeBoundValMsg:""},n.ref=s.a.createRef(),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.clearSetupInfo()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h1",null,"Arthimetic Practise"),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Num1 Range"),s.a.createElement("div",{className:"form-row"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement("input",{type:"number",min:"1",max:"100000",placeholder:"From",value:this.state.data.num1Range.from,id:"num1From",onChange:function(t){e.setState((function(e){var a=Object.assign({},e.data.num1Range),n=parseInt(t.target.value);a.from=n||"";var s=Object.assign({},e.data.num2Range);return e.sameAsNum1Range&&(s.from=a.from),{data:Object(m.a)(Object(m.a)({},e.data),{},{num1Range:a,num2Range:s}),sameAsNum1Range:!(!n&&""===e.data.num1Range.to)&&e.sameAsNum1Range,enableCheckbox:!(!n||""===e.data.num1Range.to)}}),e.validateNum1Range),t.persist()},className:this.state.num1ValidationFailure?"form-control is-invalid":"form-control",autoFocus:!0,required:!0}),s.a.createElement("div",{className:"invalid-feedback",style:{display:this.state.num1ValidationFailure?"block":"none"}},this.state.num1ValidationMessage)),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("input",{type:"number",min:"1",max:"100000",placeholder:"To",value:this.state.data.num1Range.to,id:"num1To",onChange:function(t){e.setState((function(e){var a=parseInt(t.target.value),n=a||"";return{data:Object(m.a)(Object(m.a)({},e.data),{},{num1Range:Object(m.a)(Object(m.a)({},e.data.num1Range),{},{to:n}),num2Range:Object(m.a)(Object(m.a)({},e.data.num2Range),{},{to:e.sameAsNum1Range?n:e.data.num2Range.to})}),sameAsNum1Range:!(!a&&""===e.data.num1Range.from)&&e.sameAsNum1Range,enableCheckbox:!(!a||""===e.data.num1Range.from)}}),e.validateNum1Range),t.persist()},className:"form-control",required:!0})))),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"num2RangeLabel"},s.a.createElement("span",{className:"label"},"Num2 Range"),s.a.createElement("span",{className:"leftParen"},"("),s.a.createElement("div",{className:"custom-control custom-checkbox sameRangeCheckbox",style:{color:this.state.enableCheckbox?"black":"grey"}},s.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"toNum1Range",disabled:!this.state.enableCheckbox,checked:this.state.sameAsNum1Range,onClick:function(t){t.target.checked?e.setState((function(e){return{data:Object(m.a)(Object(m.a)({},e.data),{},{num2Range:{to:e.data.num1Range.to,from:e.data.num1Range.from}}),sameAsNum1Range:!0}})):e.setState((function(e){return{data:Object(m.a)(Object(m.a)({},e.data),{},{num2Range:{to:"",from:""}}),sameAsNum1Range:!1}}))}}),s.a.createElement("label",{className:"custom-control-label",htmlFor:"toNum1Range"},"Same as Num1 range")),s.a.createElement("span",{className:"rightParen"},")")),s.a.createElement("div",{className:"form-row"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement("input",{type:"number",min:"1",max:"100000",placeholder:"From",value:this.state.data.num2Range.from,id:"num2From",onChange:function(t){e.setState((function(a){var n=Object.assign({},e.state.data.num2Range),s=parseInt(t.target.value);return n.from=s||"",{data:Object(m.a)(Object(m.a)({},a.data),{},{num2Range:n}),sameAsNum1Range:!isNaN(s)&&s===a.data.num1Range.from&&a.data.num1Range.to===a.data.num2Range.to}}),e.validateNum2Range),t.persist()},className:this.state.num2ValidationFailure?"form-control is-invalid":"form-control",required:!0}),s.a.createElement("div",{className:"invalid-feedback",style:{display:this.state.num2ValidationFailure?"block":"none"}},this.state.num2ValidationMessage)),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("input",{type:"number",min:"1",max:"100000",placeholder:"To",value:this.state.data.num2Range.to,id:"num2To",onChange:function(t){e.setState((function(e){var a=parseInt(t.target.value);return{data:Object(m.a)(Object(m.a)({},e.data),{},{num2Range:Object(m.a)(Object(m.a)({},e.data.num2Range),{},{to:a||""})}),sameAsNum1Range:!isNaN(a)&&a===e.data.num1Range.to&&e.data.num1Range.from===e.data.num2Range.from}}),e.validateNum2Range),t.persist()},className:this.state.num2ValidationFailureTo?"form-control is-invalid":"form-control",required:!0}),s.a.createElement("div",{className:"invalid-feedback",style:{display:this.state.num2ValidationFailureTo?"block":"none"}},this.state.num2ValidationMessageTo)))),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"operator",id:"add",value:"+",checked:"+"===this.state.data.op,onChange:this.getChoiceValue,required:!0}),s.a.createElement("label",{className:"form-check-label",htmlFor:"add"},"+")),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"operator",id:"subtract",value:"-",checked:"-"===this.state.data.op,onChange:this.getChoiceValue,required:!0}),s.a.createElement("label",{className:"form-check-label",htmlFor:"subtract"},"-")),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"operator",id:"multiply",value:"*",checked:"*"===this.state.data.op,onChange:this.getChoiceValue,required:!0}),s.a.createElement("label",{className:"form-check-label",htmlFor:"multiply"},"*")),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"operator",id:"divide",value:"/",checked:"/"===this.state.data.op,onChange:this.getChoiceValue,required:!0}),s.a.createElement("label",{className:"form-check-label",htmlFor:"divide"},"/")),s.a.createElement("hr",null),s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"isTimeBound",id:"isTimeBound",checked:this.state.data.isTimeBound,onChange:this.setTimeBound}),s.a.createElement("label",{className:"form-check-label",htmlFor:"isTimeBound"},"Make it time bound")),s.a.createElement("div",{className:"form-group",style:{display:this.state.data.isTimeBound?"block":"none"}},s.a.createElement("div",{className:"form-row"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement("label",{htmlFor:"timeBoundControl"},"Enter the time in seconds"),s.a.createElement("input",{type:"text",className:this.state.timeInvalid?"form-control is-invalid":"form-control",id:"timeBoundControl",name:"timeBoundControl",ref:this.ref,value:this.state.data.timeBound,onChange:this.setTimeBoundValue}))),s.a.createElement("div",{className:"invalid-feedback",style:{display:this.state.timeInvalid?"block":"none"}},this.state.timeBoundValMsg)),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Start")))}}]),a}(n.Component)),f=Object(p.f)(h),v=Object(i.b)((function(e){return{}}),(function(e){return{onSetup:function(t){e(function(e){return{type:"ADD_SETUP_INFO",info:e}}(t))},clearSetupInfo:function(){e({type:"CLEAR_SETUP_INFO"})}}}))(f),g=a(22),b=a(23),E=(a(47),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setTimer=function(){n.props.showResult||(n.interval=setInterval((function(){return n.setState((function(e,t){return{timeTaken:e.timeTaken+1}}))}),1e3)),n.computeResult()},n.computeResult=function(){var e;switch(n.props.op){case"+":e=n.props.num1+n.props.num2;break;case"-":e=n.props.num1-n.props.num2;break;case"*":e=n.props.num1*n.props.num2;break;case"/":e=n.props.num1/n.props.num2}n.setState({res:e})},n.onEnter=function(e){if(13===e.keyCode){if(""===e.target.value)return void alert("Please enter a number!");var t="".concat(n.state.timeTaken,"s");if(n.state.timeTaken>=60){var a=n.state.timeTaken/60,s=Math.floor(a),r=Math.floor(100*(a-s));t="".concat(s,"m ").concat(r,"s")}n.props.addProblem({num1:n.props.num1,num2:n.props.num2,op:n.props.op,res:parseInt(e.target.value),timeTaken:t}),n.props.updateResult(n.state.res===parseInt(e.target.value)),e.target.value=""}},n.state={timeTaken:1,res:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"componentWillReceiveProps",value:function(e,t){return(this.props.num1!==e.num1||this.props.num2!==e.num2||this.props.stopTimer!==e.stopTimer)&&(this.interval&&!this.props.stopTimer&&(clearInterval(this.interval),this.setState({timeTaken:1},this.setTimer)),this.props.stopTimer&&clearInterval(this.interval),!0)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return s.a.createElement("div",{className:"problem"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h3",null,this.props.id,"."))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-5 num1"},s.a.createElement("h4",null,this.props.num1))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-5"},s.a.createElement("h4",null,s.a.createElement("span",null,this.props.op),s.a.createElement("span",{style:{paddingLeft:(this.props.num1.toString().length-this.props.num2.toString().length)/2*1.5-.2+"rem"}},this.props.num2)),s.a.createElement("hr",null),this.props.showResult?s.a.createElement("h4",null,s.a.createElement("span",{className:"result"},this.props.res),this.props.res===this.state.res?s.a.createElement(g.a,{icon:b.a,style:{color:"green",marginLeft:"4px"}}):s.a.createElement(g.a,{icon:b.b,style:{color:"red",marginLeft:"4px"}}),this.props.res!==this.state.res?s.a.createElement("div",{style:{display:"inline-block",marginLeft:"8px"}},s.a.createElement("span",null,this.state.res),s.a.createElement(g.a,{icon:b.a,style:{color:"green",marginLeft:"4px"}})):"",s.a.createElement("span",{className:"float-right"},this.props.timeTaken)):s.a.createElement("div",null,s.a.createElement("input",{type:"number",placeholder:"Please enter your Ans.",className:"form-control",onKeyDown:this.onEnter,autoFocus:!0})),s.a.createElement("hr",null))))}}]),a}(n.Component)),R=Object(i.b)((function(e){return{}}),(function(e){return{addProblem:function(t){e(function(e){return{type:"ADD_PROBLEM",problem:e}}(t))}}}))(E),N=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).passCurrentTimeToParent=function(){var e=n.state.seconds>0?n.state.seconds+"s":"",t=n.state.minutes>0?n.state.minutes+"m":"",a=n.state.hours>0?n.state.hours+"h":"",s="".concat(a," ").concat(t," ").concat(e).trim();n.props.currentTime(s)},n.calculateTime=function(){60===n.state.seconds?n.setState((function(e,t){return{seconds:0,minutes:e.minutes+1}}),(function(){60===n.state.minutes&&n.setState((function(e,t){return{minutes:0,hours:e.hours+1}}),(function(){n.passCurrentTimeToParent()})),n.passCurrentTimeToParent()})):n.setState((function(e,t){return{seconds:e.seconds+1}}),(function(){n.passCurrentTimeToParent()}))},n.state={seconds:0,minutes:0,hours:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.calculateTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentWillReceiveProps",value:function(e,t){if(e.stop===this.props.stop)return!1;this.props.stop?clearInterval(this.interval):(this.calculateTime(),this.interval=setInterval(this.calculateTime,1e3))}},{key:"render",value:function(){return s.a.createElement("h3",null,(this.state.hours<10?"0":"")+this.state.hours,":",(this.state.minutes<10?"0":"")+this.state.minutes,":",(this.state.seconds<10?"0":"")+this.state.seconds)}}]),a}(n.Component),T=(a(48),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).convertIntoTime=function(e){var t=0,a=0;return a=e>60?e-60*(t=parseInt(e/60)):e,{min:t,sec:a}},n.convertElapsedTime=function(){var e=n.convertIntoTime(n.props.startTime-n.state.timeInSeconds),t="";return 0!==e.min&&(t="".concat(e.min,"m ")),0!==e.sec&&(t+="".concat(e.sec,"s")),t},n.updateTime=function(){var e=n.state.min,t=n.state.sec;0===t?(e-=1,t=59):t-=1,n.setState((function(a,n){return{min:e,sec:t,timeInSeconds:a.timeInSeconds-1}}),(function(){n.props.currentTime(n.state.timeInSeconds,n.convertElapsedTime())}))},n.state={min:0,sec:0,timeInSeconds:0},n.interval=null,n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(t,a){var n=e.convertIntoTime(a.startTime);return{min:n.min,sec:n.sec,timeInSeconds:a.startTime}}),(function(){e.updateTime(),e.interval=setInterval(e.updateTime,1e3)}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return s.a.createElement("h3",null,s.a.createElement("span",null,"You have left: "),s.a.createElement("span",{className:this.state.min<5?0===this.state.min?"countdown-red":"countdown-orange":""},0!==this.state.min?(this.state.min<10?"0":"")+this.state.min+":":"",(this.state.sec<10&&0!==this.state.min?"0":"")+this.state.sec+(0===this.state.min?"s":"")))}}]),a}(n.Component)),y=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).genProblems=function(){var e=Math.floor(Math.random()*(n.props.setupInfo.num1Range.to-n.props.setupInfo.num1Range.from))+n.props.setupInfo.num1Range.from,t=0;do{t=Math.floor(Math.random()*(n.props.setupInfo.num2Range.to-n.props.setupInfo.num2Range.from))+n.props.setupInfo.num2Range.from}while(t>e);n.setState((function(a,n){return{num1:e,num2:t,id:a.id+1}}))},n.updateStore=function(e){n.setState((function(t,a){if(e)return{totalRightAns:t.totalRightAns+1}})),n.genProblems()},n.stop=function(){n.setState({stopStopWatch:!0,stopProblemTimer:!0,stopCountDown:!0}),window.confirm("Do you want to stop?")?n.gotoSummary():n.setState({stopStopWatch:!1,stopProblemTimer:!1,stopCountDown:!1})},n.gotoSummary=function(){n.props.addRightAns(n.state.totalRightAns),n.props.addTimer(n.state.solvedTime),n.props.history.push("/summary")},n.finishPractise=function(e,t){n.setState({solvedTime:t},(function(){0===e&&n.gotoSummary()}))},n.state={num1:0,num2:0,id:0,stopStopWatch:!1,stopProblemTimer:!1,solvedTime:"",totalRightAns:0,stopCountDown:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){void 0!==this.props.setupInfo.num1Range&&void 0!==this.props.setupInfo.num2Range&&void 0!==this.props.setupInfo.op&&(this.props.clearProblems(),this.genProblems(),window.onbeforeunload=function(e){return"Do you want to end the exercise?"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,void 0!==this.props.setupInfo.num1Range&&void 0!==this.props.setupInfo.num2Range&&void 0!==this.props.setupInfo.op?s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h1",null,"Practise problems")),s.a.createElement("div",{className:"col-md-6"},this.props.setupInfo.isTimeBound?s.a.createElement(T,{startTime:this.props.setupInfo.timeBound,stop:this.state.stopCountDown,currentTime:this.finishPractise}):s.a.createElement(N,{stop:this.state.stopStopWatch,currentTime:function(t){return e.setState({solvedTime:t})}}))),s.a.createElement(R,{num1:this.state.num1,num2:this.state.num2,op:this.props.setupInfo.op,id:this.state.id,showResult:!1,updateResult:this.updateStore,stopTimer:this.state.stopProblemTimer}),s.a.createElement("button",{className:"btn btn-primary",onClick:this.stop},"Stop")):s.a.createElement("div",null,s.a.createElement("h1",null,"Sorry, the app isn't set properly."),s.a.createElement("small",null,"What's the 1",s.a.createElement("sup",null,"st")," and 2",s.a.createElement("sup",null,"nd")," number's length.",s.a.createElement("div",null,"What's the operator?"))))}}]),a}(n.Component),k=Object(p.f)(y),S=Object(i.b)((function(e){return{setupInfo:e.info}}),(function(e){return{addRightAns:function(t){e(function(e){return{type:"ADD_RIGHTANS",rightAns:e}}(t))},addTimer:function(t){e(function(e){return{type:"ADD_TIMER",time:e}}(t))},clearProblems:function(){e({type:"CLEAR_PROBLEMS"})}}}))(k),O=a(14),I=a(31),j=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={problems:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({problems:this.structureProblems()})}},{key:"structureProblems",value:function(){var e,t=[],a=1,n=[],s=Object(I.a)(this.props.problems);try{for(s.s();!(e=s.n()).done;){var r=e.value;r.id=a,n.push(r),a%3!==0&&a!==this.props.problems.length||(t.push(n),n=[]),a++}}catch(o){s.e(o)}finally{s.f()}return t}},{key:"render",value:function(){return s.a.createElement("div",{style:{marginTop:"60px"}},this.state.problems.map((function(e,t){return s.a.createElement("div",{className:"row",key:"r"+t},e.map((function(e,t){return s.a.createElement("div",{className:"col-md-4",key:"c"+e.id},s.a.createElement(E,{key:e.id,num1:e.num1,num2:e.num2,op:e.op,res:e.res,timeTaken:e.timeTaken,id:e.id,showResult:!0}))})))})))}}]),a}(n.Component),V=function(e){return s.a.createElement("div",null,0!==e.problems.length?s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},s.a.createElement("h1",{className:"navbar-brand",style:{margin:"0"}},"Summary"),s.a.createElement("div",{className:"collapse navbar-collapse"},s.a.createElement("h5",{className:"float-right",style:{margin:"0 0 0 60px"}},"Time Taken: ",e.timeTaken),s.a.createElement("h5",{className:"float-right",style:{margin:"0 0 0 60px"}},"Total Right Ans: ",e.rightAns," / ",e.problems.length)),s.a.createElement("form",{className:"form-inline"},s.a.createElement(O.b,{className:"btn btn-primary my-2 my-sm-0",to:"/practise"},"Start Again"),s.a.createElement(O.b,{className:"btn btn-primary my-2 my-sm-0",style:{marginLeft:"4px"},to:"/"},"Setup"))),s.a.createElement(j,{problems:e.problems})):s.a.createElement("div",null,s.a.createElement("h1",null,"Sorry, the app isn't set properly."),s.a.createElement("small",null,"There aren't any problems.")))},C=Object(i.b)((function(e){return{problems:e.problems,timeTaken:e.timer,rightAns:e.rightAns}}),(function(e){return{}}))(V);var w=function(){return s.a.createElement("main",{className:"container"},s.a.createElement(p.c,null,s.a.createElement(p.a,{path:"/",component:v,exact:!0}),s.a.createElement(p.a,{path:"/practise",component:S}),s.a.createElement(p.a,{path:"/summary",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);var A=a(15),M=a(32);var F=Object(A.b)({info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SETUP_INFO":return t.info;case"CLEAR_SETUP_INFO":return{};default:return e}},problems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROBLEM":return[].concat(Object(M.a)(e),[t.problem]);case"CLEAR_PROBLEMS":return[];default:return e}},rightAns:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RIGHTANS":return t.rightAns;default:return e}},timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0s",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TIMER":return t.time;default:return e}}}),P=Object(A.c)(F);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(i.a,{store:P},s.a.createElement(O.a,{basename:"/arth-pracs-app"},s.a.createElement(w,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.52c08356.chunk.js.map