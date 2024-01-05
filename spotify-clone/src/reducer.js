



const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    // adicione um caso padrão aqui para ações não tratadas
    default:
      return state;
  }
}
