import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import shopBannerImg  from '../../../assets/shop/banner2.jpg'
import Cover from '../../Common/Cover';
import UseMenu from '../../Hooks/UseMenu';
import FoodCard from '../../Common/FoodCard';
import Shop_tab from './Shop_tab';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const catagories = ['salad' , 'pizza' ,'soups' , 'dessert' ,'drinks']
  const {catagory} = useParams();
  const initialIndex = catagories.indexOf(catagory)
  const [tabIndex, setTabIndex] = useState(initialIndex);

    

            const [menu] = UseMenu();
            const offerdItems = menu.filter(item => item.category === 'offered')
            const dessertItems = menu.filter(item => item.category === 'dessert')
            const pizzaItems = menu.filter(item => item.category === 'pizza')
            const saladItems = menu.filter(item => item.category === 'salad')
            const soupItems = menu.filter(item => item.category === 'soup')
            const drinksItem = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            
            <Cover coverImg={shopBannerImg}></Cover>

            <Tabs className='my-10 text-center' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soups</Tab>
      <Tab>dessert</Tab>
      <Tab>drinks</Tab>
    </TabList>

    <TabPanel>
             <Shop_tab items={saladItems}></Shop_tab>
    </TabPanel>

    <TabPanel>
              <Shop_tab items={pizzaItems}></Shop_tab>
    </TabPanel>


    <TabPanel>
               <Shop_tab items={soupItems}></Shop_tab>
    </TabPanel>

    <TabPanel>
              <Shop_tab items={dessertItems}></Shop_tab>
    </TabPanel>

    <TabPanel>
              <Shop_tab items={drinksItem}></Shop_tab>
    </TabPanel>

   



  </Tabs>

        </div>
    );
};

export default Shop;