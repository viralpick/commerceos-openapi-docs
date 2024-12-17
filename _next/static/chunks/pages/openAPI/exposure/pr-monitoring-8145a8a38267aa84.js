(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{2660:(i,s,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/openAPI/exposure/pr-monitoring",function(){return e(624)}])},624:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a,useTOC:()=>d});var t=e(4848),h=e(7849),l=e(9251),n=e(1355),r=e(2097);function d(i){return[{value:"Authentication",id:"authentication",depth:2},{value:"Endpoints",id:"endpoints",depth:2},{value:"Get User",id:"get-user",depth:3},{value:"Request",id:"request",depth:4},{value:"Example Request",id:"example-request",depth:4},{value:"Response",id:"response",depth:4}]}let a=(0,h.e)(function(i){let{toc:s=d(i)}=i,e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{children:"Pr Monitoring"}),"\n",(0,t.jsx)(e.p,{children:"Pr Monitoring 데이터를 가져오기 위한 API입니다."}),"\n",(0,t.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,t.jsx)(e.p,{children:"API에 접근하기 위해 API Key가 필합니다. 예시:"}),"\n",(0,t.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,t.jsxs)(e.code,{children:[(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -X"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" GET"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" https://app-api.commerceos.ai/open/v1/exposures/pr-monitoring"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"     -H"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "x-api-key: YOUR_API_KEY"'})]})]})}),"\n",(0,t.jsx)(e.h2,{id:s[1].id,children:s[1].value}),"\n",(0,t.jsx)(e.h3,{id:s[2].id,children:s[2].value}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Endpoint"}),": ",(0,t.jsx)(e.code,{children:"GET /open/v1/exposures/pr-monitoring"})]}),"\n",(0,t.jsx)(e.h4,{id:s[3].id,children:s[3].value}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Required"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"x-api-key"})," (Header)"]}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"사용자별 API Key."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"startDate"})," (Body)"]}),(0,t.jsx)(e.td,{children:"LocalDate"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"검색할 Posting의 시작 날짜입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"endDate"})," (Body)"]}),(0,t.jsx)(e.td,{children:"LocalDate"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"검색할 Posting의 마지막 날짜입니다."})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:s[4].id,children:s[4].value}),"\n",(0,t.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"",children:(0,t.jsxs)(e.code,{children:[(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -X"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" GET"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" https://app-api.commerceos.ai/open/v1/exposures/pr-monitoring?startDate=2024-01-01"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"&endDate"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"2024-11-27"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" \\"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"     -H"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "x-api-key: YOUR_API_KEY"'})]})]})}),"\n",(0,t.jsx)(e.h4,{id:s[5].id,children:s[5].value}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Required"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"startDate"})}),(0,t.jsx)(e.td,{children:"LocalDateTime"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsxs)(e.td,{children:["조회 기간의 시작 날짜입니다. ISO 8601 형식(",(0,t.jsx)(e.code,{children:"YYYY-MM-DD"}),")으로 제공됩니다."]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"endDate"})}),(0,t.jsx)(e.td,{children:"LocalDateTime"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsxs)(e.td,{children:["조회 기간의 종료 날짜입니다. ISO 8601 형식(",(0,t.jsx)(e.code,{children:"YYYY-MM-DD"}),")으로 제공됩니다."]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"result"})}),(0,t.jsxs)(e.td,{children:["array ",(0,t.jsx)(e.code,{children:"PrMonitoringResult"})]}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"PrMonitoringResult"})," 객체의 배열입니다."]})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"PrMonitoringResult"})}),"\n"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Field"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Required"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"id"})}),(0,t.jsx)(e.td,{children:"number"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"고유 ID입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"publishedAt"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsxs)(e.td,{children:["게시물이 작성된 날짜와 시간입니다. ISO 8601 형식 (",(0,t.jsx)(e.code,{children:"YYYY-MM-DDTHH:mm:ss"}),")으로 제공됩니다."]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"collectTime"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"데이터를 수집한 날짜와 시간입니다. ISO 8601 형식으로 제공됩니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"region"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsxs)(e.td,{children:["PR Account의 지역을 표기합니다. 예: ",(0,t.jsx)(e.code,{children:"N.Am"})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"country"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"PR Account의 국가를 표기합니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"accountName"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"PR Account의 이름 (Retailer) 입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"title"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"PR 게시물 제목입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"content"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"No"}),(0,t.jsx)(e.td,{children:"PR 게시물의 내용입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"summary"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"게시물에 대한 요약 내용입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"brand"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsxs)(e.td,{children:["게시물에서 언급된 브랜드 이름입니다. (해당하지 않을 경우 ",(0,t.jsx)(e.code,{children:"other"}),")"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"product"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"No"}),(0,t.jsx)(e.td,{children:"게시물에서 언급된 제품 이름입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"reason"})}),(0,t.jsx)(e.td,{children:"array"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"AI가 해당 게시물을 제공한 제품으로 판단한 이유입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"category"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"No"}),(0,t.jsx)(e.td,{children:"게시물에서 언급된 제품 의 카테고리입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"link"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"Yes"}),(0,t.jsx)(e.td,{children:"게시글의 Link Url입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"headerImageUrl"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"No"}),(0,t.jsx)(e.td,{children:"PR 페이지의 Header Image (배너) 링크입니다."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"detail_content"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"No"}),(0,t.jsx)(e.td,{children:"PR 페이지 링크의 디테일 Content 입니다. (TBD)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"screenshot"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"No"}),(0,t.jsx)(e.td,{children:"PR 페이지의 디테일의 screenshot 입니다. (TBD)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"a_tag_links"})}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"No"}),(0,t.jsx)(e.td,{children:"PR 페이지의 내에 존재하는 a tag link 리스트입니다. (TBD)"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Status"}),": 200 OK"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Body"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{tabIndex:"0","data-language":"json","data-word-wrap":"",children:(0,t.jsxs)(e.code,{children:[(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'    "startDate"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"2024-04-04"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'    "endDate"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"2024-04-04"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'    "result"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": ["})]}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"          {"})}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "id"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"26761645439057925"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "collectTime"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"2024-11-25T04:50:05"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "prArticleId"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"7000960e6f958c402510112602e26c6cbec7d4edd2937682f239e964a62d4b8c"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "publishedAt"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"2024-04-04T00:00:00"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "title"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"AT&T Commitment to Bridge Digital Divide Increases to $5 Billion"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "content"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Apr 4, 2024 Our decade-long commitment of internet services and digital literacy resources aims to reach 25 million people to help close the digital divide. "'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "summary"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"AT&T commits $5 billion to bridge the digital divide for 25 million people."'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "brand"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"other"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "reason"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"The text mentions AT&T, which is not one of the specified brands (Samsung, Apple, Google)."'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "category"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Other"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "link"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"https://about.att.com/story/2024/digital-divide-recommitment.html"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "headerImageUrl"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"https://kurve-imgs.s3.ap-northeast-2.amazonaws.com/samsung/pr/2024/11/25/04/att/PC/images/headerImage1.png"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "detail_content"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Die Vorfreude auf die UEFA EURO 2024™ ist riesig, Millionen von Menschen fiebern der ersten Partie zwischen Gastgeber Deutschland und Schottland am Freitagabend entgegen. Die volle Packung Fu\xdfballunterhaltung bekommen Fans bei MagentaTV, denn hier k\xf6nnen sie alle 51 Spiele in bester UHD-Qualit\xe4t genie\xdfen. Und wer nach den nervenaufreibenden Spieltagen gern noch eine Extraportion humorvoller EURO-Unterhaltung m\xf6chte, kann bei MagentaTV direkt am Ball bleiben. Im Anschluss an die erste Partie feiert dort die neue Late Show „Studio Pille-Palle"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" mit"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Schauspieler"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Fahri"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Yardim"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" und"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" dem"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 43"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"-fachen"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Nationalspieler"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Jonas"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Hector"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" gegen"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 23"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:":"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"30"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Uhr"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" seine"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Premiere."}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Insgesamt"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" sind"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" zehn"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Shows"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" an"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" ausgew\xe4hlten"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" Spieltagen"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:" vorgesehen."}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'",'})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'            "'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"screenshot"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'": "'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:"https:"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:'//collected-data.commerceos.ai/samsung/pr_detail/2024/12/15/15/deutsch_telekom/PC/a8180d221a14c1405c53844232c5d7082ee0a861d583134b8635b1e59910213f/images/screenshot.png",'})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'            "a_tag_links"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"},children:":"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ["}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"https://www.telekom.de/hilfe/hilfe-bei-stoerungen/serviceassistent?context=Willkommen"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"https://www.telekom.de/kontakt"'}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"],"})]}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      }"})}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    ]"})}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})})]})},"/openAPI/exposure/pr-monitoring",{filePath:"pages/openAPI/exposure/pr-monitoring.mdx",timestamp:1734403403e3,pageMap:l.O,frontMatter:{},title:"Pr Monitoring"},"undefined"==typeof RemoteContent?d:RemoteContent.useTOC)},1355:(i,s,e)=>{"use strict";e.d(s,{R:()=>d});var t=e(8453),h=e(9965),l=e.n(h),n=e(6540);let r={img:i=>(0,n.createElement)("object"==typeof i.src?l():"img",i)},d=i=>({...r,...(0,t.R)(i)})},7849:(i,s,e)=>{"use strict";e.d(s,{e:()=>a});var t=e(4848),h=e(3032),l=e(356);let n=(0,e(6540).createContext)({}),r=n.Provider;n.displayName="SSG";var d=e(1355);function a(i,s,e,t){let l=globalThis[h.VZ];return l.route=s,l.pageMap=e.pageMap,l.context[s]={Content:i,pageOpts:e,useTOC:t},c}function c({__nextra_pageMap:i=[],__nextra_dynamic_opts:s,...e}){let n=globalThis[h.VZ],{Layout:d,themeConfig:a}=n,{route:c,locale:x}=(0,l.r)(),j=n.context[c];if(!j)throw Error(`No content found for the "${c}" route. Please report it as a bug.`);let{pageOpts:o,useTOC:p,Content:g}=j;if(c.startsWith("/["))o.pageMap=i;else for(let{route:s,children:e}of i){let i=s.split("/").slice(x?2:1);(function i(s,[e,...t]){for(let h of s)if("children"in h&&e===h.name)return t.length?i(h.children,t):h})(o.pageMap,i).children=e}if(s){let{title:i,frontMatter:e}=s;o={...o,title:i,frontMatter:e}}return(0,t.jsx)(d,{themeConfig:a,pageOpts:o,pageProps:e,children:(0,t.jsx)(r,{value:e,children:(0,t.jsx)(k,{useTOC:p,children:(0,t.jsx)(g,{...e})})})})}function k({children:i,useTOC:s}){let{wrapper:e}=(0,d.R)();return(0,t.jsx)(x,{useTOC:s,wrapper:e,children:i})}function x({children:i,useTOC:s,wrapper:e,...h}){let l=s(h);return e?(0,t.jsx)(e,{toc:l,children:i}):i}},9251:(i,s,e)=>{"use strict";e.d(s,{O:()=>t});let t=[{name:"index",route:"/",frontMatter:{sidebarTitle:"Index"}},{name:"openAPI",route:"/openAPI",children:[{name:"exposure",route:"/openAPI/exposure",children:[{name:"e-promoter",route:"/openAPI/exposure/e-promoter",frontMatter:{sidebarTitle:"E Promoter"}},{name:"pr-monitoring",route:"/openAPI/exposure/pr-monitoring",frontMatter:{sidebarTitle:"Pr Monitoring"}},{name:"social-posting",route:"/openAPI/exposure/social-posting",frontMatter:{sidebarTitle:"Social Posting"}}]}]}]}},i=>{var s=s=>i(i.s=s);i.O(0,[636,593,792],()=>s(2660)),_N_E=i.O()}]);