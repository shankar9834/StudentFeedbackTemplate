import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Table from './Table';
import { display } from '@mui/system';
import { position } from 'stylis';

ChartJS.register(ArcElement, Tooltip, Legend);


  

const ShowChart=({handleShowChart,ind,feedbacks,dataForChart,dataForTable})=>{

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
    </div>
    
    )
}


export default ShowChart


