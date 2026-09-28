import {useId,useState} from 'react';
import {verbs,pronouns} from './reference-data';
import {getForms,tenseInfo} from './verb-tenses';
import {supportFor} from './study-support';
import './study-support.css';

function SupportBody({spanish,english,tip}){
 const help=supportFor(spanish,english,tip),id=useId();
 const [language,setLanguage]=useState('both'),[verbId,setVerbId]=useState(help.matches[0]?.infinitive||'hablar'),[tense,setTense]=useState(help.matches[0]?.tense||'present'),[reveal,setReveal]=useState(false),[draft,setDraft]=useState('');
 const verb=verbs.find(v=>v.infinitive===verbId)||verbs[0];
 const available=Object.keys(tenseInfo).filter(t=>getForms(verb,t));
 const current=available.includes(tense)?tense:'present',forms=getForms(verb,current);
 return <div className="study-support-body">
  <p className="english-meaning"><strong>English translation:</strong> {english}</p>
  <p><strong>Pro tip:</strong> {help.proTip}</p>
  <label htmlFor={id+'-language'}>Explanation language</label><select id={id+'-language'} value={language} onChange={e=>setLanguage(e.target.value)}><option value="both">English + Taglish</option><option value="english">English</option><option value="taglish">Taglish</option></select>
  <h4>How the expression works</h4><p><strong>{help.pattern}</strong></p>
  {language!=='english'&&<p lang="fil"><strong>Taglish:</strong> {help.taglish}</p>}
  {language!=='taglish'&&<p><strong>English:</strong> {help.explanation}</p>}
  {help.words.length>0&&<dl className="support-words">{help.words.map(([word,meaning])=><div key={word}><dt lang="es">{word}</dt><dd>{meaning}</dd></div>)}</dl>}
  <h4>How to conjugate</h4>
  <p>Choose a verb and tense, then match the subject to its form. The table is a reference, not an automatic grammatical analysis.</p>
  {help.matches.length>0?<details><summary>Possible verb-form matches in this text</summary><p>A word can have several meanings or grammatical roles. These are dictionary-form matches; use the sentence’s meaning to decide. For example, como can mean “I eat” or “as”, and fui can come from ser or ir.</p><ul>{help.matches.map(m=><li key={[m.infinitive,m.tense,m.person,m.form].join('-')}><span lang="es">{m.form} → {m.infinitive}</span> · {tenseInfo[m.tense].label} · {pronouns[m.person][0]} ({pronouns[m.person][1]})</li>)}</ul></details>:<p>No matching form from the starter verb tables was found. This does not mean the text has no verb. For a fixed expression such as gracias, there is nothing to conjugate; for other verbs, consult a fuller conjugation reference.</p>}
  <div className="support-selects"><label htmlFor={id+'-verb'}>Verb<select id={id+'-verb'} value={verbId} onChange={e=>{setVerbId(e.target.value);setTense('present');}}>{verbs.map(v=><option key={v.infinitive} value={v.infinitive}>{v.infinitive} — {v.translation}</option>)}</select></label><label htmlFor={id+'-tense'}>Tense<select id={id+'-tense'} value={current} onChange={e=>setTense(e.target.value)}>{available.map(t=><option key={t} value={t}>{tenseInfo[t].label}</option>)}</select></label></div>
  <p>{current==='present'?verb.note:tenseInfo[current].explanation}</p>
  {language!=='english'&&<p lang="fil">Sa conjugation, hanapin muna ang subject at panahon o mood. Regular present -ar: alisin ang -ar, idagdag ang -o, -as, -a, -amos, -áis, -an. Sa -er: -o, -es, -e, -emos, -éis, -en; sa -ir: -o, -es, -e, -imos, -ís, -en. Hindi susunod lahat ng irregular verbs, kaya tingnan ang table.</p>}<p>For regular present forms, remove -ar, -er, or -ir and add the subject ending. Regular -ar: -o, -as, -a, -amos, -áis, -an. Regular -er: -o, -es, -e, -emos, -éis, -en. Regular -ir: -o, -es, -e, -imos, -ís, -en. Irregular verbs require their own forms.</p>
  <div className="table-scroll"><table><caption>{verb.infinitive}: {tenseInfo[current].label}</caption><thead><tr><th>Subject</th><th>English</th><th>Form</th></tr></thead><tbody>{forms.map((form,i)=><tr key={i}><th scope="row">{pronouns[i][0]}</th><td>{pronouns[i][1]}</td><td lang="es">{form}</td></tr>)}</tbody></table></div>
  <p className="muted">Vosotros is used in much of Spain; ustedes is the usual plural you in Latin America. These starter tables do not include voseo. Gustar normally agrees with the thing liked: me gusta el café / me gustan los libros.</p>
  <h4>Remember and use it</h4><p>{help.memory}</p>{language!=='english'&&<p lang="fil">Takpan ang Spanish at gamitin ang English bilang clue. Isulat o sabihin mula sa memory, saka ikumpara. Pagkatapos, palitan ang isang detalye at bumuo ng sariling sentence.</p>}
  <label htmlFor={id+'-recall'}>Your recall or new sentence (self-check)</label><textarea id={id+'-recall'} lang="es" value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Try without looking at the Spanish above"/>
  <button type="button" className="text-button" aria-expanded={reveal} onClick={()=>setReveal(!reveal)}>{reveal?'Hide comparison model':'Show comparison model'}</button>{reveal&&<p lang="es">{spanish}</p>}
  <p className="muted">Compare meaning, person, verb form, and accents. A different sentence may be valid. This draft is not graded or saved.</p>
 </div>;
}
export function StudySupport(props){
 const [open,setOpen]=useState(false);
 return <details className="study-support" onToggle={e=>setOpen(e.currentTarget.open)}><summary>Understand and remember · translation, Taglish, conjugation</summary>{open&&<SupportBody {...props}/>}</details>;
}
