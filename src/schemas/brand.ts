import {
    bigserial,
    boolean,
    pgTable,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { userSchema } from "./user";

export const brandSchema = pgTable("brand", {
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

    name: varchar("name", {
        length: 255,
    }).notNull(),
    category: varchar("category", {
        length: 255,
    }).notNull(),
    region: varchar("region", {
        length: 255,
    }).notNull(),

    keyAccountManager: varchar("key_account_manager", {
        length: 255,
    }),
    keyAccount: boolean("key_account").notNull().default(false),

    contractsCounterPartyId: varchar("contracts_counter_party_id", {
        length: 255,
    }).notNull(),
    priority: varchar("priority", {
        length: 16,
    }),
    vertical: varchar("vertical", {
        length: 16,
    }),
    description: varchar("description"),

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
