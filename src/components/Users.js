import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { Table, Layout, Card } from 'antd';
import UserDetails from './users/UserDetails';
const { Content } = Layout;

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

const findByKeyInArrayOfObjects = function (array, value, key = 'id') {
  return array.find(item => {
    return item[key] === value;
  })
};

const Users = ({ users, history }) => {
  const onRow = user => ({
    onClick: () => {
      history.push(`/${user.id}`);
    }
  });

  return (
    <Layout>

      <Content>
        <Card>
          <Table onRow={onRow} rowKey="id" pagination={{ pageSize: 25 }} columns={columns} dataSource={users} />
        </Card>
      </Content>

      <Route
        path="/:id?"
        render={({ match }) => {
          const userId = Number(match.params.id);
          const user = userId !== undefined ? findByKeyInArrayOfObjects(users, userId) : {};
          return <UserDetails user={user} />
        }}
      />

    </Layout>
  );
}

export default withRouter(Users);