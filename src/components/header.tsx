import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <img src='/images/symbol_logo.png' />
        <span>Nickname</span>
      </HeaderContainer>
    </header>
  );
};

export default Header;
