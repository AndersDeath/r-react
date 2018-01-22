var id = 0;
export const addCountryItem = (item) => ({
    type: 'ADD_COUNTRY_ITEM',
    id: ++id,
    countryId: item.countryId,
    componentId: item.componentId
  })
  