type IAuth = {
  jwtToken: string | null;
  isLoggedIn: boolean | undefined;
};

type IModal = {
  name: string | null;
  isVisible: boolean;
};

type State = {
  isLoading: boolean;
  auth: IAuth;
  modal: IModal;
  yScrollPosition: number;
};

export const state: State = {
  // ----- GLOBAL props -----
  isLoading: false,
  auth: {
    jwtToken: null,
    isLoggedIn: undefined,
  },
  modal: {
    name: null,
    isVisible: false,
  },
  yScrollPosition: 0,
};
