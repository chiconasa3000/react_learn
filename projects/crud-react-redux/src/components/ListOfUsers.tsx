import {
	Badge,
	Card,
	MultiSelect,
	MultiSelectItem,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

//import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/store";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Icon } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

type user = {
	id: string;
	name: string;
	email: string;
	github: string;
};

export default function ListOfUsers() {
	//actions
	const { removeUser } = useUserActions();

	//list of user from the store
	const developers = useAppSelector((state) => state.users);

	//sate of list of names
	const [selectedNames, setSelectedNames] = useState<string[]>([]);

	//filter function
	const isUserSelected = (user: user) =>
		selectedNames.includes(user.name) || selectedNames.length === 0;

	return (
		<>
			<Title style={{ margin: "20px" }}>
				Usuarios
				<Badge style={{ marginLeft: "8px" }}>{developers.length}</Badge>
			</Title>
			<Card>
				<MultiSelect
					onValueChange={setSelectedNames}
					placeholder="Select developers..."
					className="max-w-xs"
				>
					{developers.map((item) => (
						<MultiSelectItem key={item.name} value={item.name}>
							{item.name}
						</MultiSelectItem>
					))}
				</MultiSelect>
				<Table className="mt-6">
					<TableHead>
						<TableRow>
							<TableHeaderCell>Id</TableHeaderCell>
							<TableHeaderCell className="text-right">Name</TableHeaderCell>
							<TableHeaderCell className="text-right">Email</TableHeaderCell>
							<TableHeaderCell className="text-right">Github</TableHeaderCell>
							<TableHeaderCell className="text-right">Acciones</TableHeaderCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{developers
							.filter((item) => isUserSelected(item))
							.map((item) => (
								<TableRow key={item.id}>
									<TableCell>{item.id}</TableCell>
									<TableCell style={{ display: "flex", alignItems: "center" }}>
										<img
											style={{
												width: "32px",
												height: "32px",
												borderRadius: "50%",
												marginRight: "8px",
											}}
											src={`https://unavatar.io/github/${item.github}`}
											alt="avatar"
										/>
										{item.name}
									</TableCell>
									<TableCell className="text-right">{item.email}</TableCell>
									<TableCell className="text-right">{item.github}</TableCell>
									<TableCell className="text-right">
										<button type="button">
											<Icon size="sm" icon={PencilIcon} />
										</button>
										<button onClick={() => removeUser(item.id)} type="button">
											<Icon size="sm" icon={TrashIcon} />
										</button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</Card>
		</>
	);
}
