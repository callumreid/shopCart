import {useState} from 'react';
import {useQuery} from 'react-query';

// material ui components
import {Drawer} from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Badge } from '@material-ui/core';

// styles
import {Wrapper} from './App.styles';

// types
export type CartItemType = {
  id: number;
  cateogry: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


const getProducts = async(): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div> 'err errr errrrrr </div>;

  return (
    <div className="App">
        <p>mooooo</p>
    </div>
  );
}

export default App;
