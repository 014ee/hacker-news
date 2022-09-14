import React, { useReducer } from "react";
import Modal from "components/Modal/Wrapper";

export const ModalStateContext = React.createContext();
export const ModalDispatchContext = React.createContext();

function ModalContextProvider({ children }) {
  const [modalState, dispatch] = useReducer(reducer, {
    isOpen: false,
    title: "",
    content: "",
  });

  const openModal = (title, content) => {
    dispatch({ type: "OPEN", title, content });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE" });
  };

  return (
    <ModalStateContext.Provider value={modalState}>
      <ModalDispatchContext.Provider value={{ openModal, closeModal }}>
        {children}
        <Modal />
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

export default ModalContextProvider;

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        isOpen: true,
        title: action.title,
        content: action.content,
      };
    case "CLOSE":
      return {
        isOpen: false,
        title: "",
        content: "",
      };
    default:
      return state;
  }
};
