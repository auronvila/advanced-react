export default function reducer(state, action){
    switch (action.type){
        case "SWITCH_LANGUAGE":
            return {
                ...state,
                language: state.theme === "TR" ? "EN" : "TR"
            }
    }
}