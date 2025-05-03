import React from 'react'
import { Outlet } from 'react-router-dom'
import background from '/assets/imgs/background.png'
import { Col, Row } from 'antd'

export default function IdentityLayout() {
  return (
    <Row className='h-svh w-full'>
      <Col span={12}>
        <div className="grid place-content-center h-full">
          <Outlet />
        </div>
      </Col>
      <Col span={12}>
        <img src={background} alt="background" className='h-full object-cover' />
      </Col>
    </Row>
  )
}
