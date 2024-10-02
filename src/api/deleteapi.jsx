let deletedRecords = [];

export const setDeletedRecord = (record) => {
  deletedRecords.push(record);
};

export const getDeletedRecords = () => deletedRecords;
