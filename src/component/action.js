export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
  });
  
  export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id,
  });
  
  export const updateItem = (id, updatedItem) => ({
    type: 'UPDATE_ITEM',
    payload: { id, updatedItem },
  });
  
  export const validateForm = (isValid) => ({
    type: 'VALIDATE_FORM',
    payload: isValid,
  });
  