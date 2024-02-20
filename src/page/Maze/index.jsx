import React from 'react';
import {
  LinkCTA,
  LinkKR,
  LinkENG,
} from "@/page/Hub/styles";
import AnswerModal from "@/component/AnswerModal";

export default () => { 
    return (
        <div style={{padding:'60px 0', textAlign:'center', background:'#F3F6FF'}}>
            <img src={'/image/maze/maze_pc.png'} alt='' style={{display:'block', width:'100%', maxWidth:960, margin:'0 auto 50px'}} /> 
            <AnswerModal type='maze' />
        </div>
    );
}  