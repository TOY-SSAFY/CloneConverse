import React from 'react';
import { WishListContent } from '../components/templates';
import Container from '@material-ui/core/Container';

const WishListPage = () => {
  return (
    <>
      <Container maxWidth='xl' style={{ flexDirection: 'column' }}>
        <WishListContent />
      </Container>
    </>
  );
};

export default WishListPage;
