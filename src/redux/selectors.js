export const selectFilter = state => state.filter.value;

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
}

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectToken = state => state.user.token;

export const selectUserEmail = state => state.user.user.email;

// export const selectIsModalOpen = state => state.contacts.isModalOpen;

export const selectCurrentContact = state => state.contacts.currentContact;