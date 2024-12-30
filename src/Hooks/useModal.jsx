import { useContext } from "react";
import { ModalContext } from "../Providers/ModalProvider/ModalProvider";

export function useModal() {
  return useContext(ModalContext);
}
