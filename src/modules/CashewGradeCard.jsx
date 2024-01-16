import React from "react"

 function WholesGradeCard (props){
    const card={
        height:"14rem",
        width:"15.3rem",
        display:"flex",
        flexDirection:"column",
        boxSizing:"border-box",
      };

      const mystyle = {
        height:"10vh",
        width:"100%",
        color: "red",
        padding: "4px",
        fontFamily: "Arial",
        display:"flex",
        alignItem:"center",
        justifyContent:"center",
      };
      
    return (        
            <div  style={card}>
                {props.path}
                <h4 style={mystyle}>{props.name}</h4>
            </div>        
    )
}


const mystyle2 = {
    width:"82%",
    color: "red",
    padding: "4px",
    fontFamily: "Arial",
    display:"flex",
    alignItem:"center",
    justifyContent:"center",
    marginLeft:"20px"
  };

 function PiecesGradeCard (props){
    return (       
            <div className="Card">
                {props.path}
                <h4 style={mystyle2}>{props.name}</h4>
            </div>       
    )
}

export {
    WholesGradeCard,
    PiecesGradeCard,
}