const reformatDateToYmd = (date) => {
  const dateSplitted = date.split('-');
  return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]} `;
};

export default reformatDateToYmd;
