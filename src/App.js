import React, { Component } from "react";

export class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     taskName:'',
     taskList:[],
     search:'',
     filtered:[]
  }
}

handleTask=()=> {
  this.state.taskList.push(this.state.taskName)
  this.setState({taskName:''})
 // alert(this.state.taskList)
}


onDelete=(index)=>{

 this.state.taskList.splice(index,1)
this.setState({taskList:this.state.taskList})

}

onChange=(e)=>{

  this.setState({search:e.target.value})


}




  render() {
   
    

    return (
      <div
        style={{
          backgroundColor: "#404146",
          height: "100vh",
          justifyContent: "center",
          margin: 0,
          padding: 100,
          paddingTop: 50,
        }}
      >
        <div style={{ backgroundColor: "red", display: "flex" }}>
          <div style={{ backgroundColor: "#F9D423", flex: 1 }}>
            <h1 style={{ textAlign: "center", fontSize: 45 }}>
              React To-do App
            </h1>
            <h2 style={{ textAlign: "center", marginTop: -20 }}>
              Enhance Your Productivity
            </h2>
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: "#FF4E50" }}>
          <div
            style={{
              justifyContent: "center",
              flex: 1,
              alignItems: "center",
              display: "flex",
              padding: 13,
            }}
          >
            <input
value={this.state.taskName}
onChange={event=>{this.setState({taskName:event.target.value})
console.log(event)
}}
              style={{
                backgroundColor: "black",
                color: "white",
                width: "45%",
                height: 30,
                textAlign: "center",
                fontSize: 20,
              }}
              type="text"
              placeholder="create new work item"
            />
          </div>
          <div style={{ justifyContent: "center", display: "flex", width:"50" ,paddingBottom:5 }}>
            
            <button 
            onClick={this.handleTask}
            
            style={{ backgroundColor: "#1EC0FF" ,paddingLeft:5,paddingRight:5}}>
              <h1 style={{fontSize:18}}>Enter New Item</h1>
            </button>
          </div>
          <div
            style={{
              justifyContent: "center",
              flex: 1,
              alignItems: "center",
              display: "flex",
              padding: 13,
            }}
          >
            <input

value={this.state.search}
onChange={this.onChange}

style={{
                backgroundColor: "black",
                color: "white",
                width: "45%",
                height: 30,
                textAlign: "center",
                fontSize: 20,
              }}
              type="text"
              placeholder="filter list"
            />
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginLeft:"14%",marginRight:"7%", marginBottom:0,padding:0,height:50,alignItems:"center"}}>
           <h2>#</h2> 
           <h2 style={{marginRight:"53%"}}> Task</h2>
<h2>(X)</h2>


          </div>
          


          {


this.state.taskList.map((item,index)=>{
  return <div key={index} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginLeft:"14%",marginRight:"7%", marginBottom:0,padding:0,height:50,alignItems:"center"}}>
  <p>{index+1}</p> 
<p style={{marginRight:"53%", fontSize:20}}> {item}</p>
<button onClick={()=>this.onDelete(index)} style={{width:29,backgroundColor:"yellow"}}>X</button>


 </div>
})

          }






        </div>
      </div>
    );
  }
}

export default App;
