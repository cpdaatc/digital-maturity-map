'use strict';
const learningGoals=[
'تمييز الرقمنة والأتمتة والتحول، وربط القرار بصاحب الصلاحية.',
'ربط المبادرة بمشكلة مثبتة، وقراءة المؤشرات بمقارنة صالحة.',
'تشخيص عوائق التبني، وتحويل الاعتراض إلى فرضية قابلة للاختبار.',
'فهم غرض خطوات العمل، وفحص التكامل قبل أتمتة المسار.',
'اختبار الخدمة من منظور المستفيد، مع مراعاة سهولة الوصول.',
'فحص جودة البيانات وحدود استخدام الذكاء الاصطناعي.',
'ربط المخاطر بالضوابط، واختبار الجاهزية لاستمرارية الخدمة.',
'تحديد فرضية تجربة رقمية، ومعيار الاستمرار أو التوقف.'
];
const beforeHome=renderHome;
renderHome=function(){beforeHome();document.querySelectorAll('.module-row').forEach((row,i)=>{const target=row.querySelector('div');const p=document.createElement('p');p.className='goal-caption';p.textContent=learningGoals[i];target.append(p)});};
const beforeLesson=renderLesson;
renderLesson=function(){beforeLesson();$('moduleGoal').textContent='الهدف: '+learningGoals[state.module];const r=currentRecord();const qi=r.step===1?0:r.step===2?1:r.step===4?2:null;
 if(qi!==null&&answerRecord(qi).correct){const aside=document.createElement('details');aside.className='reasoning';aside.innerHTML='<summary>لماذا هذا القرار؟ سؤال متابعة</summary><p>ما المعطى الذي يدعم الاختيار؟ وما المعلومة التي لو تغيّرت قد تغيّر القرار؟</p><label for="reasoningNote">تفسير شخصي اختياري، بدون تصحيح آلي</label><textarea id="reasoningNote" placeholder="الدليل من الحالة هو…"></textarea>';const feedback=$('answerFeedback');const detail=document.createElement('details');detail.className='reasoning';detail.innerHTML='<summary>تفصيل الفكرة وحدودها</summary><p>'+escapeHTML(scenarioData().rule)+'</p>';feedback.append(detail,aside);$('reasoningNote').value=r['reason'+qi]||'';$('reasoningNote').oninput=e=>{r['reason'+qi]=e.target.value;save()};}
 if(r.step===5){const targets=scenarioData().questions.filter((q,i)=>!r.answers[i]?.firstCorrect);const section=document.createElement('section');section.className='next-learning';section.innerHTML='<h3>ما الذي يستحق المراجعة؟</h3>'+(targets.length?'<p>إكمال السيناريو لا يعني إتقان كل مفاهيمه. تستحق هذه الأسئلة محاولة جديدة:</p><ul>'+targets.map(q=>'<li>'+escapeHTML(q.text)+'</li>').join('')+'</ul>':'<p>كانت الإجابات صحيحة من أول محاولة. الخطوة التالية هي اختبار الفكرة في حالة مختلفة، دون اعتبار ذلك شهادة إتقان.</p>')+'<button id="practiceTransfer" class="outline-button">تطبيق الفكرة في مختبر القرار</button>';$('stage').append(section);$('practiceTransfer').onclick=()=>window.openDecisionLab([0,4,1,5,0,2,2,5][state.module]);}
};
// Short demonstration. It never changes the curriculum progress.
document.querySelectorAll('[name="demo"]').forEach(input=>input.onchange=()=>{$('demoCheck').disabled=false;$('demoFeedback').replaceChildren();});
$('demoCheck').onclick=()=>{const choice=document.querySelector('[name="demo"]:checked');if(!choice)return;const good=choice.value==='1';$('demoFeedback').className='feedback '+(good?'':'error');$('demoFeedback').innerHTML='<div class="feedback-heading">'+(good?'✓ إجابة صحيحة':'× إجابة غير صحيحة')+'</div><p>'+(good?'تغيّر وسيلة الطلب لا يثبت تحسّن الخدمة. نحتاج معرفة ما حدث للزيارات والزمن وإعادة العمل.':'تقديم النموذج إلكترونيًا خطوة مفيدة، لكن رحلة المستفيد ما زالت تتضمن الطباعة وجمع التوقيعات.')+'</p><details><summary>كيف نختبر الفكرة؟</summary><p>مقارنة زمن الإنجاز وعدد الزيارات قبل التغيير وبعده، باستخدام تعريف وفترة قياس متسقين.</p></details>';};
$('exportProgress').onclick=()=>{const blob=new Blob([JSON.stringify({format:'discovery-backup-1',exportedAt:new Date().toISOString(),progress:state,decisionLab:JSON.parse(localStorage.getItem('discovery-decision-v3')||'null')},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='discovery-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
// Applied practice uses native controls; no drag-only interaction.
const activities=document.createElement('section');activities.className='applied-practice';activities.innerHTML=`<h2>تطبيق الفكرة بأكثر من طريقة</h2><p class="muted">ثلاثة أنشطة قصيرة مرتبطة بالمحاور. الإجابات محفوظة منفصلة عن إكمال السيناريوهات.</p><div class="practice-tabs" role="group" aria-label="نوع النشاط"><button class="outline-button" data-practice="order">ترتيب المعالجة</button><button class="outline-button" data-practice="evidence">مقارنة دليلين</button><button class="outline-button" data-practice="missing">المعلومة الناقصة</button></div><div id="practiceStage" tabindex="-1"></div>`;
$('decisionDialog').append(activities);
const PRACTICE='discovery-applied-v3';let practice={};try{practice=JSON.parse(localStorage.getItem(PRACTICE))||{}}catch{}
function keepPractice(){try{localStorage.setItem(PRACTICE,JSON.stringify(practice))}catch{}}
function renderPractice(type='order'){
 document.querySelectorAll('[data-practice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.practice===type)));
 const p=$('practiceStage');let selected=practice[type]||null;
 if(type==='order'){
 const labels=['تحديد سبب تأخر طلبات الأنشطة من السجلات','تنفيذ معالجة لها مسؤول وموعد','التحقق من فعالية المعالجة بقياس جديد'];const seq=Array.isArray(selected)&&selected.length===3?selected:[1,2,0];practice.order=seq;
 p.innerHTML='<h3>كيف نعالج تأخر طلبات الأنشطة؟</h3><p>ترتيب الخطوات من الأعلى إلى الأسفل. الأزرار تعمل باللمس ولوحة المفاتيح.</p><ol class="order-list">'+seq.map((id,i)=>`<li><span>${labels[id]}</span><div><button class="outline-button move" data-position="${i}" data-direction="-1" ${i===0?'disabled':''} aria-label="تقديم خطوة: ${labels[id]}">تقديم</button><button class="outline-button move" data-position="${i}" data-direction="1" ${i===2?'disabled':''} aria-label="تأخير خطوة: ${labels[id]}">تأخير</button></div></li>`).join('')+'</ol><button class="button primary" id="practiceCheck">التحقق من الترتيب</button><div id="practiceFeedback" role="status"></div>';
 p.querySelectorAll('.move').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.position),j=i+Number(b.dataset.direction);[seq[i],seq[j]]=[seq[j],seq[i]];practice.order=seq;keepPractice();renderPractice(type);p.querySelector(`[data-position="${j}"][data-direction="${b.dataset.direction}"]`)?.focus();});
 $('practiceCheck').onclick=()=>practiceFeedback(seq.join('')==='012','فحص السبب يسبق المعالجة، ثم يأتي قياس جديد للتحقق من فعاليتها.');
 }else{
 const evidence=type==='evidence';const title=evidence?'أي شاهد يثبت مراجعة الوصول إلى سجل التدريب؟':'ما المعلومة الناقصة لتقييم زمن طلب النشاط؟';const story=evidence?'المحور المرتبط: الأمن والمخاطر. في حالة افتراضية، المطلوب إثبات مراجعة صلاحيات سجل التدريب ومعالجة نتائجها.':'المحور المرتبط: الاستراتيجية والقياس. في تقرير افتراضي لطلبات الأنشطة، انخفض الزمن المعلن من 10 إلى 7 أيام. لا يوضح التقرير نقطة بدء حساب الزمن.';
 const options=evidence?['دليل أ: سياسة معتمدة تنص على المراجعة الدورية.','دليل ب: سجل مؤرخ للمراجعة، ونتائجها، وإغلاق الملاحظات.']:['عدد ألوان لوحة المؤشر الجديدة.','تعريف بداية الزمن ونهايته في الفترتين.'];
 p.innerHTML='<h3>'+title+'</h3><p>'+story+'</p><fieldset class="answer-options"><legend>اختيار واحد</legend>'+options.map((v,i)=>`<label class="answer-option"><input type="radio" name="practiceChoice" value="${i}" ${selected===i?'checked':''}>${v}</label>`).join('')+'</fieldset><button class="button primary" id="practiceCheck" '+(selected===null?'disabled':'')+'>التحقق من الإجابة</button><div id="practiceFeedback" role="status"></div>';
 p.querySelectorAll('input').forEach(el=>el.onchange=()=>{practice[type]=Number(el.value);keepPractice();$('practiceCheck').disabled=false;$('practiceFeedback').replaceChildren();});
 $('practiceCheck').onclick=()=>practiceFeedback(practice[type]===1,evidence?'السياسة تثبت المتطلب. السجل يثبت تنفيذ المراجعة ونتيجتها، مع ضرورة التحقق من نطاقه وحماية البيانات الحساسة.':'لا تصح المقارنة قبل توحيد تعريف الزمن. الرقم وحده لا يثبت التحسن أو سببه.');
 }
}
function practiceFeedback(good,text){const f=$('practiceFeedback');f.className='feedback '+(good?'':'error');f.innerHTML='<div class="feedback-heading">'+(good?'✓ إجابة صحيحة':'× يحتاج إلى مراجعة')+'</div><p>'+text+'</p>';}
document.querySelectorAll('[data-practice]').forEach(b=>b.onclick=()=>{renderPractice(b.dataset.practice);$('practiceStage').focus();});renderPractice();
if(view==='home')renderHome();else if(view==='learn')renderLesson();

// Source catalogue and short independent term explanations. No uploaded source file is republished.
const resourcePanel=$('learningResourcePanel');
if(resourcePanel)resourcePanel.innerHTML=`<details class="resource-catalog"><summary>المراجع التي بُني عليها التحديث</summary><p>استُفيد من جميع المرفقات في نطاقها: الخطة المكررة مرجع واحد، والصورة خريطة للموضوعات. المواد لا تُعاد نشرها هنا. الإحالات للطبعات المرفوعة؛ لا نفترض أنها أحدث الإصدارات.</p><ul>${Object.values(learningSources).map(ref=>`<li><h3>${referenceName(ref)}</h3><p>${escapeHTML(ref.edition)} · ${escapeHTML(ref.type)}</p><p>${escapeHTML(ref.use)}</p><p class="muted">${escapeHTML(ref.pages)}</p><p>${escapeHTML(ref.note)}</p></li>`).join('')}</ul></details><details class="resource-catalog"><summary>مصطلحات تساعد على تفسير القرار</summary><p>شروح قصيرة بصياغة مستقلة، وليست تعريفات تنظيمية حرفية.</p>${learningGlossary.map(term=>`<details class="term-card"><summary>${escapeHTML(term.term)}</summary><p>${escapeHTML(term.text)}</p><p class="muted">${escapeHTML(learningSources[term.source].name)} · ${escapeHTML(term.pages)}</p></details>`).join('')}</details>`;
