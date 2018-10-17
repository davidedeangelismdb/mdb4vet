db.patients.drop();
db.patients.insert({
    "_id" : ObjectId("507f191e810c19729de860ef"),
    "patient" : {
        "name" : "Cuddles",
        "type" : "dog",
        "breed" : "poodle",
        "gender" : "female",
        "photo" : "https://dogzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2017/09/poodle-names-4.jpg",
        "last_visit" : ISODate("2018-10-02T19:33:01Z")
    },
    "owner" : {
        "first_name" : "Davide",
        "last_name" : "De Angelis",
        "phone_number" : "2223334444"
    },
    "prescriptions" : [
        {
            "name" : "anti-nausea",
            "start" : ISODate("2018-09-10T00:00:00Z"),
            "end" : ISODate("2018-09-17T00:00:00Z"),
            "active" : true
        }
    ]
});
db.patients.insert({
	"_id" : ObjectId("507f191e810c19729de860ee"),
    "patient" : {
        "name" : "Rover",
        "type" : "dog",
        "breed" : "lab",
        "gender" : "male",
        "photo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Labrador_Retriever_chocolate_Hershey_sit_%28cropped%29.jpg/800px-Labrador_Retriever_chocolate_Hershey_sit_%28cropped%29.jpg",
        "last_visit" : ISODate("2018-10-02T19:33:01Z")
    },
    "owner" : {
        "first_name" : "Cian",
        "last_name" : "Hatton",
        "phone_number" : "534523423"
    },
    "prescriptions" : [
        {
            "name" : "anti-nausea",
            "start" : ISODate("2018-09-10T00:00:00Z"),
            "end" : ISODate("2018-09-17T00:00:00Z"),
            "active" : true
		},
		{
            "name" : "dog pills",
            "start" : ISODate("2018-09-10T00:00:00Z"),
            "end" : ISODate("2018-09-17T00:00:00Z"),
            "active" : true
        }
    ]
});
db.patients.insert({
	"_id" : ObjectId("507f191e810c19729de860dd"),
	"patient" : {
		"name" : "Mr. Meows",
		"type" : "cat",
		"breed" : "tabby",
		"gender" : "male",
		"photo" : "https://www.thehappycatsite.com/wp-content/uploads/2017/05/tabby.jpg",
		"last_visit" : ISODate("2018-10-02T19:33:01Z")
	},
	"owner" : {
		"first_name" : "Jim",
		"last_name" : "Bob",
		"phone_number" : "22235344444"
	},
	"prescriptions" : [
		{
			"name" : "anxiety medicine",
			"start" : ISODate("2018-09-10T00:00:00Z"),
			"end" : ISODate("2018-09-17T00:00:00Z"),
			"active" : true
        },
        {
			"name" : "stress medicine",
			"start" : ISODate("2018-09-10T00:00:00Z"),
			"end" : ISODate("2018-09-17T00:00:00Z"),
			"active" : true
		}
	]
});

db.appointments.drop();
db.appointments.insert({
	"patient_id" : ObjectId("507f191e810c19729de860ef"),
	"vet_id" : 33,
	"date" : ISODate("2018-10-16T18:23:20.788Z"),
	"desc" : "Cuddles was very anxious"
});
db.appointments.insert({
	"patient_id" : ObjectId("507f191e810c19729de860ee"),
	"vet_id" : 33,
	"date" : ISODate("2018-10-16T18:23:20.788Z"),
	"desc" : "Rover was a dog"
});
db.appointments.insert({
	"patient_id" : ObjectId("507f191e810c19729de860dd"),
	"vet_id" : 33,
	"date" : ISODate("2018-10-16T18:23:20.788Z"),
	"desc" : "Mr Meows is great!"
});