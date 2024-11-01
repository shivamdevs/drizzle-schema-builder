import { bigserial, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { userSchema } from "./user";

export const contactSchema = pgTable("contact", {
    id: bigserial("id", {
        mode: "number",
    })
        .primaryKey()
        .unique()
        .notNull(),
    ownerId: bigserial("owner_id", {
        mode: "number",
    })
        .notNull()
        .references(() => userSchema.id),
    brandId: bigserial("brand_id", {
        mode: "number",
    }).notNull(),
    subBrandId: bigserial("sub_brand_id", {
        mode: "number",
    }).notNull(),
    firstName: varchar("first_name", {
        length: 255,
    }).notNull(),
    lastName: varchar("last_name", {
        length: 255,
    }).notNull(),
    title: varchar("title", {
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
    createdBy: bigserial("created_by", {
        mode: "number",
    })
        .notNull()
        .references(() => userSchema.id),
    modifiedBy: bigserial("modified_by", {
        mode: "number",
    })
        .notNull()
        .references(() => userSchema.id),
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
});
