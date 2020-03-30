import React from 'react'
import ReactDOM from 'react-dom'

// var styler = {
//   backgroundColor: 'orange',
//   color: 'white',
//   fontFamily: 'arial'
// }

class Message extends React.Component{
  render(){
    return (
      <div>
        <h1 style ={{color: this.props.coloring}}>
          { this.props.msg }
        </h1>
      </div>
    )  
  }
}

class SkiDayCounter extends React.Component{

  getPercent = decimal =>{
    return decimal * 100 + '%'
  }

  calcGoalProgress =(total, goal) =>{
    return this.getPercent(total/goal)
  }

  render(){
    const { total, powder, backcountry, goal } = this.props
    return (
      <section>
        <div>
          { backcountry }
        </div>
        <div>
          { total }
        </div>
        <div>
          { powder }
        </div>
      </section>
    )
  }
}

// const title = React.createElement( 
//   'h1',t
//   {id: 'title',className:'header', style: styler},
//   'Hello World'
// )

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 10
}

ReactDOM.render(<Message msg = "how are you" coloring = "blue" />,document.getElementById('root'))

ReactDOM.render(<Message msg = "this is the second message" coloring= "red"/>,document.getElementById('stem'))

ReactDOM.render( <SkiDayCounter total= { skiData.total } powder = { skiData.powder }
backcountry = { skiData.backcountry } goal = { skiData.goal }/>,document.getElementById('root'))

