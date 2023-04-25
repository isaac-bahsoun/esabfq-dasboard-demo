import styled from "styled-components";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 12rem;
  min-height: calc(100vh - 6.5rem);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${({ showSidebar }) => (showSidebar ? "0" : "-8rem")};
  min-width: ${({ showSidebar }) => (showSidebar ? "10rem" : "10rem")};
`;
export const SidebarHeader = styled.h3`
  color: #012e4a;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Hr = styled.div`
  height: 0;
  width: calc(100% - 2rem);
  border: 1px solid #012e4a;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const SidebarItem = styled.span`
  font-weight: bold;
  color: #036280;
  display: flex;
  align-items: center;

  cursor: pointer;
  :hover {
    color: #012e4a;
  }
`;

export const HideIcon = styled(FiArrowLeftCircle)`
  font-size: 2rem;
  cursor: pointer;
  color: #012e4a;
  :hover {
    color: #036280;
  }
`;
export const ShowIcon = styled(FiArrowRightCircle)`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: calc(50vh - 4rem);
  transform: translateY(-50%);
  right: ${({ showSidebar }) => (showSidebar ? "-2rem" : "0")}!important;
  transition: right 0.3s ease-in-out;
  color: #012e4a;
  :hover {
    color: #036280;
  }
`;

export const SubItemsContainer = styled.div`
  margin-left: 1.25rem;
`;

export const SubItem = styled.div`
  /* font-weight: bold; */
  color: #036280;
  margin-top: 0.5rem;
  cursor: pointer;
  :hover {
    color: #012e4a;
  }
`;
