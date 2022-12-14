import handler from "../utils/handler";
import dynamoDB from "../utils/dynamodb";

export const main = handler(async (event, userId) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    // 'Key' defines the partition key and sort key of the item to be removed
    Key: {
      userId, // The id of the author
      noteId: event.pathParameters.id, // The id of the note from the path
    },
  };

  await dynamoDB.delete(params);

  return { status: true };
});