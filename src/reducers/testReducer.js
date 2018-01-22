const testReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTRY_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    countryId: action.countryId,
                    componentId: action.componentId
                }
            ]
        default:
            return state
    }
}

export default testReducer