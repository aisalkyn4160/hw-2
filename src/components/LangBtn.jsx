import './LangBtn.css'

const LangBtn = (props) => {
    return (
        <select className='lang-btn'>
          <option>{props.opt1}</option>
          <option>{props.opt2}</option>
        </select>
    )
}

export default LangBtn
