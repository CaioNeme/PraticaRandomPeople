import { Router } from "express";
import {getPerson} from "@/controllers/person.controllers";

const personRoute = Router();

personRoute.get("/person", getPerson);

export default personRoute;
