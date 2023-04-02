"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4217],{79793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var n=a(87462),i=(a(67294),a(3905));const o=a.p+"assets/images/chain_of_thought_example-37c925a2720c9c4bb4c823d237bc72c8.png",r=a.p+"assets/images/prompted_palm-20fba06418ed8569b51f0dd376c03b41.png";var s=a(39145);const p={sidebar_position:3,locale:"en-us",style:"chicago"},l="\ud83d\udfe2 \u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b",d={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 \u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b",description:"\u601d\u7ef4\u94fe(CoT)\u63d0\u793a\u8fc7\u7a0b(@wei2022chain)\u662f\u4e00\u79cd\u6700\u8fd1\u5f00\u53d1\u7684\u63d0\u793a\u65b9\u6cd5\uff0c\u5b83\u9f13\u52b1\u5927\u8bed\u8a00\u6a21\u578b\u89e3\u91ca\u5176\u63a8\u7406\u8fc7\u7a0b\u3002\u4e0b\u56fe(@wei2022chain) \u663e\u793a\u4e86 %%few shot standard prompt|few shot standard prompt%%\uff08\u5de6)\u4e0e\u94fe\u5f0f\u601d\u7ef4\u63d0\u793a\u8fc7\u7a0b\uff08\u53f3\uff09\u7684\u6bd4\u8f83\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/zh-Hans/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/zh-Hans/docs/category/\ufe0f-intermediate"},next:{title:"\ud83d\udfe2 \u96f6\u6837\u672c\u601d\u7ef4\u94fe",permalink:"/zh-Hans/docs/intermediate/zero_shot_cot"}},m={},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4e0d\u6b63\u786e\u7684\u7b54\u6848",id:"\u4e0d\u6b63\u786e\u7684\u7b54\u6848",level:4},{value:"\u6b63\u786e\u7684\u7b54\u6848",id:"\u6b63\u786e\u7684\u7b54\u6848",level:4},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}],c={toc:h},f="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b"},"\ud83d\udfe2 \u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b"),(0,i.kt)("p",null,"\u601d\u7ef4\u94fe(CoT)\u63d0\u793a\u8fc7\u7a0b",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u662f\u4e00\u79cd\u6700\u8fd1\u5f00\u53d1\u7684\u63d0\u793a\u65b9\u6cd5\uff0c\u5b83\u9f13\u52b1\u5927\u8bed\u8a00\u6a21\u578b\u89e3\u91ca\u5176\u63a8\u7406\u8fc7\u7a0b\u3002\u4e0b\u56fe",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u663e\u793a\u4e86 ",(0,i.kt)("a",{parentName:"p",id:"few shot standard prompt_4_5_1680465877025","data-tooltip-html":"Standard prompts that have exemplars in them. Exemplars are examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"few shot standard prompt"),(0,i.kt)(s.u,{anchorId:"few shot standard prompt_4_5_1680465877025",clickable:!0,mdxType:"Tooltip"}),"\uff08\u5de6)\u4e0e\u94fe\u5f0f\u601d\u7ef4\u63d0\u793a\u8fc7\u7a0b\uff08\u53f3\uff09\u7684\u6bd4\u8f83\u3002"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"750px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"\u5e38\u89c4\u63d0\u793a\u8fc7\u7a0b vs \u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b(Wei et al.)"),(0,i.kt)("p",null,"\u601d\u7ef4\u94fe\u7684\u4e3b\u8981\u601d\u60f3\u662f\u901a\u8fc7\u5411\u5927\u8bed\u8a00\u6a21\u578b\u5c55\u793a\u4e00\u4e9b\u5c11\u91cf\u7684 ",(0,i.kt)("a",{parentName:"p",id:"exemplars_0_25_1680465877025","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplars"),(0,i.kt)(s.u,{anchorId:"exemplars_0_25_1680465877025",clickable:!0,mdxType:"Tooltip"}),"\uff0c\u5728\u6837\u4f8b\u4e2d\u89e3\u91ca\u63a8\u7406\u8fc7\u7a0b\uff0c\u5927\u8bed\u8a00\u6a21\u578b\u5728\u56de\u7b54\u63d0\u793a\u65f6\u4e5f\u4f1a\u663e\u793a\u63a8\u7406\u8fc7\u7a0b\u3002\u8fd9\u79cd\u63a8\u7406\u7684\u89e3\u91ca\u5f80\u5f80\u4f1a\u5f15\u5bfc\u51fa\u66f4\u51c6\u786e\u7684\u7ed3\u679c\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u51e0\u4e2a\u6f14\u793a\u3002\u7b2c\u4e00\u4e2a\u6f14\u793a\u4e86GPT-3\uff08davinci-003\uff09\u65e0\u6cd5\u89e3\u51b3\u7b80\u5355\u7684\u5355\u8bcd\u95ee\u9898\u3002\u7b2c\u4e8c\u4e2a\u6f14\u793a\u4e86GPT-3\uff08davinci-003\uff09\u901a\u8fc7\u4f7f\u7528\u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b\u6210\u529f\u89e3\u51b3\u76f8\u540c\u7684\u95ee\u9898\u3002"),(0,i.kt)("h4",{id:"\u4e0d\u6b63\u786e\u7684\u7b54\u6848"},"\u4e0d\u6b63\u786e\u7684\u7b54\u6848"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"\u54ea\u79cd\u65b9\u6cd5\u662f\u66f4\u5feb\u7684\u4e0a\u73ed\u65b9\u5f0f\uff1f\\n\u9009\u98791\uff1a\u4e58\u57501000\u5206\u949f\u7684\u516c\u5171\u6c7d\u8f66\uff0c\u7136\u540e\u534a\u5c0f\u65f6\u7684\u706b\u8f66\uff0c\u6700\u540e10\u5206\u949f\u7684\u81ea\u884c\u8f66\u9a91\u884c\u3002\\n\u9009\u98792\uff1a\u4e58\u5750800\u5206\u949f\u7684\u516c\u5171\u6c7d\u8f66\uff0c\u7136\u540e1\u5c0f\u65f6\u7684\u706b\u8f66\uff0c\u6700\u540e30\u5206\u949f\u7684\u81ea\u884c\u8f66\u9a91\u884c\u3002","initial-response":"\u9009\u98791\u662f\u66f4\u5feb\u7684\u4e0a\u73ed\u65b9\u5f0f\u3002","max-tokens":"256","box-rows":"7","model-temp":"0","top-p":"0"}),(0,i.kt)("h4",{id:"\u6b63\u786e\u7684\u7b54\u6848"},"\u6b63\u786e\u7684\u7b54\u6848"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"\u54ea\u79cd\u65b9\u6cd5\u662f\u66f4\u5feb\u7684\u56de\u5bb6\u65b9\u5f0f\uff1f\\n\u9009\u98791\uff1a\u4e58\u575010\u5206\u949f\u7684\u516c\u5171\u6c7d\u8f66\uff0c\u7136\u540e40\u5206\u949f\u7684\u516c\u5171\u6c7d\u8f66\uff0c\u6700\u540e10\u5206\u949f\u7684\u706b\u8f66\u3002\\n\u9009\u98792\uff1a\u4e58\u575090\u5206\u949f\u7684\u706b\u8f66\uff0c\u7136\u540e\u9a91\u884c45\u5206\u949f\uff0c\u6700\u540e10\u5206\u949f\u7684\u516c\u5171\u6c7d\u8f66\u3002\\n\u9009\u98791\u9700\u898160\u5206\u949f\uff0c\u537310+40+10 = 60\u5206\u949f\u3002\\n\u9009\u98792\u9700\u8981145\u5206\u949f\uff0c\u537390+45+10=145\u5206\u949f\u3002\\n\u7531\u4e8e\u9009\u98791\u9700\u898160\u5206\u949f\uff0c\u9009\u98792\u9700\u8981145\u5206\u949f\uff0c\u56e0\u6b64\u9009\u98791\u66f4\u5feb\u3002\\n\\n\u54ea\u79cd\u65b9\u6cd5\u662f\u66f4\u5feb\u7684\u4e0a\u73ed\u65b9\u5f0f\uff1f\\n\u9009\u98791\uff1a\u4e58\u57501000\u5206\u949f\u7684\u516c\u5171\u6c7d\u8f66\uff0c\u7136\u540e\u534a\u5c0f\u65f6\u7684\u706b\u8f66\uff0c\u6700\u540e10\u5206\u949f\u7684\u81ea\u884c\u8f66\u9a91\u884c\u3002\\n\u9009\u98792\uff1a\u4e58\u5750800\u5206\u949f\u7684\u516c\u5171\u6c7d\u8f66\uff0c\u7136\u540e1\u5c0f\u65f6\u7684\u706b\u8f66\uff0c\u6700\u540e30\u5206\u949f\u7684\u81ea\u884c\u8f66\u9a91\u884c\u3002","initial-response":"\u9009\u98791\u9700\u89811000+30+10 = 1040\u5206\u949f\u3002\n\u9009\u98792\u9700\u8981800+60+30 = 890\u5206\u949f\u3002\u7531\u4e8e\u9009\u98792\u9700\u8981890\u5206\u949f\uff0c\u9009\u98791\u9700\u89811040\u5206\u949f\uff0c\u56e0\u6b64\u9009\u98792\u66f4\u5feb\u3002","max-tokens":"256","box-rows":"18","model-temp":"0","top-p":"0"}),(0,i.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,i.kt)("p",null,"\u601d\u7ef4\u94fe\u5df2\u88ab\u8bc1\u660e\u5bf9\u4e8e\u7b97\u672f\u3001\u5e38\u8bc6\u548c\u7b26\u53f7\u63a8\u7406\u7b49\u4efb\u52a1\u7684\u7ed3\u679c\u6709\u6240\u6539\u8fdb",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002\u7279\u522b\u662f\uff0c\u5728GSM8K",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u57fa\u51c6\u6d4b\u8bd5\u4e0a\uff0cPaLM 540B",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\u7684\u63d0\u793a\u8fbe\u5230\u4e8657%\u7684\u89e3\u51b3\u7387\u51c6\u786e\u6027\u3002"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:r,style:{width:"300px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"Comparison of models on the GSM8K benchmark (Wei et al.)"),(0,i.kt)("h2",{id:"\u9650\u5236"},"\u9650\u5236"),(0,i.kt)("p",null,"\u91cd\u8981\u7684\u662f\uff0c\u6839\u636eWei\u7b49\u4eba\u7684\u8bf4\u6cd5\uff0c\u201c\u601d\u7ef4\u94fe\u4ec5\u5728\u4f7f\u7528\u223c100B\u53c2\u6570\u7684\u6a21\u578b\u65f6\u624d\u4f1a\u4ea7\u751f\u6027\u80fd\u63d0\u5347\u201d\u3002\u8f83\u5c0f\u7684\u6a21\u578b\u7f16\u5199\u4e86\u4e0d\u5408\u903b\u8f91\u7684\u601d\u7ef4\u94fe\u4f1a\u5bfc\u81f4\u7cbe\u5ea6\u6bd4\u6807\u51c6\u63d0\u793a\u66f4\u5dee\u3002\u901a\u5e38\uff0c\u6a21\u578b\u4ece\u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b\u4e2d\u83b7\u5f97\u6027\u80fd\u63d0\u5347\u7684\u65b9\u5f0f\u4e0e\u6a21\u578b\u7684\u5927\u5c0f\u6210\u6bd4\u4f8b\u3002"),(0,i.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,i.kt)("p",null,"\u672c\u7ae0\u7684\u5199\u4f5c\u8fc7\u7a0b\u4e2d\uff0c\u6ca1\u6709\u5bf9\u4efb\u4f55\u8bed\u8a00\u6a21\u578b\u8fdb\u884c\u5fae\u8c03 \ud83d\ude0a."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);