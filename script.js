const WA="201091662870";
const defaultData={
  lang:"ar", stats:[["150+","عمل مكتمل"],["120","عميل سعيد"],["2","سنتان خبرة"],["50","خدمة إبداعية"]],
  heroImage:"images/WhatsApp Image 2026-08-31 at 10.37.33 PM.jpeg",aboutImage:"images/WhatsApp Image 2026-08-31 at 10.37.33 PM.jpeg",
  skills:[
    ["Graphic Design","Photoshop / Illustrator / InDesign","92","GD"],
    ["Web Development","HTML / CSS / JavaScript","78","WEB"],
    ["UI/UX","Wireframes / Visual Systems","72","UX"],
    ["Brand Identity","Logos / Guidelines / Systems","86","BI"],
    ["Video Editing","Premiere Pro / CapCut","70","VE"],
    ["Social Media","Posts / Ads / Campaigns","90","SM"]
  ],
  services:[
    {id:1,name:"Graphic Design",desc:"تصميمات سوشيال ميديا وإعلانات ومطبوعات بهوية واضحة.",price:"يبدأ من —",time:"حسب المشروع",features:["Social Posts","Ads","Print"]},
    {id:2,name:"Logo & Brand Identity",desc:"بناء هوية بصرية متماسكة تبدأ من الفكرة وتنتهي بدليل استخدام.",price:"يبدأ من —",time:"حسب المشروع",features:["Logo","Colors","Typography"]},
    {id:3,name:"YouTube Branding",desc:"هوية مرئية للقناة تشمل الصور المصغرة والغلاف والعناصر الأساسية.",price:"يبدأ من —",time:"حسب المشروع",features:["Thumbnail","Cover","Visual Kit"]},
    {id:4,name:"Website Design",desc:"تصميم واجهات حديثة ومتجاوبة للصفحات والمواقع الشخصية والتجارية.",price:"يبدأ من —",time:"حسب المشروع",features:["UI","Responsive","Prototype"]},
    {id:5,name:"Website Development",desc:"تحويل التصميم إلى موقع سريع ومتجاوب باستخدام HTML وCSS وJavaScript.",price:"يبدأ من —",time:"حسب المشروع",features:["Frontend","Responsive","Interactions"]},
    {id:6,name:"Video Editing",desc:"مونتاج محتوى قصير وإعلانات وفيديوهات رقمية بإيقاع مناسب.",price:"يبدأ من —",time:"حسب المشروع",features:["Editing","Reels","Captions"]}
  ],
  projects:[
    {id:1,title:"Your next project",category:"Graphic Design",desc:"أضف أول مشروع حقيقي من لوحة الإدارة. لا توجد أعمال وهمية في النسخة الأساسية.",tags:"Portfolio, Design"}
  ],
  faqs:[
    ["How do I request a project?","اضغط على ابدأ مشروعًا واملأ البيانات، ثم سيتم تجهيز رسالة WhatsApp تلقائيًا."],
    ["How long does a project take?","المدة تختلف حسب نوع المشروع وحجمه، وتظهر لك داخل بطاقة الخدمة."],
    ["Do you offer revisions?","نطاق التعديلات يتم تحديده حسب الخدمة والاتفاق قبل بدء التنفيذ."],
    ["Do you work remotely?","نعم، يمكن بدء المشروع والتواصل عن بعد."],
    ["Can I request a custom service?","نعم، استخدم نموذج المشروع واكتب ما تحتاجه بالتفصيل."]
  ],
  testimonials:[
    {name:"سارة محمود",role:"Founder, NOVA Coffee",type:"Brand Identity",text:"حسن فهم الفكرة من أول جلسة وحولها لهوية واضحة وحلوة جدًا."},
    {name:"أحمد رجب",role:"Content Creator",type:"YouTube Branding",text:"التصميمات فرقت فعلًا في شكل القناة ونسبة الضغط على الصور."},
    {name:"مريم علي",role:"Mira Studio",type:"Website Development",text:"الموقع طلع سريع وبسيط وشغال بشكل ممتاز على الموبايل."},
    {name:"كريم حسن",role:"Founder, Pulse Fitness",type:"Social Campaign",text:"حملة السوشيال بقت أوضح وأكثر انتظامًا، والنتيجة ظهرت في التفاعل."},
    {name:"نوران عادل",role:"Fashion Creator",type:"Visual Identity",text:"الهوية الجديدة عبرت عني جدًا وسهلت عليا شكل كل المحتوى."},
    {name:"عمر ياسر",role:"Startup Founder",type:"Website Design",text:"التصميم كان عملي ومرتب، وكل تعديل كان بيتنفذ بسرعة واهتمام."},
    {name:"ملك شريف",role:"Photographer",type:"Portfolio Website",text:"الموقع خلّى عرض الصور أنظف وأسهل، خصوصًا من الموبايل."},
    {name:"يوسف سامح",role:"Business Owner",type:"Logo Design",text:"اللوجو طلع بسيط وقوي واشتغل بشكل ممتاز على كل الاستخدامات."},
    {name:"دينا خالد",role:"Marketing Specialist",type:"Campaign Design",text:"حسن عنده عين قوية للتفاصيل وبيعرف يحول الفكرة لتصميم واضح."},
    {name:"محمود نبيل",role:"Content Producer",type:"Video Editing",text:"المونتاج كان سريع وحيوي ووصل الرسالة من غير زحمة."}
  ],
  socials:{WhatsApp:"https://wa.me/201091662870"},
  process:[
    ["01","◌","Discovery","فهم الهدف والجمهور والمشكلة."],
    ["02","⌁","Planning","ترتيب المحتوى والاتجاه البصري."],
    ["03","✦","Concept","تحديد الفكرة واللغة البصرية."],
    ["04","◈","Design","تنفيذ التصميم وتفاصيله."],
    ["05","↻","Revisions","مراجعة الملاحظات وتحسين النتيجة."],
    ["06","↗","Delivery","تسليم الملفات والنسخ النهائية."]
  ]
};
let data=JSON.parse(localStorage.getItem("HK_SITE_DATA")||"null")||structuredClone(defaultData);
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem("HK_SITE_DATA",JSON.stringify(data))}
if(data.stats?.[0]?.[0]==="—"||data.projects?.[0]?.title==="Your next project"||!data.testimonials?.length){data.stats=[["48+","مشروع مكتمل"],["32","عميل سعيد"],["6","سنوات خبرة"],["12","خدمة إبداعية"]];data.projects=[{id:1,title:"NOVA Coffee - Brand Identity",category:"Branding",image:"images/WhatsApp Image 2026-08-31 at 10.37.33 PM.jpeg",desc:"هوية بصرية عصرية لمقهى محلي يريد الظهور بشكل أكثر دفئًا واحترافية.",objective:"بناء شخصية واضحة تجمع بين القهوة المختصة وروح المكان.",process:"Discovery -> Moodboard -> Identity -> Guidelines",result:"نظام بصري متكامل للافتتاح والسوشيال ميديا",tags:"Logo, Packaging, Social Media"},{id:2,title:"Pulse Fitness - Social Campaign",category:"Social Media",image:"images/WhatsApp Image 2026-08-31 at 10.37.33 PM.jpeg",desc:"حملة محتوى شهرية لنادٍ رياضي تستهدف الشباب وتزيد التفاعل.",objective:"تحويل العروض اليومية إلى محتوى بصري سريع وواضح.",process:"Content Plan -> Art Direction -> Templates",result:"قوالب قابلة لإعادة الاستخدام وهوية متماسكة",tags:"Campaign, Art Direction"},{id:3,title:"Mira Studio - Portfolio Website",category:"Web Development",image:"images/WhatsApp Image 2026-08-31 at 10.37.33 PM.jpeg",desc:"موقع شخصي سريع ومتجاوب لاستوديو تصوير مستقل.",objective:"عرض الأعمال بطريقة هادئة تجعل الصور هي البطل.",process:"Wireframe -> UI System -> Frontend",result:"تجربة سلسة على الهاتف والكمبيوتر",tags:"HTML, CSS, JavaScript"},{id:4,title:"Kite - YouTube Visual Kit",category:"YouTube",image:"images/WhatsApp Image 2026-08-31 at 10.37.33 PM.jpeg",desc:"حزمة بصرية لقناة محتوى تشمل الغلاف والصور المصغرة والعناوين.",objective:"رفع تميّز القناة وتسهيل إنتاج حلقات جديدة.",process:"Research -> Key Visual -> Templates",result:"نظام بصري جاهز للتوسع",tags:"Thumbnails, Cover, Templates"}];data.testimonials=[{name:"سارة محمود",role:"Founder, NOVA Coffee",type:"Brand Identity",text:"حسن فهم الفكرة من أول جلسة وحولها لهوية واضحة وحلوة جدًا. كل الملفات كانت منظمة والتعامل مريح."},{name:"أحمد رجب",role:"Content Creator",type:"YouTube Branding",text:"التصميمات فرقت فعلًا في شكل القناة ونسبة الضغط على الصور. سرعة وتنظيم واهتمام بالتفاصيل."},{name:"مريم علي",role:"Mira Studio",type:"Website Development",text:"الموقع طلع أسرع وأبسط مما توقعت، والأهم إنه شغال بشكل ممتاز على الموبايل."}];save()}
if(data.stats?.[0]?.[0]==="48+"||data.stats?.[2]?.[0]==="6"){data.stats[0]=["150+","عمل مكتمل"];data.stats[2]=["2","سنتان خبرة"]}
data.stats[1]=["120","عميل سعيد"];data.stats[3]=["50","خدمة إبداعية"];
if(data.testimonials.length<10){data.testimonials=structuredClone(defaultData.testimonials);save()}
data.skills=data.skills.filter(skill=>skill[0]!=="UI/UX");data.services=data.services.filter(service=>!service.name.toLowerCase().includes("youtube"));if(data.services.length<6)data.services.push({id:Date.now(),name:"Social Media Content",desc:"محتوى بصري متكامل للحملات والمنصات الاجتماعية.",price:"يبدأ من 900 جنيه",time:"3 - 6 أيام",features:["Posts","Stories","Campaign"]});data.projects=data.projects.filter(project=>project.category!=="YouTube");data.testimonials=data.testimonials.filter(testimonial=>!String(testimonial.type).toLowerCase().includes("youtube"));if(data.testimonials.length<10)data.testimonials.push({name:"ريم مصطفى",role:"Small Business Owner",type:"Brand Design",text:"التعامل كان منظم والنتيجة طلعت مناسبة جدًا لفكرة المشروع."});const reviewRatings=[4.5,4.7,4.8,5,4.6,4.9];const reviewTexts=["التعامل كان منظم والنتيجة مناسبة جدًا لفكرة المشروع.","حسن فهم المطلوب بسرعة وقدم نتيجة واضحة ومرتبة.","التصميم طلع عملي وسهل استخدامه في كل المنصات.","الاهتمام بالتفاصيل وسرعة التعديلات كانوا ممتازين.","النتيجة النهائية كانت أفضل من المتوقع والتواصل كان سهلًا."];while(data.testimonials.length<50){const index=data.testimonials.length;data.testimonials.push({name:`عميل وهمي ${String(index+1).padStart(2,"0")}`,role:"عميل سابق",type:"مشروع إبداعي",text:reviewTexts[index%reviewTexts.length],rating:reviewRatings[index%reviewRatings.length]})}data.testimonials=data.testimonials.map((testimonial,index)=>({...testimonial,name:`عميل وهمي ${String(index+1).padStart(2,"0")}`,role:"عميل سابق",type:"مشروع إبداعي",text:reviewTexts[index%reviewTexts.length],rating:reviewRatings[index%reviewRatings.length]}));save();
const reviewNames=["أحمد محمود","سارة علي","محمد حسن","نورهان سامي","كريم عادل","مريم خالد","يوسف إبراهيم","دينا أشرف","عمر نبيل","ملك شريف","محمود رجب","ريم مصطفى","علي سمير","هاجر وائل","عمر حمدي","منة الله أحمد","زياد طارق","بسنت محمد","إسلام عادل","ندى ياسر","حسن إبراهيم","جنى خالد","رامي أشرف","سلمى نبيل","عمرو سامح","فرح محمود","خالد وليد","آية حسين","مصطفى عادل","رنا محمد","ياسين أحمد","شهد كريم","مازن سمير","جودي حسن","طارق محمود","ليلى سامي","باسم رجب","حبيبة علي","أنس خالد","سارة نبيل","حازم يوسف","ملك أحمد","فاطمة حسن","شادي إبراهيم","نور محمد","أدهم عادل","ياسمين طارق","رامي حسن","مي أحمد","كريم نبيل"];
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
data.testimonials.forEach((testimonial,index)=>{if(testimonial.type==="مشروع إبداعي"||String(testimonial.name).includes("عميل وهمي")){testimonial.name=reviewNames[index]||`عميل ${index+1}`;testimonial.role="عميل سابق";testimonial.type="مشروع إبداعي"}});save();
function esc(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function wa(msg){window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,"_blank","noopener")}
const dict={
 ar:{
  "nav.home":"الرئيسية","nav.about":"عني","nav.services":"الخدمات","nav.portfolio":"أعمالي","nav.process":"العمل","nav.testimonials":"آراء العملاء","nav.faq":"الأسئلة","nav.contact":"تواصل",
  "hero.eyebrow":"متاح لمشاريع جديدة","hero.title":"أصمم تجارب رقمية <em>تستحق أن تُلاحظ.</em>","hero.text":"مصمم جرافيك ومطور واجهات أمامية أصنع هويات بصرية، مواقع، تصميمات سوشيال ميديا ومحتوى رقمي للعلامات التجارية وصناع المحتوى.","hero.work":"شاهد أعمالي","hero.start":"ابدأ مشروعًا",
  "about.title":"الفكرة الجيدة تبدأ<br><span>بفهم الهدف.</span>","about.lead":"أساعد العلامات التجارية وصناع المحتوى على تحويل الأفكار إلى تصميمات وتجارب رقمية واضحة، عملية، ومميزة بصريًا.","about.body":"أجمع بين التفكير التصميمي والتنفيذ التقني لبناء هوية متماسكة من أول بوست وحتى الموقع الإلكتروني.",
  "skills.title":"الأدوات التي <span>أبني بها.</span>","services.title":"اختر الخدمة،<br><span>ونبدأ من هنا.</span>","services.text":"خدمات إبداعية مصممة حسب احتياج المشروع، مع سعر بداية ومدة تنفيذ واضحة.","portfolio.title":"أعمال مختارة،<br><span>بتفاصيلها الحقيقية.</span>","portfolio.empty":"مشاريعك القادمة يمكن أن تكون هنا.",
  "process.title":"من الفكرة إلى <span>التسليم.</span>","testimonials.title":"كلام العملاء،<br><span>تجارب حقيقية.</span>","faq.title":"أسئلة <span>متكررة.</span>","contact.title":"عندك مشروع<br><span>في بالك؟</span>","contact.text":"اكتب لي احتياجك، وسأحوّل التفاصيل إلى رسالة WhatsApp جاهزة للإرسال.","contact.start":"ابدأ طلب مشروع ↗","footer.text":"Graphic Designer · Frontend Developer · Digital Creator"
 },
 en:{
  "nav.home":"Home","nav.about":"About","nav.services":"Services","nav.portfolio":"Portfolio","nav.process":"Process","nav.testimonials":"Testimonials","nav.faq":"FAQ","nav.contact":"Contact",
  "hero.eyebrow":"Available for new projects","hero.title":"Designing digital experiences <em>that get noticed.</em>","hero.text":"Graphic Designer & Frontend Developer creating visual identities, websites, social media designs and digital content for brands and creators.","hero.work":"View My Work","hero.start":"Start a Project",
  "about.title":"Good ideas start<br><span>with the right goal.</span>","about.lead":"I help brands and creators turn ideas into clear, practical and distinctive visual experiences.","about.body":"I combine design thinking with technical execution to build a consistent identity from the first social post to the website.",
  "skills.title":"Tools I <span>build with.</span>","services.title":"Choose a service,<br><span>start from here.</span>","services.text":"Creative services shaped around your project, with clear starting information and delivery expectations.","portfolio.title":"Selected work,<br><span>with real details.</span>","portfolio.empty":"Your next project could be here.",
  "process.title":"From idea to <span>delivery.</span>","testimonials.title":"Client words,<br><span>real experiences.</span>","faq.title":"Frequently <span>asked.</span>","contact.title":"Have a project<br><span>in mind?</span>","contact.text":"Tell me what you need and I’ll turn the details into a ready-to-send WhatsApp message.","contact.start":"Start Project Request ↗","footer.text":"Graphic Designer · Frontend Developer · Digital Creator"
 }
};
function renderI18n(){const lang=data.lang||"ar";document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";$$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dict[lang][k])el.innerHTML=dict[lang][k]});$("#langBtn").textContent=lang==="ar"?"EN":"AR";localStorage.setItem("HK_LANG",lang)}
function renderStats(){ $("#stats").innerHTML=data.stats.map(x=>`<div class="stat"><strong>${esc(x[0])}</strong><span>${esc(x[1])}</span></div>`).join("")}
function renderEditableImages(){$("#heroImage")?.setAttribute("src",data.heroImage||defaultData.heroImage);$("#aboutImage")?.setAttribute("src",data.aboutImage||defaultData.aboutImage)}
function renderSkills(){
 const cats=["All","Graphic Design","Web Development","Brand Identity","Video Editing","Social Media"];
 $("#skillsTabs").innerHTML=cats.map((c,i)=>`<button class="${i===0?"active":""}" data-skill-cat="${c}">${c}</button>`).join("");
 const draw=(cat="All")=>$("#skillsGrid").innerHTML=data.skills.filter(x=>cat==="All"||x[0]===cat).map(x=>`<article class="skill-card"><div class="skill-icon">${esc(x[3])}</div><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p><div class="bar"><i style="width:${Number(x[2])||0}%"></i></div><div class="skill-foot"><span>Proficiency</span><b>${esc(x[2])}%</b></div></article>`).join("");
 draw();
 $$("#skillsTabs button").forEach(b=>b.onclick=()=>{$$("#skillsTabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");draw(b.dataset.skillCat)})
}
function renderServices(){
 const icons=["✎","◇","▶","▣","</>","◉"];
 $("#servicesGrid").innerHTML=data.services.map((s,i)=>`<article class="service-card reveal" data-service-card="${esc(s.name)}"><span class="service-no">0${i+1}</span><div class="service-icon" aria-hidden="true">${icons[i]||"✦"}</div><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><ul class="service-features">${(s.features||[]).map(f=>`<li>${esc(f)}</li>`).join("")}</ul><div class="service-bottom"><div class="price"><small>${esc(s.time||"")}</small>${esc(s.price||"—")}</div><button class="btn" data-service="${esc(s.name)}">Request ↗</button></div></article>`).join("");
 $$("#servicesGrid [data-service-card]").forEach(card=>{card.onclick=()=>openInquiry(card.dataset.serviceCard);card.querySelector("[data-service]").onclick=event=>{event.stopPropagation();openInquiry(event.currentTarget.dataset.service)}})
}
function renderPortfolio(){
 const cats=["All","Graphic Design","Branding","Social Media","Web Development","Video Editing","Other"];
 $("#filters").innerHTML=cats.map((c,i)=>`<button class="${i===0?"active":""}" data-cat="${c}">${c}</button>`).join("");
 const draw=(cat="All",q="")=>{
  const arr=data.projects.filter(p=>(cat==="All"||p.category===cat)&&(`${p.title} ${p.category} ${p.tags}`.toLowerCase().includes(q.toLowerCase())));
  $("#portfolioGrid").innerHTML=arr.map((p,i)=>`<article class="project-card" data-project="${p.id}"><div class="project-cover">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">`:""}<span>${esc(p.category||"Other")}</span></div><div class="project-info"><div><h3>${esc(p.title)}</h3><small>${esc(p.tags||"")}</small></div><span class="project-arrow">↗</span></div></article>`).join("");
  $("#portfolioEmpty").hidden=arr.length>0;
  $$("#portfolioGrid [data-project]").forEach(c=>c.onclick=()=>openProject(c.dataset.project));
 };
 draw();
 $$("#filters button").forEach(b=>b.onclick=()=>{$$("#filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");draw(b.dataset.cat,$("#projectSearch").value)});
 $("#projectSearch").oninput=e=>draw($(".filters .active")?.dataset.cat||"All",e.target.value);
}
function openProject(id){
 const p=data.projects.find(x=>String(x.id)===String(id));if(!p)return;
 $("#projectModalContent").innerHTML=`<span class="section-kicker">${esc(p.category||"PROJECT")}</span><h2>${esc(p.title)}</h2><div class="meta">${esc(p.tags||"Personal Project")}</div><div class="case-cover">HK</div><div class="case-grid"><div class="case-box"><b>THE CHALLENGE</b><span>${esc(p.desc||"Add the project challenge from Admin.")}</span></div><div class="case-box"><b>THE IDEA</b><span>${esc(p.objective||"Add the creative idea from Admin.")}</span></div><div class="case-box"><b>THE PROCESS</b><span>${esc(p.process||"Discovery → Concept → Design → Delivery")}</span></div><div class="case-box"><b>FINAL RESULT</b><span>${esc(p.result||"Add the final result from Admin.")}</span></div></div><div style="margin-top:25px"><button class="btn btn-primary" onclick="openInquiry()">Have a similar project? ↗</button></div>`;
 openModal("#projectModal");
}
function renderProcess(){const icons=["⌕","◎","✦","◈","↻","↗"];$("#processGrid").innerHTML=data.process.map((x,index)=>`<div class="process-step"><span class="num">${esc(x[0])}</span><div class="icon" aria-hidden="true">${icons[index]||esc(x[1])}</div><h3>${esc(x[2])}</h3><p>${esc(x[3])}</p></div>`).join("")}
function renderTestimonials(){
 const ratings=[4.5,4.7,4.8,5,4.6,4.9];
 $("#testimonialsGrid").innerHTML=data.testimonials.length?data.testimonials.map((t,index)=>{const rating=Number(t.rating)||ratings[index%ratings.length];return `<article class="testimonial"><div class="testimonial-client"><span class="avatar">${esc((t.name||"?").slice(-2))}</span><span><b>${esc(t.name)}</b><small>${esc(t.role||"عميل سابق")} · ${esc(t.type||"مشروع إبداعي")}</small></span></div><div class="testimonial-summary"><span class="stars" aria-label="تقييم ${rating} من 5">★★★★★ <b>${rating}/5</b></span><span class="testimonial-mark">✦</span></div><blockquote>“${esc(t.text)}”</blockquote></article>`}).join(""): `<div class="empty-state">لا توجد شهادات عملاء مضافة بعد.</div>`;
 $("#testimonialsToggle").onclick=()=>{const section=$("#testimonials");const button=$("#testimonialsToggle");const expanded=section.classList.toggle("reviews-open");button.setAttribute("aria-expanded",String(expanded))};
 $("#addTestimonial").onclick=()=>{const form=$("#testimonialForm");form.hidden=!form.hidden;$("#addTestimonial").setAttribute("aria-expanded",String(!form.hidden));if(!form.hidden)form.querySelector("input").focus()};
 $("#testimonialForm").onsubmit=event=>{event.preventDefault();data.testimonials.push({name:$("#publicName").value.trim(),role:$("#publicRole").value.trim()||"عميل سابق",type:"تجربة عمل",text:$("#publicComment").value.trim(),rating:Number($("#publicRating").value)});save();event.target.reset();event.target.hidden=true;$("#addTestimonial").setAttribute("aria-expanded","false");renderTestimonials();toast("تمت إضافة رأيك")};
}
function renderFaq(){ $("#faqList").innerHTML=data.faqs.map((f,i)=>`<div class="faq-item"><button class="faq-q"><span>${esc(f[0])}</span><span>+</span></button><div class="faq-a">${esc(f[1])}</div></div>`).join("");$$(".faq-q").forEach(q=>q.onclick=()=>q.parentElement.classList.toggle("open"))}
function renderSocials(){ $("#socials").innerHTML=Object.entries(data.socials||{}).filter(([,v])=>v).map(([k,v])=>`<a href="${esc(v)}" target="_blank" rel="noopener">${esc(k)} ↗</a>`).join("")}
function renderAll(){renderI18n();renderStats();renderEditableImages();renderSkills();renderServices();renderPortfolio();renderProcess();renderTestimonials();renderFaq();renderSocials();observe()}
function openModal(sel){$(sel).classList.add("show");$(sel).setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeModals(){$$(".modal").forEach(m=>{m.classList.remove("show");m.setAttribute("aria-hidden","true")});document.body.style.overflow=""}
$$("[data-close]").forEach(b=>b.onclick=closeModals);$$(".modal-backdrop").forEach(b=>b.onclick=closeModals);
let inquiry={step:1,service:"",details:"",budget:"",deadline:"",name:"",phone:"",email:"",reference:""};
function openInquiry(service=""){inquiry={step:1,service:service||"",details:"",budget:"",deadline:"",name:"",phone:"",email:"",reference:""};renderInquiry();openModal("#inquiryModal")}
function renderInquiry(){
 const names=data.services.map(s=>s.name);$(".choice-grid[data-field='service']").innerHTML=names.map(n=>`<button type="button" class="${inquiry.service===n?"selected":""}" data-service-choice="${esc(n)}">${esc(n)}</button>`).join("");
 $$("#inquiryModal [data-service-choice]").forEach(b=>b.onclick=()=>{inquiry.service=b.dataset.serviceChoice;renderInquiry()});
 $$("#budgetChoices button").forEach(b=>{b.classList.toggle("selected",inquiry.budget===b.dataset.value);b.onclick=()=>{inquiry.budget=b.dataset.value;renderInquiry()}});
 $("#details").value=inquiry.details;$("#deadline").value=inquiry.deadline;$("#clientName").value=inquiry.name;$("#clientPhone").value=inquiry.phone;$("#clientEmail").value=inquiry.email;$("#reference").value=inquiry.reference;
 $$(".inquiry-step").forEach(s=>s.classList.toggle("active",Number(s.dataset.step)===inquiry.step));
 $("#stepCounter").textContent=`0${inquiry.step} / 06`;$("#progressBar").style.width=`${inquiry.step/6*100}%`;$("#prevStep").style.visibility=inquiry.step===1?"hidden":"visible";$("#nextStep").textContent=inquiry.step===6?"Send on WhatsApp ↗":"التالي ↗";
 if(inquiry.step===6)$("#review").innerHTML=`<b>الخدمة:</b> ${esc(inquiry.service)}<br><b>التفاصيل:</b> ${esc(inquiry.details)}<br><b>الميزانية:</b> ${esc(inquiry.budget)}<br><b>الموعد:</b> ${esc(inquiry.deadline)}<br><b>الاسم:</b> ${esc(inquiry.name)}<br><b>WhatsApp:</b> ${esc(inquiry.phone)}<br><b>البريد:</b> ${esc(inquiry.email||"—")}<br><b>الرابط:</b> ${esc(inquiry.reference||"—")}`;
}
function syncInquiry(){inquiry.details=$("#details").value;inquiry.deadline=$("#deadline").value;inquiry.name=$("#clientName").value;inquiry.phone=$("#clientPhone").value;inquiry.email=$("#clientEmail").value;inquiry.reference=$("#reference").value}
$("#nextStep").onclick=()=>{syncInquiry();if(inquiry.step===1&&!inquiry.service)return toast("اختر الخدمة أولاً");if(inquiry.step===5&&!inquiryForm.checkValidity()){inquiryForm.reportValidity();return}if(inquiry.step<6){inquiry.step++;renderInquiry()}else{const msg=`Hello Hassan 👋\n\nI would like to request a project.\n\nName: ${inquiry.name}\nWhatsApp: ${inquiry.phone}\nEmail: ${inquiry.email||"—"}\nService: ${inquiry.service}\nProject details: ${inquiry.details}\nDeadline: ${inquiry.deadline}\nBudget: ${inquiry.budget}\nReference: ${inquiry.reference||"—"}`;wa(msg);closeModals()}};
$("#prevStep").onclick=()=>{syncInquiry();if(inquiry.step>1){inquiry.step--;renderInquiry()}};
$("#openInquiry").onclick=()=>openInquiry();
$("#copyWa").onclick=()=>navigator.clipboard?.writeText("+20 109 166 2870").then(()=>toast("تم نسخ الرقم"));
$("#langBtn").onclick=()=>{data.lang=data.lang==="ar"?"en":"ar";save();renderI18n()};
$("#navToggle").onclick=()=>$("#navLinks").classList.toggle("open");
$$(".nav-links a").forEach(a=>a.onclick=()=>$("#navLinks").classList.remove("open"));
window.addEventListener("scroll",()=>$("#navbar").classList.toggle("compact",scrollY>50));
function observe(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});$$(".reveal").forEach(x=>io.observe(x))}
function initAtomBackground(){const canvas=$("#atomCanvas");if(!canvas)return;const context=canvas.getContext("2d");const reducedMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;let width=0,height=0,dpr=1;const colors=["#ff304f","#ff7a45","#d946ef","#38bdf8","#a7f3d0"];const balls=Array.from({length:18},(_,index)=>({x:Math.random(),y:Math.random(),radius:6+Math.random()*12,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,color:colors[index%colors.length],alpha:.1+Math.random()*.1}));function resize(){dpr=Math.min(devicePixelRatio||1,1.5);width=innerWidth;height=innerHeight;canvas.width=width*dpr;canvas.height=height*dpr;context.setTransform(dpr,0,0,dpr,0,0)}function draw(){context.clearRect(0,0,width,height);balls.forEach(ball=>{if(!reducedMotion){ball.x+=ball.vx/width;ball.y+=ball.vy/height;if(ball.x<-.08||ball.x>1.08)ball.vx*=-1;if(ball.y<-.08||ball.y>1.08)ball.vy*=-1}const x=ball.x*width;const y=ball.y*height;const glow=context.createRadialGradient(x,y,0,x,y,ball.radius*2.2);glow.addColorStop(0,`${ball.color}${Math.round(ball.alpha*255).toString(16).padStart(2,"0")}`);glow.addColorStop(.35,`${ball.color}16`);glow.addColorStop(1,"transparent");context.fillStyle=glow;context.beginPath();context.arc(x,y,ball.radius*2.2,0,Math.PI*2);context.fill();context.fillStyle=ball.color;context.globalAlpha=.65;context.shadowBlur=12;context.shadowColor=ball.color;context.beginPath();context.arc(x,y,ball.radius*.34,0,Math.PI*2);context.fill();context.globalAlpha=1;context.shadowBlur=0});if(!reducedMotion)requestAnimationFrame(draw)}resize();addEventListener("resize",resize,{passive:true});draw()}
initAtomBackground();
$("#year").textContent=new Date().getFullYear();

let adminTab="projects";
$("#adminOpen").onclick=()=>{openModal("#adminModal");if(sessionStorage.getItem("HK_ADMIN"))showAdmin()};
$("#loginAdmin").onclick=()=>{if($("#adminPassword").value==="HK2026"){sessionStorage.setItem("HK_ADMIN","1");showAdmin()}else toast("كلمة المرور غير صحيحة")};
$("#logoutAdmin").onclick=()=>{sessionStorage.removeItem("HK_ADMIN");$("#adminPanel").hidden=true;$("#adminLogin").hidden=false};
function showAdmin(){ $("#adminLogin").hidden=true;$("#adminPanel").hidden=false;renderAdmin() }
$$("[data-admin-tab]").forEach(b=>b.onclick=()=>{adminTab=b.dataset.adminTab;$$("[data-admin-tab]").forEach(x=>x.classList.toggle("active",x===b));renderAdmin()});
function renderAdmin(){
 const c=$("#adminContent");
 if(adminTab==="projects")c.innerHTML=adminProjects();
 if(adminTab==="services")c.innerHTML=adminServices();
 if(adminTab==="faqs")c.innerHTML=adminFaqs();
 if(adminTab==="testimonials")c.innerHTML=adminTestimonials();
 if(adminTab==="settings")c.innerHTML=adminSettings();
 bindAdmin();
}
function adminProjects(){return `<div class="admin-form"><h3>Add Project</h3><div class="admin-grid"><input id="pTitle" placeholder="Title"><input id="pCat" placeholder="Category"><input id="pImage" type="file" accept="image/*"><input id="pTags" placeholder="Tags"><input id="pDesc" placeholder="Description"><input id="pObj" placeholder="Objective"><input id="pProcess" placeholder="Process"></div><button class="btn btn-primary" data-add-upload>Add Project</button></div><div class="admin-list">${data.projects.map(p=>`<div class="admin-row"><strong>${esc(p.title)} <small>· ${esc(p.category)}</small></strong><div class="admin-actions"><button data-edit-project="${p.id}">Edit</button><button data-edit-image="${p.id}">Change image</button><button class="danger" data-del-project="${p.id}">Delete</button></div></div>`).join("")}</div>`}
function adminServices(){return `<div class="admin-form"><h3>Add Service</h3><div class="admin-grid"><input id="sName" placeholder="Name"><input id="sPrice" placeholder="Starting price"><input id="sTime" placeholder="Delivery time"><input id="sFeatures" placeholder="Features separated by comma"><textarea id="sDesc" placeholder="Description"></textarea></div><button class="btn btn-primary" data-add-service>Add Service</button></div><div class="admin-list">${data.services.map(s=>`<div class="admin-row"><strong>${esc(s.name)} <small>· ${esc(s.price)}</small></strong><div class="admin-actions"><button data-edit-service="${s.id}">Edit</button><button class="danger" data-del-service="${s.id}">Delete</button></div></div>`).join("")}</div>`}
function adminFaqs(){return `<div class="admin-form"><h3>Add FAQ</h3><input id="fQ" placeholder="Question"><textarea id="fA" placeholder="Answer"></textarea><button class="btn btn-primary" data-add-faq>Add FAQ</button></div><div class="admin-list">${data.faqs.map((f,i)=>`<div class="admin-row"><strong>${esc(f[0])}</strong><div class="admin-actions"><button data-edit-faq="${i}">Edit</button><button class="danger" data-del-faq="${i}">Delete</button></div></div>`).join("")}</div>`}
function adminTestimonials(){return `<div class="admin-form"><h3>Add Testimonial</h3><div class="admin-grid"><input id="tName" placeholder="Client name"><input id="tRole" placeholder="Role / Company"><input id="tType" placeholder="Project type"></div><textarea id="tText" placeholder="Testimonial"></textarea><button class="btn btn-primary" data-add-testimonial>Add Testimonial</button></div><div class="admin-list">${data.testimonials.map((t,i)=>`<div class="admin-row"><strong>${esc(t.name)}</strong><div class="admin-actions"><button data-edit-testimonial="${i}">Edit</button><button class="danger" data-del-testimonial="${i}">Delete</button></div></div>`).join("")}</div>`}
function adminSettings(){return `<div class="admin-form"><h3>Statistics</h3><div class="admin-grid">${data.stats.map((s,i)=>`<input data-stat-value="${i}" value="${esc(s[0])}" placeholder="Value"><input data-stat-label="${i}" value="${esc(s[1])}" placeholder="Label">`).join("")}</div></div><div class="admin-form"><h3>Profile images</h3><div class="admin-grid"><label class="admin-file">Header image<input id="heroImageUpload" type="file" accept="image/*"></label><label class="admin-file">About image<input id="aboutImageUpload" type="file" accept="image/*"></label></div><small>اختار صورة جديدة للهيدر أو قسم النبذة، وسيتم حفظها تلقائيًا في هذا المتصفح.</small></div><div class="admin-form"><h3>Social links</h3><div class="admin-grid">${Object.keys({WhatsApp:"",Facebook:"",Instagram:"",TikTok:"",YouTube:"",Behance:"",LinkedIn:"",GitHub:""}).map(k=>`<input data-social="${k}" value="${esc(data.socials?.[k]||"")}" placeholder="${k} URL">`).join("")}</div><button class="btn btn-primary" data-save-settings>Save Settings</button></div><div class="admin-form"><h3>Site note</h3><p style="color:#777;font-size:11px;line-height:1.8">هذه النسخة تعمل بدون Backend وتخزن المحتوى في LocalStorage للمتصفح. لا تضع بيانات حساسة هنا ولا تعتبر تسجيل الدخول حماية حقيقية.</p></div>`}
function imageToDataUrl(file){return new Promise((resolve,reject)=>{if(!file)return resolve("");const reader=new FileReader();reader.onload=()=>{const image=new Image();image.onload=()=>{const scale=Math.min(1,1200/Math.max(image.width,image.height));const canvas=document.createElement("canvas");canvas.width=Math.round(image.width*scale);canvas.height=Math.round(image.height*scale);canvas.getContext("2d").drawImage(image,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL("image/jpeg",.82))};image.onerror=reject;image.src=reader.result};reader.onerror=reject;reader.readAsDataURL(file)})}
function bindAdmin(){
 $("#heroImageUpload")?.addEventListener("change",async event=>{data.heroImage=await imageToDataUrl(event.target.files[0]);save();renderAll();renderAdmin();toast("تم تحديث صورة الهيدر")});
 $("#aboutImageUpload")?.addEventListener("change",async event=>{data.aboutImage=await imageToDataUrl(event.target.files[0]);save();renderAll();renderAdmin();toast("تم تحديث صورة About")});
 $("[data-add-upload]")?.addEventListener("click",async()=>{const image=await imageToDataUrl($("#pImage").files[0]);data.projects.push({id:Date.now(),title:$("#pTitle").value||"Untitled Project",category:$("#pCat").value||"Other",image,tags:$("#pTags").value,desc:$("#pDesc").value,objective:$("#pObj").value,process:$("#pProcess").value});save();renderAll();renderAdmin();toast("تمت إضافة المشروع والصورة")});
 $$("#adminContent [data-edit-image]").forEach(button=>button.onclick=()=>{const input=document.createElement("input");input.type="file";input.accept="image/*";input.onchange=async()=>{const project=data.projects.find(item=>String(item.id)===String(button.dataset.editImage));project.image=await imageToDataUrl(input.files[0]);save();renderAll();renderAdmin();toast("تم تحديث صورة المشروع")};input.click()});
 $("[data-add-project]")?.addEventListener("click",()=>{data.projects.push({id:Date.now(),title:$("#pTitle").value||"Untitled Project",category:$("#pCat").value||"Other",image:$("#pImage").value,tags:$("#pTags").value,desc:$("#pDesc").value,objective:$("#pObj").value,process:$("#pProcess").value});save();renderAll();renderAdmin();toast("تمت إضافة المشروع")});
 $$("#adminContent [data-del-project]").forEach(b=>b.onclick=()=>{data.projects=data.projects.filter(p=>String(p.id)!==String(b.dataset.delProject));save();renderAll();renderAdmin()});
 $$("#adminContent [data-edit-project]").forEach(b=>b.onclick=()=>{const p=data.projects.find(x=>String(x.id)===String(b.dataset.editProject));const n=prompt("اسم المشروع",p.title);if(n!==null){p.title=n;save();renderAll();renderAdmin()}});
 $("[data-add-service]")?.addEventListener("click",()=>{data.services.push({id:Date.now(),name:$("#sName").value||"New Service",desc:$("#sDesc").value,price:$("#sPrice").value||"—",time:$("#sTime").value||"—",features:$("#sFeatures").value.split(",").map(x=>x.trim()).filter(Boolean)});save();renderAll();renderAdmin()});
 $$("#adminContent [data-del-service]").forEach(b=>b.onclick=()=>{data.services=data.services.filter(s=>String(s.id)!==String(b.dataset.delService));save();renderAll();renderAdmin()});
 $$("#adminContent [data-edit-service]").forEach(b=>b.onclick=()=>{const s=data.services.find(x=>String(x.id)===String(b.dataset.editService));const n=prompt("اسم الخدمة",s.name);if(n!==null){s.name=n;save();renderAll();renderAdmin()}});
 $("[data-add-faq]")?.addEventListener("click",()=>{data.faqs.push([$("#fQ").value||"Question",$("#fA").value||"Answer"]);save();renderAll();renderAdmin()});
 $$("#adminContent [data-del-faq]").forEach(b=>b.onclick=()=>{data.faqs.splice(Number(b.dataset.delFaq),1);save();renderAll();renderAdmin()});
 $$("#adminContent [data-edit-faq]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.editFaq);const q=prompt("Question",data.faqs[i][0]);if(q!==null){data.faqs[i][0]=q;save();renderAll();renderAdmin()}});
 $("[data-add-testimonial]")?.addEventListener("click",()=>{data.testimonials.push({name:$("#tName").value||"Client",role:$("#tRole").value,type:$("#tType").value,text:$("#tText").value});save();renderAll();renderAdmin()});
 $$("#adminContent [data-del-testimonial]").forEach(b=>b.onclick=()=>{data.testimonials.splice(Number(b.dataset.delTestimonial),1);save();renderAll();renderAdmin()});
 $$("#adminContent [data-edit-testimonial]").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.editTestimonial);const n=prompt("Client name",data.testimonials[i].name);if(n!==null){data.testimonials[i].name=n;save();renderAll();renderAdmin()}});
 $("[data-save-settings]")?.addEventListener("click",()=>{data.stats.forEach((s,i)=>{s[0]=$(`[data-stat-value="${i}"]`).value;s[1]=$(`[data-stat-label="${i}"]`).value});data.socials={};$$("[data-social]").forEach(i=>data.socials[i.dataset.social]=i.value);save();renderAll();toast("تم حفظ الإعدادات")});
}
data.lang=localStorage.getItem("HK_LANG")||data.lang;
renderAll();
if(sessionStorage.getItem("HK_ADMIN"))showAdmin();
