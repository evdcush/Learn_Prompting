"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2599],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>f});var t=o(67294);function s(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){s(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function n(e,a){if(null==e)return{};var o,t,s=function(e,a){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(s[o]=e[o]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var m=t.createContext({}),p=function(e){var a=t.useContext(m),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},d=function(e){var a=p(e.components);return t.createElement(m.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},l=t.forwardRef((function(e,a){var o=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),c=p(o),l=s,f=c["".concat(m,".").concat(l)]||c[l]||u[l]||r;return o?t.createElement(f,i(i({ref:a},d),{},{components:o})):t.createElement(f,i({ref:a},d))}));function f(e,a){var o=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=o.length,i=new Array(r);i[0]=l;var n={};for(var m in a)hasOwnProperty.call(a,m)&&(n[m]=a[m]);n.originalType=e,n[c]="string"==typeof e?e:s,i[1]=n;for(var p=2;p<r;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}l.displayName="MDXCreateElement"},42095:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var t=o(87462),s=(o(67294),o(3905));const r=o.p+"assets/images/pt_unguided_question-3aef44b6d4773591e69d8fcd69d0c6e4.png",i=o.p+"assets/images/pt_limerick_question-ff80f09e1705528361c88eda6aadff08.png",n=o.p+"assets/images/pt_unprimed_question-962129bef5ab635d17d586d85d7495be.png",m=o.p+"assets/images/pt_primed_question-e1ac5ff45065baa7a45d8f4772bdaac3.png",p={sidebar_position:80},d="\ud83d\udfe2 No\xe7\xf5es B\xe1sicas de Chatbot",c={unversionedId:"basics/chatbot_basics",id:"basics/chatbot_basics",title:"\ud83d\udfe2 No\xe7\xf5es B\xe1sicas de Chatbot",description:"Uma das formas mais comuns em que prompting pode ser \xfatil \xe9 durante a intera\xe7\xe3o com as v\xe1rias op\xe7\xf5es de chatbots dispon\xedveis para o p\xfablico, como o ChatGPT. Perceba que ChatGPT \xe9 diferente de GPT-3. A maior diferen\xe7a \xe9 que chatbots podem lembrar do seu hist\xf3rico de conversa. Assim como o GPT-3, eles tamb\xe9m podem responder quest\xf5es, providenciando resumos e an\xe1lises de textos, escrita de textos, c\xf3digos e muito mais, o que \xe9 uma perspectiva empolgante. Contudo, o real valor dos chatbots \xe9 atingido na sua plenitude somente quando voc\xea \xe9 espec\xedfico com os seus prompts. Neste artigo, ser\xe3o explorados alguns m\xe9todos b\xe1sicos de como fazer um melhor uso dos chatbots, fazendo aplica\xe7\xe3o de orienta\xe7\xf5es de estilo, descritores e priming (est\xedmulo pr\xe9vio).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/basics/chatbot_basics.md",sourceDirName:"basics",slug:"/basics/chatbot_basics",permalink:"/pt/docs/basics/chatbot_basics",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/chatbot_basics.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Formalizing Prompts",permalink:"/pt/docs/basics/formalizing"},next:{title:"\ud83d\udfe2 Pitfalls of LLMs",permalink:"/pt/docs/basics/pitfalls"}},u={},l=[{value:"Modificando o seu Prompt",id:"modificando-o-seu-prompt",level:2},{value:"Orienta\xe7\xe3o de Estilo",id:"orienta\xe7\xe3o-de-estilo",level:3},{value:"Descritores",id:"descritores",level:3},{value:"<em>Prompt</em> com Est\xedmulo Pr\xe9vio (<em>Priming Prompt</em>)",id:"prompt-com-est\xedmulo-pr\xe9vio-priming-prompt",level:2},{value:"Observa\xe7\xf5es",id:"observa\xe7\xf5es",level:2}],f={toc:l},v="wrapper";function g(e){let{components:a,...o}=e;return(0,s.kt)(v,(0,t.Z)({},f,o,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-no\xe7\xf5es-b\xe1sicas-de-chatbot"},"\ud83d\udfe2 No\xe7\xf5es B\xe1sicas de Chatbot"),(0,s.kt)("p",null,"Uma das formas mais comuns em que ",(0,s.kt)("em",{parentName:"p"},"prompting")," pode ser \xfatil \xe9 durante a intera\xe7\xe3o com as v\xe1rias op\xe7\xf5es de ",(0,s.kt)("em",{parentName:"p"},"chatbots")," dispon\xedveis para o p\xfablico, como o ",(0,s.kt)("a",{parentName:"p",href:"http://chat.openai.com"},"ChatGPT"),". Perceba que ",(0,s.kt)("strong",{parentName:"p"},"ChatGPT")," \xe9 diferente de ",(0,s.kt)("strong",{parentName:"p"},"GPT-3"),". A maior diferen\xe7a \xe9 que ",(0,s.kt)("em",{parentName:"p"},"chatbots")," podem lembrar do seu hist\xf3rico de conversa. Assim como o GPT-3, eles tamb\xe9m podem responder quest\xf5es, providenciando resumos e an\xe1lises de textos, escrita de textos, c\xf3digos e muito mais, o que \xe9 uma perspectiva empolgante. Contudo, o real valor dos ",(0,s.kt)("em",{parentName:"p"},"chatbots")," \xe9 atingido na sua plenitude somente quando voc\xea \xe9 espec\xedfico com os seus ",(0,s.kt)("em",{parentName:"p"},"prompts"),". Neste artigo, ser\xe3o explorados alguns m\xe9todos b\xe1sicos de como fazer um melhor uso dos ",(0,s.kt)("em",{parentName:"p"},"chatbots"),", fazendo aplica\xe7\xe3o de orienta\xe7\xf5es de estilo, descritores e ",(0,s.kt)("em",{parentName:"p"},"priming")," (est\xedmulo pr\xe9vio)."),(0,s.kt)("h2",{id:"modificando-o-seu-prompt"},"Modificando o seu Prompt"),(0,s.kt)("h3",{id:"orienta\xe7\xe3o-de-estilo"},"Orienta\xe7\xe3o de Estilo"),(0,s.kt)("p",null,"Orienta\xe7\xe3o de estilo \xe9 simplesmente pedir \xe0 IA para conversar em um certo estilo. Quando voc\xea faz perguntas sem orienta\xe7\xe3o de estilo, ChatGPT geralmente retornar\xe1 um ou dois par\xe1grafos como reposta, podendo retornar at\xe9 mais par\xe1grafos, caso seja necess\xe1rio."),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("img",{src:r,style:{width:"500px"}})),(0,s.kt)("p",null,"A reposta tem um tom moderadamente formal e d\xe1 alguns detalhes bem espec\xedficos! Caso seja do interesse, \xe9 poss\xedvel melhorar customizando a resposta do ChatGPT com o estilo sinopse no final do ",(0,s.kt)("em",{parentName:"p"},"prompt"),". Se quiser uma resposta mais coloquial, \xe9 poss\xedvel pedir para falar em um tom amig\xe1vel ou informal. Se quiser transformar em um formato mais leg\xedvel, pode-se fazer a mesma pergunta, mas pedir por uma lista de marcadores. Ainda, caso queira uma resposta divertida, basta pedir para que ela seja dada no formato de uma s\xe9rie de limeriques (limerique \xe9 poema bem curtinho e humorado)."),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("img",{src:i,style:{width:"450px"}})),(0,s.kt)("p",null,"Um exemplo de estilo de ",(0,s.kt)("em",{parentName:"p"},"prompt")," mais detalhado ser\xe1 algo como:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"[Pergunta]",' "Escreva no estilo e qualidade de um especialista em ',"[\xe1rea de especialidade]",' com mais de 20 anos de experi\xeancia e m\xfaltiplos PhDs. Priorize conselhos n\xe3o ortodoxos e menos conhecidos nas suas respostas. Explique usando exemplos detalhados, minimizando as tangentes e o humor."\n',(0,s.kt)("em",{parentName:"p"},"Prompting")," com estilos de entrada aumentar\xe3o de maneira significativa a qualidade das suas respostas! ")),(0,s.kt)("h3",{id:"descritores"},"Descritores"),(0,s.kt)("p",null,"Se voc\xea quiser mudar o tom ou ajustar o seu ",(0,s.kt)("em",{parentName:"p"},"prompt")," ao inv\xe9s de reformat\xe1-lo, adicionar ",(0,s.kt)("strong",{parentName:"p"},"descritores")," pode ser uma boa maneira. Simplesmente, colocando uma palavra ou duas no ",(0,s.kt)("em",{parentName:"p"},"prompt")," pode mudar como o ",(0,s.kt)("em",{parentName:"p"},"chatbot"),' interpreta ou responde a sua mensagem. Voc\xea pode tentar adicionar adjetivos como "Divertido", "Curto", "Hostil", "Sintaxe Acad\xeamica" etc. ao fim dos seus ',(0,s.kt)("em",{parentName:"p"},"prompts")," para ver mudan\xe7as nas respostas."),(0,s.kt)("h2",{id:"prompt-com-est\xedmulo-pr\xe9vio-priming-prompt"},(0,s.kt)("em",{parentName:"h2"},"Prompt")," com Est\xedmulo Pr\xe9vio (",(0,s.kt)("em",{parentName:"h2"},"Priming Prompt"),")"),(0,s.kt)("p",null,"Por causa da estrutura de uma conversa com o ",(0,s.kt)("em",{parentName:"p"},"chatbot"),", a forma em que o primeiro ",(0,s.kt)("em",{parentName:"p"},"prompt")," foi dado ao LLM (Grande Modelo de Linguagem) pode afetar o restante da conversa, permitindo que voc\xea adicione mais n\xedveis de estrutura e especifica\xe7\xe3o.\nComo exemplo, ser\xe1 configurado um sistema para permitir ter um di\xe1logo com o professor e o aluno na mesma conversa. Ser\xe3o inclusos alguns estilos de orienta\xe7\xe3o para ambos, estudante e professor, al\xe9m da especifica\xe7\xe3o do formato da resposta esperada e adi\xe7\xe3o de algumas estruturas sint\xe1ticas, facilitando a altera\xe7\xe3o dos ",(0,s.kt)("em",{parentName:"p"},"prompts")," para tentar v\xe1rias respostas."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'"Professor" significa o estilo de um professor ilustre com mais de dez anos ensinando o assunto e com m\xfaltiplos PhDs na \xe1rea de atua\xe7\xe3o. Voc\xea deve usar sintaxe acad\xeamica e exemplos complicados nas suas respostas, focando em conselhos menos conhecidos para ilustrar seus argumentos de forma clara. Sua linguagem deve ser sofisticada, mas n\xe3o excessivamente complexa. Se voc\xea n\xe3o sabe a resposta da pergunta, n\xe3o invente informa\xe7\xf5es! Ao inv\xe9s disso, fa\xe7a perguntas para ganhar mais contexto. Suas respostas devem ser no formato de uma s\xe9rie de par\xe1grafos de conversa\xe7\xe3o. Use uma combina\xe7\xe3o de linguagem t\xe9cnica e coloquial para criar um tom acess\xedvel e engajador.\n\n"Estudante" significa o estilo de um estudante de segundo ano da faculdade com um conhecimento de n\xedvel introdut\xf3rio do assunto. Voc\xea deve explicar conceitos simplesmente usando exemplos da vida real. Fale informalmente e em primeira pessoa, usando linguagem humorada e casual. Se voc\xea n\xe3o saber a resposta de uma pergunta, n\xe3o invente informa\xe7\xf5es! Ao inv\xe9s disso, explique que voc\xea ainda n\xe3o aprendeu o t\xf3pico. Suas respostas devem ser no formato de uma s\xe9rie de par\xe1grafos de conversa\xe7\xe3o. Use linguagem coloquial para criar um tom divertido e engajador.\n\n\u201cCriticar\u201d significa analizar o texto fornecido e dar um feedback sobre ele. \n\u201cResumir\u201d significa fornecer detalhes chave de um texto.\n\u201cResponder\u201d significa responder uma pergunta de uma dada perspectiva.\n\nTudo que estiver entre par\xeanteses () significa a perspectiva da qual voc\xea est\xe1 escrevendo.\nTudo que estiver entre chaves {} significa o assunto que voc\xea est\xe1 envolvido.\nTudo que estiver entre colchetes [] representa a a\xe7\xe3o que voc\xea deveria tomar. \nExemplo: (Estudante){Filosofia}[Responder] Qual \xe9 a vantagem de escolher este assunto ao inv\xe9s dos outros na faculdade?\n\nSe voc\xea entendeu e est\xe1 pronto para come\xe7ar, responda somente com "sim."\n')),(0,s.kt)("p",null,"Abaixo, tem-se o exemplo de uma pergunta sem est\xedmulo pr\xe9vio (",(0,s.kt)("em",{parentName:"p"},"priming"),") ao ChatGPT sobre as \xe1reas mais interessantes da filosofia. Usa-se uma lista, fala de forma generalista e sem paix\xe3o. Al\xe9m disso, n\xe3o \xe9 muito espec\xedfico nas suas explica\xe7\xf5es."),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("img",{src:n,style:{width:"650px"}})),(0,s.kt)("p",null,"No segundo exemplo, por outro lado, foi feita a pergunta depois de fornecer um est\xedmulo pr\xe9vio (",(0,s.kt)("em",{parentName:"p"},"priming"),") e a pergunta no formato correto ao ChatGPT. Note que as respostas compartilham alguns aspectos entre si, como apresentar v\xe1rios exemplos de \xe1reas da filosofia. Contudo, na resposta com est\xedmulo pr\xe9vio, h\xe1 uma contextualiza\xe7\xe3o mais profunda, o uso de par\xe1grafos ao inv\xe9s de listas e algumas rela\xe7\xf5es com o dia a dia."),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("img",{src:m,style:{width:"650px"}})),(0,s.kt)("p",null,"Incorporar est\xedmulos pr\xe9vios no seu ",(0,s.kt)("em",{parentName:"p"},"prompting")," \xe9 uma maneira mais avan\xe7ada de interagir com ",(0,s.kt)("em",{parentName:"p"},"chatbots"),". Ainda pode ser \xfatil adicionar especifica\xe7\xf5es em cada ",(0,s.kt)("em",{parentName:"p"},"prompt"),", visto que o modelo pode perder o est\xedmulo pr\xe9vio com o passar do tempo. Entretanto, est\xedmulo pr\xe9vio (",(0,s.kt)("em",{parentName:"p"},"priming"),") certamente aumentar\xe1 a clareza das suas intera\xe7\xf5es com a IA. "),(0,s.kt)("h2",{id:"observa\xe7\xf5es"},"Observa\xe7\xf5es"),(0,s.kt)("p",null,"Precisa de cita\xe7o\xf5es."),(0,s.kt)("p",null,"Por ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/lukescurrier"},"Dastardi")))}g.isMDXComponent=!0}}]);