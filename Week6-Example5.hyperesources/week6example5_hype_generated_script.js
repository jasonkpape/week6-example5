//	HYPE.documents["Week6-Example5"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="Week6-Example5.hyperesources",f="Week6-Example5",g="week6example5_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/week6example5_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_664F||null!=window.HYPE_dtl_664F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-664.full.min.js":"HYPE-664.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_664"+c,"HYPE_dtl_664"+c,a,d),false==!0&&(a=a||k("HYPE_w_664","HYPE_wdtl_664","HYPE-664.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_664","HYPE-664.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"rollTheDice",source:"function(hypeDocument, element, event) {\t\n\tvar x1 = Math.random();\n\tvar x2 = 6*x1;\n\tvar x3 = Math.ceil(x2);\n\tdocument.getElementById(\"textResult\").innerHTML = x3;\n\talert(\t\t\"The value of x1 is \" + x1 + \"\\n\" +\n\t\t\t\t\"The value of x2 is \" + x2 + \"\\n\" +\n\t\t\t\t\"The value of x3 is \" + x3);\n}",identifier:"18"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_664"+c](f,g,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},l,[],e,[{n:"Main",o:"1",X:[0]}],
[{o:"16",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#00FDFF",bY:1,d:800,U:{},T:{"2_hover":{q:false,z:1,i:"2_hover",n:"2_hover",a:[{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000",o:"19"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000",o:"19"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000",o:"19"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000",o:"19"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#000",o:"19"},{y:1,i:"B",s:"#FF2600",z:0,o:"19",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"19",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"19",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"19",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"19",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["20","19","21"],n:"Untitled Layout","_":0,v:{"20":{p:"no-repeat",c:200,q:"100% 100%",bS:36,d:200,I:"Solid",J:"Solid",K:"Solid",g:"#FFF",L:"Solid",M:10,i:"imageResult",N:10,aI:35,A:"#000",j:"absolute",x:"visible",B:"#000",P:10,O:10,C:"#000",z:3,aJ:35,D:"#000",aK:35,k:"div",a:440,aL:35,b:120},"21":{aU:8,G:"#FF2710",c:84,aV:8,r:"inline",d:144,s:"'Arial Black',Gadget,Sans-Serif",t:96,Z:"break-word",i:"textResult",w:"?",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:500,F:"center",b:380},"19":{b:290,z:1,K:"Solid",c:253,L:"Solid",d:48,aS:6,M:5,bD:"none",N:5,aT:6,dB:"button",O:5,g:"#FFF",aU:6,P:5,aV:6,i:"diceButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#000",B:"#000",aM:"2_hover",r:"inline",C:"#000",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#000",t:36,F:"center",aA:{a:[{p:4,h:"18"}]},G:"#000",aP:"pointer",w:"ROLL THE DICE",x:"visible",I:"Solid",a:25,y:"preserve",J:"Solid"}}}],{},h,{},null,false,true,-1,true,true,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
