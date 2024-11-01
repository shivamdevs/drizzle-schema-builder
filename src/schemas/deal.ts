import {
    bigserial,
    boolean,
    integer,
    pgTable,
    serial,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { userSchema } from "./user";
import { brandSchema } from "./brand";
import { contactSchema } from "./contact";
import { subBrandSchema } from "./sub-brand";

export const dealSchema = pgTable("deal", {
    id: serial("id").primaryKey().unique().notNull(),
    name: varchar("name", {
        length: 255,
    }).notNull(),

    ownerId: bigserial("owner_id", {
        mode: "number",
    })
        .notNull()
        .references(() => userSchema.id),
    brandId: bigserial("brand_id", {
        mode: "number",
    })
        .notNull()
        .references(() => brandSchema.id),
    subBrandId: bigserial("sub_brand_id", {
        mode: "number",
    })
        .notNull()
        .references(() => subBrandSchema.id),
    contactId: bigserial("contact_id", {
        mode: "number",
    })
        .notNull()
        .references(() => contactSchema.id),

    subBrandVerticalReadOnly: varchar("sub_brand_vertical_read_only", {
        length: 255,
    }).notNull(),
    stage: varchar("stage", {
        length: 255,
    }).notNull(),
    region: varchar("region", {
        length: 255,
    }).notNull(),

    estimatedClosingDate: timestamp("estimated_closing_date", {
        mode: "date",
    }).notNull(),
    closedWonDate: timestamp("closed_won_date", {
        mode: "date",
    }),

    source: varchar("source", {
        length: 255,
    }).notNull(),
    businessUnit: varchar("business_unit", {
        length: 255,
    }).notNull(),
    subBusinessUnit: varchar("sub_business_unit", {
        length: 255,
    }).notNull(),
    businessCenter: varchar("business_center", {
        length: 255,
    }).notNull(),
    businessRegion: varchar("business_region", {
        length: 255,
    }).notNull(),

    // agency:
    // talentAgent:
    // talentLocked: [MultiSelect]
    // servicingLead:
    // executionPOC:
    // solutionsPOC:
    // talentManager:

    barterDeal: boolean("barter_deal").notNull().default(false),
    shootDays: integer("shoot_days").notNull(),
    proactiveType: varchar("proactive_type", {
        length: 255,
    }).notNull(),
    productSold: varchar("product_sold", {
        length: 255,
    }).notNull(),
    pitchType: varchar("pitch_type", {
        length: 255,
    }).notNull(),
    pitchMade: varchar("pitch_made", {
        length: 255,
    }).notNull(),

    topical: varchar("topical", {
        length: 255,
    }).notNull(),
    ip: varchar("ip", {
        length: 255,
    }).notNull(),
    briefDetails: varchar("brief_details").notNull(),
    briefDetail: varchar("brief_detail").notNull(),
});
