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
          isClicked : props.click
        }
    }
    
    
      function allOption(){
          const Options=[]
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
            return option.id===id ? {...option,isSelected: !option.isSelected} : {...option,isSelected: false}
          })
        })
      }
    
      function change(){
        setOptions(prevOption=>{
          return prevOption.map((option)=>{
            return {...option,isClicked: true}
          })
        })
      }
    
      const optionEle=options.map(op=>{
        return (
            <Option
               key={op.id}
               value={op.value}
               isTrue={op.isTrue}
               isClicked={op.isClicked}
               isSelected={op.isSelected}
               Select={()=>toggle(op.id)}
            />
        )
      })
     
      // console.log(options)
    return (
        <main>
            <h1><span dangerouslySetInnerHTML={{__html: props.title}}/></h1>
            {optionEle}
            
        </main>
    )
}