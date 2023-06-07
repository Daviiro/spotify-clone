import {
	Home as HomeIcon,
	Search as SearchIcon,
	Library as LibraryIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	Play as PlayIcon,
} from "lucide-react";
import Image from "next/image";

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
				<main className="flex-1 p-6">
					<div className="flex items-center gap-4">
						<button className="p-1 rounded-full bg-black/40">
							<ChevronLeftIcon />
						</button>
						<button className="p-1 rounded-full bg-black/40">
							<ChevronRightIcon />
						</button>
					</div>

					<h1 className="font-bold text-3xl mt-10">Boa tarde</h1>

					<div className="grid grid-cols-3 gap-4 mt-4">
						<a
							href="#"
							className="bg-white/5 rounded overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors group
							"
						>
							<Image
								src="/album-1.jpg"
								width={104}
								height={104}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong>Transmissions</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
								<PlayIcon />
							</button>
						</a>
						<a
							href="#"
							className="bg-white/5 rounded overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors group"
						>
							<Image
								src="/album-1.jpg"
								width={104}
								height={104}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong>Transmissions</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
								<PlayIcon />
							</button>
						</a>
						<a
							href="#"
							className="bg-white/5 rounded overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors group"
						>
							<Image
								src="/album-1.jpg"
								width={104}
								height={104}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong>Transmissions</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
								<PlayIcon />
							</button>
						</a>
						<a
							href="#"
							className="bg-white/5 rounded overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors group"
						>
							<Image
								src="/album-1.jpg"
								width={104}
								height={104}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong>Transmissions</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
								<PlayIcon />
							</button>
						</a>
						<a
							href="#"
							className="bg-white/5 rounded overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors group"
						>
							<Image
								src="/album-1.jpg"
								width={104}
								height={104}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong>Transmissions</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
								<PlayIcon />
							</button>
						</a>
						<a
							href="#"
							className="bg-white/5 rounded overflow-hidden gap-4 flex items-center hover:bg-white/10 transition-colors group"
						>
							<Image
								src="/album-1.jpg"
								width={104}
								height={104}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong>Transmissions</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
								<PlayIcon />
							</button>
						</a>
						<a
							href="#"
							className="bg-white/5 rounded overflow-hidden flex items-center hover:bg-white/10 transition-colors group gap-4"
						>
							<Image
								src="/album-1.jpg"
								width={104}
								height={104}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong>Transmissions</strong>
							<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
								<PlayIcon />
							</button>
						</a>
					</div>

					<h2 className="font-bold text-2xl mt-10">
						Feito para você
					</h2>
				</main>
			</div>
			<footer className="h-24 bg-zinc-800 border-t border-zinc-700 p-6">
				Footer
			</footer>
		</div>
	);
}
