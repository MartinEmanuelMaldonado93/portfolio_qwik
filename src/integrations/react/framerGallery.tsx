/** @jsxImportSource react */
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// import { qwikify$ } from "@builder.io/qwik-react";

const images = [
	"https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
];

const SwipeConfidenceThreshold = 10_000;

// export const ImageGallery = qwikify$(() => {
// 	// const [[page, direction], setPage] = useState([0, 0]);

// 	const imageIndex = wrap(0, images.length, page);

// 	const paginate = (newDirection: number) => {
// 		setPage([page + newDirection, newDirection]);
// 	};
// 	const variants = {
// 		enter: (direction: number) => ({
// 			x: direction > 0 ? 1000 : -1000,
// 			opacity: 0,
// 		}),
// 		exit: (direction: number) => ({
// 			zIndex: 0,
// 			x: direction < 0 ? 1000 : -1000,// 
// 			opacity: 0,
// 		}),
// 		center: {
//       x: 0,
// 			opacity: 1,
// 			zIndex: 1,
// 		},
// 	};
// 	return (
// 		<div className='grid grid-rows-1 grid-cols-1 max-w-md m-auto'>
// 			<AnimatePresence initial={false} custom={direction}>
// 				<motion.img
// 					className='m-auto rounded-md'
// 					style={{ gridArea: "1 / 1" }}
// 					key={page}
// 					src={images[imageIndex]}
// 					custom={direction}
// 					variants={variants}
// 					initial='enter'
// 					animate='center'
// 					exit='exit'
// 					drag='x'
// 					dragConstraints={{ left: 0, right: 0 }}
// 					dragElastic={1}
// 					transition={{
// 						x: { type: "spring", stiffness: 150, damping: 30 },
// 						opacity: { duration: 0.2 },
// 					}}
// 					onDragEnd={(e, { offset, velocity }) => {
// 						const swipe = swipePower(offset.x, velocity.x);

// 						if (swipe < -SwipeConfidenceThreshold) {
// 							paginate(1);
// 						} else if (swipe > SwipeConfidenceThreshold) {
// 							paginate(-1);
// 						}
// 					}}
// 				/>
// 			</AnimatePresence>
// 			<div className='flex justify-between px-10 w-full relative -translate-y-12 z-[3]'>
// 				<Arrow paginate={paginate} dir={dir.prev} />
// 				<Arrow paginate={paginate} dir={dir.next} />
// 			</div>
// 		</div>
// 	);
// });

enum dir {
	next = 1,
	prev = -1,
}
// function Arrow({ paginate, dir }: { paginate: (n: number) => void; dir: dir }) {
// 	return (
// 		<div
// 			className={
// 				"flex justify-center items-center text-center text-black opacity-50 bg-gray-200 w-6 h-6 pointer font-bold text-xl z-[2] align-middle cursor-pointer hover:bg-gray-400 active:bg-gray-200 transition-all scale-75 hover:scale-100"
// 			}
// 			style={{
// 				clipPath:
// 					dir > 0
// 						? "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"
// 						: "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
// 			}}
// 			onClick={() => paginate(dir)}
// 		></div>
// 	);
// }
function swipePower(offset: number, velocity: number) {
	return Math.abs(offset) * velocity;
}
