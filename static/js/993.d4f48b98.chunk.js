"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[993],{9993:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(9085),a=t(9434),c=t(8405),s=t(6351),i=t(184);function o(){var e=(0,a.v9)(s.Af),n=(0,a.I0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("form",{onSubmit:function(t){var a=t.currentTarget;t.preventDefault();var s=a.elements.name.value,i=a.elements.phone.value;e.find((function(e){return e.name===s}))?r.Am.info("".concat(s," is already in contacts")):n((0,c.uK)({name:s,number:i})).unwrap().then((function(){return r.Am.success("".concat(s," successfully added!"))})).catch((function(){return r.Am.error("Something went wrong, ".concat(s," not added. Try again "))})),a.reset()},children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name"}),(0,i.jsx)("input",{type:"text",name:"name",id:"name",pattern:"[a-zA-Z ]*",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,i.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,i.jsx)("input",{type:"tel",name:"phone",id:"phone",pattern:"[0-9]+",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,i.jsx)("button",{type:"submit",children:"Add contact"})]})})}var u=t(2791);function l(){var e=(0,a.I0)(),n=(0,a.v9)(s.DI),t=(0,a.v9)(s.xU),o=(0,a.v9)(s.zh);(0,u.useEffect)((function(){e((0,c.yF)())}),[e]);return(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)("p",{children:"Loading..."}),o&&(0,i.jsx)("p",{children:o}),n.length>0?(0,i.jsx)("ul",{children:n.map((function(n){var t=n.id,a=n.name,s=n.number;return(0,i.jsxs)("li",{children:[a,": ",s,(0,i.jsx)("button",{onClick:function(){return function(n,t){e((0,c.GK)(n)).unwrap().then((function(){return r.Am.success("".concat(t," successfully deleted!"))})).catch((function(){return r.Am.error("Something went wrong, ".concat(t," not deleted. Try again"))}))}(t,a)},children:"Delete"})]},t)}))}):(0,i.jsx)("p",{children:"You don't have contacts yet"})]})}var d=t(1429);function h(){var e=(0,a.I0)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("label",{htmlFor:"filter",children:"Find contacts by name:"}),(0,i.jsx)("input",{type:"text",name:"filter",id:"filter",onChange:function(n){var t=n.target.value;e((0,d.x)(t))}})]})}var m=function(){var e=(0,a.v9)(s.DI);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{}),(0,i.jsxs)("h2",{children:["Contacts (",e.length,")"]}),(0,i.jsx)(h,{}),(0,i.jsx)(l,{})]})}}}]);
//# sourceMappingURL=993.d4f48b98.chunk.js.map