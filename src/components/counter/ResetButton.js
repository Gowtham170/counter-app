import './counter.css';

const ResetButton = ({ resetCount }) => {

   return(
      <div>
        <button className='btn' 
                style={{backgroundColor: "GrayText", 
                borderColor: "GrayText"}}
                onClick={resetCount}>
            Reset
        </button>
      </div>
    );
}

export default ResetButton;