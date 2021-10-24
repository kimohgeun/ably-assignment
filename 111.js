(self.webpackChunkably_assignment=self.webpackChunkably_assignment||[]).push([[111],{5777:(e,t,r)=>{"use strict";r.d(t,{kv:()=>u,oQ:()=>i,TV:()=>l});var n=r(5861),s=r(7757),a=r.n(s),o=r(5621),c="/api/reset-password";const i={checkEmail:function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(c,"?email=").concat(t),e.next=3,o.Y.get(r);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),checkAuthCode:function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Y.post(c,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),resetPassword:function(){var e=(0,n.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Y.patch(c,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},u={login:function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Y.post("/api/login",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Y.post("/api/logout",null,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l={getUser:function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Y.get("/api/user",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},2471:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var n=r(7294),s=r(4593),a=r(1649),o=r(1508),c=r(2658),i=r(4436),u=r(5272),l=r(5162);const m=function(){var e=(0,a.mI)().activeStep;return n.createElement(o.Z,{sx:{"& > *":{padding:"30px 0"}}},n.createElement(c.Z,{variant:"h6",component:"h3",align:"center"},"비밀번호 재설정"),n.createElement(i.Z,{alternativeLabel:!0,activeStep:e},["이메일","본인 인증","새 비밀번호"].map((function(e){return n.createElement(u.Z,{key:e},n.createElement(l.Z,null,e))}))))};var j=r(4942),p=r(8152),f=r(5621),d=r(5977),h=r(8767),v=r(5777),w=r(5436),b=r(8044),g=r(2642),y=r(9062);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,j.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const P=function(){var e=(0,d.k6)(),t=(0,a.pm)().openToast,r=(0,a.mI)(),s=r.ResetPasswordStep,c=r.resetState,i=r.setEmail,u=r.setRemainMillisecond,l=r.setIssueToken,m=r.setActiveStep,k=(0,n.useState)({email:""}),P=(0,p.Z)(k,2),E=P[0],Z=P[1],z=(0,h.useQuery)(["checkEmail"],(function(){return v.oQ.checkEmail(E.email)}),{enabled:!1,retry:0,onSuccess:function(e){var t=E.email,r=e.remainMillisecond,n=e.issueToken;i(t),u(r),l(n),m(s.checkAuthCode)},onError:function(e){var r,n,s=(null==e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.error).message;t({severity:"error",message:s})}});return n.createElement(o.Z,{sx:{"& > * + *":{marginTop:"30px"}},component:"form",onSubmit:function(e){e.preventDefault(),z.refetch()}},n.createElement(w.Z,{fullWidth:!0,placeholder:"이메일",name:"email",value:E.email,error:""!==E.email&&!(0,f.o)(E.email),helperText:""===E.email||(0,f.o)(E.email)?"":"이메일 양식이 올바르지 않습니다.",onChange:function(e){var t=e.target,r=t.name,n=t.value;Z(O(O({},E),{},(0,j.Z)({},r,n)))}}),n.createElement(b.Z,{fullWidth:!0},n.createElement(g.Z,{size:"large",onClick:function(){c(),e.push("/login")}},"이전"),n.createElement(g.Z,{size:"large",variant:"contained",type:"submit",disabled:!(0,f.o)(E.email)||z.isFetching},z.isFetching?n.createElement(y.Z,{size:"1.5rem"}):"다음")))};var E=r(381),Z=r.n(E);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,j.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const x=function(){var e=(0,a.pm)().openToast,t=(0,a.mI)(),r=t.ResetPasswordStep,s=t.resetState,i=t.setConfirmToken,u=t.setActiveStep,l=t.setRemainMillisecond,m=t.email,f=t.remainMillisecond,d=t.issueToken,k=(0,n.useState)({authCode:""}),O=(0,p.Z)(k,2),P=O[0],E=O[1],z=(0,h.useMutation)(["checkEmail"],(function(){return v.oQ.checkAuthCode({email:m,issueToken:d,authCode:P.authCode})}),{onSuccess:function(e){var t=e.confirmToken;i(t),u(r.resetPassword)},onError:function(t){var r,n,s=(null==t||null===(r=t.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.error).message;e({severity:"error",message:s})}});return(0,n.useEffect)((function(){var t=setInterval((function(){f>0?l(f-1e3):(clearInterval(t),e({severity:"error",message:"인증 시간이 만료되었습니다."}))}),1e3);return function(){return clearInterval(t)}}),[f]),n.createElement(o.Z,{sx:{"& > * + *":{marginTop:"30px"}},component:"form",onSubmit:function(e){e.preventDefault(),z.mutate()}},n.createElement(w.Z,{fullWidth:!0,placeholder:"인증코드",name:"authCode",value:P.authCode,onChange:function(e){var t=e.target,r=t.name,n=t.value;E(C(C({},P),{},(0,j.Z)({},r,n)))},InputProps:{endAdornment:n.createElement(c.Z,{color:"blue"},Z()(f).format("mm:ss"))}}),n.createElement(b.Z,{fullWidth:!0},n.createElement(g.Z,{size:"large",onClick:function(){s()}},"이전"),n.createElement(g.Z,{size:"large",variant:"contained",type:"submit",disabled:!P.authCode||!f||z.isLoading},z.isLoading?n.createElement(y.Z,{size:"1.5rem"}):"다음")))};var S=r(3709);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,j.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const I=function(){var e=(0,d.k6)(),t=(0,a.pm)().openToast,r=(0,a.mI)(),s=r.resetState,c=r.email,i=r.confirmToken,u=(0,n.useState)({newPassword:"",newPasswordConfirm:""}),l=(0,p.Z)(u,2),m=l[0],f=l[1],k=function(e){var t=e.target,r=t.name,n=t.value;f(D(D({},m),{},(0,j.Z)({},r,n)))},O=(0,h.useMutation)(["checkEmail"],(function(){return v.oQ.resetPassword({email:c,confirmToken:i,newPassword:m.newPassword,newPasswordConfirm:m.newPassword})}),{onSuccess:function(){e.push("/login"),s(),t({severity:"success",message:"비밀번호가 변경되었습니다."})},onError:function(e){var r,n,s=(null==e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.error).message;t({severity:"error",message:s})}});return n.createElement(o.Z,{sx:{"& > * + *":{marginTop:"30px"}},component:"form",onSubmit:function(e){e.preventDefault(),O.mutate()}},n.createElement(S.Z,{sx:{"& > * + *":{marginTop:"30px"}}},n.createElement(w.Z,{fullWidth:!0,placeholder:"비밀번호",type:"password",name:"newPassword",value:m.newPassword,onChange:k}),n.createElement(w.Z,{fullWidth:!0,placeholder:"비밀번호 확인",type:"password",name:"newPasswordConfirm",value:m.newPasswordConfirm,error:""!==m.newPassword&&""!==m.newPasswordConfirm&&m.newPassword!==m.newPasswordConfirm,helperText:""!==m.newPassword&&""!==m.newPasswordConfirm&&m.newPassword!==m.newPasswordConfirm?"비밀번호가 일치하지 않습니다.":"",onChange:k})),n.createElement(b.Z,{fullWidth:!0},n.createElement(g.Z,{size:"large",onClick:function(){s()}},"처음으로"),n.createElement(g.Z,{size:"large",variant:"contained",type:"submit",disabled:!(m.newPassword&&m.newPasswordConfirm)||m.newPassword!==m.newPasswordConfirm||O.isLoading},O.isLoading?n.createElement(y.Z,{size:"1.5rem"}):"다음")))},A=function(){var e=(0,a.mI)(),t=e.ResetPasswordStep,r=e.activeStep;return n.createElement(n.Fragment,null,n.createElement(s.q,null,n.createElement("title",null,"에이블리 - 비밀번호 재설정")),n.createElement(m,null),t.checkEmail===r&&n.createElement(P,null),t.checkAuthCode===r&&n.createElement(x,null),t.resetPassword===r&&n.createElement(I,null))}},5621:(e,t,r)=>{"use strict";r.d(t,{Y:()=>s,o:()=>a});var n=r(9669);const s=r.n(n)().create({baseURL:"https://ably-frontend-assignment-server.vercel.app",headers:{"Content-Type":"application/json"}}),a=function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}},6700:(e,t,r)=>{var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":2088,"./es-do.js":2088,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5606,"./ss.js":5606,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id=6700}}]);