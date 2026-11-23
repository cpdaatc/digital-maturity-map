const out=document.getElementById('result');let results=[];const say=x=>{results.push(x);out.textContent=JSON.stringify(results,null,2)};
document.getElementById('run').onclick=async()=>{results=[];const keys=['discovery-lab-v2','discovery-decision-v3','discovery-applied-v3'];const backup=keys.map(k=>localStorage.getItem(k));
try{for(const width of [360,390,768,1440]){keys.forEach(k=>localStorage.removeItem(k));const f=document.createElement('iframe');f.style.width=width+'px';f.title='المعاينة بعرض '+width;document.getElementById('frame').replaceChildren(f);const load=()=>new Promise(r=>f.onload=r);let loaded=load();f.src='/digital-discovery-lab/';await loaded;let w=f.contentWindow,d=w.document;
const get=s=>{const e=d.querySelector(s);if(!e)throw Error('Missing '+s);return e};const click=s=>get(s).click();const fill=(s,v)=>{get(s).value=v;get(s).dispatchEvent(new Event('input',{bubbles:true}))};const assert=(x,msg)=>{if(!x)throw Error(msg)};const axe=async(screen)=>{await new Promise(r=>setTimeout(r,350));if(!w.axe){await new Promise((resolve,reject)=>{const s=d.createElement('script');s.src='/review/axe.min.js';s.onload=resolve;s.onerror=reject;d.head.append(s)})}const r=await w.axe.run();say({width,screen,overflow:d.documentElement.scrollWidth>w.innerWidth,axe:r.violations.map(v=>({id:v.id,impact:v.impact,targets:v.nodes.map(n=>({target:n.target,summary:n.failureSummary,checks:n.any}))}))});};
await axe('home');click('[name=demo][value="0"]');click('#demoCheck');assert(get('#demoFeedback').textContent.includes('غير صحيحة'),'demo incorrect');click('[name=demo][value="1"]');click('#demoCheck');assert(get('#demoFeedback').textContent.includes('إجابة صحيحة'),'demo correct');click('[data-start-module="0"]');click('#nextStep');click('#option-1');click('#checkAnswer');assert(get('#answerFeedback').textContent.includes('غير صحيحة'),'wrong answer');click('#showHint');assert(!!get('.hint-box'),'hint');click('#option-0');click('#checkAnswer');fill('#reasoningNote','دليل اختبار محفوظ');fill('#notes','ملاحظة اختبار محفوظة');await axe('question');
loaded=load();w.location.reload();await loaded;w=f.contentWindow;d=w.document;assert(get('#notes').value==='ملاحظة اختبار محفوظة','notes persistence');assert(get('#reasoningNote').value==='دليل اختبار محفوظ','reason persistence');click('#nextStep');click('#option-1');click('#checkAnswer');click('#nextStep');click('#revealRule');click('#nextStep');click('#option-2');click('#checkAnswer');click('#nextStep');assert(get('.next-learning').textContent.includes('المراجعة'),'review concept');await axe('result');click('#restartCase');assert(get('#stage').textContent.includes('بدء الأسئلة'),'restart case');assert(get('#notes').value==='ملاحظة اختبار محفوظة','notes after restart');click('[data-open-decision]');assert(!get('#decisionDialog').hidden,'fullpage lab');click('[name=decisionAnswer][value="1"]');click('#decisionCheck');loaded=load();w.location.reload();await loaded;w=f.contentWindow;d=w.document;assert(get('#decisionStage').textContent.includes('إجابة صحيحة'),'lab persistence');click('[data-practice=order]');click('#practiceCheck');assert(get('#practiceFeedback').textContent.includes('مراجعة'),'incorrect order');click('[data-position="2"][data-direction="-1"]');click('[data-position="1"][data-direction="-1"]');click('#practiceCheck');assert(get('#practiceFeedback').textContent.includes('إجابة صحيحة'),'correct order');click('[data-practice=evidence]');click('[name=practiceChoice][value="1"]');click('#practiceCheck');assert(get('#practiceFeedback').textContent.includes('إجابة صحيحة'),'evidence');click('[data-practice=missing]');click('[name=practiceChoice][value="1"]');click('#practiceCheck');assert(get('#practiceFeedback').textContent.includes('إجابة صحيحة'),'missing information');await axe('lab');click('#closeDecision');click('[data-start-module="0"]');assert(!!get('#moduleGoal').textContent,'module return');say({width,flows:'PASS: demo, wrong, hint, correct, reasoning, notes/reload, results, lab/reload, order, evidence, missing, restart, return'});

// All eight appended cases: real answer selection, feedback, reasoning flow and source panels.
for(let mi=0;mi<8;mi++){
 w.openScenario(mi,2);const data=w.eval('curriculum')[mi].scenarios[2];
 assert(get('#caseSelect').options.length===3,'three cases selectable');assert(get('#stage').textContent.includes('الحالة 3 من 3'),'third case count');
 assert(get('#reference').textContent.includes('من PDF'),'source locator');
 click('#nextStep');
 for(let qi=0;qi<3;qi++){
  const good=data.questions[qi].answer,wrong=(good+1)%3;
  click('#option-'+wrong);click('#checkAnswer');assert(get('#answerFeedback').textContent.includes('غير صحيحة'),'new wrong '+data.id);
  click('#showHint');assert(!!get('.hint-box'),'new hint');click('#option-'+good);click('#checkAnswer');assert(get('#answerFeedback').textContent.includes('صحيح'),'new correct '+data.id);
  click('#nextStep');
  if(qi===1){click('#revealRule');click('#nextStep');}
 }
 assert(get('#stage').textContent.includes('اكتمل السيناريو'),'new completion '+data.id);
 click('#nextCase');assert(mi===7?!get('#homeView').hidden:w.eval('state').module===mi+1,'next module after third case');
}
// A returning learner has all sixteen original cases completed and a saved note.
const fixture={module:0,scenario:1,records:{},journals:{0:'ملاحظة من النسخة السابقة'}};
for(const module of w.eval('curriculum'))for(const item of module.scenarios.slice(0,2))fixture.records[item.id]={done:true,step:5,round:0,answers:{},hints:{},note:'تأمل سابق'};
localStorage.setItem('discovery-lab-v2',JSON.stringify(fixture));loaded=load();w.location.reload();await loaded;w=f.contentWindow;d=w.document;
assert(get('#homeProgress').textContent.includes('16 من 24'),'old completion count preserved');
click('#startButton');assert(get('#caseSelect').value==='2','resume appended case');assert(get('#notes').value==='ملاحظة من النسخة السابقة','old journal preserved');
w.openScenario(0,1);assert(w.eval('state').records.governance.note==='تأمل سابق','old reflection preserved');
assert(get('#nextCase').textContent.includes('التالي'),'second case advances to third');click('#nextCase');assert(get('#caseSelect').value==='2','second-to-third navigation');
click('#allModules');get('.resource-catalog').open=true;await axe('source-catalog');
say({width,extendedFlows:'PASS: 8 new cases, 24 wrong/hint/correct cycles, all source locators, third-case navigation, 16 old completions, old notes/reflections and resume'});
}say({finished:true})}catch(e){say({error:e.message,stack:e.stack})}finally{keys.forEach((k,i)=>backup[i]===null?localStorage.removeItem(k):localStorage.setItem(k,backup[i]));}};
