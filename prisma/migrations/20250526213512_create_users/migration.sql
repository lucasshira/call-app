-- CreateTable
create table "users" (
   "id"         text not null primary key,
   "username"   text not null,
   "name"       text not null,
   "created_at" datetime not null default current_timestamp,
   "updated_at" datetime not null
);

-- CreateIndex
create unique index "users_username_key" on
   "users" (
      "username"
   );