import './Level.css';

const Level = ({ level, mode }) => {
  console.log(level);
  return mode !== 'init' ? <h4 className='stackGameLevel'> {level}</h4> : null;
};

export default Level;
