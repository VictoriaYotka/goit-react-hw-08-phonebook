export const selectFilter = state => state.filter.value;

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
}

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

