CREATE TABLE "owners" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "owners_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "pets" (
	"id" serial NOT NULL,
	"owner_id" int NOT NULL,
	"pet_name" varchar(255) NOT NULL,
	"breed" varchar(255) NOT NULL,
	"color" varchar(255) NOT NULL,
	"checked_in" BOOLEAN(255) NOT NULL,
	"checked_date" DATE(255),
	CONSTRAINT "pets_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "pets" ADD CONSTRAINT "pets_fk0" FOREIGN KEY ("owner_id") REFERENCES "owners"("id");