import React from 'react'
import Logo from '../../elements/Logo.jsx'
import {LogoutIcon,RightSection,TopBarContainer,Username} from "./TopbarStyle.js"


export default function TopBar() {
 
  return (
    <TopBarContainer>
        <Logo/>
        <RightSection>
          <LogoutIcon title='Logout' />
          <Username>
            isaac.bahsoun
          </Username>
        </RightSection>
    </TopBarContainer>
  )
}
