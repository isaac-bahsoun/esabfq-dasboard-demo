import styled from "styled-components";
import { RiLogoutCircleLine } from "react-icons/ri";

export const TopBarContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #81bece;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoImg = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #012e4a;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoutIcon = styled(RiLogoutCircleLine)`
  fill: #e8ede7;
  cursor: pointer;
  font-size: 1.25rem;
  margin-right: 00.75rem;

  :hover {
    fill: #012e4a;
  }
`;

export const Username = styled.span`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #e8ede7;
  :hover {
    color: #012e4a;
  }
`;
