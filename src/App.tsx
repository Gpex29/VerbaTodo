import { useSelector } from "react-redux";
import type { RootState } from "./slices/index.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
	const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
	const navigate = useNavigate();

	useEffect(() => {
		if (!loggedIn) {
			navigate("authentication");
		}
	}, [loggedIn, navigate]);

	return (
		<>
			<Header />
			<Main />
		</>
	);
};

export default App;
