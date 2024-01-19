import React, {useState} from "react"

const Eightball = ({answers}) => {
    const [answer, setAnswer] = useState({msg:"click to begin", color: ""})
    const click = () => {
        let randomAnswer = Math.floor(Math.random() * answers.length)
        setAnswer(answers[randomAnswer])
    }
    return (
        <div>
            <div className="Circle" style={{backgroundColor:answer.color}} onClick={ click }>
                <h3 className="message"> {answer.msg} </h3>
            </div>
        </div>
    )
}


export default Eightball

