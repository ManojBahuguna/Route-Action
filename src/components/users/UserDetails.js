import React from 'react';
import { Link } from 'react-router-dom';
import Sider from 'antd/lib/layout/Sider';
import { Button, Col, Row } from 'antd';

const styles = {
  sider: {
    backgroundColor: '#fff',
    boxShadow: '-0.1em 0 0.5em -0.3em'
  },
  siderHeaderItem: {
    display: 'flex'
  },
  siderItem: {
    padding: '1em',
    borderBottom: '1px solid #eee',
  },
  siderTitle: {
    flexGrow: 1,
    margin: 0
  }
};

const UserDetails = ({ user = {} }) => {
  const isCollapsed = user.id === undefined;

  const { first_name, last_name, company_name, city, age, email, web } = user;

  return (
    <Sider collapsed={isCollapsed} style={styles.sider} collapsedWidth={0} width={300}>
      <div style={{ ...styles.siderItem, ...styles.siderHeaderItem }}>
        <h2 style={styles.siderTitle}>User Details</h2>
        <Link to="/"><Button type="danger" shape="circle" icon="close" /></Link>
      </div>
      <Row style={styles.siderItem}>
        <Col span={12}><strong>Name</strong></Col>
        <Col span={12}>{first_name} {last_name}</Col>
      </Row>
      <Row style={styles.siderItem}>
        <Col span={12}><strong>Company</strong></Col>
        <Col span={12}>{company_name}</Col>
      </Row>
      <Row style={styles.siderItem}>
        <Col span={12}><strong>City</strong></Col>
        <Col span={12}>{city}</Col>
      </Row>
      <Row style={styles.siderItem}>
        <Col span={12}><strong>Age</strong></Col>
        <Col span={12}>{age}</Col>
      </Row>
      <Row style={styles.siderItem}>
        <Col span={12}><strong>Email</strong></Col>
        <Col span={12}>{email}</Col>
      </Row>
      <Row style={styles.siderItem}>
        <Col span={12}><strong>Web</strong></Col>
        <Col span={12}>{web}</Col>
      </Row>
    </Sider>
  )
};

export default UserDetails;