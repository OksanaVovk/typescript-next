(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6532:function(e,t,s){Promise.resolve().then(s.t.bind(s,543,23)),Promise.resolve().then(s.bind(s,8289))},8289:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var n=s(9268),a=s(6006);let r=e=>{let{task:t,onRemove:s,onToggle:a}=e,r=e=>{let t=e.target,s=t.nextSibling;s&&(s.style.textDecoration=t.checked?"line-through":"none")};return(0,n.jsxs)("li",{className:"task-item",children:[(0,n.jsx)("input",{className:"task-item-checkbox",type:"checkbox",name:"checkbox",defaultChecked:t.completed,onChange:()=>a(t.id),onClick:e=>r(e)}),(0,n.jsx)("p",{className:"task-item-text",style:{textDecoration:t.completed?"line-through":"none"},children:t.text}),(0,n.jsx)("button",{className:"task-item-remove-button",onClick:()=>s(t.id),children:"Remove"})]})},l=e=>{let[t,s]=(0,a.useState)(""),[l,o]=(0,a.useState)([]);(0,a.useEffect)(()=>{let t=localStorage.getItem("tasks"),s=e.tasks||(t?JSON.parse(t):[]);o(s)},[e.tasks]),(0,a.useEffect)(()=>{window.localStorage.setItem("tasks",JSON.stringify(l))},[l]);let i=e=>{e.preventDefault(),o(e=>[...e,{id:Math.random(),text:t,completed:!1}]),s("")},c=e=>{s(e.currentTarget.value)},u=e=>{o(l.filter(t=>t.id!==e))},d=e=>{let t=l.findIndex(t=>t.id===e);l[t].completed=!l[t].completed};return(0,n.jsxs)("div",{className:"task-list",children:[(0,n.jsx)("h1",{className:"task-list-title",children:"Task List"}),(0,n.jsxs)("form",{className:"add-task-form",onSubmit:i,children:[(0,n.jsx)("input",{className:"add-task-input",value:t,onChange:c}),(0,n.jsx)("button",{className:"add-task-button",type:"submit",children:"Add"})]}),(0,n.jsx)("ul",{className:"task-list",children:l.length>0?l.map(e=>(0,n.jsx)(r,{task:e,onRemove:e=>u(e),onToggle:e=>d(e)},e.id)):(0,n.jsx)("p",{className:"task-list-empty",children:"No tasks to display"})})]})};var o=l},543:function(){},3177:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(6006),a=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var n,i={},c=null,u=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,n)&&!o.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:l.current}}t.jsx=i,t.jsxs=i},9268:function(e,t,s){"use strict";e.exports=s(3177)}},function(e){e.O(0,[667,139,744],function(){return e(e.s=6532)}),_N_E=e.O()}]);