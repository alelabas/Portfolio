import App from "@/App"
import About from "@/layouts/About"
import Home from "@/layouts/Home"
import Projects from "@/layouts/Projects"
import Resume from "@/layouts/Resume"
import { createBrowserRouter } from "react-router-dom"

export const Router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/about",
				Component: About,
			},
			{
				path: "/projects",
				Component: Projects,
			},
			{
				path: "/resume",
				Component: Resume,
			},
		],
	},
])
