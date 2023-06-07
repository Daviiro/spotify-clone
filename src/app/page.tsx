import {
	Home as HomeIcon,
	Search as SearchIcon,
	Library as LibraryIcon,
} from "lucide-react";

export default function Home() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<aside className="w-72 bg-zinc-950 p-6">
					<nav className="space-y-5">
						<a
							href=""
							className="flex items gap-2 text-sm font-semibold text-zinc-100"
						>
							<HomeIcon />
							Home
						</a>
						<a
							href=""
							className="flex items gap-2 text-sm font-semibold text-zinc-100"
						>
							<SearchIcon />
							Pesquisa
						</a>
						<a
							href=""
							className="flex items gap-2 text-sm font-semibold text-zinc-100"
						>
							<LibraryIcon />
							Sua Biblioteca
						</a>
					</nav>
					<nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3 text-sm text-zinc-400 ">
						<a href="" className="hover:text-zinc-100">
							Best of Metal
						</a>
						<a href="" className="hover:text-zinc-100">
							Rock 'n Roll
						</a>
						<a href="" className="hover:text-zinc-100">
							Starset Playlist
						</a>
						<a href="" className="hover:text-zinc-100">
							Three Days Grace
						</a>
						<a href="" className="hover:text-zinc-100">
							FFDP
						</a>
						<a href="" className="hover:text-zinc-100">
							Top Mundo
						</a>
						<a href="" className="hover:text-zinc-100">
							Top Brazil
						</a>
					</nav>
				</aside>
				<main className="flex-1 p-6">Main</main>
			</div>
			<footer className="h-24 bg-zinc-800 border-t border-zinc-700 p-6">
				Footer
			</footer>
		</div>
	);
}
