export const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const piece = (Math.random() * 16) | 0;
    const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
    return elem.toString(16);
  });
};

// output: "afc29035-0ae0-495b-b50b-b2e1006db19b" 😅
