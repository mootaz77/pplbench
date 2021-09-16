(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{123:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/example_pystan_pll-d448dd28031e677762608b4f6a46391b.svg"},124:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/example_pystan_pll_half-da59b4e020a78994e87ccf9e6a8f0e0a.svg"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(85)),l={id:"getting_started",title:"Getting Started"},c={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"This document outlines how to get started with PPL Bench.",source:"@site/../docs/getting_started.md",slug:"/getting_started",permalink:"/docs/getting_started",editUrl:"https://github.com/facebookresearch/pplbench/edit/main/website/../docs/getting_started.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Models",permalink:"/docs/models"}},r=[{value:"Installation",id:"installation",children:[]},{value:"Launching PPL Bench",id:"launching-ppl-bench",children:[]},{value:"Contributing",id:"contributing",children:[]},{value:"Join the PPL Bench community",id:"join-the-ppl-bench-community",children:[]}],b={rightToc:r};function p(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document outlines how to get started with PPL Bench."),Object(o.b)("p",null,"Before jumping into the project, we recommend you read ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/introduction"}),"Introduction")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/system_overview"}),"System Overview")," documents."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Enter a virtual (or conda) environment"),Object(o.b)("li",{parentName:"ol"},"Install PPL Bench core via pip:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pip install pplbench\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Install PPLs that you wish to benchmark. For PPL-specific instructions, see ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/working_with_ppls"}),"Installing PPLs"),".\nYou could also run the following command to install all PPLs that are currently supported by PPL Bench (except for Jags):")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pip install pplbench[ppls]\n")),Object(o.b)("p",null,"Alternatively, you could also install PPL Bench from source. Please refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/working_with_ppls"}),"Installing PPLs"),"\nfor instructions."),Object(o.b)("h2",{id:"launching-ppl-bench"},"Launching PPL Bench"),Object(o.b)("p",null,"Let's dive right in with a benchmark run of Bayesian Logistic Regression. To run this, you'll need to install\nPyStan (if you haven't already):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pip install pystan==2.19.1.1\n")),Object(o.b)("p",null,"Then, run PPL Bench with example config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pplbench examples/example.json\n")),Object(o.b)("p",null,"This will create a benchmark run with two trials of Stan on the Bayesian Logistic Regression model. The results of the run are saved in the ",Object(o.b)("inlineCode",{parentName:"p"},"outputs/")," directory."),Object(o.b)("p",null,"This is what the Predictive Log Likelihood (PLL) plot should look like:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"PLL plot of example run",src:n(123).default}),"\n",Object(o.b)("img",{alt:"PLL half plot of example run",src:n(124).default})),Object(o.b)("p",null,"Please see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/pplbench/blob/main/examples/example.json"}),"examples/example.json")," file to understand the schema for specifying benchmark runs. The schema is documented in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/pplbench/blob/main/pplbench/main.py"}),"pplbench/main.py")," and can be printed by running the help command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pplbench -h\n")),Object(o.b)("p",null,"A number of models is available in the ",Object(o.b)("inlineCode",{parentName:"p"},"pplbench/models")," directory and the PPL implementations are available in the ",Object(o.b)("inlineCode",{parentName:"p"},"pplbench/ppls")," directory."),Object(o.b)("p",null,"Please feel free to submit pull requests to modify an existing PPL implementation or to add a new PPL or model."),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"You'd like to contribute to PPL Bench? Great! Please see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/pplbench/blob/main/CONTRIBUTING.md"}),"here")," for how to help out."),Object(o.b)("h2",{id:"join-the-ppl-bench-community"},"Join the PPL Bench community"),Object(o.b)("p",null," For more information about PPL Bench, refer to"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Website: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebookresearch.github.io/pplbench/"}),"link")),Object(o.b)("li",{parentName:"ol"},"Blog post: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://ai.facebook.com/blog/ppl-bench-creating-a-standard-for-benchmarking-probabilistic-programming-languages"}),"link")),Object(o.b)("li",{parentName:"ol"},"Paper: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://arxiv.org/abs/2010.08886"}),"link"))))}p.isMDXComponent=!0}}]);