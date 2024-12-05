(self.webpackChunkreact_webpack_template=self.webpackChunkreact_webpack_template||[]).push([[981],{8414:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>B});var n=t(6540),r=t(9616);const i=t.p+"assets/media/bg2d055dd26243114bf2d9.avif";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(null,arguments)}const l=e=>{let{text:a,className:t,...r}=e;return n.createElement("div",s({className:`${t??""} text-spanner`},r),[...a].map(((e,a)=>n.createElement("span",{key:a},e))))},o=r.Ay.div`
    width: 100%;
    overflow-x: hidden;
    height: 100vh;
    
    .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        img {
            object-fit: cover;
        }
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-size: cover;
            background-image: linear-gradient(to bottom, #00000011 0%, #0000007f 60%, #000000ff 99%);
            /* background-image: radial-gradient(#f7971ecc 0,#C2435Fcc 4em,#272344cc 10em,#020010ee 20em, #000000ff 80%); */
            /* background-image: radial-gradient(#f7971e44 0,#C2435F44 4em,#27234444 10em,#020010ee 20em, #000000ff 80%); */
        }
    }

    .fg {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        color: #ffffffa0;

        .introduction {
            width: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .tiny {
                width: 100%;
                align-self: flex-start;
                opacity: 0.5;
            }
            .name {
                font-size: 5em;
                font-weight: 500;
                line-height: 0.9em;
                text-transform: uppercase;
                color: white;

                @media (max-width: 1080px){
                    font-size: 4em;
                }
                span {
                    @keyframes fade-in-fancy {
                        from {
                            opacity: 0;
                            filter: blur(0.2rem);
                        }
                        to {
                            opacity: 1;
                            filter: blur(0);
                        }
                    }
                    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
                    -webkit-text-fill-color: transparent;
                    -webskit-background-clip: text;
                    background-clip: text;
                    font-family: "Roboto", sans-serif;

                    opacity: 0;
                    animation: fade-in-fancy 1000ms forwards cubic-bezier(0.11, 0, 0.5, 0);
                }
            
                ${[..."horizon"].map(((e,a)=>r.AH`
                    span:nth-child(${a+1}) {
                        /* animation-delay: ${2.2+.1*a}s; */
                        animation-delay: ${.2+.1*a}s;
                    }
                `))}
            }
            .desc {
                width: 25em;
                max-width: 92vw;
                text-align: center;
            }
        }
    }
`,c=e=>{let{className:a,...t}=e;return n.createElement(o,{className:`${a??""} landed`},n.createElement("div",{className:"bg"},n.createElement("img",{src:i,loading:"lazy"})),n.createElement("div",{className:"fg"},n.createElement("div",{className:"introduction"},n.createElement(l,{className:"tiny",text:"Hello! We are..."}),n.createElement(l,{className:"name",text:"Horizon"}),n.createElement(l,{className:"desc",text:" Snowboard carving enthusiasts exchanging techniques and mutual  encouragement in pursuit of mastery and fun.   "}))))};var m=t(7610);const d=t.p+"assets/media/grp7b4d098818d83d742ae2.avif";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(null,arguments)}const g=r.Ay.div`
    background: linear-gradient(to bottom, #000 0%, rgba(10, 10, 10, 1) 50%, rgba(50, 50, 50, 1) 100%);
    color: #ffffffa0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    /* padding: 0 25% 3em; */
    /* width: 25em; */
    /* max-width: 95vw; */

    padding: 0 0 3em;
    .text {
        margin-bottom: 2em;
        line-height: 1.5em;
        width: 33em;
        max-width: 92vw;
        br {
            content:'';
            display: block;
            margin: 0.8em 0;
        }
    }

    .box-image img {
        @keyframes fadeInFromBot{
            from{
                opacity: 0;
                transform: translateY(2rem);
            }
            to{
                opacity: 100;
            }
        }
        width: 18em;
        height: 18em;
        border-radius: 50%;
        border: 0.5em solid white;
        object-fit: cover;
        overflow:hidden;
        opacity: 0;

        &.observed {
            animation: 700ms ease-in 100ms 1 forwards fadeInFromBot;
        }
    }
`,u=e=>{let{className:a,...t}=e;const r=n.useRef(null),{observe:i}=(0,m.BL)();return n.useEffect((()=>i(r,{once:!1,threshold:0})),[i]),n.createElement(g,f({className:`${a??""} history`},t),n.createElement("div",{className:"header"},"History"),n.createElement("div",{className:"text"},"Horizon emerged from a group of strangers drawn to each other's distinctive style. Inspired by riders hailing from Europe and Asia, we found a lack of technical carving out of Southern California.",n.createElement("br",null),"Officially formed in 2023, our numbers have expanded swiftly as we refine our skills, garnering interest from those eager to learn."),n.createElement("div",{className:"box-image"},n.createElement("img",{ref:r,src:d,loading:"lazy"})))};var b=t(9719),p=t(1972);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(null,arguments)}const v=r.Ay.div`
    box-shadow: 0 0 3px 2px #21252922;
    border-radius: 7em 7em 0 0;

    transition: opacity 500ms ease-out, transform 500ms ease-out;
    &:not(.observed) { 
        opacity: 0;
        transform: translateY(2rem);
    }
    
    .img-box {
        width: 13em;
        height: 13em;
        border-radius: 50% 50% 0 0;
        padding: 1em;

        .fast-image {
            width: 100%;
            height: 100%;
        }
        .img {
            border: 0.1em solid #21252922;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            img {
                object-fit: cover;
            }

        }
    }
    .info-box {
        margin-top: -0.5em;
        display: flex;
        flex-direction: column;
        width: 13em;
        height: 12em;
        padding: 0 1em 0.5em 1em;
        & > .name {
            color: #444;
            text-align: center;
            font-weight: 700;
            font-size: 1.5em;
        }
        .bar {
            border-top: 0.1em solid #444;
            margin: 0em 0;
            width: 100%;
            padding: 0 1em;
        }
        .role {
            color: #888888;
            text-align: center;
            text-transform: capitalize;
        }
        .stats { 
            margin: auto 0;
            .stat { 
                display: flex;
                justify-content: center;
                white-space: pre;
                text-transform: uppercase;
                .name {
                    font-weight: 600;
                    flex: 1;
                    text-align: right;
                }
                .sep {
                    flex: 0 0 auto;
                    text-align: center;
                }
                .val {
                    font-weight: 300;
                    flex: 1;
                    text-align: left;
                }
            }
        }
        .icons {
            margin-top: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0.3em;
            height: 1.5em;
            .icon {
                height: 1.5em;
                width: 1.5em;
                cursor: pointer;
            }
        }
    }
    .more {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 0.6em;
        color: blue;
        text-decoration: underline;
        user-select: none;
        cursor: pointer;
        padding: 0.1em 0.5em;
    }
`,y=e=>{let{name:a,val:t,className:r,...i}=e;return n.createElement("div",{className:"stat"},n.createElement("div",{className:"name"},a),n.createElement("div",{className:"sep"}," : "),n.createElement("div",{className:"val"},t))},x=e=>{let{data:a={},className:r,...i}=e;const s=n.useRef(null),{observe:l}=(0,m.BL)();return n.useEffect((()=>l(s,{once:!1,threshold:0})),[l]),n.createElement(v,h({ref:s,className:`${r??""} card`},i),n.createElement("div",{className:"img-box"},n.createElement("div",{className:"img"},n.createElement("img",{src:t(4254)(`./${a.img??"santa.avif"}`),loading:"lazy"}))),n.createElement("div",{className:"info-box"},n.createElement("div",{className:"name"},a.aka??a.name),n.createElement("div",{className:"bar"}),n.createElement("div",{className:"role"},a.role?"member":"founder"),n.createElement("div",{className:"stats"},n.createElement(y,{name:"direction",val:a.regular?"regular":"goofy"}),n.createElement(y,{name:"boots",val:a.feet?`${a.feet} cm`:"-"}),n.createElement(y,{name:"stance",val:a.stance?`${a.stance} cm`:"-"}),n.createElement(y,{name:"angles",val:`${a.lead>=0?"+":"-"}${a.lead}°/${a.back>=0?"+":"-"}${a.back}°`})),n.createElement("div",{className:"icons"},a.ig&&n.createElement("a",{href:`//instagram.com/${a.ig}`,target:"_blank"},n.createElement("img",{className:"icon",src:b})),a.yt&&n.createElement("a",{href:`//youtube.com/@${a.yt}`,target:"_blank"},n.createElement("img",{className:"icon",src:p})))))},k=t.p+"assets/media/crown4a15360699f804865133.svg";var E=t(9908);let w=Object.keys(E),N=Object.values(E);N.forEach(((e,a)=>e.name=w[a]));let j=N.filter((e=>1==e.enabled)),z=j.filter((e=>0==e.role)),$=j.filter((e=>1==e.role));const O=()=>({riders:j,founders:z,members:$}),A=r.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    padding: 0 5% 2em;

    .header {
        color: #888888;
    }

    .deck {
        .cards {
            display: flex;
            justify-content: center;
            align-items: center;
            /* max-width: calc(16em * 3); */
            gap: 1em;
            padding: 0 1em 1em;
            flex-wrap:wrap;
            /* border: 1px solid red; */
        }
        .foasdunders .card {
            background-image: url(${k});
            background-position: top -0.5% center;
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-size: 20%;
        }
        .card {
            /* border: 1px solid red; */
        }
        
        display: flex;
        flex-direction: column;
        align-items: center;
        hr {
            margin: 0 1em 1em;
        }
    }
`,_=e=>{let{className:a,...t}=e;const{founders:r,members:i}=O();return n.useEffect((()=>{console.log(r)}),[]),n.createElement(A,{className:`${a??""} riders`},n.createElement("div",{className:"header"},"Meet the Fam!"),n.createElement("div",{className:"deck"},n.createElement("hr",null),n.createElement("div",{className:"founders cards"},r.map(((e,a)=>n.createElement(x,{key:a,data:e})))),n.createElement("div",{className:"members cards"},i.map(((e,a)=>n.createElement(x,{key:a,data:e}))))))},F=r.Ay.div`
    .header {
        font-size: 2em;
        letter-spacing: 0.1em;
        font-weight: 700;
        padding: 1.3em 0 0.3em;
        /* margin: 1em 0 0em; */
    }
    hr {
        z-index: -1;
        height: 0.2em;
        width: 100%;
        /* margin: 0 1em 1em; */
        border: none;
        background: linear-gradient(to right, #21252911 0%, #21252944 50%, #21252911 100%);
    }
`,B=e=>{let{className:a,...t}=e;return n.createElement(F,{className:`${a??""} page-about`},n.createElement(c,null),n.createElement(u,null),n.createElement(_,null))}},4254:(e,a,t)=>{var n={"./Evan.avif":3322,"./bobby.avif":1828,"./jason.avif":2793,"./jia.avif":6446,"./justin.avif":4835,"./nikko.avif":1938,"./nos.avif":9254,"./rayn.avif":2444,"./riders.json":9908,"./santa.avif":355,"./zifan.avif":7976};function r(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=4254},3322:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/Evan023134d67717aaf14f77.avif"},1828:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/bobby786a4a31220aa359de14.avif"},2793:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/jasonecdef0b33a5ea084862d.avif"},6446:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/jia55cddcf1b0a842078f35.avif"},4835:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/justind6d0a9710a43da3bafe0.avif"},1938:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/nikko2d61b9d904e8e17dcc12.avif"},9254:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/nosc84efb0e2053fd44fddf.avif"},2444:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/rayn2fcbf4ef38a2db079edf.avif"},355:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/santa64f3a4c86d3fcd971dd4.avif"},7976:(e,a,t)=>{"use strict";e.exports=t.p+"assets/media/zifan874a804ffec7fa1723fd.avif"},9908:e=>{"use strict";e.exports=JSON.parse('{"TEMPLATE":{"enabled":0,"aka":null,"role":0,"img":null,"feet":25.5,"regular":1,"stance":56,"lead":36,"back":27,"ig":null,"yt":null},"Johnson":{"enabled":1,"aka":null,"role":0,"img":"nos.avif","feet":25.5,"regular":1,"stance":56,"lead":36,"back":27,"ig":"elnosnhoj","yt":null},"Rayndell":{"enabled":1,"aka":"RAYN","role":0,"img":"rayn.avif","feet":25,"regular":0,"stance":60,"lead":42,"back":33,"ig":"rayndier","yt":"RAYNfilms"},"Nikko":{"enabled":1,"aka":"Koko","role":0,"img":"nikko.avif","feet":28.5,"regular":1,"stance":64,"lead":42,"back":33,"ig":"Knee_KOKO","yt":null},"Justin":{"enabled":1,"aka":"JUSTINX","role":0,"img":"justin.avif","feet":24,"regular":1,"stance":52,"lead":39,"back":30,"ig":"justin_x.zq","yt":null},"Jianan":{"enabled":1,"aka":null,"role":1,"img":"jia.avif","feet":26.5,"regular":1,"stance":52,"lead":42,"back":36,"ig":"jiananliii","yt":"JiananLi"},"Jason":{"enabled":1,"aka":null,"role":1,"img":"jason.avif","feet":27,"regular":1,"stance":62,"lead":42,"back":30,"ig":"th_yyyr","yt":null},"Evan Yu":{"enabled":1,"aka":"Bai","role":1,"img":"Evan.avif","feet":25.5,"regular":0,"stance":54,"lead":27,"back":6,"ig":"busymilk","yt":null},"Bobby":{"enabled":1,"aka":"Bobbby","role":1,"img":"bobby.avif","feet":25.5,"regular":1,"stance":54,"lead":45,"back":36,"ig":"milkticc","yt":null},"Zifan Xia":{"enabled":1,"aka":"ZIFANX","role":1,"img":"zifan.avif","feet":28.5,"regular":1,"stance":64,"lead":42,"back":39,"ig":"igrookie1","yt":"ZIFANX"}}')}}]);