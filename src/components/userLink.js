export const userLink = {
    connect: (comp) => {
        this.component = comp;
    },
    signInSuccessCallback: (result) => {
        return this.component.signInSuccessCallback(result);
    },
    getUid: () => {
        return this.component.state.uid;
    },
    signOut: () => {
        return this.component.signOut()
    }
}