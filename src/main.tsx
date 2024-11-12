import { createRoot } from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layouts/Layout.tsx";
import App from "./App.tsx";
import { AuthPage } from "./components/Pages/AuthPage.tsx";
import store from "./slices/index.js";
import { Provider } from "react-redux";
import { routes } from './helpers/constants.ts';

const router = createBrowserRouter([
	{
		path: routes.main,
		element: <Layout />,
		children: [
			{
				path: routes.auth,
				element: <AuthPage />,
			},
			{
				path: routes.main,
				element: <App />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>,
	);
} else {
	console.error("Element with ID 'root' not found.");
}
