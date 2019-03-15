// Function used to generate data
export const getData = number => {
  let data = [];
  for (let i = 0; i < number; i++) {
    const obj = {
      title: `Title ${i}`,
      description: `Very very long description of this note. The number is ${i}.`
    };
    data.push(obj);
  }
  return data;
};
