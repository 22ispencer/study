import { column, defineDb, defineTable } from "astro:db";

const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const TrackedHours = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => Users.columns.id }),
    timeIn: column.date(),
    timeOut: column.date(),
    location: column.json(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Users, TrackedHours },
});
