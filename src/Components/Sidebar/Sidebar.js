import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
	const { allMarkers } = useSelector((state) => state.allMarkers);
	const [currentId, setCurrentId] = useState(null);
	// console.log(allMarkers);
	const variants = {
		visible: { opacity: 1, x: "215px" },
		hidden: { opacity: 0, x: "0%" },
	};
	const controlAnimation = useAnimation();

	const slidebarOpen = (id) => {
		setCurrentId(id);

		controlAnimation.start({
			x: 215,
			opacity: 1,
		});
	};
	const slidebarClose = () => {
		controlAnimation.start({
			x: -500,
			opacity: 1,
		});
	};
	return (
		<div className='border p-2 h-100 position-relative'>
			<p className='text-center'>Active trip</p>
			<div>
				{allMarkers?.map((item, id) => (
					<div
						key={"marker-" + id}
						onClick={() => slidebarOpen(id)}
						className='d-flex flex-column my-2 '>
						<span>Vss - {item.License}</span>
						<small>
							{item.Start} - {item.end}
						</small>
						<small>{item.company}</small>
					</div>
				))}
			</div>
			<motion.div
				className='slidingBar'
				// style={{ left: -1000 }}
				initial={{ opacity: 1, x: -500 }}
				animate={controlAnimation}
				// variants={variants}
				// transition={{ delay: 2 }}
			>
				<div className='d-flex align-items-center '>
					<span onClick={slidebarClose} className='me-2'>
						<FontAwesomeIcon icon={faAngleLeft} />
					</span>
					<span>{allMarkers[currentId]?.License}</span>
					{/* <span></span> */}
				</div>
				<div className='d-flex flex-wrap align-items-center justify-content-between'>
					<div className='d-flex flex-column p-1'>
						<small className='text-secondary'>Source</small>
						<span className='slideText'>
							{allMarkers[currentId]?.Start}
						</span>
					</div>
					<div className='d-flex flex-column p-1'>
						<small className='text-secondary'>Destination</small>
						<span className='slideText'>
							{allMarkers[currentId]?.end}
						</span>
					</div>
					<div className='d-flex flex-column p-1'>
						<small className='text-secondary'>Client</small>
						<span className='slideText'>
							{allMarkers[currentId]?.company}
						</span>
					</div>
					<div className='d-flex flex-column p-1'>
						<small className='text-secondary'>Start Date</small>
						<span className='slideText'>
							{allMarkers[currentId]?.startDate}
						</span>
					</div>
					<div className='d-flex flex-column p-1'>
						<small className='text-secondary'>End Date</small>
						<span className='slideText'>
							{allMarkers[currentId]?.endDate}
						</span>
					</div>
				</div>
				<div className='py-2 d-flex align-items-center justify-content-between'>
					<span className='slideText text-secondary'>
						Driver Name
					</span>
					<div>
						<a className='me-2'>{allMarkers[currentId]?.driver}</a>
						<span>
							<FontAwesomeIcon icon={faPhone} />
						</span>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
