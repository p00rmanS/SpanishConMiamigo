export function progressSummary(lessons,readings,progress,readingIds,now=Date.now()){
 const ids=new Set(lessons.map(l=>l.id)),validReadings=new Set(readings.map(r=>r.id));
 const completed=new Set((Array.isArray(progress?.completed)?progress.completed:[]).filter(id=>ids.has(id)));
 const read=new Set((Array.isArray(readingIds)?readingIds:[]).filter(id=>validReadings.has(id)));
 const reviews=Object.entries(progress?.reviews||{}).filter(([id,r])=>ids.has(id)&&r&&Number.isInteger(r.box)&&r.box>=0&&r.box<=5&&Number.isFinite(r.due)&&r.due>=0);
 const groups=['Beginner','Intermediate','Advanced'].map(track=>{const items=lessons.filter(l=>(l.track||'Beginner')===track);return {track,total:items.length,done:items.filter(l=>completed.has(l.id)).length};});
 return {total:ids.size,done:completed.size,percent:ids.size?Math.round(completed.size/ids.size*100):0,groups,
  readingTotal:validReadings.size,readingDone:read.size,due:reviews.filter(([,r])=>r.due<=now).map(([id])=>id),
  reviewGroups:[0,1,2,3,4,5].map(box=>({box,count:reviews.filter(([,r])=>r.box===box).length})),
  next:lessons.find(l=>!completed.has(l.id))?.id};
}
