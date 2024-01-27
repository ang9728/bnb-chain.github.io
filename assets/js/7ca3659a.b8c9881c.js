"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=d(n),u=o,h=f["".concat(l,".").concat(u)]||f[u]||p[u]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_label:"BNB Smart Chain Separate Node",hide_table_of_contents:!1,sidebar_position:2},i="Separate Node on BNB Smart Chain",s={unversionedId:"BSC-separate-node",id:"BSC-separate-node",title:"Separate Node on BNB Smart Chain",description:"Introduction",source:"@site/docs/BSC-separate-node.md",sourceDirName:".",slug:"/BSC-separate-node",permalink:"/docs/BSC-separate-node",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/BSC-separate-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Smart Chain Separate Node",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BNB Smart Chain Archive Node",permalink:"/docs/archivenode"},next:{title:"BNB Smart Chain Verify Node",permalink:"/docs/BSC-verify-node"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Roles",id:"roles",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"Fast Node",id:"fast-node",level:4},{value:"Verify node",id:"verify-node",level:4},{value:"Prune tries node",id:"prune-tries-node",level:4},{value:"Run Verify Node",id:"run-verify-node",level:2},{value:"Run Fast Node",id:"run-fast-node",level:2}],c={toc:d},f="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"separate-node-on-bnb-smart-chain"},"Separate Node on BNB Smart Chain"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(62232).Z,width:"468",height:"385"})),(0,o.kt)("p",null,"Currently, a BSC node has two kinds of state world: MPT and snapshot. MPT(Merkle Patricia Tries) is a tree-structured state world. The key function of MPT is to generate the state root to ensure state consistency, while the query/commit on MPT is quite slow. Snapshot is a flattened key-value-based state world. Snapshot provides fast queries and commits. The storage size of the snapshot increases slowly even with a large transaction volume. Snapshot is usually used for block processing, while MPT is used for state verification."),(0,o.kt)("p",null,"In order to lower the hardware requirement and keep security, we introduce two types of nodes to make full use of different storage, one is named fast node, and the other is named verify node. The fast node will do block processing with snapshot, it will do all verification against blocks except state root. The verify node receives diffhash from the fast node and then responds MPT root to the fast node."),(0,o.kt)("p",null,"The fast node doesn\u2019t need to store MPT, so the storage and computation requirement will be much lower."),(0,o.kt)("h2",{id:"roles"},"Roles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fast Node"),": It does full sync using only Snapshot and generates difflayer. It needs the confirm message from the verify node before freezing the blocks, it has to wait until it receives a confirm message from the verify node for the ancestor block before inserting new blocks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Verify Node"),": It is a normal BSC full node that does full sync using Snapshot and MPT, and generates difflayer. It receives diffhash from fast nodes, finds the corresponding difflayer whose diffhash is matched, then responds MPT root message to the fast node."))),(0,o.kt)("h2",{id:"related-commands"},"Related Commands"),(0,o.kt)("h4",{id:"fast-node"},"Fast Node"),(0,o.kt)("p",null,"Introduce a new ",(0,o.kt)("strong",{parentName:"p"},"tries-verify-mode")," setting, there are four modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"local"),": a normal full node with complete state world(both MPT and snapshot), merkle state root will be verified against the block header."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"full"),": a fast node with only snapshot state world. Merkle state root is verified by the trustworthy remote verify node by comparing the diffhash(an identify of difflayer generated by the block) and state root."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"insecure"),": same as full mode, except that it can tolerate without verifying the diffhash when verify node does not have it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"none"),": no merkle state root verification at all, there is no need to setup or connect remote verify node at all, it is more light comparing to full and insecure mode, but get a very little chance that the state is not consistent with other peers.")),(0,o.kt)("p",null,"If the fast node runs in not local mode, the node will disable diff protocol by default, If the fast node runs in full or light mode, the node will enable trust protocol by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./geth --config ./config.toml --datadir ./node --syncmode full --cache 5000 --tries-verify-mode none\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"*Note: fast node can never revert to full node.")),(0,o.kt)("h4",{id:"verify-node"},"Verify node"),(0,o.kt)("p",null,"When a full node has enabled the trust protocol, it can serve as a verify node, at the same time, we will recommend you to enable persist diff, disable snap protocol and diff protocol when running a verify node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./geth --config ./config.toml --datadir ./node --syncmode full --cache 5000 --persistdiff --enabletrustprotocol --disablesnapprotocol --disablediffprotocol\n")),(0,o.kt)("h4",{id:"prune-tries-node"},"Prune tries node"),(0,o.kt)("p",null,"Prune the tires node:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./geth snapshot insecure-prune-all --datadir ./node  ./genesis.json\n")),(0,o.kt)("h2",{id:"run-verify-node"},"Run Verify Node"),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/BSC-verify-node"},"this guide")),(0,o.kt)("h2",{id:"run-fast-node"},"Run Fast Node"),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/BSC-fast-node"},"this guide")))}p.isMDXComponent=!0},62232:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/separate-node-architecture-f41ee45c8c9c36caa1a269c74f270040.png"}}]);