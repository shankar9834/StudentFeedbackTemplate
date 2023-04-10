import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Table from './Table';
import { display } from '@mui/system';
import { position } from 'stylis';
import { useState } from 'react';
import { WindowSharp } from '@mui/icons-material';

ChartJS.register(ArcElement, Tooltip, Legend);


  

const ShowChart=({handleShowChart,ind,feedbacks,dataForChart,dataForTable})=>{

  const [isActiveForm,setIsActiveForm]=useState(feedbacks[ind].isActive)

    const btnStyles={
        fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#333',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    marginTop: '40px',
    marginLeft:'350px',
    position:'relative',
    top:'-300px',
    left:'400px'
    }
  
    const closeBtnStyles={
      fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#333',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    marginTop: '40px',
    marginLeft:'350px',
    position:'relative',
    top:'-300px',
    left:'100px'

    }

    const handleCloseForm=()=>{

      // console.log(feedbacks[ind]._id)

       const sendReq=async()=>{
           const res=await fetch(`http://localhost:3005/feedback/active/${feedbacks[ind]._id}`)
           
           if(res.ok)
           {
             feedbacks[ind].isActive=!feedbacks[ind].isActive;
             setIsActiveForm(feedbacks[ind].isActive);

             window.location.href='/myFeedbacks'
            // console.log(feedbacks[ind].isActive)
           }
           

       }

       sendReq();

    } 
    

    //console.log(dataForChart);
     var agree=dataForChart.agree
     var disagree=dataForChart.disagree
     var stronglyAgree=dataForChart.stronglyAgree
     var stronglyDisagree=dataForChart.stronglyDisagree
     

    const data = {
        labels: ['Agree','Disagree', 'Strongly Agree', 'Strogly Disagree'],
        datasets: [
          {
            label: 'No of students',
            data: [agree, disagree, stronglyAgree, stronglyDisagree],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
              
            ],
            borderWidth: 1,
          },
        ],
      };
   
  
    const handleBtn=()=>{

       // console.log('clickkinng gg', ind)
        handleShowChart();
    }
   // console.log('showing chart for', ind)
    return (
      <div style={{marginLeft:'300px'}}>
        <div style={{width:'400px' , height:'400px',marginLeft:"260px",marginTop:'50px'}}>
    <Pie data={data} />
    
   
    </div>
    <div style={{width:'500px',marginLeft:'230px'}}>
      <Table data={dataForTable}></Table>

    </div>
    <button onClick={handleBtn} style={btnStyles}>go back</button>
    {isActiveForm&&<button onClick={handleCloseForm} style={closeBtnStyles}>Close Form</button>}
    {!isActiveForm&&<button onClick={handleCloseForm} style={closeBtnStyles}>Open Form</button>}
    {!isActiveForm&&<p style={{marginLeft:'100px',marginBottom:'100px'}}>summary:- {feedbacks[ind].summary}</p>}
    </div>
    
    )
}


export default ShowChart


