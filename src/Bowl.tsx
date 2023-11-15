import { Img, staticFile } from "remotion";

// const frame = useCurrentFrame();
// const translateToBottom = `translateY(${frame * 5}px)`;
// const rotateRoll = `rotate(${frame * 4}deg)`;

// const fallingBowl: any = {
// 				style: {
// 					transform: `${translateToBottom} ${rotateRoll}`,
// 					alignSelf: 'start',
// 				}
// }; 

export const Bowl = (props: any) => {
  return (
   <Img
      src={staticFile("bowl.png")}
      // style={fallingBowl.style}
      {...props}
    />
  )
};

