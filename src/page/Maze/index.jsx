import React from 'react';
import AnswerModal from "@/component/AnswerModal";

export default () => { 
    return (
        <div style={{padding:'60px 0', background:'#F3F6FF', textAlign:'center'}}>
            <div style={{margin:'0 auto', maxWidth:'880px', width:'100%', paddingBottom:'50px'}}>
                <img src={'/image/maze/maze_pc.png'} alt='' style={{display:'block', width:'calc(100% + 9.2vw)'}} /> 
            </div>
            <AnswerModal type='maze' />
        </div>
    );
}  