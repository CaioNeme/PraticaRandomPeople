import personService from "@/services/person.services";
import { Request, Response } from "express";


export async function getPerson(_: Request, res: Response): Promise<void> {

  const person = await personService.getPerson();

  res.status(200).json(person.rows[0]);

}

