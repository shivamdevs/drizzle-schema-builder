import { relations } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const schema = pgTable("schema", {});

export const schemaRelation = relations(schema, ({}) => ({}));
