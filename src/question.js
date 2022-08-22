import React from "react";
import {nanoid} from "nanoid";
import Option from "./option";


export default function Question(props){
    const [options,setOptions]=React.useState(allOption())
    
   
    function genOption(val){
        return {
          id: nanoid(),
          value: val,
          isSelected: false,
          isTrue: false,
        }
    }
    function allOption(){
        let Options=[]
        Options.push(genOption(props.cans));
        Options.push(genOption(props.ians[0]));
        Options.push(genOption(props.ians[1]));
        Options.push(genOption(props.ians[2]));
        Options[0].isTrue=true;
        return Options.sort(()=>Math.random()-0.5);
      }
       
      function toggle(id){
        setOptions(prevOption=>{
          return prevOption.map((option)=>{
            return !props.click ?
             option.id===id ? option.isTrue ? {...option,isSelected: !option.isSelected,sco: 1-option.sco} :
             {...option,isSelected: !option.isSelected} 
             : 
             {...option,isSelected: false,sco: 0}
             : 
             option
             
            })
          })
      
      }
     
      
    
      const optionEle=options.map(op=>{
        return (
            <Option
               key={op.id}
               value={op.value}
               isTrue={op.isTrue}
               isClicked={props.click}
               isSelected={op.isSelected}
               Select={()=>toggle(op.id)}
               score={props.score}
               setScore={props.setScore}
            />
        )
      })
     
    
    return (
        <main className="questions">
            <h2 className="question"><span dangerouslySetInnerHTML={{__html: props.title}}/></h2>
            {optionEle}
            <div className="line"></div>
        </main>
    )
}