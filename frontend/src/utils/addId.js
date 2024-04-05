import { v4 as uuidv4 } from 'uuid';

const addId = initialObj => {
  return {
    ...JSON.parse(JSON.stringify(initialObj)),
    id: uuidv4(),
  };
};

export default addId;
