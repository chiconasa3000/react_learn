import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "christian suca velando",
		email: "csucavelando@gmail.com",
		github: "chiconasa3000",
	},
	{
		id: "2",
		name: "jordi pompas gutierrez",
		email: "jordi@gmail.com",
		github: "jordirepo",
	},
	{
		id: "3",
		name: "diogenes lugo",
		email: "diogeneslugo@gmail.com",
		github: "diogenesrepo",
	},
	{
		id: "4",
		name: "ali yazici",
		email: "aliyazici@gmail.com",
		github: "alirepo",
	},
	{
		id: "5",
		name: "jame guzman mateus",
		email: "jameguzman@gmail.com",
		github: "jamerepo",
	},
	{
		id: "6",
		name: "leandroruiz",
		email: "leandroruiz@gmail.com",
		github: "leandroruizrepo",
	},
	{
		id: "7",
		name: "christophe kolb",
		email: "christophekolb@gmail.com",
		github: "julio",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

//how to make a function which invoke to itself
//iife inmediately invoked function expression
const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			//payload has the inputs of your form
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			//state es la lista de usuarios
			//el payload es el usuario actual con id

			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);

			//en caso el usuario no exista en DB
			//hacemos el rollback (agregamos nuevamente a la lista)
			if (!isUserAlreadyDefined) {
				return [...state, action.payload];
			}
		},
	},
});

export default usersSlice.reducer;
//exporting actions using userSlice.actions
export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
