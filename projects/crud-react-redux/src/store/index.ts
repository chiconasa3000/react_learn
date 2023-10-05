import { type Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rollbackUser } from "./users/slice";
// creating a middleware to catch before and after of the action
const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		//before: if you want to validate data before of applying the action
		// console.log(store.getState());
		// console.log(action);
		next(action);
		//after: if you want to synchronize other process after of this action
		// console.log(store.getState());
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action;
		const previousState = store.getState();

		next(action);

		if (type === "users/deleteUserById") {
			const userIdToRemove = payload;
			const userToRemove = previousState.users.find(
				(user) => user.id === payload,
			);

			fetch("https://jsonplaceholder.typicode.com/usasers/${userIdToRemove}", {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok) {
						toast.success(`Usuario ${userIdToRemove} eliminado correctamente`);
					}
					throw new Error("Error al eliminar el usuario");
				})
				.catch((err) => {
					toast.error(`Error deleting user ${userIdToRemove}`);
					if (userToRemove) store.dispatch(rollbackUser(userToRemove));
					console.log(err);
					console.log("error eliminando usuario");
				});
		}
	};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
