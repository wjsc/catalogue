export const userLink = {
    connect: (comp) => {
        this.component = comp;
    },
    getUid: () => {
        return this.component.state.uid;
    }
}