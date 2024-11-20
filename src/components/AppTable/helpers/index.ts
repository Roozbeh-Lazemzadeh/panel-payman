export const formatLabel = (label: string): string => {
  return label.replace(/_/g, ' ');
};

export const calculateReduction = (
  tableTop: number,
  windowHeight: number
): number => {
  if (tableTop > 560) {
    return 110;
  } else if (tableTop > 530) {
    //540
    return 125;
  } else if (tableTop > 500) {
    //519
    return 125;
  } else if (tableTop > 450) {
    //468
    return 130;
  } else if (tableTop > 400) {
    //448
    return windowHeight > 1000 ? 130 : 150;
  } else if (tableTop > 350) {
    //356
    return windowHeight > 1000 ? 130 : 150;
  } else if (tableTop > 300) {
    //335 //315
    return windowHeight > 1000 ? 150 : 125;
  } else if (tableTop > 250) {
    //284
    return 130;
  } else {
    return 140; // Default value for  small `tableTop`
  }
};
