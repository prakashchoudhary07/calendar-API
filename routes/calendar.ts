import { Router } from "express";
import {
  googleConnectHandler,
  googleCallbackHandler,
  getUserCalendar,
} from "../controllers/calendar";
import authenticate from "../middlewares/authenticate";

const router = Router();

router.get("/google/connect", googleConnectHandler);
router.get("/google/callback", googleCallbackHandler);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/:username", authenticate, getUserCalendar);

export default router;
