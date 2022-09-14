import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color, value } from '../../_styles';
import NavHeader from '../../UI/NavHeader';

import IconsLib from '../../UI/IconsLib';

const __Jeb_Header_Preset_103 = ({ data }) => {
   const [selectedmenus, setSelectedMenus] = useState([]);
   const { items } = selectedmenus;

   useEffect(() => {
      setSelectedMenus(data.find((item) => item.id === 'main_menu_001'));
   }, []);

   return (
      <Wrapper>
         <div className="container">
            <HeaderList>
               <NavItem>
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
                     <ImageWrapper>
                        <Img src="/logo_secondary_footer.png" alt="upsell" />
                     </ImageWrapper>
                  </HideMenuWrapper>
               </NavItem>
               <NavItem>
                  <MiddleList>
                     <HideWrapper>
                        <HideInput
                           type="text"
                           placeholder="Im shopping for..."
                        />
                        <Button>Search</Button>
                     </HideWrapper>
                     <NavWrapper>
                        <NavHeader
                           data={items}
                           bg_color="white"
                           text_color="gray"
                           submenuTop="60px"
                           megamenuTop="70px"
                        />
                     </NavWrapper>
                  </MiddleList>
               </NavItem>
               <NavItem>
                  <IconList>
                     <SearchIcon>
                        <IconsLib
                           icon="search_line"
                           color="white"
                           size="20px"
                           mobileSize="20px"
                        />
                     </SearchIcon>

                     <IconWrapper>
                        <UserIcon>
                           <IconsLib
                              icon="user_line"
                              color="white"
                              size="20px"
                              mobileSize="20px"
                           />
                        </UserIcon>
                        <HeartWrapper>
                           <IconsLib
                              icon="heart_2_line"
                              color="white"
                              size="20px"
                              mobileSize="20px"
                           />
                           <HeartNumber>00</HeartNumber>
                        </HeartWrapper>
                        <CartIconWrapper>
                           <CartIcon>
                              <IconsLib
                                 icon="shopping_cart_line"
                                 color="white"
                                 size="20px"
                                 mobileSize="20px"
                              />
                           </CartIcon>
                           <LabelWrapper>
                              <LabelNumber>00</LabelNumber>
                           </LabelWrapper>
                        </CartIconWrapper>
                     </IconWrapper>
                  </IconList>
               </NavItem>
            </HeaderList>
         </div>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   font-family: 'Inter', sans-serif;
   background-color: ${color.white};

   .container {
      @media (max-width: 921px) {
         align-items: center;
      }
   }
`;
const HeaderList = styled.div`
   display: grid;
   /* place-items: center; */
   /* gap: 1rem; */
   grid-template-columns: 200px 1fr 250px;
   padding: 10px 0 10px 0;
   align-items: center;

   @media (max-width: 1069px) {
      place-items: initial;
      align-items: center;
   }

   @media (max-width: 900px) {
      grid-template-columns: 150px 1fr 200px;
   }
   @media (max-width: 860px) {
      grid-template-columns: 200px 1fr 200px;
   }

   @media (max-width: 768px) {
      grid-template-columns: 200px 1fr 260px;
   }
   @media (max-width: 646px) {
      grid-template-columns: auto 1fr;
   }
`;

const NavItem = styled.div`
   :nth-child(2) {
      @media (max-width: 646px) {
         display: none;
      }
   }
`;

const HideMenuWrapper = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
`;

const HideMenuIcon = styled.div`
   display: none;
   cursor: pointer;

   @media (max-width: 768px) {
      display: block;
   }
`;
const ImageWrapper = styled.div`
   max-width: 125px;

   @media (max-width: 768px) {
      width: 100px;
   }
`;

const Img = styled.img`
   width: 100%;
`;

const HideWrapper = styled.div`
   display: none;
   /* background-color: red; */

   @media (max-width: 900px) {
      display: flex;
      border: 1px solid ${color.gray10};
      /* border-radius: 0 5px 5px 0; */
      border-radius: 50px;
      padding-left: 10px;
      /* padding: 5px; */
      /* border: none; */
   }

   @media (max-width: 768px) {
      display: none;
   }
`;
const HideInput = styled.input`
   /* background-color: red; */
   width: 100%;
   outline: none;
   border: none;
   padding-left: 1rem;
   padding-right: 1rem;
   color: ${color.gray};
   font-size: 14px;
   height: 40px;
   border-radius: 50px 0 0 50px;

   ::placeholder {
      font-size: 14px;
      font-weight: 400;
      color: ${color.gray6};
   }
`;

const Button = styled.div`
   background-color: ${color.blue};
   font-size: 14px;

   text-align: center;
   padding: 10px 1rem;
   color: ${color.white};
   border-radius: 0 50px 50px 0;
   cursor: pointer;

   :hover {
      background-color: ${color.yellow};
   }
`;

const MiddleList = styled.div``;
const NavWrapper = styled.div`
   display: grid;
   place-items: center;
   gap: 3rem;
   align-items: center;

   @media (max-width: 900px) {
      display: none;
   }
`;

const IconList = styled.div`
   display: flex;
   justify-content: flex-end;

   gap: 1rem;
`;

const SearchIcon = styled.div`
   display: grid;
   place-items: center;
   background-color: ${color.blue};
   border-radius: 50px;
   width: 35px;
   height: 35px;
   /* padding: 8px; */
   cursor: pointer;

   :hover {
      background-color: ${color.yellow};
   }

   @media (max-width: 1069px) {
      display: none;
   }

   @media (max-width: 768px) {
      display: grid;
   }
`;

const HeartWrapper = styled.div`
   display: flex;
   border-left: 1px solid ${color.gray10};

   padding-left: 10px;
   /* padding-right: 10px; */
   gap: 5px;

   @media (max-width: 414px) {
      display: none;
   }
`;

const HeartNumber = styled.p`
   font-size: 13px;
   color: ${color.white};
   border-right: 1px solid ${color.gray10};
   padding-right: 10px;
`;

const UserIcon = styled.div`
   cursor: pointer;
`;

const IconWrapper = styled.div`
   border-radius: 50px;
   /* width: 100%; */
   height: 34px;
   background-color: ${color.yellow};
   display: flex;
   gap: 10px;
   align-items: center;
   padding: 1rem;
   cursor: pointer;

   :hover {
      background-color: ${color.blue};
   }
`;

const CartIconWrapper = styled.div`
   display: flex;
   gap: 5px;

   @media (max-width: 414px) {
      border-left: 1px solid ${color.gray};

      padding-left: 10px;
   }
`;
const CartIcon = styled.div`
   cursor: pointer;
`;
const LabelWrapper = styled.div`
   gap: 5px;
`;
const LabelNumber = styled.p`
   font-size: 13px;
   color: ${color.white};
`;

export default __Jeb_Header_Preset_103;
