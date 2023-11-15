import { useCurrentFrame } from "remotion";

export const Ground = () => {

	const frame = useCurrentFrame();
	const expandGround = `${10 + (frame / 2)}%`

  return (
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: expandGround,
				}}
			>
				<div
					style={{
						// alignSelf: 'start',
						// justifySelf: 'end',
						backgroundColor: 'maroon',
						width: '50%',
						height: '100%',
						zIndex: 1,
					}}
				>
				</div>
				<div
					style={{
						alignSelf: 'end',
						justifySelf: 'end',
						backgroundColor: 'maroon',
						width: '50%',
						height: '100%',
						zIndex: 1,
						clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
					}}
				>
				</div>
			</div>
  ) 
};
