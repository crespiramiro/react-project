import { useReducer, useContext, createContext } from "react";
import { shoppingReducer, shoppingInitialState } from "@/reducer/Reducer";
import { TYPES } from "@/actions/actions";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart debe usarse dentro de un ShoppingCartProvider');
  }
  return context;
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const addToCart = (id) => {
    dispatch({ type: TYPES.AGREGAR_AL_CARRITO, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVER_TODOS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVER_UN_PRODUCTO, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.VACIAR_CARRITO });
  };

  return (
    <ShoppingCartContext.Provider value={{ state, addToCart, deleteFromCart, clearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};