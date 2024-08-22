
import './style.scss';
import {TMatch} from '@core/services/Table';
import StatusBar from './status-bar';
import StatusRightBar from './status-bar/right';
import StatusBlankBar from './status-bar/blank';
import StatusRightBlankBar from './status-bar/rightBlank';

export default ({match, home, away, text}: { match: TMatch, home: number, away: number, text: String }) => {
  return (
    <div className="status-bars flex flex-between items-center">
      {match.isLive ? (<StatusBar match={match} home={home} away={away} />) : (<StatusBlankBar match={match} home={home} away={away} />)}

      <span className='possession'>{text}
      </span>
      {match.isLive ? (<StatusRightBar match={match} home={home} away={away} />) : (<StatusRightBlankBar match={match} home={home} away={away} />)}

    </div>
  );
};

