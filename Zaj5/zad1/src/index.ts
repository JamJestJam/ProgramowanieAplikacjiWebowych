import Resource from "./Resorce";
import { AdminUser } from "./Users/admin";
import { ModeratorUser } from "./Users/moderator";
import { StandardUser } from "./Users/standard";

const user1 = new StandardUser("us1", "us1");
const user2 = new ModeratorUser("us2", "us2");
const user3 = new AdminUser("us3", "us3");
const res = new Resource();

res.read(user3);
res.change(user3);
res.read(user2);
res.change(user2);
res.read(user1);
res.change(user1);