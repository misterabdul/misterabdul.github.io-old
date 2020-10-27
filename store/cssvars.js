
export const state = () => ({
    isDarkMode: false
})

export const mutations = {
    setDarkMode(state, value) {
        state.isDarkMode = value
    }
}
