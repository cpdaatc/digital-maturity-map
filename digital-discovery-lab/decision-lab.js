'use strict';
(() => {
const exercises = [
  {
    "title": "تذكير آلي وتقارير مكررة",
    "skill": "تنسيق التطوير المهني المستمر",
    "story": "في حالة افتراضية، تُرسل تذكيرات تقارير إنجاز الأنشطة آليًا، لكن الأقسام تعيد إرسال البيانات نفسها لثلاث جهات. لم يراجع الفريق سبب تعدد الطلبات أو أثر التغيير على وقت إعداد التقرير.",
    "question": "ما الحكم الذي تدعمه هذه المعطيات عن المبادرة؟",
    "options": [
      [
        "اكتملت إعادة هندسة الإجراء لأن التداول أصبح آليًا",
        "هذا الاختيار لا يعالج المسألة بدقة. تسريع انتقال الطلب لا يثبت أن جميع خطواته ضرورية أو أن نتيجته تحسنت."
      ],
      [
        "حدثت أتمتة للتداول، وتحتاج ضرورة المراجعات وأثرها إلى فحص",
        "صحيح. تسريع انتقال الطلب لا يثبت أن جميع خطواته ضرورية أو أن نتيجته تحسنت."
      ],
      [
        "نجحت الخدمة بمجرد الاستغناء عن تسليم الورق",
        "هذا الاختيار لا يعالج المسألة بدقة. تسريع انتقال الطلب لا يثبت أن جميع خطواته ضرورية أو أن نتيجته تحسنت."
      ]
    ],
    "answer": 1,
    "hint": "هل نحتاج تنفيذ كل خطوة موجودة أصلًا؟",
    "rule": "تمييز رقمنة المعلومات عن أتمتة المهام وتغيير طريقة تقديم الخدمة يساعد على وصف الإنجاز وقياس قيمته بدقة.",
    "transfer": "وقت للتفكير: ما البيانات التي يمكن إدخالها مرة واحدة في رحلة طلب النشاط؟"
  },
  {
    "title": "توسعة اشتراك قبل اعتماد التكلفة",
    "skill": "تنسيق اللجان والحوكمة",
    "story": "في جهة أكاديمية افتراضية، أوصى فريق عمل بتوسعة اشتراك منصة تعليمية. وصل عرض المورد، لكن محضر الفريق لا يحدد صلاحية الالتزام المالي أو الجهة التي تقبل المخاطر المتبقية.",
    "question": "أي خطوة تسبق الموافقة على عرض التوسعة؟",
    "options": [
      [
        "مراجعة الميثاق والتفويضات ومسار الاعتماد المعتمد لدى الجهة",
        "صحيح. مصدر سلطة القرار هو التفويض المعتمد. لا يمنح المحضر أو الاختصاص التقني صلاحية مالية تلقائية."
      ],
      [
        "اعتبار توقيع رئيس اللجنة تفويضًا كافيًا للشراء",
        "هذا الاختيار لا يعالج المسألة بدقة. مصدر سلطة القرار هو التفويض المعتمد. لا يمنح المحضر أو الاختصاص التقني صلاحية مالية تلقائية."
      ],
      [
        "تمرير الطلب إلى التقنية لتحديد جهة الاعتماد بدل اللجنة",
        "هذا الاختيار لا يعالج المسألة بدقة. مصدر سلطة القرار هو التفويض المعتمد. لا يمنح المحضر أو الاختصاص التقني صلاحية مالية تلقائية."
      ]
    ],
    "answer": 0,
    "hint": "فرّق بين إعداد التوصية وامتلاك سلطة اعتمادها.",
    "rule": "يجب إسناد كل قرار إلى صاحبه وفق وثائق الجهة، مع تمييز التوصية والتنسيق والاعتماد وقبول المخاطر.",
    "transfer": "وقت للتفكير: ما العناصر التي تجعل توصية اللجنة قابلة لاتخاذ قرار؟"
  },
  {
    "title": "انتهت مهمة استخراج التقرير",
    "skill": "حوكمة الصلاحيات والمخاطر",
    "story": "في حالة تدريبية افتراضية، مُنح محلل وصولًا مؤقتًا لبيانات تطوير مهني محددة. تقول الإدارة إن الوصول أُلغي بعد تسليم التقرير، وتريد إثبات ذلك خلال مراجعة داخلية.",
    "question": "ما الدليل الذي يسمح بالتحقق من تنفيذ الإلغاء ضمن الضبط المقرر؟",
    "options": [
      [
        "تعميم يوضح أهمية المحافظة على سرية بيانات التدريب",
        "هذا الاختيار لا يعالج المسألة بدقة. الدليل التنفيذي يربط التفويض بالصلاحية الفعلية وبإنهائها، لا بمجرد التوعية أو التعهد."
      ],
      [
        "وعد المتعاون بعدم استخدام الحساب بعد إنجاز التقرير",
        "هذا الاختيار لا يعالج المسألة بدقة. الدليل التنفيذي يربط التفويض بالصلاحية الفعلية وبإنهائها، لا بمجرد التوعية أو التعهد."
      ],
      [
        "طلب معتمد وسجل منح وانتهاء ومراجعة تثبت سحب الصلاحية في موعدها",
        "صحيح. الدليل التنفيذي يربط التفويض بالصلاحية الفعلية وبإنهائها، لا بمجرد التوعية أو التعهد."
      ]
    ],
    "answer": 2,
    "hint": "ابحث عن أثر يمكن تتبعه في سجل التنفيذ.",
    "rule": "تُضبط الصلاحيات بالحاجة الفعلية والتفويض والتتبع والمراجعة والانتهاء، مع تقييم الخطر المتبقي.",
    "transfer": "وقت للتفكير: ما الحقول التي يجب أن يتضمنها طلب الوصول المؤقت؟"
  },
  {
    "title": "نموذج إرشادي أم متطلب ملزم؟",
    "skill": "قراءة نطاق الوثائق",
    "story": "في حالة أكاديمية افتراضية، استخدم فريق نموذجًا واردًا كمثال في دليل لتوثيق احتياجات التطوير المهني. اعتبر الفريق ترتيب خاناته إلزاميًا، دون مراجعة النص الحاكم أو نطاق انطباق الدليل.",
    "question": "كيف تتحقق من حدود الالتزام قبل فرض النموذج على الأقسام؟",
    "options": [
      [
        "تعتمد ترتيب النموذج لأن وجوده داخل الدليل يمنحه الإلزام.",
        "وجود مثال لا يكفي لإثبات إلزام شكله؛ يجب الرجوع إلى نص الوثيقة ونطاقها."
      ],
      [
        "تراجع مصدر الوثيقة وصيغ الإلزام والنطاق، وتميز المتطلب عن طريقة توضيحه.",
        "صحيح. يُستند إلى نص المتطلب المنطبق، ولا يُفترض أن كل مثال هو الشكل الوحيد المقبول."
      ],
      [
        "تسمح لكل قسم باختيار أي نموذج دون فحص المتطلبات.",
        "المرونة في الشكل لا تلغي ضرورة استيفاء المتطلب المنطبق وتوثيق تحققه."
      ]
    ],
    "answer": 1,
    "hint": "هل النص يفرض نتيجة أو إجراءً محددًا، أم يعرض مثالًا للتطبيق؟",
    "rule": "يُحدد الالتزام بقراءة المصدر المعتمد والنص والنطاق. اختلاف الشكل لا يثبت عدم الامتثال، والتشابه معه لا يثبت تحقق الغرض.",
    "transfer": "وقت للتفكير: ما الدليل الذي يثبت استيفاء المتطلب ولو اختلف ترتيب الخانات؟"
  },
  {
    "title": "مقارنة زمن إصدار الإفادة",
    "skill": "متابعة مؤشرات الأداء",
    "story": "في تقرير افتراضي، قورنت مدة إصدار إفادات المشاركة بين فترتين. تبدأ الفترة الأولى من طلب الإفادة، والثانية من اعتماد سجل الحضور. طُلب إعلان أن الخدمة أصبحت أسرع.",
    "question": "ما المعلومات التي يلزم ضبطها قبل اعتماد مقارنة المدتين؟",
    "options": [
      [
        "توحيد نقطة بداية القياس ونهايته ونطاق الطلبات في الفترتين",
        "صحيح. اختلاف تعريف المدة يجعل المقارنة غير متكافئة، حتى لو كانت الأرقام صحيحة في تقريريها."
      ],
      [
        "اعتماد النسبة لأن قيمتي الزمن موثقتان في النظام",
        "هذا الاختيار لا يعالج المسألة بدقة. اختلاف تعريف المدة يجعل المقارنة غير متكافئة، حتى لو كانت الأرقام صحيحة في تقريريها."
      ],
      [
        "استخدام متوسط المدتين لتقليل أثر اختلاف طريقة القياس",
        "هذا الاختيار لا يعالج المسألة بدقة. اختلاف تعريف المدة يجعل المقارنة غير متكافئة، حتى لو كانت الأرقام صحيحة في تقريريها."
      ]
    ],
    "answer": 0,
    "hint": "هل تقيس الفترتان الجزء نفسه من رحلة الطلب؟",
    "rule": "المؤشر الجيد له تعريف ثابت وخط أساس ونطاق واضح. إثبات الفرق لا يساوي إثبات سببه.",
    "transfer": "وقت للتفكير: كيف ستعرض التحسن وحدود تفسيره في تقرير للإدارة؟"
  },
  {
    "title": "فحوص متشابهة لقائمة المتحدثين",
    "skill": "تحسين الإجراءات وحوكمتها",
    "story": "في مسار أكاديمي افتراضي، تمر قائمة المتحدثين بثلاث مراجعات تبدو متشابهة. لا يوضح مخطط العمل إن كانت الجهات تتحقق من اكتمال البيانات أو جوانب تخصصية مختلفة.",
    "question": "قبل دمج المراجعات، ما الذي يجب توثيقه؟",
    "options": [
      [
        "دمج المراجعات تلقائيًا لأن الخانة واحدة في النموذج",
        "هذا الاختيار لا يعالج المسألة بدقة. تشابه خانة الإدخال لا يثبت تشابه أغراض الضوابط؛ يلزم فهمها أولًا."
      ],
      [
        "أتمتة المراجعات الثلاث للحفاظ على المسار الحالي",
        "هذا الاختيار لا يعالج المسألة بدقة. تشابه خانة الإدخال لا يثبت تشابه أغراض الضوابط؛ يلزم فهمها أولًا."
      ],
      [
        "تحديد غرض كل مراجعة وسندها ومخرجاتها والمخاطر التي تعالجها",
        "صحيح. تشابه خانة الإدخال لا يثبت تشابه أغراض الضوابط؛ يلزم فهمها أولًا."
      ]
    ],
    "answer": 2,
    "hint": "هل تراجع الجهات الشيء نفسه وللسبب نفسه؟",
    "rule": "إعادة هندسة الإجراءات تعيد النظر في ضرورة الخطوات وتدفق العمل، مع إبقاء الضوابط التي تحقق غرضًا محددًا.",
    "transfer": "وقت للتفكير: أي خطوة يمكن نقلها إلى بداية الطلب لتجنب الإعادة؟"
  }
];
const dialog=document.getElementById('decisionDialog'),panel=document.getElementById('decisionStage');
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LABKEY='discovery-decision-v3';let index=0,complete=false;let labStorageOK=true;
const answers=exercises.map(()=>({choice:null,submitted:null,attempts:0,first:false,correct:false,hint:false}));
try{const saved=JSON.parse(localStorage.getItem(LABKEY));if(saved&&Array.isArray(saved.answers)&&saved.answers.length===exercises.length){saved.answers.forEach((v,i)=>{if(v&&[null,0,1,2].includes(v.choice)&&[null,0,1,2].includes(v.submitted))Object.assign(answers[i],v)});index=Number.isInteger(saved.index)?Math.max(0,Math.min(5,saved.index)):0;complete=saved.complete===true&&answers.every(a=>a.correct)}}catch{}
function persist(){try{localStorage.setItem(LABKEY,JSON.stringify({index,complete,answers}));labStorageOK=true}catch{labStorageOK=false}}
function render(){persist();
 const e=exercises[index],a=answers[index];
 document.getElementById('decisionProgress').textContent=complete?'اكتملت التحديات الستة':`التحدي ${index+1} من ${exercises.length} · ${e.skill}`;
 document.getElementById('decisionFill').style.width=`${complete?100:(index+1)/exercises.length*100}%`;
 if(complete){const first=answers.filter(v=>v.first).length;panel.innerHTML=`<h2>من الإجابة إلى طريقة التفكير</h2><p class="idea-intro">اكتملت التحديات الستة. النتيجة للتدريب وليست حكمًا على الإتقان أو الامتثال.</p><div class="decision-score">${first} من 6 <span>إجابات صحيحة من أول محاولة</span></div><ol class="decision-review">${exercises.map((v,i)=>`<li><strong>${esc(v.skill)}</strong><p>${esc(v.rule)}</p><button class="text-button" data-review="${i}">مراجعة التحدي</button></li>`).join('')}</ol><button class="button primary" id="decisionRestart">محاولة جديدة</button>`;panel.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>{index=Number(b.dataset.review);complete=false;render();focus()});document.getElementById('decisionRestart').onclick=()=>{answers.forEach(a=>Object.assign(a,{choice:null,submitted:null,attempts:0,first:false,correct:false,hint:false}));index=0;complete=false;render();focus()};return;}
 panel.innerHTML=`<h2 id="decisionQuestionTitle">${esc(e.title)}</h2><button class="text-button" id="linkedModule">فتح المحور المرتبط: ${['المفاهيم والحوكمة','المفاهيم والحوكمة','الأمن والمخاطر','المفاهيم والحوكمة','الاستراتيجية والقياس','البنية والإجراءات'][index]}</button><p class="story">${esc(e.story)}</p><p class="decision-question">${esc(e.question)}</p><p class="question-help">اختيار إجابة واحدة، ثم الضغط على «التحقق من الإجابة».</p><fieldset class="answer-options"><legend class="sr-only">${esc(e.question)}</legend>${e.options.map((o,i)=>`<label class="answer-option ${a.choice===i?'selected':''} ${a.submitted===i?(a.correct?'correct':'incorrect'):''}"><input type="radio" name="decisionAnswer" value="${i}" ${a.choice===i?'checked':''} ${a.correct?'disabled':''}><span>${esc(o[0])}</span></label>`).join('')}</fieldset>${a.submitted!==null?`<section class="feedback ${a.correct?'':'error'}" role="status"><div class="feedback-heading">${a.correct?'✓ إجابة صحيحة':'× إجابة غير صحيحة'}</div><p>${esc(e.options[a.submitted][1])}</p>${a.correct?`<div class="decision-rule"><strong>الفكرة المستنتجة</strong><p>${esc(e.rule)}</p></div><p>${esc(e.transfer)}</p>`:'<p class="retry-instruction">يمكن اختيار إجابة أخرى والمحاولة مجددًا.</p>'}</section>`:''}${!a.correct?`<button class="hint-button" id="decisionHint" aria-expanded="${a.hint}">عرض تلميح</button>${a.hint?`<p class="hint-box">${esc(e.hint)}</p>`:''}`:''}<div class="task-actions">${a.correct?`<button class="button primary" id="decisionNext">${index===exercises.length-1?'عرض خلاصة التعلّم':'التحدي التالي'}</button>`:`<button class="button primary" id="decisionCheck" ${a.choice===null||a.choice===a.submitted?'disabled':''}>التحقق من الإجابة</button>`}${index>0?'<button class="text-button" id="decisionPrevious">التحدي السابق</button>':''}</div><p class="optional-note">${labStorageOK?'تم حفظ تقدم المختبر على هذا المتصفح. لا يُضاف إلى إكمال المحاور.':'تعذر حفظ تقدم المختبر؛ سيبقى متاحًا أثناء فتح الصفحة فقط.'}</p>`;
 panel.querySelectorAll('[name="decisionAnswer"]').forEach(el=>el.onchange=()=>{a.choice=Number(el.value);a.submitted=null;render();panel.querySelector(`[value="${a.choice}"]`).focus({preventScroll:true})});
 document.getElementById('linkedModule').onclick=()=>openModule([0,0,6,0,1,3][index]);
 const bind=(id,fn)=>{const el=document.getElementById(id);if(el)el.onclick=fn;};
 bind('decisionCheck',()=>{if(a.choice===null||a.choice===a.submitted||a.correct)return;a.attempts++;a.correct=a.choice===e.answer;a.submitted=a.choice;if(a.attempts===1)a.first=a.correct;render();panel.querySelector('.feedback').scrollIntoView({block:'nearest'});});
 bind('decisionHint',()=>{a.hint=true;render()});
 bind('decisionNext',()=>{if(index===exercises.length-1)complete=true;else index++;render();focus()});
 bind('decisionPrevious',()=>{index--;render();focus()});
}
function focus(){panel.focus({preventScroll:true});dialog.scrollIntoView({block:'start'});}
function open(target){if(Number.isInteger(target)&&target>=0&&target<exercises.length){index=target;complete=false;}document.getElementById('homeView').hidden=true;document.getElementById('learnView').hidden=true;dialog.hidden=false;history.replaceState(null,'','#lab');render();focus();}window.openDecisionLab=open;
document.querySelectorAll('[data-open-decision]').forEach(b=>b.onclick=()=>open());
document.getElementById('closeDecision').onclick=()=>switchView('home');if(location.hash==='#lab')open();
})();
