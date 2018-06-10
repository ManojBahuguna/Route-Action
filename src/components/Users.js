import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
  },
  {
    title: 'Company',
    dataIndex: 'company_name',
  },
  {
    title: 'City',
    dataIndex: 'city',
  }
];

const Users = ({ users }) => (
  <Table rowKey="id" pagination={{ pageSize: 25 }} columns={columns} dataSource={users} />
);

export default Users;