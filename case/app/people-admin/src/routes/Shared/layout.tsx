import React from 'react'
import Navbar from '../../components/Navbar';

type Props = {
  children: React.ReactNode
}

const Layout = ({children} : Props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
    <Navbar />
    <div style={{height: '100%', paddingRight: '24px', paddingLeft: '24px'}}>
      {children}
    </div>
    </div>
  );
};

export default Layout;