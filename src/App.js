import { useEffect } from 'react';
import NavBar from './Components/NavBar';
import CartContainer from './Components/CartContainer';
import Modal from './Components/Modal';
import { useSelector, useDispatch } from 'react-redux';
// import { calculateTotals } from './features/cart/cartSlice';
import { calculateTotals, getCartItems } from './features/asyncCart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  // const { cartItems } = useSelector((state) => state.cart);

  const { cartItems, isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  // useEffect(() => {
  //   dispatch(calculateTotals());
  // }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;