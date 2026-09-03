import Button from '../components/button';
import MenuCard from '../components/menu-card';
import {dummyFoodItems} from '../data/menu.data';

const Menu = () => {
  return (
    <section id='menu' className='custom-container mx-auto my-10'>
      <div className='flex flex-col md:flex-row gap-4 justify-between mb-10'>
        <h3 className='text-4xl font-bold'>This weeks Specials!</h3>
        <Button>Online Menu</Button>
      </div>
      <div className='grid place-self-center gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        {dummyFoodItems.map(item => (
          <MenuCard {...item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
