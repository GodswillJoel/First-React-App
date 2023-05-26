import { useState } from "react";
import Header from './components/Header'
import Footer from "./components/Footer";
import About from "./components/About";
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import {BrowserRouter as Router, Route} from  'react-router-dom'



function App() {
  const [showAddTask, setShowAddTask]  = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "1st feb at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "2nd feb at 1:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "food shopping",
      day: "1st feb at 1:30pm",
      reminder: false,
    },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    
    const newTask = { id, ...task} 
      setTasks([ ...tasks, newTask])
  }

      // delete function

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


      // toggle reminder function


  const toggleReminder = (id) => {
    console.log('clicked')
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }    

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} /> : 'No task to show'}
        <Footer />
      </div>
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
