import { query } from "../db/index.js";

//CHECK IF IT WORKS, MIGHT BE FOOKED
export async function getUserById(userId) {
  const result = await query(
    `
    SELECT *
    FROM users
    WHERE userId = $1
    `,
    [userId]
  );
  return result.rows;
}

export async function getEventOrganiserById(userId) {
  const result = await query(
    `
    SELECT userName, email
    FROM users
    WHERE userId = $1
    `,
    [userId]
  );
  return result.rows;
}

export async function getEventAttendees(eventId) {
  const result = await query(
    `
    SELECT userEvens.eventId, users.userName, users.img
    FROM userEvents
    INNER JOIN users
    ON userEvents.userId = users.userId
    WHERE userEvents.eventId = $1
    `,
    [eventId]
  );
  return result.rows;
}
