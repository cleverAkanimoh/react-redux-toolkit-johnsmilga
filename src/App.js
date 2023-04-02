import { useEffect } from 'react';
import NavBar from './Components/NavBar';
import CartContainer from './Components/CartContainer';
import Modal from './Components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';


function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;