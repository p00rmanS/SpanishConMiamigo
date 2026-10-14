import { PracticeLab } from '../PracticeLab.jsx';

export function PracticePage() {
  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Practice lab</p>
        <h1>Build it. Say it. Use it.</h1>
        <p className="lead">
          Targeted conjugation drills and scripted customer-call simulations, with honest feedback.
        </p>
      </header>
      <PracticeLab />
    </div>
  );
}
