import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { Easing, interpolate } from "remotion";
import { Bowl } from "./Bowl";
import { Ground } from "./Ground";
// import Bowl from "./Bowl";

export const MyComposition = () => {

	const frame = useCurrentFrame();
	const translateToBottom = `translateY(${frame * 5}px)`;
	const rotateRoll = `rotate(${frame * 4}deg)`;
  const elasticInterpolated = interpolate(frame, [54, 69], [0, 100], {
    easing: Easing.elastic(),
  });
  const easeInterpolated = interpolate(frame, [69, 84], [0, 100], {
    easing: Easing.ease,
  });
  const easeInterpolatedFar = interpolate(frame, [84, 98], [0, 100], {
    easing: Easing.ease,
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
  });
  const linearInterpolatedGround = interpolate(frame, [99, 114], [36, 50], {
    easing: Easing.linear,
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
  });
  // const linearInterpolatedBallMargin= interpolate(frame, [99, 114], [200, 300], {
  //   easing: Easing.linear,
		// extrapolateLeft: "clamp",
		// extrapolateRight: "clamp",
  // });
  const linearXMinus= interpolate(frame, [99, 114], [0, 100], {
    easing: Easing.linear,
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
  });
  const linearYMinus= interpolate(frame, [99, 114], [0, 50], {
    easing: Easing.linear,
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
  });
  const linearX= interpolate(frame, [114, 150], [0, 1500], {
    easing: Easing.linear,
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
  });
  const linearY= interpolate(frame, [114, 150], [0, 450], {
    easing: Easing.linear,
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
  });

	console.log(elasticInterpolated);
	console.log(`${50 - (frame - 54)}%`)

	const fallingBowl: any = {
					style: {
						transform: `${translateToBottom} ${rotateRoll}`,
						alignSelf: 'start',
					}
	}; 

	const BounceUpward: any = {
					style: {
						alignSelf: 'start',
		        transform: `translateY(${-elasticInterpolated}px) translateX(${elasticInterpolated}px) ${rotateRoll}`					
					}
	}; 

	const BounceDownward: any = {
					style: {
						marginLeft: "100px",
						marginBottom: "100px",
						alignSelf: 'start',
		        transform: `translateY(${easeInterpolated}px) translateX(${easeInterpolated}px) ${rotateRoll}`					
					}
	}; 

	const downRigthMovement: any = {
					style: {
						marginLeft: "200px",
						marginTop: "200px",
						alignSelf: 'start',
		        transform: `translateY(${easeInterpolatedFar}px) translateX(${easeInterpolatedFar}px) ${rotateRoll}`					
					}
	}; 

	const scrollingDownRigthMovement: any = {
					style: {
						// marginLeft:`400 + ${linearInterpolatedGround} px`,
						// marginTop: `400 + ${linearInterpolatedGround} px`,
						// marginLeft:`${linearInterpolatedBallMargin}px`,
						// marginTop: `${linearInterpolatedBallMargin}px`,
						// marginLeft: "200px",
						// marginTop: "250px",
						alignSelf: 'start',
		        transform: `translateY(-${linearYMinus}px) translateX(-${linearXMinus + easeInterpolatedFar / 4}px) ${rotateRoll}`					
					}
	}; 

	const finalMovement: any = {
					style: {
						// marginLeft:`200px`,
						// marginTop: `200px`,
						alignSelf: 'start',
		        transform: `translateY(${linearY}px) translateX(${linearX}px) ${rotateRoll}`					
					}
	}; 

	// const expandGround = `${10 + (frame / 2)}%`
	console.log(frame);
	// console.log(translateToBottom);
	return (
		<>
			<Sequence
				durationInFrames={54}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'space-between',
						alignItems: 'center',
						backgroundColor: 'white',
						flexWrap: 'wrap', 
					}}
				>
					<Bowl
						style={fallingBowl.style}
				 	/>
					<Ground />
				</AbsoluteFill>
			</Sequence>
			<Sequence
				from={54}
				durationInFrames={15}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'flex-end',
						alignItems: 'center',
						backgroundColor: 'white',
						flexWrap: 'wrap', 
					}}
				>
					<Bowl
						style={BounceUpward.style}
				 	/>
					<div
						style={{
							display: 'flex',
							width: '100%',
							height: '36.5%',
						}}
					>
						<div
							style={{
								backgroundColor: 'maroon',
								width: `${50 - (frame - 54)}%`,
								height: '100%',
								zIndex: 1,
							}}
						>
						{frame}
						</div>
						<div
							style={{
								alignSelf: 'end',
								justifySelf: 'end',
								backgroundColor: 'maroon',
								width: `${50 + (frame - 54)}%`,
								height: '100%',
								zIndex: 1,
								clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
							}}
						>
						</div>
				</div>
			</AbsoluteFill>
		</Sequence>
		<Sequence
				from={69}
				durationInFrames={15}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'flex-end',
						alignItems: 'center',
						backgroundColor: 'white',
						flexWrap: 'wrap', 
					}}
				>
					<Bowl
						style={BounceDownward.style}
				 	/>
					<div
						style={{
							display: 'flex',
							width: '100%',
							height: '36.5%',
						}}
					>
							<div
							style={{
								backgroundColor: 'maroon',
								width: `${50 - (frame - 54)}%`,
								height: '100%',
								zIndex: 1,
							}}
						>
							{frame}
							</div>
							<div
							style={{
								alignSelf: 'end',
								justifySelf: 'end',
								backgroundColor: 'maroon',
								width: `${50 + (frame - 54)}%`,
								height: '100%',
								zIndex: 1,
								clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
							}}
						>
							</div>
					</div>
				</AbsoluteFill>
			</Sequence>
			<Sequence
				from={84}
				durationInFrames={15}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'flex-end',
						alignItems: 'center',
						backgroundColor: 'white',
						flexWrap: 'wrap', 
					}}
				>
					<Bowl
						style={downRigthMovement.style}
				 	/>
					<div
						style={{
							display: 'flex',
							width: '100%',
							height: '36.5%',
						}}
					>
						<div
							style={{
								backgroundColor: 'maroon',
								width: `${50 - (frame - 54)}%`,
								height: '100%',
								zIndex: 1,
							}}
						>
						{frame}
						</div>
						<div
							style={{
								alignSelf: 'end',
								justifySelf: 'end',
								backgroundColor: 'maroon',
								width: `${50 + (frame - 54)}%`,
								height: '100%',
								zIndex: 1,
								clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
							}}
						>
						</div>
					</div>
				</AbsoluteFill>
			</Sequence>
			<Sequence
				from={99}
				durationInFrames={15}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'flex-end',
						alignItems: 'center',
						backgroundColor: 'white',
						flexWrap: 'wrap', 
					}}
				>
					<Bowl
						style={scrollingDownRigthMovement.style}
				 	/>
					<div
						style={{
							display: 'flex',
							width: '100%',
							height: `${linearInterpolatedGround}%`,
						}}
					>
						<div
							style={{
								backgroundColor: 'maroon',
								width: '0%',
								height: '100%',
								zIndex: 1,
							}}
						>
						{frame}
						</div>
						<div
							style={{
								alignSelf: 'end',
								justifySelf: 'end',
								backgroundColor: 'maroon',
								width: '100%',
								height: '100%',
								zIndex: 1,
								clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
							}}
						>
						</div>
					</div>
				</AbsoluteFill>
			</Sequence>
			<Sequence
				from={114}
				durationInFrames={50}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'flex-end',
						alignItems: 'center',
						backgroundColor: 'white',
						flexWrap: 'wrap', 
					}}
				>
					<Bowl
						style={finalMovement.style}
				 	/>
					<div
						style={{
							display: 'flex',
							width: '100%',
							height: `50%`,
						}}
					>
						<div
							style={{
								backgroundColor: 'maroon',
								width: '0%',
								height: '100%',
								zIndex: 1,
							}}
						>
						{frame}
						</div>
						<div
							style={{
								alignSelf: 'end',
								justifySelf: 'end',
								backgroundColor: 'maroon',
								width: '100%',
								height: '100%',
								zIndex: 1,
								clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
							}}
						>
						</div>
					</div>
				</AbsoluteFill>
			</Sequence>
		</>
	)
};
