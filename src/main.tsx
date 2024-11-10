import { createRoot } from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import App from "./App.tsx";
import { AuthPage } from "./components/AuthPage.tsx";
import store from "./slices/index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "authentication",
				element: <AuthPage />,
			},
			{
				path: "/",
				element: <App />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
);
