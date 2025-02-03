// cover img
import menuCoverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import { Helmet } from 'react-helmet-async';
import Cover from '../../Common/Cover';
import Menu_catagory from './Menu_catagory';
import UseMenu from '../../Hooks/UseMenu';

const Menu = () => {
         const [menu] = UseMenu();
         const offerdItems = menu.filter(item => item.category === 'offered')
         const dessertItems = menu.filter(item => item.category === 'dessert')
         const pizzaItems = menu.filter(item => item.category === 'pizza')
         const saladItems = menu.filter(item => item.category === 'salad')
         const soupItems = menu.filter(item => item.category === 'soup')
    return (
        <div>
              <Helmet>
                  <title>bistro | menu</title>
              </Helmet>

                <Cover coverImg={menuCoverImg} title={'our menu'}></Cover>

                    <Menu_catagory items={offerdItems} ></Menu_catagory>

                    <Menu_catagory items={dessertItems}  title={'dessert'} coverImg={dessertImg} ></Menu_catagory>



        </div>
    );
};

export default Menu;