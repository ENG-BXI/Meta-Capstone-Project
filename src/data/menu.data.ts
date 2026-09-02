export interface FoodItem {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const dummyFoodItems: FoodItem[] = [
  {
    id: '1',
    title: 'Greek salad',
    price: 12.99,
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'Bruschetta',
    price: 7.99,
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, topped with fresh diced tomatoes and basil.',
    imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'Lemon Dessert',
    price: 5.0,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    title: 'Grilled Salmon',
    price: 18.5,
    description: 'Fresh Atlantic salmon fillet seasoned with herbs, grilled to perfection, and served with a side of steamed asparagus and lemon butter sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
  }
];
