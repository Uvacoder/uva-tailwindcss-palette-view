import Head from "next/head";
import colors from "../libs/colors";
import clsx from "clsx";
import copy from "copy-text-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { m } from "framer-motion";

const notify = (text) =>
	toast(
		<p>
			Copied <i>{text}</i>
		</p>,
		{
			icon: <div className={clsx("h-4 w-4 rounded-sm", text)}></div>,

			position: "bottom-right",
		}
	);

export default function Home() {
	function copyToClipboard(text) {
		copy(text);
		notify(text);
	}
	return (
		<>
			<Head>
				<title>
					TailwindCSS color palette viewer, click to copy class name ! Full Tailwind palette (with cyan, rose, emerald)
				</title>
			</Head>
			<Toaster />
			<div className="p-6">
				<header className="flex items-center justify-between mb-7 cetner">
					<div className="flex flex-col items-start space-x-0 xl:flex-row xl:items-end xl:space-x-2">
						<h1 className="text-3xl font-bold tracking-tight dark:text-white text-cool-gray-900 ">
							TailwindCSS full palette{" "}
						</h1>
						<p className="text-gray-400">Click to copy the css class ✨</p>
					</div>
					<a href="https://github.com/MatteoGauthier/full-palette">
						<code className="px-2 py-1 text-sm text-gray-800 bg-gray-100 rounded-md">full-palette@1.2.0</code>
					</a>
				</header>
				<main className="grid grid-cols-11 md:grid-cols-22 gap-x-1 md:gap-x-2">
					{colors.map((group, idx) => {
						return (
							<div key={idx} className="flex flex-col w-full space-y-1 md:space-y-2">
								{colors[idx].map((color, i) => {
									return (
										<m.div
											key={color}
											onClick={() => copyToClipboard(color)}
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 30,
												mass: 1.5,
												delay: Math.random(),
											}}
											aria-label={color}
											tabIndex={0}
											className={clsx(
												"aspect-w-1 focus:ring-2 focus:outline-none rounded aspect-h-1 transform-gpu hover:scale-125 transition-transform ease-in-out cursor-pointer w-full",
												color
											)}
										></m.div>
									);
								})}
							</div>
						);
					})}
				</main>
				<footer className="my-8 text-left text-cool-gray-500">
					Made with love by{" "}
					<a className="font-medium text-cyan-500 " href="https://matteogauthier.fr">
						Mattèo Gauthier
					</a>{" "}
					from{" "}
					<a className="font-medium text-cyan-500 " href="https://squale.agency">
						squale.agency
					</a>
				</footer>
			</div>
		</>
	);
}
