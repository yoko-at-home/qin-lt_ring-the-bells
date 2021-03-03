import React from 'react';
import { useCountUp } from 'react-countup';
import { Link } from 'react-scroll';
import './CountDown.styles.css';

const CountDown = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 0,
    end: 8364,
    delay: 1000,
    duration: 5,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
    <div className='section1__counter-container'>
      <div id='countdown'>
        &nbsp;
        <div></div>
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
        &nbsp;
        <br />
      </div>
      <span>今を遡ること</span>
      <div className='tag highlight' dataTarget='8364'>
        {countUp}
      </div>
      <Link
        activeClass='active'
        to='section2'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <span>年</span>
      </Link>
      <button className='button' onClick={() => update(23)}></button>
      <style jsx>{`
        .button {
          width: 15px;
          height:15px;
          background-color: orange;
          box-shadow:0px 0px 15px #f5eddc, 0px 0px 15px #f5eddc, 0px 0px 15px #e6f704;
          border-radius:50%;
          outline:none;
          border: 0;
          margin-left: 15px;
        }
        }
      `}</style>
    </div>
  );
};

export default CountDown;