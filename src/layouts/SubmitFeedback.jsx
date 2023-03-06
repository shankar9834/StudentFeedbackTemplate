import "./styles/submitFeedback.css"
import {useAuthContext} from '../hooks/useAuthContext'

const optionList=["Agree","Strongly Agree","Disagree","Strongly Disagree"]

const answers=[]

const SubmitFeedback=({feedbacks,val,setViewSubmit,setToggleView})=>{
   
     const {user,dispatchs}=useAuthContext();

    for(let que of feedbacks[val-1].question)
    {
        const obj={
            question:que._id,
            selectedOption:"Agree"
        }
        answers.push(obj)
    }
   
  //  console.log(answers)

    const handleOptionChange=(e)=>{

       // console.dir(e.target.id);
         
       answers[e.target.id].selectedOption=e.target.value;
       
      // console.log(answers)

    }

    const handleSubmitFeedback=()=>{

           const data={
            studentId:user.student._id,
            feedbackId:feedbacks[val-1]._id,
            answers:answers
           }
         
           // console.log(data)

          const sendSubmitFeedback=async()=>{
             
            const res=await fetch('http://localhost:3005/feedback/submitFeedback',{
                method:'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                  }
            })
            const getData=await res.json()
           // console.log(getData)

          }
        
          sendSubmitFeedback();

         setViewSubmit(false)
         setToggleView(false)

        //chnage below method of redirect and add context for feedbacks  
         window.location.href='/'
         
    }

    const handleGOBack=()=>
    {
        setViewSubmit(false);
    }
    
    //console.log(answers)
  
    return (
        <div className="viewFeedbacks">
            <h1>Submit Feedback</h1>
            <div className="feedback" style={{width:"700px",height:"900px",marginLeft:"420px"}}>
            <h2>Subject Name: {feedbacks[val-1].subject}</h2>   
                <h2>Teacher Name:{feedbacks[val-1].teacher.name}</h2>   
                <div><ul>
                    {feedbacks[val-1].question.map((ele,ind)=>{
                        return (<div className="quesInp" key={ind}>
                        <input type="text" value={ele.question}></input>
                        <div>
                <select name="options" className="selectOpt" id={ind} onChange={handleOptionChange}>
                    <option value={optionList[0]} >{optionList[0]}</option>
                    <option value={optionList[1]} >{optionList[1]}</option>
                    <option value={optionList[2]} >{optionList[2]}</option>
                    <option value={optionList[3]} >{optionList[3]}</option>
                </select>
            </div>
                    </div>)
                    })}
                    </ul>
                </div>
                <button onClick={handleSubmitFeedback}>Submit </button>
                <button onClick={handleGOBack}>go back </button>

            </div>
        </div> 
    )
}


export default SubmitFeedback