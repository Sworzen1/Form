(this["webpackJsonpzadanie-rekrutacyjne"]=this["webpackJsonpzadanie-rekrutacyjne"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),u=a.n(l),i=function(e){return r.a.createElement("input",{type:e.type,value:e.value,onChange:e.set,placeholder:e.placeholder,required:!0})},c=(a(12),a(6)),o=a(1),d=[{imie:"Jan",nazwisko:"Kowalski",dzial:"IT",wynagrodzenieKwota:"3000",wynagrodzenieWaluta:"PLN"},{imie:"Anna",nazwisko:"B\u0105k",dzial:"Administracja",wynagrodzenieKwota:"2400.50",wynagrodzenieWaluta:"PLN"},{imie:"Pawe\u0142",nazwisko:"Zab\u0142ocki",dzial:"IT",wynagrodzenieKwota:"3300",wynagrodzenieWaluta:"PLN"},{imie:"Tomasz",nazwisko:"Osiecki",dzial:"Administracja",wynagrodzenieKwota:"2100",wynagrodzenieWaluta:"PLN"},{imie:"Iwona",nazwisko:"Leihs-Gutowska",dzial:"Handlowiec",wynagrodzenieKwota:"3100",wynagrodzenieWaluta:"PLN"}],s=Object(n.createContext)(),m=s.Provider,p=function(e){var t=Object(n.useState)(d),a=Object(o.a)(t,2),l=a[0],u=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),p=s[0],w=s[1],y=Object(n.useState)(""),z=Object(o.a)(y,2),b=z[0],f=z[1],v=Object(n.useState)(""),j=Object(o.a)(v,2),E=j[0],g=j[1],h=Object(n.useState)(""),O=Object(o.a)(h,2),k=O[0],S=O[1],N=Object(n.useState)(""),L=Object(o.a)(N,2),K=L[0],T=L[1],W=Object(n.useState)(""),P=Object(o.a)(W,2),I=P[0],x=P[1],C=Object(n.useState)(""),A=Object(o.a)(C,2),D=A[0],H=A[1],J=Object(n.useState)(0),B=Object(o.a)(J,2),F=B[0],V=B[1],q=Object(n.useState)(5e3),G=Object(o.a)(q,2),M=G[0],U=G[1],Z=[{type:"text",value:p,set:function(e){return w(e.target.value)},placeholder:"Imie..."},{type:"text",value:b,set:function(e){return f(e.target.value)},placeholder:"Nazwisko..."},{type:"text",value:E,set:function(e){return g(e.target.value)},placeholder:"Dzial..."},{type:"number",value:k,set:function(e){return S(e.target.value)},placeholder:"Kwota wynagrodzenia..."},{type:"text",value:K,set:function(e){return T(e.target.value)},placeholder:"Waluta wynagrodzenia..."}],Q=[{type:"text",value:D,set:function(e){return H(e.target.value)},placeholder:"Szukaj..."},{type:"number",set:function(e){return V(e.target.value)},placeholder:"Od..."},{type:"number",set:function(e){return U(e.target.value)},placeholder:"Do..."}];return Object(n.useEffect)((function(){0==F&&V(0),0==M&&U(1e5)}),[F,M]),r.a.createElement(m,{value:{setWorkers:u,setName:w,setSurname:f,setSalary:S,setCurrency:T,setSection:g,name:p,surname:b,section:E,salary:k,currency:K,addNewWorker:function(e){e.preventDefault();var t={imie:p,nazwisko:b,dzial:E,wynagrodzenieKwota:k,wynagrodzenieWaluta:K},a=Object(c.a)(l);a.push(t),u(a),w(""),f(""),g(""),S(""),T("")},workers:l,sumValueOfSection:function(){var e=[],t=[],a=[];l.map((function(n){"IT"==n.dzial?e.push(Number(n.wynagrodzenieKwota)):"Administracja"==n.dzial?t.push(Number(n.wynagrodzenieKwota)):a.push(Number(n.wynagrodzenieKwota))}));var n=e.reduce((function(e,t){return e+t})),u=t.reduce((function(e,t){return e+t})),i=n+u+a[0];return r.a.createElement("div",{className:"p-container"},r.a.createElement("p",null,"IT: ",n," PLN"),r.a.createElement("p",null,"Administracja: ",u," PLN"),r.a.createElement("p",null,"Handlowiec: ",a[0]," PLN"),r.a.createElement("p",null,"Suma: ",i," PLN"))},renderTableData:function(){var e=l.filter((function(e){return e.imie.toLowerCase().includes(D.toLowerCase())||e.nazwisko.toLowerCase().includes(D.toLowerCase())})).filter((function(e){return M>Number(e.wynagrodzenieKwota)&&Number(e.wynagrodzenieKwota)>=F}));return e.filter((function(t){return""!=I?t.dzial==I:e})).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.imie),r.a.createElement("td",null,e.nazwisko),r.a.createElement("td",null,e.dzial),r.a.createElement("td",null,e.wynagrodzenieKwota),r.a.createElement("td",null,e.wynagrodzenieWaluta))}))},renderTableHeader:function(){return Object.keys(l[0]).map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())}))},select:I,setSelect:x,word:D,setWord:H,inputFrom:F,setInputFrom:V,inputTo:M,setInputTo:U,inputList:Z,inputSearch:Q}},e.children)},w=function(){var e=Object(n.useContext)(s),t=e.addNewWorker,a=e.inputList,l=e.renderTableData,u=e.inputSearch,c=e.renderTableHeader,o=e.sumValueOfSection,d=e.select,m=e.setSelect;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Pracownicy"),r.a.createElement("div",{style:{width:"100vw"}},u.map((function(e){return r.a.createElement(i,{type:e.type,value:e.value,set:e.set,placeholder:e.placeholder,key:e.placeholder})})),r.a.createElement("select",{value:d,onChange:function(e){return m(e.target.value)}},r.a.createElement("option",{value:""},"Wybierz dzia\u0142"),r.a.createElement("option",{value:"IT"},"IT"),r.a.createElement("option",{value:"Administracja"},"Administracja"),r.a.createElement("option",{value:"Handlowiec"},"Handlowiec"))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,c()),l())),o(),r.a.createElement("form",{style:{display:"flex",flexDirection:"column",width:"20%"},onSubmit:function(e){return t(e)}},a.map((function(e){return r.a.createElement(i,{type:e.type,value:e.value,set:e.set,placeholder:e.placeholder,key:e.placeholder})})),r.a.createElement("button",{type:"submit"},"DODAJ")))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null,r.a.createElement(w,null))),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.00b03d7b.chunk.js.map