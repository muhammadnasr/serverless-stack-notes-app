import handler from "../utils/handler";
import dynamoDB from "../utils/dynamodb";

export const main = handler(async (event, userId) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      // The attributes of the item to be created
      userId, // The id of the author
      noteId: event.pathParameters.id,
    },
  };

  const result = await dynamoDB.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  // Return the retrieved item
  return result.Item;

});