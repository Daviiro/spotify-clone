import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<Sidebar />
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
			<Footer />
		</div>
	);
}
