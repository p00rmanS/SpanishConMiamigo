import {readPractice} from './practice-state';
import {grammarLab} from './grammar-lab-data';
import {callSimulations} from './call-simulations';
import {useState} from 'react';
import {readings} from './reading-data';
import {progressSummary} from './progress-summary';
import './study-support.css';
function savedReadings(){try{const value=JSON.parse(localStorage.getItem('espanol-readings-v1'));return Array.isArray(value)?value:[];}catch{return [];}}
export function ProgressDashboard({lessons,progress,onOpen,now}){
 const [practice]=useState(readPractice);
 const [readingIds]=useState(savedReadings),[filter,setFilter]=useState('All');
 const data=progressSummary(lessons,readings,progress,readingIds,now);
 const groups=data.groups.filter(g=>filter==='All'||g.track===filter);
 return <section className="progress-dashboard" aria-labelledby="progress-title"><h2 id="progress-title">Your progress, at your pace</h2><p>Completion records your practice, not a fluency score. Your progress stays in this browser; other devices have separate records.</p>
 <div className="progress-stats"><div><strong>{data.done} / {data.total}</strong><span>lessons completed</span></div><div><strong>{data.percent}%</strong><span>of the lesson library</span></div><div><strong>{data.due.length}</strong><span>reviews ready</span></div><div><strong>{data.readingDone} / {data.readingTotal}</strong><span>readings completed</span></div></div>
 {!data.done&&!data.readingDone&&!practice.grammar.length&&!practice.simulations.length&&<p className="teaching-note">Your chart starts at zero. Finish a guided lesson or pass a reading quiz and mark the reading complete to begin filling it.</p>}
 <h3>Practice lab</h3><p>{practice.grammar.length} / {grammarLab.length} grammar lessons · {practice.simulations.length} / {callSimulations.length} customer calls practiced</p><progress aria-label="Practice lab completion" max={grammarLab.length+callSimulations.length} value={practice.grammar.length+practice.simulations.length}/><h3>Lesson completion by level</h3><label htmlFor="progress-level">Show level</label><select id="progress-level" value={filter} onChange={e=>setFilter(e.target.value)}>{['All','Beginner','Intermediate','Advanced'].map(v=><option key={v}>{v}</option>)}</select>
 <div className="completion-chart" role="group" aria-label="Lesson completion chart">{groups.map(g=><div className="completion-row" key={g.track}><div><strong>{g.track}</strong><span>{g.done} of {g.total} · {g.total?Math.round(g.done/g.total*100):0}%</span></div><progress aria-label={g.track+' lessons completed'} max={g.total||1} value={g.done}/></div>)}</div>
 <h3>Review practice distribution</h3><p>Each scheduled lesson appears once in its current review stage. Stage 0 needs another try; higher stages have longer review intervals. No past activity dates are inferred.</p>
 <div className="review-chart" role="group" aria-label="Lessons by review stage">{data.reviewGroups.map(g=><div key={g.box}><strong>{g.count}</strong><progress aria-label={'Review stage '+g.box} max={Math.max(1,...data.reviewGroups.map(r=>r.count))} value={g.count}/><span>Stage {g.box}</span></div>)}</div>
 <div className="progress-actions">{data.next&&<button className="primary" onClick={()=>onOpen(lessons.findIndex(l=>l.id===data.next))}>Continue an unfinished lesson</button>}{data.due.length>0&&<button className="secondary" onClick={()=>onOpen(lessons.findIndex(l=>l.id===data.due[0]),true)}>Practice a due review</button>}</div>
 <p className="muted">Retaking a completed lesson does not increase its completion count. Clearing browser storage removes local records.</p></section>;
}
