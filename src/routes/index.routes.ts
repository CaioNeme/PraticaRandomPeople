import { Router } from "express";
import personRoute from "@/routes/person.routes";
const router = Router();

router.use(personRoute);

export default router;
