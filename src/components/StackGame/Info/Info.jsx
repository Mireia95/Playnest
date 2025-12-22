import './Info.css';

const Info = ({ mode }) => {
  return mode === 'init' ? (
    <div className='stackgame-title'>
      <h2> STACK GAME </h2>
      <h4> Click (or press the spacebar) to place the block</h4>
    </div>
  ) : null;
};

export default Info;
