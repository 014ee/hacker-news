import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../Container';
import { IconGoBack } from '../../Assets/Icons';
import { HeaderBlock, HeaderTop } from './Styles';

const HeaderDetail = function ({ title }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <HeaderBlock>
      <Container>
        <HeaderTop>
          <span>
            <button onClick={goBack}>
              <IconGoBack />
            </button>
          </span>
          <h2 className='center'>{title}</h2>
        </HeaderTop>
      </Container>
    </HeaderBlock>
  );
};

export default HeaderDetail;
