import posed from 'react-pose';

const Box = posed.div({
      hoverable: true,
      init: {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0.1)",
      },
      hover: {
        scale: 1.05,

      }
});

/*const jump = posed.div({
  left: { x: -100 },
  right: { x: 100 }
})*/


export default Box;

