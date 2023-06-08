import {
	Home as HomeIcon,
	Search,
	Library,
	ChevronLeft,
	ChevronRight,
	Play,
	Shuffle,
	SkipBack,
	SkipForward,
	Repeat,
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
							className="flex items-center gap-2 text-sm font-semibold text-zinc-100"
						>
							<HomeIcon />
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
				<main className="flex-1 p-6">
					<div className="flex items-center gap-4">
						<button className="p-1 rounded-full bg-black/40">
							<ChevronLeft />
						</button>
						<button className="p-1 rounded-full bg-black/40">
							<ChevronRight />
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
								<Play />
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
								<Play />
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
								<Play />
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
								<Play />
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
								<Play />
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
								<Play />
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
								<Play />
							</button>
						</a>
					</div>

					<h2 className="font-bold text-2xl mt-10">
						Feito para você
					</h2>

					<div className="grid grid-cols-7 gap-4 mt-4">
						<a
							href=""
							className="bg-white/5 p-3 rounded-ad hover:bg-white/10 flex flex-col gap-2"
						>
							<Image
								src="/album-1.jpg"
								className="w-full"
								width={120}
								height={120}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong className="font-semibold">
								Daily Mix 1
							</strong>
							<span className="text-sm text-zinc-400">
								Transmission, Starset, February
							</span>
						</a>
						<a
							href=""
							className="bg-white/5 p-3 rounded-ad hover:bg-white/10 flex flex-col gap-2"
						>
							<Image
								src="/album-1.jpg"
								className="w-full"
								width={120}
								height={120}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong className="font-semibold">
								Daily Mix 1
							</strong>
							<span className="text-sm text-zinc-400">
								Transmission, Starset, February
							</span>
						</a>
						<a
							href=""
							className="bg-white/5 p-3 rounded-ad hover:bg-white/10 flex flex-col gap-2"
						>
							<Image
								src="/album-1.jpg"
								className="w-full"
								width={120}
								height={120}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong className="font-semibold">
								Daily Mix 1
							</strong>
							<span className="text-sm text-zinc-400">
								Transmission, Starset, February
							</span>
						</a>
						<a
							href=""
							className="bg-white/5 p-3 rounded-ad hover:bg-white/10 flex flex-col gap-2"
						>
							<Image
								src="/album-1.jpg"
								className="w-full"
								width={120}
								height={120}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong className="font-semibold">
								Daily Mix 1
							</strong>
							<span className="text-sm text-zinc-400">
								Transmission, Starset, February
							</span>
						</a>
						<a
							href=""
							className="bg-white/5 p-3 rounded-ad hover:bg-white/10 flex flex-col gap-2"
						>
							<Image
								src="/album-1.jpg"
								className="w-full"
								width={120}
								height={120}
								alt="Capa do album Transmissions da banda Starset"
							/>
							<strong className="font-semibold">
								Daily Mix 1
							</strong>
							<span className="text-sm text-zinc-400">
								Transmission, Starset, February
							</span>
						</a>
					</div>
				</main>
			</div>
			<footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Image
						src="/album-1.jpg"
						className="w-full"
						width={56}
						height={56}
						alt="Capa do album Transmissions da banda Starset"
					/>
					<div className="flex flex-col">
						<strong className="font-normal">February</strong>
						<span className="text-sx text-zinc-500">Starset</span>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex items-center gap-3">
						<Shuffle size={20} className="text-zinc-500" />
						<SkipBack size={20} className="text-zinc-500" />

						<button className="w-12 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
							<Play />
						</button>

						<SkipForward size={20} className="text-zinc-500" />
						<Repeat size={20} className="text-zinc-500" />
					</div>

					<div className="flex items-center gap-2">
						<span className="text-xs text-zinc-500">0:31</span>
						<div className="h-1 rounded-full w-96 bg-zinc-600">
							<div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
						</div>
						<span className="text-xs text-zinc-500">2:14</span>
					</div>
				</div>
				<div></div>
			</footer>
		</div>
	);
}
