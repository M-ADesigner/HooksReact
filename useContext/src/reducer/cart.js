export const initialState = [];
export function cartREeducer(state, action) {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
        case 'ADD_TO_CART': {
            const { id } = actionPayload;
            const productInCartIndex = state.findIndex(
                (item) => item.id === id,
            );

            if (productInCartIndex >= 0) {
                //Una forma seria utilizando structureClone
                const newState = structuredClone(state);
                newState[productInCartIndex].quantity += 1;
                return newState;
            }
            return [
                ...state,
                {
                    ...actionPayload, //product
                    quantity: 1,
                },
            ];
        }
        case 'REMOVE_FROM_CART': {
            const { id } = actionPayload;
            return state.filter((item) => item.id !== id);
        }
        case 'CLEAR_CART': {
            return initialState;
        }
    }

    return state;
}
