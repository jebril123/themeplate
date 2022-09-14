import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Manipulation } from 'swiper';
import IconsLib from '../../UI/IconsLib';
import { currencyFormat } from '../../../utils/currencyFormatter';
import NavItemSubList from '../../_Shared/NavItemSubList';
import { color, variable } from '../../_styles';
import NavHeader from '../../UI/NavHeader';
import { FaPercent } from 'react-icons/fa';

import { blue } from '@mui/material/colors';

const __Jeb_Header_Preset_101 = ({ data }) => {
   // console.log(data);
   const [selectedMenu, setSelectedMenu] = useState('main_menu_001');
   const { items } = selectedMenu;

   const [active, setActive] = useState('home');

   // console.log(active);

   useEffect(() => {
      setSelectedMenu(data.find((item) => item.id === 'main_menu_001'));
   }, []);

   const handleHover = (value) => {
      // console.log(value);
      setActive(value);
   };

   return (
      <Wrapper>
         <TopWrapper>
            <div className="container">
               {/* TOP HEADER */}
               <Top>
                  {/* HEADER TOP LIST LEFT */}
                  <TopListLeft>
                     <Item>
                        <ItemLabel>About Us</ItemLabel>
                     </Item>
                     <Item>
                        <ItemLabel>My Account</ItemLabel>
                     </Item>
                     <Item>
                        <ItemLabel>Featured Prouduts</ItemLabel>
                     </Item>
                     <Item>
                        <ItemLabel>Wishlist</ItemLabel>
                     </Item>
                  </TopListLeft>
                  {/* HEADER TOP LIST RIGHT */}
                  <TopListRight>
                     <Item>
                        <ItemLabel>Order Tracking</ItemLabel>
                     </Item>
                     <Item>
                        <ItemLabel>English</ItemLabel>
                        {/* ICON */}
                        <ItemIcon>
                           <IconsLib
                              icon="arrow_down_s_line"
                              color={color.gray}
                              size="15px"
                              mobileSize="25px"
                           />
                        </ItemIcon>
                     </Item>
                     <Item>
                        <ItemLabel>USD</ItemLabel>
                        {/* ICON */}
                        <ItemIcon>
                           <IconsLib
                              icon="arrow_down_s_line"
                              color={color.gray}
                              size="15px"
                              mobileSize="25px"
                           />
                        </ItemIcon>
                     </Item>
                  </TopListRight>
               </Top>
            </div>
         </TopWrapper>

         <MiddleWrapper>
            <div className="container">
               {/* MIDDLE HEADER */}

               <MiddleList>
                  <ImgWrapper>
                     <MiddleIcon>
                        <IconsLib
                           icon="menu_2_line"
                           color={color.gray}
                           size="25px"
                           mobileSize="25px"
                           hoverColor={color.blue}
                        />
                     </MiddleIcon>
                     {/* ICON */}
                     <Img src="/logo_secondary_footer.png" alt="upsell" />
                  </ImgWrapper>

                  {/* SEARCH BOX */}
                  <SearchBoxWrapper>
                     <SearchBoxIcon>
                        <IconsLib
                           icon="search_line"
                           color={color.gray}
                           size="18px"
                           mobileSize="25px"
                        />
                     </SearchBoxIcon>
                     <SearchBox>
                        <Input
                           type="text"
                           placeholder="Search for products..."
                        />
                     </SearchBox>
                     <Button>Search</Button>
                  </SearchBoxWrapper>
                  {/* MENU BAR */}
                  <MenuBarWrapper>
                     <MenuBarList>
                        <MenuBarItem>
                           <HideSearchIcon>
                              <IconsLib
                                 icon="search_line"
                                 color={color.gray}
                                 size="25px"
                                 mobileSize="25px"
                                 hoverColor={color.blue}
                              />
                           </HideSearchIcon>
                        </MenuBarItem>

                        <MenuBarItem>
                           {/* ICON */}
                           <UserWrapper>
                              <IconsLib
                                 icon="user_line"
                                 color={color.gray}
                                 size="25px"
                                 mobileSize="25px"
                                 hoverColor={color.blue_light}
                              />
                              <TextWrapper>
                                 <MenuLabelSmall>Sign In</MenuLabelSmall>
                                 <MenuLabelLarge>Account</MenuLabelLarge>
                              </TextWrapper>
                           </UserWrapper>
                        </MenuBarItem>
                        <MenuBarItem>
                           {/* ICON */}
                           <HeartWrapper>
                              <IconsLib
                                 icon="heart_2_line"
                                 color={color.gray}
                                 size="25px"
                                 mobileSize="25px"
                                 hoverColor={color.blue_light}
                              />
                              <HeartNumber>10</HeartNumber>
                           </HeartWrapper>
                        </MenuBarItem>
                        <MenuBarItem>
                           {/* ICON */}
                           <CartWrapper>
                              <IconsLib
                                 icon="shopping_cart_line"
                                 color={color.gray}
                                 size="25px"
                                 mobileSize="25px"
                                 hoverColor={color.blue_light}
                              />
                              <CartNumber>0</CartNumber>
                           </CartWrapper>

                           <TextWrapper>
                              <MenuLabelSmall>Total</MenuLabelSmall>
                              <MenuLabelLarge>
                                 {currencyFormat('0.00', true)}
                              </MenuLabelLarge>
                           </TextWrapper>
                        </MenuBarItem>
                     </MenuBarList>
                  </MenuBarWrapper>
               </MiddleList>
            </div>
         </MiddleWrapper>

         <Buttom>
            <div className="container">
               {/* BUTTOM HEADER */}
               <WrapperButtom>
                  {/* HEADER BUTTOM LEFT */}
                  <ButtomListLeft>
                     <ItemLeft>
                        <NavHeader
                           data={items}
                           bg_color="white"
                           text_color="gray"
                           submenuTop="40px"
                           megamenuTop="133px"
                        />
                     </ItemLeft>
                  </ButtomListLeft>
                  {/* <ButtomListLeft>
                     {items &&
                        Boolean(...items) &&
                        items.map((item, index) => (
                           <ItemLeft
                              key={item.id}
                              onMouseEnter={() => handleHover(item.slug)}
                              onMouseLeave={() => handleHover('')}
                           >
                              <HoverLabel>{item.label}</HoverLabel>
                              {active === item.slug && (
                                 <SubmenuList>
                                    {item.submenu &&
                                       Boolean(...item.submenu) &&
                                       item.submenu.map((i, idx) => (
                                          <SubmenuItem key={i.id}>
                                             {i.label}
                                          </SubmenuItem>
                                       ))}
                                 </SubmenuList>
                              )}
                           </ItemLeft>
                        ))}
                  </ButtomListLeft> */}

                  {/* HEADER BUTTOM RIGTH */}
                  <ButtomListRight>
                     <ItemRight>
                        {/* ICON */}
                        <PercentIcon>
                           {/* <IconsLib
                              icon="gift_line"
                              color={color.red}
                              size="25px"
                              mobileSize="25px"
                           /> */}
                           <FaPercent />
                        </PercentIcon>
                     </ItemRight>
                     <ItemRight>
                        <ItemWrapper>
                           <ButtomRightLabelUp>
                              Only this weekend
                           </ButtomRightLabelUp>
                           <ButtomRightLabelDown>
                              SuperDiscount
                           </ButtomRightLabelDown>
                        </ItemWrapper>
                        {/* ICON */}
                        <ItemIcon>
                           <IconsLib
                              icon="arrow_down_s_line"
                              color={color.gray}
                              size="20px"
                              mobileSize="18px"
                           />
                        </ItemIcon>
                     </ItemRight>
                  </ButtomListRight>
               </WrapperButtom>
            </div>
         </Buttom>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   font-family: 'Inter', sans-serif;
   /* display: none; */
   background-color: white;

   /* display: none; */
`;

const TopWrapper = styled.div`
   @media (max-width: 860px) {
      display: none;
   }
`;
const Top = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
`;

const Buttom = styled.div``;
const WrapperButtom = styled.div`
   display: grid;
   grid-template-columns: 1fr auto;

   @media (max-width: 860px) {
      display: none;
   }
`;
const TopListLeft = styled.ul`
   display: flex;
   gap: 20px;
   margin: 0;

   @media (max-width: 768px) {
      display: none;
   }
`;
const TopListRight = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 20px;

   /* @media (max-width: 768px) {
      
      justify-content: center;
   } */
`;

const ButtomListLeft = styled.div`
   display: flex;
   gap: 2rem;
   align-items: center;

   /* @media (max-width: 768px) {
      display: none;
   } */
`;
const ButtomListRight = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 15px;
   align-items: center;

   /* 3 */
`;

const MiddleWrapper = styled.div``;
const MiddleList = styled.div`
   display: grid;
   grid-template-columns: 200px 1fr 350px;
   padding: 13px 0px 13px 0px;
   align-items: center;

   @media (max-width: 860px) {
      grid-template-columns: 200px 1fr 200px;
   }

   @media (max-width: 768px) {
      grid-template-columns: 200px 1fr auto;
   }

   @media (max-width: 414px) {
      grid-template-columns: 140px 1fr 160px;
      /* padding: 10px 0 10px 0px; */
      height: 72px;
      padding: 0;

      /* align-items: center; */
   }
`;
const Item = styled.li`
   font-size: 12px;
   font-weight: 400;
   padding: 12px 0px 12px 0;
   margin: 0;
   display: flex;
   gap: 5px;
   color: ${color.gray_dark_light};
   /* background-color: red; */

   :hover {
      color: ${color.blue};
      cursor: pointer;
   }

   /* @media (max-width: 768px) {
      padding: 7px 0 7px 0;
      font-weight: 650;
      gap: 4px;
   } */
`;

const ItemLeft = styled.div`
   padding: 0;
   cursor: pointer;
   padding: 10px 0px 10px 0px;
   box-sizing: border-box;
   position: relative;
`;

const ItemRight = styled.div`
   display: flex;
   cursor: pointer;
   gap: 20px;
   align-items: center;
`;

const ItemWrapper = styled.div``;
const ItemLabel = styled.h2`
   font-size: 12px;
   font-weight: 400;
   margin: 0;
`;
const PercentIcon = styled.div`
   /* border: 1px solid ${color.gray}; */
   border-radius: 50px;
   padding: 5px;
   width: 20px;
   height: 20px;
   display: grid;
   place-items: center;
   font-size: 10px;
   color: ${color.white};
   background-color: ${color.red};
`;
const ButtomRightLabelUp = styled.h2`
   font-size: 9px;
   line-height: 12px;

   margin: 0;
   color: ${color.gray8};
`;
const ButtomRightLabelDown = styled.h2`
   font-size: 14px;
   font-weight: 500;

   margin: 0;
`;

const ItemIcon = styled.div``;
const ImgWrapper = styled.div`
   max-width: 125px;
   cursor: pointer;

   @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      width: 100px;
   }
`;
const Img = styled.img`
   width: 100%;

   @media (max-width: 414px) {
      top: -20px;
      left: -45px;

      vertical-align: middle;
   }
`;
const SearchBoxWrapper = styled.div`
   display: flex;
   align-items: center;
   border: 1px solid ${color.gray10};

   width: 100%;
   border-radius: 5px;

   @media (max-width: 646px) {
      border: none;
   }
`;
const SearchBox = styled.div`
   display: flex;

   width: 100%;

   @media (max-width: 646px) {
      display: none;
   }
`;

const Input = styled.input`
   width: 100%;

   padding-right: 1rem;
   border: none;
   border-radius: 6px;
   outline: none;
   font-size: 14px;
   color: ${color.gray_dark_light};

   ::placeholder {
      color: ${color.gray6};
   }
`;

const SearchBoxIcon = styled.div`
   padding: 0 1rem;
   @media (max-width: 646px) {
      display: none;
   }
`;

const SearchBoxButton = styled.div``;
const Button = styled.div`
   background-color: ${color.blue_light};
   color: ${color.white};
   font-weight: 600;
   font-size: 14px;
   padding: 15px;
   cursor: pointer;

   width: 110px;
   text-align: center;
   border-radius: 0 5px 5px 0;

   @media (max-width: 646px) {
      display: none;
   }
`;
const MenuBarWrapper = styled.div``;
const MenuBarList = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;

   gap: 1rem;
   @media (max-width: 860px) {
      /* gap: 2rem; */
      justify-content: flex-end;
      margin-right: 1rem;
   }

   @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
   }
   @media (max-width: 414px) {
      display: flex;
      /* justify-content: initial; */
      gap: 1rem;
   }
`;
const MenuBarItem = styled.div`
   padding: 5px 5px;

   @media (max-width: 860px) {
      padding: 0;
   }

   :nth-child(3) {
      @media (max-width: 414px) {
         display: none;
      }
   }

   :nth-child(4) {
      display: flex;
      gap: 1rem;
      align-items: center;
   }

   @media (max-width: 414px) {
      padding: 0;
   }
`;

const HideSearchIcon = styled.div`
   display: none;

   @media (max-width: 646px) {
      display: block;
      cursor: pointer;
   }
`;

const TextWrapper = styled.div`
   @media (max-width: 860px) {
      display: none;
   }
`;

const UserWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   cursor: pointer;
`;

const MenuLabelSmall = styled.h2`
   font-size: 11px;
   font-weight: 300;

   color: ${color.gray};
   line-height: 16px;
   align-items: center;
   max-width: 100%;
   margin: 0;
   :hover {
      color: ${color.blue};
   }

   @media (max-width: 414px) {
   }
`;
const MenuLabelLarge = styled.h2`
   font-size: 14px;

   color: ${color.gray_dark_light};
   font-weight: 500;
   margin: 0;
   :hover {
      color: ${color.blue};
   }
`;

const HeartWrapper = styled.div`
   position: relative;
   cursor: pointer;
   /* display: flex;
   position: absolute; */

   /* @media (max-width: 414px) {
      display: none;
   } */
`;

const HeartNumber = styled.div`
   font-size: 12px;
   font-weight: 600;
   position: absolute;
   top: -8px;
   right: -13px;
   border-radius: 50px;
   color: ${color.white};
   background-color: ${color.blue_light};
   width: 20px;
   height: 20px;
   text-align: center;
   display: grid;
   place-items: center;

   /* @media (max-width: 768px) {
      right: -5px;
   } */
`;

const MiddleIcon = styled.span`
   display: none;

   @media (max-width: 768px) {
      display: block;
   }
`;
const CartNumber = styled.p`
   font-size: 12px;
   font-weight: 600;
   position: absolute;
   top: -8px;
   right: -13px;
   border-radius: 50px;
   color: ${color.white};
   background-color: ${color.blue_light};
   width: 20px;
   height: 20px;
   text-align: center;
   display: grid;
   place-items: center;
`;
const CartWrapper = styled.div`
   display: flex;
   position: relative;
   cursor: pointer;
`;

export default __Jeb_Header_Preset_101;
