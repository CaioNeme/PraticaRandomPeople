import { PersonRepository } from '@/repositories/person.repositories';

async function getPerson(){
    const totalPersons: Promise<number> = await PersonRepository.totalPersons();

    let randomIndex: number = Math.floor(Math.random() * await totalPersons) + 1

    return PersonRepository.getPersonRepository(randomIndex);
}

const personService = {
    getPerson
  }
  
  export default personService;
