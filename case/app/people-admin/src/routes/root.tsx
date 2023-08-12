import { Outlet } from 'react-router-dom';
import Layout from './Shared/layout';

const Root = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default Root;