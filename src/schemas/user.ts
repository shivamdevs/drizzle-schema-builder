import { bigserial, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const userSchema = pgTable("user", {
    id: bigserial("id", {
        mode: "number",
    })
        .primaryKey()
        .unique()
        .notNull(),
    firstName: varchar("first_name", {
        length: 255,
    }).notNull(),
    lastName: varchar("last_name", {
        length: 255,
    }).notNull(),
    email: varchar("email", {
        length: 255,
    }).notNull(),
    phone: varchar("phone", {
        length: 255,
    }).notNull(),
    mobile: varchar("mobile", {
        length: 255,
    }).notNull(),
    createdAt: timestamp("created_at", {
        mode: "date",
    })
        .notNull()
        .defaultNow(),
    modifiedAt: timestamp("modified_at", {
        mode: "date",
    })
        .notNull()
        .defaultNow(),
    role: varchar("role", {
        length: 255,
    }).notNull(),
});
