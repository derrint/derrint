// -----
// ----- GLOBAL section -----
// -----

export const setLoading = async (context: any, payload: boolean) => {
  context.state.isLoading = payload;
};

export const showModal = async (context: any, payload: string) => {
  context.state.modal = {
    ...context.state.modal,
    name: payload,
    isVisible: true,
  };
};

export const hideModal = async (context: any) => {
  context.state.modal = {
    ...context.state.modal,
    type: null,
    isVisible: false,
  };
};

export const setYScrollPosition = async (context: any, payload: number) => {
  context.state.yScrollPosition = payload;
};
