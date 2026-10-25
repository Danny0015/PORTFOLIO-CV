(function(){
const q=(n)=>"https://www.google.com/search?q="+encodeURIComponent(n);
// url: official site, or omitted to fall back to a search link. Replace with the official URL when you have it.
const C=[
{n:"Sportsbull",cat:"Sports & iGaming",ind:"Sports Prediction",mk:"Nigeria, Ghana, Europe",pl:"Twitter (X), Telegram, YouTube",
 g:"Grow brand visibility, drive sign-ups, lift first-time deposits and build the active prediction user base.",
 a:"Sourced and contracted Twitter (X) and Telegram punters alongside YouTube crypto KOLs. Ran a first-time-user signup bonus offer to turn new registrations into depositing customers.",
 o:[["5M+","Impressions"],["10,000+","Sign-ups"],["1,700+","First-time depositors"]]},
{n:"Sleeper",cat:"Sports & iGaming",ind:"Fantasy Sports & Football Prediction",mk:"Nigeria",pl:"Twitter (X), Telegram, YouTube, TikTok, Instagram",url:"https://sleeper.com",
 g:"Build awareness, drive app downloads and registrations, and grow the active fantasy league and prediction community.",
 a:"Ran a short-form video push on TikTok and Instagram with football creators and community leaders, plus league-join and prediction challenges that turned casual viewers into daily active players.",
 o:[["2.2M+","Impressions"],["1,800+","App downloads & sign-ups"],["30+","Active fantasy leagues"],["400+","Active prediction participants"]]},
{n:"Betano",cat:"Sports & iGaming",ind:"iGaming & Sports Betting",mk:"Nigeria, Ghana",pl:"Twitter (X), Telegram, TikTok, YouTube, Instagram",url:"https://www.betano.com",
 g:"Build brand visibility, drive registrations, lift first-time deposits and scale the active customer base.",
 a:"Ran a multi-platform KOL campaign with sports pundits, lifestyle creators and betting tipsters: high-impact promotional content, match-day takeovers and targeted signup incentives.",
 o:[["2.5M+","Impressions"],["1,500+","Sign-ups"],["450+","First-time depositors"]]},
{n:"Remitano",cat:"Crypto & Fintech",ind:"Crypto / Secure P2P Trading",mk:"Nigeria",pl:"Instagram, TikTok, YouTube",url:"https://remitano.com",
 g:"Position Remitano as a trusted, user-friendly option for crypto P2P trading and drive quality sign-ups.",
 a:"Activated micro crypto trading and tech KOLs to showcase the platform’s security features (escrow, ID verification, dispute resolution) and build trust with new users.",
 o:[["3.4M+","Impressions"],["250K","Engagements"],["2,000+","Verified new sign-ups"]]},
{n:"Monica Nigeria",cat:"Crypto & Fintech",ind:"Crypto / Payments",mk:"Nigeria",pl:"Instagram, TikTok, YouTube",url:"https://monica.cash",
 g:"Drive first-time adoption and repeat usage by positioning Monica as a simple, secure way to spend crypto every day.",
 a:"Activated 11 creators across comedy, lifestyle and crypto to take the use case beyond the crypto-native audience, anchored in familiar everyday payment scenarios.",
 o:[["3.5M+","Views"],["7,000+","App downloads"],["350+","First-time deposits"]]},
{n:"Weltrade",cat:"Trading",ind:"Forex Trading & Fintech",mk:"Nigeria, Ghana, Europe",pl:"Instagram, TikTok, YouTube",url:"https://www.weltrade.com",
 g:"Drive high-intent trader acquisition by positioning synthetic indices as an accessible, 24/7 trading opportunity.",
 a:"Recruited and managed trading-focused KOLs and directed educational, strategy-led content that simplified synthetic indices and showed 24/7 market access.",
 o:[["2.7M+","Impressions"],["750+","Trader sign-ups"],["210+","First-time deposits"],["28%","Signup-to-funded-trader conversion"]]},
{n:"TapTapSend",cat:"Crypto & Fintech",ind:"Fintech",mk:"Nigerian & Kenyan diaspora (US, UK, Canada)",pl:"Instagram, TikTok, YouTube",url:"https://www.taptapsend.com",
 g:"Drive app downloads and build trust with Nigerian and Kenyan diaspora audiences through need-based storytelling.",
 a:"Recruited and managed 20 diaspora-relevant creators who turned the first-time user bonus into relatable, trust-building stories.",
 o:[["4,500+","New app downloads"],["500+","First-time depositors"],["122","First-time bonus redemptions"]]},
{n:"TravelBeta",cat:"Consumer",ind:"Travel & Hospitality",mk:"Nigeria",pl:"DStv / Africa Magic",
 g:"Reignite bookings among Nigerian travellers and position TravelBeta as the go-to platform for summer travel planning.",
 a:"Sourced and onboarded three Nigerian travel creators and led content direction for a DStv commercial, translating creator storytelling into a mass-media campaign.",
 o:[["2.3M+","Organic views"],["18%","Increase in bookings within two weeks"]]},
{n:"Savory & Partners",cat:"Consumer",ind:"Citizenship-by-Investment",mk:"Nigeria",pl:"Instagram",
 g:"Increase inquiries among Nigeria’s emerging wealthy: entrepreneurs, business owners and HNWIs.",
 a:"Identified creators with high-value audiences and developed content that positioned the service as an aspirational long-term investment focused on wealth building, global mobility and financial security. Top-performing creator assets were repurposed as paid media.",
 o:[["4×","Increase in HNWI inquiries within one quarter"]]},
{n:"Def Jam Records",cat:"Consumer",ind:"Music & Entertainment",mk:"Nigeria",pl:"TikTok",url:"https://defjam.com",
 g:"Amplify artist visibility and drive discovery for a new single through a scalable TikTok dance challenge.",
 a:"Designed a TikTok-first campaign around a repeatable dance hook. Briefed a top dance creator to launch original choreography and seed the challenge within the first 48 hours of release.",
 o:[["4.2M+","Organic views"],["1,200+","UGC remixes"],["5 days","Trending on TikTok Nigeria"]]},
{n:"QEI+ Paris",cat:"Consumer",ind:"Beauty / Skin & Body Care",mk:"Nigeria & South Africa",pl:"Instagram, TikTok",
 g:"Shift the narrative from instant results to long-term skin health and position QEI+ Paris as a trusted choice for consistent, effective skincare.",
 a:"Activated four micro beauty influencers across Nigeria and South Africa focused on real routines, product experience, texture, hydration and realistic results.",
 o:[["3×","Increase in product mentions"],["40%","Increase in add-to-cart activity"]]},
{n:"inDrive",cat:"Consumer",ind:"Ride-Hailing",mk:"South Africa & Nigeria",pl:"TikTok",url:"https://indrive.com",
 g:"Generate localised UGC that increases brand familiarity and makes inDrive’s safe, fair-ride proposition culturally relevant.",
 a:"Recruited and managed eight micro lifestyle creators across both markets, matching talent to local audiences and directing authentic, relatable storytelling. High-performing UGC was repurposed on paid channels.",
 o:[["30+","Creator videos"]]},
{n:"Infinix Note 60 Pro & Ultra",cat:"Consumer",ind:"Consumer Electronics / Smartphones",mk:"Nigeria",pl:"Instagram, TikTok",url:"https://www.infinixmobility.com",
 g:"Position the Note 60 Pro & Ultra as performance phones for ambitious young Nigerians by showing real-life use cases around work, content creation and side hustles.",
 a:"Recruited seven lifestyle influencers aligned with the target audience. Coordinated product delivery and directed creators to demonstrate the phones through authentic use cases rather than spec-led content.",
 o:[["23.9%","Uplift in phone orders"]]},
{n:"Regal Cards",cat:"Crypto & Fintech",ind:"Fintech & Luxury Lifestyle",mk:"Nigeria, South Africa",pl:"Instagram, YouTube, Twitter (X)",
 g:"Increase brand visibility, drive membership card sign-ups and position Regal as a lifestyle card associated with luxury and convenience.",
 a:"Activated 15 lifestyle influencers aligned with aspirational positioning: travel, fashion and high-net-worth tastemakers.",
 o:[["30%","Increase in website traffic"],["280+","New sign-ups"],["43","Card retrievals"]]},
{n:"Brutal Fruit: L’Orange Rossa",cat:"Consumer",ind:"Beverage",mk:"South Africa",pl:"TikTok",
 g:"Make the new L’Orange Rossa flavour desirable through creator-led UGC focused on awareness, premium lifestyle appeal and the product’s serving ritual.",
 a:"Recruited and managed 12 micro lifestyle creators to showcase the product through authentic, aspirational social moments.",
 o:[["20","Creator videos"],["Premium UGC","Scalable, platform-native asset library"]]},
{n:"SportyBet ZA Casino",cat:"Sports & iGaming",ind:"iGaming & Casino",mk:"South Africa",pl:"TikTok (TikTok One)",
 g:"Build brand awareness, drive app sign-ups and convert new users into first-time depositors (FTDs).",
 a:"Partnered with TikTok One through TIMA to activate one nano and one micro creator, using authentic creator-led casino content and sign-up incentives to drive awareness and acquisition.",
 o:[["1.1M+","Impressions"],["32%","Signup-to-FTD conversion"]]},
{n:"Forti",cat:"Crypto & Fintech",ind:"Live Streaming & Fintech (MiniPay)",mk:"Nigeria / Africa",pl:"TikTok, Instagram",
 g:"Grow platform visibility, drive downloads and convert new users into active live streamers.",
 a:"Activated two micro creators to showcase Forti’s live-streaming features and MiniPay integration, using creator-led content to build awareness, drive downloads and win early adoption.",
 o:[["850K+","Impressions"],["28%","Download-to-active-streamer conversion"]]},
{n:"XM Global",cat:"Trading",ind:"Forex Trading & Fintech",mk:"Nigeria, Africa & Europe",pl:"Instagram, TikTok, YouTube",url:"https://www.xm.com",
 g:"Attract high-intent traders, generate sign-ups and drive funded trading accounts.",
 a:"Managed a portfolio of three mid-tier creators and one macro creator in the trading niche, using educational, strategy-led content to build awareness and drive trader acquisition.",
 o:[["2.9M+","Impressions"],["22%","Signup-to-funded-trader conversion"]]}
];
const LOGO={"Sportsbull": "sportsbull", "Sleeper": "sleeper", "Betano": "betano", "Remitano": "remitano", "Monica Nigeria": "monica", "Weltrade": "weltrade", "TapTapSend": "taptapsend", "Def Jam Records": "defjam", "SportyBet ZA Casino": "sportybet", "Forti": "forti", "XM Global": "xm", "Brutal Fruit: L’Orange Rossa": "brutalfruit"};
const WORD={"TravelBeta": ["TravelBeta", "wm-tb"], "Savory & Partners": ["SAVORY & PARTNERS", "wm-sv"], "QEI+ Paris": ["QEI+ PARIS", "wm-qe"], "inDrive": ["inDrive", "wm-id"], "Infinix Note 60 Pro & Ultra": ["Infinix", "wm-in"], "Regal Cards": ["REGAL<small>CARDS</small>", "wm-rg"]};
const reach=[["Sportsbull",5],["Def Jam Records",4.2],["Monica Nigeria",3.5],["Remitano",3.4],["Weltrade",2.7],["Betano",2.5],["TravelBeta",2.3],["Sleeper",2.2]];
const skills=["Crypto & Web3","iGaming & Betting","Fintech","Sports","Technology","Consumer & Lifestyle","KOL & Creator Strategy","KOL Sourcing & Vetting","Go-to-Market & Growth","Performance Campaign Management","User Acquisition","iGaming Influencer Marketing","Crypto & Web3 Campaigns","Campaign Reporting & Analytics","Cross-Market Campaign Execution","UGC & Content Strategy","Community & Affiliate Partnerships","Community Management","Product Positioning & Messaging","Creator Research & Brief Matching","AI-Assisted Research & Planning","Marketing Workflow Automation","Campaign QA & Product-Claim Accuracy","Marketing Experiments & Measurement","Crypto, Fintech & Payments Marketing"];
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const esc=s=>s.replace(/&/g,"&amp;");
const BG={"sportsbull": "#000000", "sleeper": "#060c23", "weltrade": "#3956f6", "defjam": "#000000", "betano": "#ffffff", "remitano": "#ffffff", "xm": "#ffffff", "brutalfruit": "#FBF3F1", "monica": "#f5f5f2", "taptapsend": "#bfe3c7", "forti": "#f3ece0", "sportybet": "#f3ece0"};
const bgOf=n=>LOGO[n]?`style="background:${BG[LOGO[n]]}"`:"";
const PAD={sleeper:"7%",betano:"7%",remitano:"3%",monica:"9%",taptapsend:"10%",xm:"8%",brutalfruit:"12%"};
const FS={"wm-tb":11,"wm-sv":6.6,"wm-qe":9,"wm-id":16,"wm-in":16,"wm-rg":11};
const mark=(n)=>{if(LOGO[n]){const k=LOGO[n],ic=k==="sportybet"||k==="forti",cv=["sportsbull","weltrade","remitano","xm"].includes(k);return `<img class="lg${ic?" ic":""}${cv?" cv":""}" style="--pad:${PAD[k]||"0"}" src="assets/${k}.webp" alt="${esc(n)} logo" loading="lazy">`}
 const [t,c]=WORD[n];return `<div class="wm ${c}" style="--fs:${FS[c]}" role="img" aria-label="${esc(n)} logo">${t}</div>`};

const bars=document.getElementById("bars");
reach.forEach(([n,v])=>{const r=el("div","bar",`<span>${esc(n)}</span><i data-w="${v/5*100}"></i><span>${v}M+</span>`);bars.append(r)});
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll("i").forEach(i=>i.style.width=i.dataset.w+"%");o.unobserve(e.target)}}),{threshold:.3}).observe(bars);

const bg=document.getElementById("brandGrid");
C.forEach(c=>bg.append(el("li","reveal",`<div class="bl tile" ${bgOf(c.n)}>${mark(c.n)}</div><b>${esc(c.n.split(":")[0])}</b><span>${esc(c.ind)}</span>`)));
const mq=document.getElementById("marquee");mq.innerHTML=[0,1].map(()=>C.map(c=>`<span class="mi tile" ${bgOf(c.n)}>${mark(c.n)}</span>`).join("")).join("");

const cases=document.getElementById("cases");
C.forEach(c=>{
 const href=c.url||q(c.n+" official site");
 const art=el("article","case reveal",`<div class="c-main"><div class="c-text"><span class="num">${String(C.indexOf(c)+1).padStart(2,"0")}</span><h3>${esc(c.n)}</h3><div class="tags">${esc(c.ind)}</div>
 <dl><dt>Market</dt><dd>${esc(c.mk)}</dd><dt>Platforms</dt><dd>${esc(c.pl)}</dd></dl>
 <p><b>Goal.</b> ${esc(c.g)}</p><p><b>Action.</b> ${esc(c.a)}</p>
 <a class="vl" href="${href}" target="_blank" rel="noopener">${c.url?"Visit website":"Find online"}<span class="sr"> for ${esc(c.n)}</span></a></div>
 <div class="vis tile" ${bgOf(c.n)}>${mark(c.n)}</div></div>
 <div class="out">${c.o.map(([v,l])=>`<div><b>${esc(v)}</b>${esc(l)}</div>`).join("")}</div>`);
 art.style.setProperty("--i",C.indexOf(c));
 art.dataset.cat=c.cat;cases.append(art);
});

const fl=document.getElementById("filters");
["All",...new Set(C.map(c=>c.cat))].forEach((cat,i)=>{
 const b=el("button","chip",cat);b.type="button";b.setAttribute("aria-pressed",i===0);
 b.onclick=()=>{fl.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));
  cases.querySelectorAll(".case").forEach(a=>a.hidden=cat!=="All"&&a.dataset.cat!==cat)};
 fl.append(b)});

const sc=document.getElementById("skillChips");skills.forEach(s=>sc.append(el("span","chip",esc(s))));

const menu=document.querySelector(".menu"),nav=document.getElementById("links");
menu.onclick=()=>{const o=nav.classList.toggle("open");menu.setAttribute("aria-expanded",o)};
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded",false)}));
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal,.steps li,.roles>*,.edu>*,.certs li,.stats li").forEach((n,i)=>{n.classList.add("reveal");setTimeout(()=>n.classList.add("done"),1400+i*20);n.style.setProperty("--d",(i%4)*70+"ms");io.observe(n)});
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
if(!rm){
 document.querySelectorAll(".stats b").forEach(b=>{const t=b.textContent,n=parseFloat(t.replace(/,/g,"")),s=t.replace(/[\d,.]/g,"");
  new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();const t0=performance.now();(function f(t1){const p=Math.min((t1-t0)/1400,1),v=Math.round(n*(1-Math.pow(1-p,3)));b.textContent=v.toLocaleString("en-US")+s;if(p<1)requestAnimationFrame(f)})(t0)}},{threshold:.6}).observe(b)});
 const ph=document.querySelector(".photo div");
 addEventListener("scroll",()=>{ph.style.transform=`translateY(${Math.min(scrollY*.04,24)}px)`},{passive:true});
 document.querySelectorAll(".case").forEach(c=>{const v=c.querySelector(".vis");c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();v.style.setProperty("--mx",((e.clientX-r.left)/r.width-.5)*14+"px");v.style.setProperty("--my",((e.clientY-r.top)/r.height-.5)*10+"px")})});
}
document.getElementById("yr").textContent=new Date().getFullYear();
})();
