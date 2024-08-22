import React from 'react'
import Header from './Header'
import TopCards from './TopCards'
import BarChart from './BarChart'
import RecentOrders from './RecentOrders'

const Dashboard = () => {
  return (
    <main className='bg-gray-100 min-h-screen'>
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  )
}

export default Dashboard