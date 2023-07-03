"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[758],{4682:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(2392),a=r(4224),i={textAlign:"center",marginBottom:"16px"},l={marginTop:"12px"},s=r(184),o=function(e){var n=e.children,r=e.handleSubmit,o=e.buttonText;return(0,s.jsxs)(t.NI,{as:"form",onSubmit:r,sx:i,children:[n,(0,s.jsx)(a.z,{type:"submit",sx:l,children:o})]})}},1632:function(e,n,r){var t=r(8206),a=r(8208),i=r(5442),l=(r(2791),r(184));n.Z=function(e){var n=e.type,r=e.name,s=e.label,o=e.pattern,d=e.title,c=e.styles;return(0,l.jsxs)(t.W,{textAlign:"start",children:[(0,l.jsx)(a.l,{htmlFor:r,sx:c,display:"inline",children:s}),(0,l.jsx)(i.I,{sx:c,mb:"16px",type:n,name:r,id:r,pattern:o,title:d,required:!0})]})}},8758:function(e,n,r){r.r(n),r.d(n,{default:function(){return X}});var t=r(9085),a=r(9434),i=r(8405),l=r(6351),s=r(4682),o=r(1632),d={display:"inline",maxWidth:"320px"},c=r(184);function u(){var e=(0,a.v9)(l.Af),n=(0,a.I0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(s.Z,{handleSubmit:function(r){var a=r.currentTarget;r.preventDefault();var l=a.elements.name.value,s=a.elements.phone.value;e.find((function(e){return e.name===l}))?t.Am.info("".concat(l," is already in contacts")):n((0,i.uK)({name:l,number:s})).unwrap().then((function(){return t.Am.success("".concat(l," successfully added!"))})).catch((function(){return t.Am.error("Something went wrong, ".concat(l," not added. Try again "))})),a.reset()},buttonText:"Add contact",children:[(0,c.jsx)(o.Z,{styles:d,type:"text",name:"name",label:"Name",pattern:"[a-zA-Z ]*",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,c.jsx)(o.Z,{styles:d,type:"tel",name:"phone",label:"Phone",pattern:"[0-9]+",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]})})}var m=(0,r(5903).I)({displayName:"DeleteIcon",path:(0,c.jsx)("g",{fill:"currentColor",children:(0,c.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),v=r(1413),h=r(4925),f=r(7872),p=r(9219),x=r(2996),y=r(2503),g=r(6992);var b=["className","align","decoration","casing"],Z=(0,f.G)((function(e,n){var r=(0,p.mq)("Text",e),t=(0,x.Lr)(e),a=(t.className,t.align,t.decoration,t.casing,(0,h.Z)(t,b)),i=function(e){var n=Object.assign({},e);for(var r in n)void 0===n[r]&&delete n[r];return n}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(y.m.p,(0,v.Z)((0,v.Z)((0,v.Z)({ref:n,className:(0,g.cx)("chakra-text",e.className)},i),a),{},{__css:r}))}));Z.displayName="Text";var j=r(4942),I=r(9439),N=r(4363),_=r(9886),F=r(2791);var R=["children","styleType","stylePosition","spacing"],k=["as"],q=["as"],T=(0,_.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),C=(0,I.Z)(T,2),P=C[0],L=C[1],S=(0,f.G)((function(e,n){var r=(0,p.jC)("List",e),t=(0,x.Lr)(e),a=t.children,i=t.styleType,l=void 0===i?"none":i,s=t.stylePosition,o=t.spacing,d=(0,h.Z)(t,R),u=function(e){return F.Children.toArray(e).filter((function(e){return(0,F.isValidElement)(e)}))}(a),m=o?(0,j.Z)({},"& > *:not(style) ~ *:not(style)",{mt:o}):{};return(0,c.jsx)(P,{value:r,children:(0,c.jsx)(y.m.ul,(0,v.Z)((0,v.Z)({ref:n,listStyleType:l,listStylePosition:s,role:"list",__css:(0,v.Z)((0,v.Z)({},r.container),m)},d),{},{children:u}))})}));S.displayName="List",(0,f.G)((function(e,n){e.as;var r=(0,h.Z)(e,k);return(0,c.jsx)(S,(0,v.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},r))})).displayName="OrderedList";var A=(0,f.G)((function(e,n){e.as;var r=(0,h.Z)(e,q);return(0,c.jsx)(S,(0,v.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},r))}));A.displayName="UnorderedList";var D=(0,f.G)((function(e,n){var r=L();return(0,c.jsx)(y.m.li,(0,v.Z)((0,v.Z)({ref:n},e),{},{__css:r.item}))}));D.displayName="ListItem",(0,f.G)((function(e,n){var r=L();return(0,c.jsx)(N.J,(0,v.Z)((0,v.Z)({ref:n,role:"presentation"},e),{},{__css:r.icon}))})).displayName="ListIcon";var w=r(4224),z=["icon","children","isRound","aria-label"],B=(0,f.G)((function(e,n){var r=e.icon,t=e.children,a=e.isRound,i=e["aria-label"],l=(0,h.Z)(e,z),s=r||t,o=(0,F.isValidElement)(s)?(0,F.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return(0,c.jsx)(w.z,(0,v.Z)((0,v.Z)({padding:"0",borderRadius:a?"full":void 0,ref:n,"aria-label":i},l),{},{children:o}))}));B.displayName="IconButton";var O={listStyle:"none"},G={marginBottom:"12px"},H={marginLeft:"16px",":hover":{color:"blue"}};function M(){var e=(0,a.I0)(),n=(0,a.v9)(l.DI),r=(0,a.v9)(l.Af),s=(0,a.v9)(l.xU),o=(0,a.v9)(l.zh);(0,F.useEffect)((function(){e((0,i.yF)())}),[e]);return(0,c.jsxs)(c.Fragment,{children:[s&&(0,c.jsx)(Z,{children:"Loading..."}),o&&(0,c.jsx)(Z,{children:o}),n&&(0,c.jsx)(A,{sx:O,children:n.map((function(n){var r=n.id,a=n.name,l=n.number;return(0,c.jsxs)(D,{sx:G,children:[a,": ",l,(0,c.jsx)(B,{onClick:function(){return function(n,r){e((0,i.GK)(n)).unwrap().then((function(){return t.Am.success("".concat(r," successfully deleted!"))})).catch((function(){return t.Am.error("Something went wrong, ".concat(r," not deleted. Try again"))}))}(r,a)},"aria-label":"Delete current item",icon:(0,c.jsx)(m,{}),size:"sm",variant:"outline",sx:H})]},r)}))}),!s&&!o&&0===n.length&&0!==r.length&&(0,c.jsx)(Z,{children:"No matches found"}),!s&&!o&&0===r.length&&(0,c.jsx)(Z,{children:"You don't have contacts yet"})]})}var J=r(8208),E=r(5442),V=r(1429),Q={display:"inline",width:"210px",marginBottom:"16px"},K={display:"inline"};function U(){var e=(0,a.I0)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(J.l,{htmlFor:"filter",sx:K,children:"Find contacts by name:"}),(0,c.jsx)(E.I,{sx:Q,type:"text",name:"filter",id:"filter",onChange:function(n){var r=n.target.value;e((0,V.x)(r))}})]})}var W=r(5946),X=function(){var e=(0,a.v9)(l.DI);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{}),(0,c.jsxs)(W.X,{as:"h3",mb:"16px",children:["Contacts (",e.length,")"]}),(0,c.jsx)(U,{}),(0,c.jsx)(M,{})]})}},2392:function(e,n,r){r.d(n,{NI:function(){return _},NJ:function(){return N},e:function(){return b}});var t=r(1413),a=r(4925),i=r(9439),l=r(9886),s=r(4591),o=r(7872),d=r(9219),c=r(2996),u=r(2503),m=r(6992),v=r(2791),h=r(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],x=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,i.Z)(x,2),g=y[0],b=y[1],Z=(0,l.k)({strict:!1,name:"FormControlContext"}),j=(0,i.Z)(Z,2),I=j[0],N=j[1];var _=(0,o.G)((function(e,n){var r=(0,d.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,c=(0,a.Z)(e,f),u=(0,v.useId)(),h=n||"field-".concat(u),p="".concat(h,"-label"),x="".concat(h,"-feedback"),y="".concat(h,"-helptext"),g=(0,v.useState)(!1),b=(0,i.Z)(g,2),Z=b[0],j=b[1],I=(0,v.useState)(!1),N=(0,i.Z)(I,2),_=N[0],F=N[1],R=(0,v.useState)(!1),k=(0,i.Z)(R,2),q=k[0],T=k[1],C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:y},e),{},{ref:(0,s.lq)(n,(function(e){e&&F(!0)}))})}),[y]),P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(q),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,q,l,d,p]),L=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[x]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)((0,t.Z)({},e),c),{},{ref:n,role:"group"})}),[c]),A=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!q,onFocus:function(){return T(!0)},onBlur:function(){return T(!1)},hasFeedbackText:Z,setHasFeedbackText:j,hasHelpText:_,setHasHelpText:F,id:h,labelId:p,feedbackId:x,helpTextId:y,htmlProps:c,getHelpTextProps:C,getErrorMessageProps:L,getRootProps:S,getLabelProps:P,getRequiredIndicatorProps:A}}((0,c.Lr)(e)),o=l.getRootProps,x=(l.htmlProps,(0,a.Z)(l,p)),y=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(I,{value:x,children:(0,h.jsx)(g,{value:r,children:(0,h.jsx)(u.m.div,(0,t.Z)((0,t.Z)({},o({},n)),{},{className:y,__css:r.container}))})})}));_.displayName="FormControl",(0,o.G)((function(e,n){var r=N(),a=b(),i=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(u.m.div,(0,t.Z)((0,t.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:a.helperText,className:i}))})).displayName="FormHelperText"},8208:function(e,n,r){r.d(n,{l:function(){return v}});var t=r(1413),a=r(4925),i=r(2392),l=r(7872),s=r(9219),o=r(2996),d=r(2503),c=r(6992),u=r(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,l.G)((function(e,n){var r,l=(0,s.mq)("FormLabel",e),v=(0,o.Lr)(e),f=(v.className,v.children),p=v.requiredIndicator,x=void 0===p?(0,u.jsx)(h,{}):p,y=v.optionalIndicator,g=void 0===y?null:y,b=(0,a.Z)(v,m),Z=(0,i.NJ)(),j=null!=(r=null==Z?void 0:Z.getLabelProps(b,n))?r:(0,t.Z)({ref:n},b);return(0,u.jsxs)(d.m.label,(0,t.Z)((0,t.Z)({},j),{},{className:(0,c.cx)("chakra-form__label",v.className),__css:(0,t.Z)({display:"block",textAlign:"start"},l),children:[f,(null==Z?void 0:Z.isRequired)?x:g]}))}));v.displayName="FormLabel";var h=(0,l.G)((function(e,n){var r=(0,i.NJ)(),a=(0,i.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(d.m.span,(0,t.Z)((0,t.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:l}))}));h.displayName="RequiredIndicator"},5442:function(e,n,r){r.d(n,{I:function(){return p}});var t=r(1413),a=r(4925),i=r(2392),l=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,s,d=(0,i.NJ)(),c=e.id,u=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,f=e.isInvalid,p=e.isReadOnly,x=e.isDisabled,y=e.onFocus,g=e.onBlur,b=(0,a.Z)(e,o),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&Z.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&Z.push(d.helpTextId);return(0,t.Z)((0,t.Z)({},b),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=c?c:null==d?void 0:d.id,isDisabled:null!=(n=null!=u?u:x)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=m?m:p)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=v?v:h)?s:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,l.v0)(null==d?void 0:d.onFocus,y),onBlur:(0,l.v0)(null==d?void 0:d.onBlur,g)})}(e),r=n.isDisabled,d=n.isInvalid,c=n.isReadOnly,u=n.isRequired,m=(0,a.Z)(n,s);return(0,t.Z)((0,t.Z)({},m),{},{disabled:r,readOnly:c,required:u,"aria-invalid":(0,l.Qm)(d),"aria-required":(0,l.Qm)(u),"aria-readonly":(0,l.Qm)(c)})}var c=r(7872),u=r(9219),m=r(2996),v=r(2503),h=r(184),f=["htmlSize"],p=(0,c.G)((function(e,n){var r=e.htmlSize,i=(0,a.Z)(e,f),s=(0,u.jC)("Input",i),o=d((0,m.Lr)(i)),c=(0,l.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,t.Z)((0,t.Z)({size:r},o),{},{__css:s.field,ref:n,className:c}))}));p.displayName="Input",p.id="Input"}}]);
//# sourceMappingURL=758.b8aadef9.chunk.js.map