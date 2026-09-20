import {useEffect,useState} from 'react';
import {workplaceModules,workplaceVocabulary,workplaceSources} from './workplace-data';
import './workplace.css';
import {scoreAnswer} from './learning';

function WorkplaceLesson({module:m,onPractice}){
 const [answer,setAnswer]=useState(''),[result,setResult]=useState(null),[model,setModel]=useState(false),[hideAgent,setHideAgent]=useState(false),[audio,setAudio]=useState(''),[locale,setLocale]=useState('es-MX');
 useEffect(()=>()=>window.speechSynthesis?.cancel(),[]);
 function speak(text){
  if(!window.speechSynthesis){setAudio('Audio is unavailable. You can practice aloud with the text.');return;}
  window.speechSynthesis.cancel();
  const speech=new SpeechSynthesisUtterance(text);speech.lang=locale;speech.rate=.85;
  const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>v.lang.toLowerCase()===locale.toLowerCase())||voices.find(v=>v.lang.startsWith('es'));
  if(voice)speech.voice=voice;
  speech.onerror=()=>setAudio('Audio could not play. Try again or read the model aloud.');
  setAudio('Browser-generated audio'+(voice?' · '+voice.lang:'. The requested regional voice may not be available.'));
  window.speechSynthesis.speak(speech);
 }
 return <article className="workplace-lesson"><p className="section-kicker">{m.level} · {m.category}</p><h2>{m.title}</h2><p>{m.objective}</p>
  <label className="input-label" htmlFor="workplace-voice">Preferred Spanish audio</label><select id="workplace-voice" value={locale} onChange={e=>{setLocale(e.target.value);window.speechSynthesis?.cancel();setAudio('');}}><option value="es-MX">Mexico</option><option value="es-ES">Spain</option><option value="es-AR">Argentina</option></select><p className="muted">Available voices depend on your browser. A voice is not a model of every speaker in that region.</p>
  <h3>What to say—and when</h3>{m.phrases.map(([es,en,tip])=><div className="phrase-entry" key={es}><p lang="es"><strong>{es}</strong></p><p className="english-meaning">{en}</p><p><strong>Pro tip:</strong> {tip}</p><button className="text-button" onClick={()=>speak(es)}>Listen to phrase</button></div>)}<p role="status">{audio}</p>
  <h3>Example conversation</h3><p className="muted">Original practice scenario. Policies, amounts, and outcomes are fictional.</p><label className="toggle-label"><input type="checkbox" checked={hideAgent} onChange={e=>setHideAgent(e.target.checked)}/>Hide agent responses and play the representative</label>
  <ol className="workplace-dialogue">{m.dialogue.map(([role,es,en],i)=><li key={i}><strong>{role}</strong>{role==='Agent'&&hideAgent?<p>Respond aloud in Spanish. Then reveal the dialogue to compare your meaning and tone.</p>:<><p lang="es">{es}</p><p className="english-meaning">{en}</p><button className="text-button" onClick={()=>speak(es)}>Listen to turn {i+1}</button></>}</li>)}</ol>
  <section className="teaching-note"><h3>Your turn: change the situation</h3><p>{m.practice}</p><label className="input-label" htmlFor="workplace-answer">Your Spanish answer</label><textarea id="workplace-answer" lang="es" value={answer} onChange={e=>{setAnswer(e.target.value);setResult(null);}}/><div className="accents" aria-label="Spanish characters">{['á','é','í','ó','ú','ü','ñ','¿','¡'].map(c=><button key={c} aria-label={'Append '+c} onClick={()=>{setAnswer(answer+c);setResult(null);}}>{c}</button>)}</div><p className="muted">This checks the lesson’s model, not every valid Spanish response. A different answer may also be natural.</p><button className="primary" disabled={!answer.trim()} onClick={()=>setResult(scoreAnswer(answer,[m.model]))}>Check model wording</button>{result&&<div role="status" className={'feedback '+(result.correct?'success':'retry')}><strong>{result.correct?'Your wording matches the model.':'Your wording differs from this model.'}</strong><p>{m.coaching}</p>{result.accent&&<p>Keep the written accents shown in the model.</p>}</div>}<button className="text-button" aria-expanded={model} onClick={()=>setModel(!model)}>{model?'Hide model':'Reveal model and explanation'}</button>{model&&<><p lang="es">{m.model}</p><p>{m.coaching}</p><p>Now hide the model and try from memory.</p></>}</section>
  <section><h3>Make it your own</h3><p>Repeat the conversation using a different device, amount, or customer concern. Keep your response relevant to what the customer actually says.</p><ul><li>Acknowledge the specific problem without blame.</li><li>Ask one clear question or give one clear next step.</li><li>Keep tú or usted consistent.</li><li>Confirm the result; do not promise an unverified outcome.</li></ul><p>Use this checklist to review yourself or practice with a partner. Completing a lesson is practice, not certification of job readiness.</p></section>
  <button className="primary" onClick={onPractice}>Open guided lesson and saved review</button>
 </article>;
}

export function WorkplaceSpanish({lessons,onOpenLesson}){
 const [category,setCategory]=useState('All'),[query,setQuery]=useState(''),[selected,setSelected]=useState(null),[mode,setMode]=useState('Lessons');
 const q=query.trim().toLocaleLowerCase();
 const entries=workplaceModules.filter(m=>(category==='All'||m.category===category)&&[m.title,m.objective,...m.phrases.flat()].join(' ').toLocaleLowerCase().includes(q));
 const vocabulary=workplaceVocabulary.filter(row=>row.join(' ').toLocaleLowerCase().includes(q));
 const module=workplaceModules.find(m=>m.id===selected);
 if(module)return <div><button className="text-button" onClick={()=>{setSelected(null);window.speechSynthesis?.cancel();}}>← Back to Workplace Spanish</button><WorkplaceLesson key={module.id} module={module} onPractice={()=>onOpenLesson(lessons.findIndex(l=>l.id===module.id))}/></div>;
 return <section className="workplace-spanish"><p className="section-kicker">SPANISH FOR REAL CUSTOMER CONVERSATIONS</p><h2>Workplace Spanish</h2><p>24 lessons · 24 bilingual conversations · 72 useful phrases · 32 technical and billing terms</p><p>Start with Customer care, add Empathy, then practice Technical support and Billing. Use Resolution to bring the conversation to a clear close. Move at your own pace.</p><div className="teaching-note"><strong>Regional awareness, not stereotypes</strong><p>Mexico is part of Latin America. Vocabulary, formality, accents, and service practices vary within every region. These lessons use a courteous usted model by default, with explicit alternatives for tú and vos. Follow your employer’s procedures and the customer’s stated preferences.</p></div>
  <div className="track-picker" aria-label="Workplace resources">{['Lessons','Vocabulary'].map(tab=><button key={tab} aria-pressed={mode===tab} onClick={()=>{setMode(tab);setQuery('');}}>{tab}</button>)}</div>
  <label className="input-label" htmlFor="workplace-search">Search in English or Spanish</label><input className="search" id="workplace-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try refund, contraseña, empathy, or billing"/>
  {mode==='Lessons'?<><div className="category-filters" aria-label="Workplace lesson categories">{['All',...new Set(workplaceModules.map(m=>m.category))].map(c=><button key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><p>{entries.length} lessons</p><div className="reading-catalog">{entries.map(m=><button className="reading-card" key={m.id} onClick={()=>setSelected(m.id)}><span className="section-kicker">{m.category} · {m.level}</span><strong>{m.title}</strong><span>{m.objective}</span><small>Dialogue · translations · pro tips · written practice</small></button>)}</div>{!entries.length&&<p className="empty">No matching lessons. Try another category or a shorter search.</p>}</>:<><p>{vocabulary.length} terms</p>{vocabulary.map(([es,en,tip])=><article className="phrase-entry" key={es}><h3 lang="es">{es}</h3><p className="english-meaning">{en}</p><p><strong>Pro tip:</strong> {tip}</p></article>)}{!vocabulary.length&&<p className="empty">No matching terms. Try “screen” or “charge”.</p>}</>}
  <details className="grammar-guide"><summary>Language and security references</summary><p>The dialogues are original teaching examples. These references support selected regional and credential-handling notes.</p><ul>{workplaceSources.map(([title,url])=><li key={url}><a href={url} target="_blank" rel="noreferrer">{title}</a></li>)}</ul></details>
 </section>;
}
