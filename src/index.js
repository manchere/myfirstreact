import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

// // var styler = {
// //   backgroundColor: 'orange',
// //   color: 'white',
// //   fontFamily: 'arial'
// // }

// let skiData = {
//   total: 50,
//   powder: 20,
//   backcountry: 10,
//   goal: 10
// }

// const getPercent = decimal =>{
//   return decimal * 100 + '%'
// }

// const calcGoalProgress =(total, goal) =>{
//   return getPercent(total/goal)
// }

// class Message extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1 style ={{color: this.props.coloring}}>
//           { this.props.msg }
//         </h1>
//       </div>
//     )  
//   }
// }

// class SkiDayCounter extends React.Component{

//   render(){
//     const { total, powder, backcountry, goal } = this.props
//     return (
//       <section>
//         <div>
//           { backcountry }
//         </div>
//         <div>
//           { total }
//         </div>
//         <div>
//           { powder }
//         </div>
//       </section>
//     )
//   }
// }

// const Library  = () => {
//   return (
//     <div> 
//       Welcome to the library
//     </div>
//   )
  
// }



// render(<Message msg = "how are you" coloring = "blue" />,document.getElementById('root'))

// render(<Message msg = "this is the second message" coloring= "red"/>,document.getElementById('stem'))

// render( <SkiDayCounter total= { skiData.total } powder = { skiData.powder }

// backcountry = { skiData.backcountry } goal = { skiData.goal }/>,document.getElementById('root'))

// render( 
// <div>
//   <Library/>
//   <Library/>
// </div>
// ,document.getElementById('stem'))

const User = ({ name, lesson, id}) => {
  return (
  <section>
    <p>{ name }</p>
    <p>{ lesson }</p>
    <p>{ id }</p>
  </section>
  )
}

let Userlist = [
  {"name": "John Cena", "Lesson":"Ernest Senpai","id":260},
  {"name": "Jerome Boabeng", "Lesson":"Eric Ries","id":293},
  {"name": "George Getsrtrom", "Lesson":"John Stewart","id":260},
]

const Instructor = ({users}) => {
  return (
  <div>
    {users.map((user, i) => <User key={i} name = {user.name} lesson = {user.Lesson} id = {user.id} /> ) } 
  </div>
  )
}

class Instructor extends React.Component {
  render() {
    const { books } = this.props.books
    return (
      <div>
        {users.map((user, i) => <User key={i} name = {user.name} lesson = {user.Lesson} id = {user.id} /> ) } 
      </div>
      )
  }
}

render(<Instructor users = { Userlist }/>,document.getElementById( 'root' ))