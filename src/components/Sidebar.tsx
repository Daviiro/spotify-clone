import { Home, Library, Search } from "lucide-react";

export function Sidebar() {
	return (
		<aside className="w-72 bg-zinc-950 p-6">
			<nav className="space-y-5">
				<a
					href=""
					className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
				>
					<Home />
					Home
				</a>
				<a
					href=""
					className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
				>
					<Search />
					Pesquisa
				</a>
				<a
					href=""
					className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
				>
					<Library />
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
	);
}
