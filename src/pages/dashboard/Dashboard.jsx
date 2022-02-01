import React from 'react'
import EventCard from '../../components/calendar/EventCard'
import Navbar from '../../components/navbar/Navbar'
import TaskCard from '../../components/tasks/TaskCard'
import './dashboard.scss'

export default function Dashboard() {
  return (
    <div className="flex">
      <Navbar />
      <div>
        <div>
          <h1>Bonjour John Doe</h1>
          <span>date</span>
        </div>
        <div>
          <section className="dashboard-task">
            <h2>Mes tâches</h2>
            <TaskCard />
          </section>
          <section className="dashboard-event">
            <h2>Mes évnèments</h2>
            <EventCard />
          </section>
        </div>
      </div>
    </div>
  )
}
