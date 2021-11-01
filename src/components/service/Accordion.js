import React, { useState } from 'react';
import { Data, Data2 } from './Data';
import { IconContext } from 'react-icons';
import {FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
      
    }

    setClicked(index);
  };

  const toggle2 = index => {
    if (clicked2 === index) {
      //if clicked question is already active, then close it
      return setClicked2(null);

    }

    setClicked2(index);
  };
  
  

  return (
    <IconContext.Provider value={{ color: '#fff', size: '25px' }}>
   <div id="accordion" className="myaccordion" >
<div className="row">
 
    <div className="column">
          {Data.map((item, index) => {
            return (
              <>
                <div className="panel-heading" >
    <div className="panel-header"  onClick={() => toggle(index)} key={index} >
    <h4 className="panel-title" >
    {clicked === index ? <FiMinusCircle /> : <FiPlusCircle />}  
    &nbsp; {item.question}
    </h4>              
    </div>
    <div>
      <div className="panel-body">
{clicked === index ? (
  <p>
<hr style={{borderBlockColor:'#fff', marginTop:'-10px', textAlign:'center'}}/>
 {item.answer}
 </p>
   ): 
   null
   }
   </div>
    </div>     
    </div>
              </>
            );
          })}
    </div>


<div className='column'>
{Data2.map((item, index) => {
            return (
              <>
                <div className="panel-heading" >
    <div className="panel-header"  onClick={() => toggle2(index)} key={index} >
    <h4 className="panel-title" >
    {clicked2 === index ? <FiMinusCircle /> : <FiPlusCircle />}  
    &nbsp; {item.question}
    </h4>              
    </div>
    <div>
      <div className="panel-body">
{clicked2 === index ? (
  <p>
<hr style={{borderBlockColor:'#fff', marginTop:'-10px', textAlign:'center'}}/>
 {item.answer}
 </p>
   ): 
   null
   }
   </div>
    </div>     
    </div>
              </>
            );
          })}
    </div>
    {/*end of column2*/}
    </div>
</div>

    </IconContext.Provider>
  );
};

export default Accordion;