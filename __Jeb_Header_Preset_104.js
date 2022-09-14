import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { currencyFormat } from '../../../utils/currencyFormatter';
import { color } from '../../_styles';
import NavHeader from '../../UI/NavHeader';
import IconsLib from '../../UI/IconsLib';

const __Jeb_Header_Preset_104 = ({ data }) => {
   const [menus, setMenus] = useState([]);
   const { items } = menus;

   useEffect(() => {
      setMenus(data.find((item) => item.id === 'main_menu_001'));
   }, []);

   return (
      <Wrapper>
         <Top>
            <div className="container">
               <TopWrapper>
                  <TopList>
                     <TopItem>
                        <HideMenuWrapper>
                           <HideMenuIcon>
                              <IconsLib
                                 icon="menu_2_line"
                                 color={color.gray}
                                 size="25px"
                                 mobileSize="25px"
                                 hoverColor={color.blue}
                              />
                           </HideMenuIcon>
                           <ImgWrapper>
                              <Img
                                 src="/logo_secondary_footer.png"
                                 alt="upsell"
                              />
                           </ImgWrapper>
                        </HideMenuWrapper>
                     </TopItem>
                     <TopItem>
                        <SearchWrapper>
                           <Input type="text" placeholder="Im shopping for" />
                           <Button>Search</Button>
                        </SearchWrapper>
                     </TopItem>
                     <TopItem>
                        <IconList>
                           <Icon>
                              <UserWrapper>
                                 <UserIcon>
                                    <IconsLib
                                       icon="user_line"
                                       color={color.gray}
                                       size="25px"
                                       mobileSize="25px"
                                       hoverColor={color.blue}
                                    />
                                 </UserIcon>
                                 <UserLabelWrapper>
                                    <UserLabel>Login</UserLabel>
                                    <UserLabel>/Register</UserLabel>
                                 </UserLabelWrapper>
                              </UserWrapper>
                           </Icon>
                           <HideSearchIcon>
                              <IconsLib
                                 icon="search_line"
                                 color={color.gray}
                                 size="25px"
                                 mobileSize="25px"
                                 hoverColor={color.blue}
                              />
                           </HideSearchIcon>
                           <Icon>
                              <WishListWrapper>
                                 <WishListIcon>
                                    <IconsLib
                                       icon="heart_2_line"
                                       color={color.gray}
                                       size="25px"
                                       mobileSize="25px"
                                       hoverColor={color.blue}
                                    />
                                 </WishListIcon>
                                 <WishListNumber>08</WishListNumber>
                              </WishListWrapper>
                           </Icon>
                           <Icon>
                              <CartWrapper>
                                 <CartIcon>
                                    <IconsLib
                                       icon="shopping_cart_line"
                                       color={color.gray}
                                       size="25px"
                                       mobileSize="25px"
                                       hoverColor={color.blue}
                                    />
                                 </CartIcon>
                                 <CartNumber>99</CartNumber>
                              </CartWrapper>
                           </Icon>
                        </IconList>
                     </TopItem>
                  </TopList>
               </TopWrapper>
            </div>
         </Top>
         <Buttom>
            <div className="container">
               <MenuList>
                  <NavHeader
                     data={items}
                     bg_color=""
                     text_color="gray"
                     submenuTop="40px"
                     megamenuTop="150px"
                  />
               </MenuList>
            </div>
         </Buttom>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   font-family: 'Inter', sans-serif;
   margin-top: 20px;
   /* margin-bottom: 20px; */
`;
const Top = styled.div``;
const TopWrapper = styled.div`
   margin-bottom: 1rem;
`;
const TopList = styled.div`
   display: grid;
   grid-template-columns: 200px 1fr 300px;

   align-items: center;

   @media (max-width: 1069px) {
      grid-template-columns: 180px 1fr 250px;
   }

   @media (max-width: 860px) {
      grid-template-columns: 200px 1fr 200px;
   }

   @media (max-width: 768px) {
      grid-template-columns: 200px 1fr 165px;
   }
   @media (max-width: 646px) {
      grid-template-columns: auto 1fr 220px;
   }

   @media (max-width: 414px) {
      grid-template-columns: auto 1fr 160px;
   }
`;
const TopItem = styled.div`
   :nth-child(3) {
      display: flex;
      justify-content: flex-end;
   }
`;
const HideMenuWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;

const HideMenuIcon = styled.div`
   display: none;

   @media (max-width: 768px) {
      display: block;
      cursor: pointer;
   }
`;
const ImgWrapper = styled.div`
   max-width: 125px;

   @media (max-width: 768px) {
      width: 100px;
   }
`;
const Img = styled.img`
   width: 100%;
`;
const SearchWrapper = styled.div`
   display: flex;
   justify-content: space-between;

   width: 100%;

   @media (max-width: 646px) {
      display: none;
   }
`;
const Input = styled.input`
   width: 100%;
   outline: none;

   border-radius: 20px 0px 0px 20px;
   padding-left: 1.5rem;
   padding-right: 1rem;
   border: none;
   /* font-weight: 400; */
   font-size: 14px;

   ::placeholder {
      font-size: 14px;
      color: ${color.gray6};
   }
`;
const Button = styled.button`
   background-color: ${color.gray};
   border-radius: 0px 20px 20px 0px;
   color: ${color.white};
   text-align: center;
   font-size: 14px;
   padding: 10px 1rem;
   border: none;

   /* font-weight: 200; */

   :hover {
      background-color: ${color.red};
      border-radius: 1px solid ${color.red};

      /* border: none; */
   }
`;
const IconList = styled.div`
   display: grid;
   grid-template-columns: auto auto auto;
   gap: 1rem;
   margin-right: 1rem;

   @media (max-width: 646px) {
      /* display: flex; */
      grid-template-columns: 1fr 1fr 1fr 1fr;
      /* gap: 1rem; */
   }

   @media (max-width: 414px) {
      display: flex;
   }
`;
const Icon = styled.div`
   @media (max-width: 414px) {
      :nth-child(3) {
         display: none;
      }
   }
`;
const UserIcon = styled.div``;
const UserWrapper = styled.div`
   display: flex;
   gap: 1rem;
   cursor: pointer;
`;

const UserLabelWrapper = styled.div`
   display: flex;
   align-items: flex-end;

   @media (max-width: 860px) {
      display: none;
   }
`;
const UserLabel = styled.div`
   font-size: 14px;
   text-decoration: underline;
   cursor: pointer;
   font-weight: 400;

   :hover {
      color: ${color.blue_light};
   }
`;
const WishListWrapper = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   cursor: pointer;

   @media (max-width: 414px) {
      display: none;
   }
`;
const WishListNumber = styled.div`
   font-size: 11px;
   font-weight: 400;
   color: ${color.white};
   position: absolute;
   top: -9px;
   right: -10px;
   border-radius: 50px;
   background-color: ${color.red};
   width: 20px;
   height: 20px;
   text-align: center;
   display: grid;
   place-items: center;

   /* @media (max-width: 1069px) {
      right: 5px;
   } */
`;

const WishListIcon = styled.div``;
const HideSearchIcon = styled.div`
   display: none;

   @media (max-width: 646px) {
      display: block;
      cursor: pointer;
   }
`;
const CartWrapper = styled.div`
   position: relative;
   cursor: pointer;
`;
const CartIcon = styled.div``;
const CartNumber = styled.div`
   font-size: 11px;
   font-weight: 400;
   color: ${color.white};
   position: absolute;
   top: -9px;
   right: -10px;
   border-radius: 50px;
   background-color: ${color.red};
   width: 20px;
   height: 20px;
   text-align: center;
   display: grid;
   place-items: center;
   /* @media (max-width: 1069px) {
      right: 5px;
   } */

   @media (max-width: 414px) {
      right: -12px;
   }
`;

const Buttom = styled.div``;

const MenuList = styled.div``;

export default __Jeb_Header_Preset_104;
