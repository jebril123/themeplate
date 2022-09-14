import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { color, variable } from '../../_styles';
import IconsLib from '../../UI/IconsLib';
import { currencyFormat } from '../../../utils/currencyFormatter';
// import { useEffect } from 'react';
import NavHeader from '../../UI/NavHeader';

const __Jeb_Header_Preset_102 = ({ data }) => {
   // console.log(data);
   const [selectedmenus, setSelectedMenus] = useState([]);
   const { items } = selectedmenus;

   useEffect(() => {
      setSelectedMenus(data.find((item) => item.id === 'main_menu_001'));
   }, []);

   return (
      <Wrapper>
         <Top>
            <div className="container">
               <Midle>
                  <MiddleWrapper>
                     <Item>
                        <HideLogo>
                           <MenuIcon className="jeb-header-preset-102-menu-icon">
                              <IconsLib
                                 icon="menu_2_line"
                                 color={color.gray}
                                 size="25px"
                                 mobileSize="25px"
                                 hoverColor={color.blue}
                              />
                           </MenuIcon>
                           <HideImage
                              src="/logo_secondary_footer.png"
                              alt="upsell"
                           />
                        </HideLogo>
                     </Item>
                     <Item>
                        <SearchWrapper>
                           <SearchBox>
                              <InputWrapper>
                                 <SearchIcon>
                                    <IconsLib
                                       icon="search_line"
                                       color={color.gray}
                                       size="18px"
                                       mobileSize="25px"
                                    />
                                 </SearchIcon>
                                 <Input
                                    type="text"
                                    placeholder="Search for products"
                                 />
                                 <HideButton>Search</HideButton>
                              </InputWrapper>
                           </SearchBox>
                        </SearchWrapper>
                     </Item>
                     <Item>
                        <LogoWrapper>
                           <Img src="/logo_secondary_footer.png" alt="upsell" />
                        </LogoWrapper>
                     </Item>

                     <Item>
                        <TextWrapper>
                           <TextList>
                              <TextItem>
                                 <LabelWrapper>
                                    <Icon>
                                       <IconsLib
                                          icon="flag_line"
                                          color={color.gray}
                                          size="25px"
                                          mobileSize="25px"
                                          hoverColor={color.red}
                                       />
                                    </Icon>
                                    <TextLabel> US </TextLabel>
                                 </LabelWrapper>
                              </TextItem>
                              <TextItem>
                                 <TextLabel>Order Status</TextLabel>
                              </TextItem>
                              <TextItem>
                                 <TextLabel>Find a Store</TextLabel>
                              </TextItem>
                              <TextItem>
                                 <TextLabel>Sign In</TextLabel>
                              </TextItem>
                              <TextItem>
                                 <IconList>
                                    <HideSearchIcon>
                                       <IconsLib
                                          icon="search_line"
                                          color={color.gray}
                                          size="25px"
                                          mobileSize="25px"
                                       />
                                    </HideSearchIcon>
                                    <UserHideIcon>
                                       <IconsLib
                                          icon="user_line"
                                          color={color.gray}
                                          size="25px"
                                          mobileSize="25px"
                                          hoverColor={color.red}
                                       />
                                    </UserHideIcon>
                                    <HeartHideIcon>
                                       <IconsLib
                                          icon="heart_2_line"
                                          color={color.gray}
                                          size="25px"
                                          mobileSize="25px"
                                          hoverColor={color.red}
                                       />
                                       <HeartHideNumber>05</HeartHideNumber>
                                    </HeartHideIcon>
                                    <Icon>
                                       <IconsLib
                                          icon="shopping_cart_line"
                                          color={color.gray}
                                          size="25px"
                                          mobileSize="25px"
                                          hoverColor={color.red}
                                       />
                                    </Icon>
                                 </IconList>

                                 <CartNumber>9</CartNumber>
                              </TextItem>
                           </TextList>
                        </TextWrapper>
                     </Item>
                  </MiddleWrapper>
               </Midle>
            </div>
         </Top>
         <Buttom>
            <div className="container">
               <ButtomList>
                  <NavHeader
                     data={items}
                     bg_color="white"
                     text_color="gray"
                     submenuTop="40px"
                     megamenuTop="133px"
                  />{' '}
               </ButtomList>
            </div>
         </Buttom>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   font-family: 'Inter', sans-serif;
   background-color: ${color.white};
`;

const Top = styled.div``;

const Midle = styled.div``;
const MiddleWrapper = styled.div`
   display: grid;
   grid-template-columns: 350px 1fr 350px;
   /* gap: 1rem; */
   /* display: flex; */
   /* justify-content: space-between; */
   align-items: center;

   padding: 1rem 0;

   @media (max-width: 860px) {
      grid-template-columns: 200px 1fr 200px;
   }

   @media (max-width: 768px) {
      margin: 0;
      grid-template-columns: 200px 1fr 165px;
   }

   @media (max-width: 414px) {
      grid-template-columns: auto 160px;
      gap: 1rem;

      margin: 0;

      /* margin: 0; */
   }
`;

const Item = styled.div`
   :nth-child(1) {
      display: none;
      @media (max-width: 860px) {
         display: block;
      }
   }

   :nth-child(2) {
      display: grid;

      /* justify-content: initial; */

      @media (max-width: 414px) {
         /* display: initial; */
         display: none;
      }
   }

   :nth-child(3) {
      display: flex;
      justify-content: center;
      /* display: none; */

      @media (max-width: 860px) {
         display: none;
      }
      /* @media (max-width: 414px) {
         display: none;
      } */
   }
`;

const HideLogo = styled.div`
   max-width: 125px;

   @media (max-width: 768px) {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100px;
   }
`;
const HideImage = styled.img`
   width: 100%;
`;

const SearchWrapper = styled.div`
   justify-content: flex-start;

   @media (max-width: 646px) {
      display: none;
   }
`;
const SearchBox = styled.div``;

const MenuIcon = styled.div`
   display: none;

   @media (max-width: 768px) {
      display: block;
      cursor: pointer;
   }
`;

const SearchIcon = styled.div`
   padding: 0 1rem;
`;
const InputWrapper = styled.div`
   display: flex;

   align-items: center;
   border: 1px solid ${color.gray10};
   border-radius: 50px;
`;
const Input = styled.input`
   border: none;
   font-size: 14px;

   width: 80%;

   outline: none;

   height: 40px;

   ::placeholder {
      color: ${color.gray6};
   }
`;
const HideButton = styled.div`
   display: none;

   @media (max-width: 860px) {
      display: block;
      background-color: ${color.blue};
      padding: 10px 1rem;
      border-radius: 0 50px 50px 0;
      color: ${color.white};
      font-size: 14px;
      cursor: pointer;

      :hover {
         background-color: ${color.gray};
      }
   }
`;
const LogoWrapper = styled.div`
   max-width: 125px;

   @media (max-width: 860px) {
      display: flex;
      align-items: center;
      gap: 1rem;
   }

   @media (max-width: 768px) {
      width: 100px;
   }

   @media (max-width: 414px) {
      padding: 0;
      max-width: 100px;
   }
`;
const Img = styled.img`
   width: 100%;
`;

const TextWrapper = styled.div``;
const TextList = styled.li`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 1.1rem;
   margin-right: 1rem;

   @media (max-width: 414px) {
      padding-right: 0;
      margin-right: 1rem;
   }
`;
const TextItem = styled.div`
   cursor: pointer;
   position: relative;
   display: flex;

   @media (max-width: 860px) {
      display: none;

      :last-child {
         display: block;
         display: flex;
         gap: 2rem;
      }
   }
`;
const UserHideIcon = styled.div`
   display: none;

   @media (max-width: 860px) {
      display: block;
   }
`;
const HeartHideIcon = styled.div`
   display: none;

   @media (max-width: 860px) {
      display: flex;
      position: relative;
   }

   @media (max-width: 414px) {
      display: none;
   }
`;

const HeartHideNumber = styled.div`
   display: none;

   @media (max-width: 860px) {
      display: block;
      position: absolute;
      font-size: 12px;
      font-weight: 600;

      top: -8px;
      right: -12px;
      border-radius: 50px;
      color: ${color.white};
      background-color: ${color.blue_light};
      width: 20px;
      height: 20px;
      text-align: center;
      display: grid;
      place-items: center;
   }
`;
const LabelWrapper = styled.div`
   display: flex;

   gap: 1rem;
   align-items: center;
`;
const Icon = styled.span``;
const CartNumber = styled.p`
   font-size: 12px;
   font-weight: 600;
   position: absolute;
   top: -8px;
   right: -12px;
   border-radius: 50px;
   color: ${color.white};
   background-color: ${color.blue_light};
   width: 20px;
   height: 20px;
   text-align: center;
   display: grid;
   place-items: center;

   @media (max-width: 860px) {
      max-width: 34%;
   }
`;

const TextLabel = styled.p`
   font-size: 12px;
   color: ${color.gray};

   :hover {
      color: ${color.blue};
   }
`;

const IconList = styled.div`
   cursor: pointer;
   position: relative;
   display: flex;

   @media (max-width: 860px) {
      gap: 1rem;
   }

   @media (max-width: 646px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
   }

   @media (max-width: 414px) {
      display: flex;
   }
`;

const HideSearchIcon = styled.div`
   display: none;

   @media (max-width: 646px) {
      display: block;
   }
`;

const Buttom = styled.div``;
const ButtomList = styled.div`
   display: flex;

   @media (max-width: 414px) {
      /* height: 0; */
   }
`;

export default __Jeb_Header_Preset_102;
