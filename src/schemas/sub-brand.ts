import { bigserial, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { userSchema } from "./user";
import { brandSchema } from "./brand";

export const subBrandSchema = pgTable("sub_brand", {
    id: bigserial("id", {
        mode: "number",
    })
        .primaryKey()
        .unique()
        .notNull(),

    brandId: bigserial("brand_id", {
        mode: "number",
    })
        .notNull()
        .references(() => brandSchema.id),
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
    type: varchar("type", {
        length: 255,
    }),
    description: varchar("description"),
    coolOffDate: timestamp("cool_off_date", {
        mode: "date",
    }),
    vertical: varchar("vertical", {
        length: 16,
    }),
    lastContactedDate: timestamp("last_contacted_date", {
        mode: "date",
    }),

    gstNumber: varchar("gst_number", {
        length: 255,
    }),
    panNumber: varchar("pan_number", {
        length: 255,
    }),
    tanNumber: varchar("tan_number", {
        length: 255,
    }),

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

    email: varchar("email", {
        length: 255,
    }).notNull(),
    phone: varchar("phone", {
        length: 255,
    }).notNull(),

    addressStreet: varchar("address_street", {
        length: 255,
    }).notNull(),
    addressCity: varchar("address_city", {
        length: 255,
    }).notNull(),
    addressState: varchar("address_state", {
        length: 255,
    }).notNull(),
    addressCountry: varchar("address_country", {
        length: 255,
    }).notNull(),
    addressPincode: varchar("address_pincode", {
        length: 255,
    }).notNull(),
});
