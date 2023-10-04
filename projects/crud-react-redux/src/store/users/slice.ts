import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
