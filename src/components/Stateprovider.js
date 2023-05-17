// set up data layer
// we need this to track the basket
import { createContext, useContext, useReducer } from "react";
// This is the data layer
const StateContext = createContext();

//  BUILD A PROVIDER
const StateProvider = ({ reducer, initialState, children }) => {
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
};
export const useStateValue = () => useContext(StateContext);
export { StateProvider, StateContext };
