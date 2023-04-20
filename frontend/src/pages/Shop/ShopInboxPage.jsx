import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import DashboardMessages from "../../components/Shop/DashboardMessages";

const ShopInboxPage = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSideBar active={8} />
      </div>
       <DashboardMessages />
    </div>
  </div>
  )
}

export default ShopInboxPage