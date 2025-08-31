import { Provider } from "react-redux";

import type { FC, JSX } from "react";
import { store } from "../store";

interface IProviders {
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
