import React, { useState } from "react";
import { SidebarItems } from "./SidebarContent.js";
import { HideIcon, Hr, ShowIcon, SidebarContainer, SidebarHeader, SidebarItem, SubItem, SubItemsContainer } from "./SidebarStyle.js";
import {TbPlus , TbMinus} from 'react-icons/tb';
import { Link } from "react-router-dom";
export default function Sidebar() {
    const linkStyle = {textDecoration:"none"};
    const [showSidebar, setShowSidebar] = useState(true);
    const [activeSubItems, setActiveSubItems] = useState([]);
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
    const toggleSubItems = (itemIndex) => {
      setActiveSubItems((prevState) =>
        prevState.includes(itemIndex)
          ? prevState.filter((index) => index !== itemIndex)
          : [...prevState, itemIndex]
      );
    };
    const ArrowIcon = showSidebar ? HideIcon : ShowIcon;
    return (
      <>
      
      <SidebarContainer showSidebar={showSidebar}>
        <SidebarHeader>
        <ArrowIcon onClick={toggleSidebar} />
        </SidebarHeader>
        {SidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            
            <Link to ={item.linkTo}>

            
            <SidebarItem
              onClick={() => item.subItems && toggleSubItems(index)}
            >
               {item.subItems && (activeSubItems.includes(index) ? <TbMinus/> : <TbPlus/>)}{item.title}
            </SidebarItem>
            </Link>
            {item.subItems && activeSubItems.includes(index) && (
              <SubItemsContainer>
                {item.subItems.map((subItem, subIndex) => (
                  <Link key={subIndex} to={subItem.linkTo} style={linkStyle}>
                  <SubItem >{subItem.title}</SubItem></Link>
                ))}
              </SubItemsContainer>
            )}
            <Hr />
          </React.Fragment>
        ))}
        {/* <SidebarItem onClick={toggleSubItems}>
          Candidates
        </SidebarItem>
        {showSubItems && (
          <SubItemsContainer>
            <SubItem>Sub Item 1</SubItem>
            <SubItem>Sub Item 2</SubItem>
          </SubItemsContainer>
        )}
        <Hr/>
        <SidebarItem>
          Trainings
        </SidebarItem><Hr/>
        <SidebarItem onClick={toggleSubItems}>
          Exams
        </SidebarItem>
        {showSubItems && (
          <SubItemsContainer>
            <SubItem>Sub Item 1</SubItem>
            <SubItem>Sub Item 2</SubItem>
          </SubItemsContainer>
        )}<Hr/>
        <SidebarItem>
          Qualifications
        </SidebarItem><Hr/>
        <SidebarItem>
          Firms
        </SidebarItem><Hr/>
        <SidebarItem>
          Rooms
        </SidebarItem><Hr/>
        <SidebarItem>
          Users
        </SidebarItem><Hr/>
        <SidebarItem>
          Reports
        </SidebarItem><Hr/> */}
      </SidebarContainer>
      </>
    );
  };
  
