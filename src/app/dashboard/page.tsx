import React from 'react'
import { Metadata } from 'next'
import { Button } from 'antd'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Dashboard() {
  return (
    <div>
      <div>path: app / dashboard / page.js，测试 layout、template</div>
      <Button type="primary">button</Button>
    </div>
  )
}
