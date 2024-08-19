'use client'
import { useState } from 'react'

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const [newTaskName, setNewTaskName] = useState('')
  const [showCompleted, setShowCompleted] = useState(false)

  // Adicioanar Novas Tarefas
  function HandleAddTask(){
    if (newTaskName === '') 
      return

    setTasks([...tasks, { name: newTaskName, isCompleted: false }])
    setNewTaskName('')
  }

  // Filtrar Tarefas de acordo com Status Conluída ou Não
  const tasksFilter = showCompleted ? tasks.filter(task => task.isCompleted) : tasks

  // Alterar Status da Tarefa
  function funcTaskStatus(index){
    const newUpdatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    )
    setTasks(newUpdatedTasks)
  }
  

  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <br></br>
    
      <input
          placeholder="Adicionar Nova Tarefa"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      <button onClick={HandleAddTask}>Adicionar Tarefa</button>

      <div>
        <button onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? 'Mostrar Todas as Tarefas' : 'Mostrar Tarefas Concluídas'}
        </button>
      </div>

      <ul>
        {tasksFilter.map((task, idx) => (
          <li>
              {`${task.name}     `}
            <button onClick={() => funcTaskStatus(idx)}>
              {task.isCompleted === true ? '  Marcar como Não Concluída' : '  Marcar como Concluída'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}