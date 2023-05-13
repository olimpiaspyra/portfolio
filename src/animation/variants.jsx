export const variantsH1 = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1, transition: {duration: 2}},
};

export const variantsH2 = {
  hidden: {opacity: 0, x: '-100vh'},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 1.5,
      x: {type: 'spring', stiffness: 50},
    },
  },
};

export const variantsH3 = {
  hidden: {opacity: 0, x: '100vh'},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 1.5,
      x: {type: 'spring', stiffness: 50},
    },
  },
};

export const variantsP = {
  hidden: {opacity: 0, y: '100vh'},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 2,
      y: {type: 'spring', stiffness: 50},
    },
  },
};

export const variantsFromX = (xStart, delay = 2.5) => ({
  hidden: {opacity: 0, x: xStart},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 2,
      x: {type: 'spring', stiffness: 30},
    },
  },
});
