"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[452],{5589:function(e,n,t){var r=t(2392),a=t(4224),s=t(184);n.Z=function(e){var n=e.children,t=e.handleSubmit,i=e.buttonText;return(0,s.jsxs)(r.NI,{as:"form",onSubmit:t,textAlign:"center",mb:"16px",children:[n,(0,s.jsx)(a.z,{type:"submit",mt:"12px",children:i})]})}},5139:function(e,n,t){var r=t(8206),a=t(8208),s=t(5442),i=(t(2791),t(184));n.Z=function(e){var n=e.type,t=e.name,l=e.label,o=e.pattern,c=e.title,u=e.value,d=e.styles;return(0,i.jsxs)(r.W,{textAlign:"start",children:[(0,i.jsx)(a.l,{htmlFor:t,sx:d,display:"inline",children:l}),(0,i.jsx)(s.I,{sx:d,mb:"16px",defaultValue:u,type:n,name:t,id:t,pattern:o,title:c,required:!0})]})}},7452:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(9085),a=t(9434),s=t(8405),i=t(6351),l=t(5589),o=t(5139),c=t(8206),u=t(184),d={display:"inline",maxWidth:"320px"};function x(){var e=(0,a.v9)(i.Af),n=(0,a.I0)();return(0,u.jsx)(c.W,{border:"2px solid",borderColor:"blue.500",borderTop:"none",borderRadius:"8px",children:(0,u.jsxs)(l.Z,{handleSubmit:function(t){var a=t.currentTarget;t.preventDefault();var i=a.elements.name.value,l=a.elements.phone.value;e.find((function(e){return e.name===i}))?r.Am.info("".concat(i," is already in contacts")):n((0,s.uK)({name:i,number:l})).unwrap().then((function(){return r.Am.success("".concat(i," successfully added!"))})).catch((function(){return r.Am.error("Something went wrong, ".concat(i," not added. Try again."))})),a.reset()},buttonText:"Add contact",children:[(0,u.jsx)(o.Z,{styles:d,type:"text",name:"name",label:"Name",pattern:"^[\\\\sa-zA-Z'-]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,u.jsx)(o.Z,{styles:d,type:"tel",name:"phone",label:"Phone",pattern:"[\\+]\\d{2}\\s[\\(]\\d{3}[\\)]\\s\\d{3}[\\-]\\d{2}[\\-]\\d{2}",title:"Format: +38 (xxx) xxx-xx-xx"})]})})}var m=t(2791),h=t(114),p=t(9327),f=t(1844),j=t(7885),v=t(3661),b=function(e){var n=e.id,t=e.name,r=e.number,s=e.handleDeleteButton,i=e.onOpen,l=(0,a.I0)();return(0,u.jsxs)(f.HC,{mb:"12px",children:[t,": ",r,(0,u.jsx)(j.h,{onClick:function(){return function(e,n,t){i(),l((0,v.K)({id:e,name:n,number:t}))}(n,t,r)},"aria-label":"Edit current contact",icon:(0,u.jsx)(h.d,{}),size:"sm",variant:"outline",ml:"16px"}),(0,u.jsx)(j.h,{onClick:function(){return s(n,t)},"aria-label":"Delete current contact",icon:(0,u.jsx)(p.p,{}),size:"sm",variant:"outline",ml:"16px"})]})},y=t(2347),g=t(4321);function A(e){var n=e.onOpen,t=(0,a.I0)(),l=(0,a.v9)(i.DI),o=(0,a.v9)(i.Af),d=(0,a.v9)(i.xU),x=(0,a.v9)(i.zh);(0,m.useEffect)((function(){t((0,s.yF)())}),[t]);var h=function(e,n){t((0,s.GK)(e)).unwrap().then((function(){return r.Am.success("".concat(n," successfully deleted!"))})).catch((function(){return r.Am.error("Something went wrong, ".concat(n," not deleted. Try again"))}))};return(0,u.jsxs)(c.W,{mt:"16px",children:[d&&(0,u.jsx)(g.Z,{}),x&&(0,u.jsx)(y.x,{children:x}),l&&(0,u.jsx)(f.aV,{children:l.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,u.jsx)(b,{handleDeleteButton:h,id:t,name:r,number:a,onOpen:n},t)}))}),!d&&!x&&0===l.length&&0!==o.length&&(0,u.jsx)(y.x,{children:"No matches found"}),!d&&!x&&0===o.length&&(0,u.jsx)(y.x,{children:"You don't have contacts yet"})]})}var C=t(8208),w=t(5442),F=t(1429);function I(){var e=(0,a.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(C.l,{htmlFor:"filter",display:"inline",w:"210px",children:"Find contacts by name:"}),(0,u.jsx)(w.I,{display:"inline",type:"text",name:"filter",id:"filter",onChange:function(n){var t=n.target.value;e((0,F.x)(t))}})]})}var Z=t(8348),k=t(5946),z=t(9975),O=t(581),S=t(3182),_=t(1211),T=t(7970),D=t(1216),N=t(2392),W=t(4224),B=t(6982),E={display:"inline",maxWidth:"400px"},K=function(e){var n=e.isOpen,t=e.onClose,l=(0,a.I0)(),c=(0,a.v9)(i.HL),d=c.id,x=c.name,m=c.number;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(z.u_,{isOpen:n,onClose:t,children:[(0,u.jsx)(O.Z,{}),(0,u.jsxs)(S.h,{children:[(0,u.jsx)(_.x,{children:"Edit contact"}),(0,u.jsx)(T.o,{}),(0,u.jsx)(D.f,{children:(0,u.jsxs)(N.NI,{as:"form",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,a=n.elements.name.value,i=n.elements.phone.value;if(x!==a||m!==i){var o={id:d,name:a,number:i};l((0,s.mP)(o)).unwrap().then((function(){return r.Am.success("".concat(a," successfully edited!"))})).catch((function(){return r.Am.error("Something went wrong, ".concat(a," not edited. Try again."))})),t()}else r.Am.info("Any changes edited.")},textAlign:"center",mb:"16px",children:[(0,u.jsx)(o.Z,{styles:E,type:"text",name:"name",label:"Name",value:x,pattern:"^[\\\\sa-zA-Z'-]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,u.jsx)(o.Z,{styles:E,type:"tel",name:"phone",label:"Phone",value:m,pattern:"[\\+]\\d{2}\\s[\\(]\\d{3}[\\)]\\s\\d{3}[\\-]\\d{2}[\\-]\\d{2}",title:"Format: +38 (xxx) xxx-xx-xx"}),(0,u.jsx)(W.z,{onClick:t,variant:"ghost",mr:3,children:"Go back"}),(0,u.jsx)(W.z,{type:"submit",colorScheme:"blue",children:"Save changes"})]})}),(0,u.jsx)(B.m,{})]})]})})},P=function(){var e=(0,a.v9)(i.DI),n=(0,Z.q)(),t=n.onOpen,r=n.isOpen,s=n.onClose;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(K,{isOpen:r,onClose:s}),(0,u.jsx)(x,{}),(0,u.jsxs)(k.X,{as:"h3",mb:"16px",children:["Contacts (",e.length,")"]}),(0,u.jsx)(I,{}),(0,u.jsx)(A,{onOpen:t})]})}}}]);
//# sourceMappingURL=452.15198924.chunk.js.map