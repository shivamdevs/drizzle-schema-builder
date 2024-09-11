import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { schemaList } from "./schemas";

const client = postgres({
    ssl: "require",
});

const db = drizzle(client, { schema: schemaList });

export default db;
