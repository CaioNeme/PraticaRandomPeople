import { db } from "@/database/database.connection";
import { Person } from "@/protocols/person.protocols";

async function getPersonRepository(id:number) {
  const person = await db.query<Person>("SELECT * FROM people WHERE id = $1;", [id]);
  return person;
}

async function totalPersons() {
  const totalPersons = await db.query("SELECT COUNT(*) FROM people;");
  return totalPersons.rows[0].count;
}
  
export const PersonRepository = {
  getPersonRepository,
  totalPersons
}