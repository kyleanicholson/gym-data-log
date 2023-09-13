const workouts = [
  {
    title: "Bench Day",
    muscle_groups: ["Chest", "Shoulders", "Triceps"],
    day_of_week: "Monday",
    date: "2023-07-15",
    exercises: [
      {
        name: "Bench Press",
        sets: [
          {
            weight: 135,
            reps: 10,
            rpe: 8,
            objectID: 0,
          },
          {
            weight: 145,
            reps: 8,
            rpe: 7,
            objectID: 1,
          },
          {
            weight: 155,
            reps: 6,
            rpe: 9,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 0,
      },
      {
        name: "Tricep Extension",
        sets: [
          {
            weight: 50,
            reps: 10,
            rpe: 7,
            objectID: 0,
          },
          {
            weight: 55,
            reps: 8,
            rpe: 6,
            objectID: 1,
          },
          {
            weight: 60,
            reps: 8,
            rpe: 8,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 1,
      },
      {
        name: "Shoulder Press",
        sets: [
          {
            weight: 50,
            reps: 10,
            rpe: 6,
            objectID: 0,
          },
          {
            weight: 55,
            reps: 8,
            rpe: 7,
            objectID: 1,
          },
          {
            weight: 60,
            reps: 6,
            rpe: 8,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 2,
      },
    ],
    objectID: 0,
  },
  {
    title: "Leg Day",
    muscle_groups: ["Legs", "Calves"],
    day_of_week: "Wednesday",
    date: "2023-07-19",
    exercises: [
      {
        name: "Squats",
        sets: [
          {
            weight: 185,
            reps: 8,
            rpe: 7,
            objectID: 0,
          },
          {
            weight: 195,
            reps: 6,
            rpe: 8,
            objectID: 1,
          },
          {
            weight: 205,
            reps: 6,
            rpe: 9,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 0,
      },
      {
        name: "Leg Press",
        sets: [
          {
            weight: 225,
            reps: 10,
            rpe: 7,
            objectID: 0,
          },
          {
            weight: 235,
            reps: 8,
            rpe: 8,
            objectID: 1,
          },
          {
            weight: 245,
            reps: 6,
            rpe: 9,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 1,
      },
      {
        name: "Leg Extension",
        sets: [
          {
            weight: 50,
            reps: 10,
            rpe: 6,
            objectID: 0,
          },
          {
            weight: 55,
            reps: 8,
            rpe: 7,
            objectID: 1,
          },
          {
            weight: 60,
            reps: 6,
            rpe: 8,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 2,
      },
      {
        name: "Leg Curl",
        sets: [
          {
            weight: 50,
            reps: 10,
            rpe: 6,
            objectID: 0,
          },
          {
            weight: 55,
            reps: 8,
            rpe: 7,
            objectID: 1,
          },
          {
            weight: 60,
            reps: 6,
            rpe: 8,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 3,
      },
    ],
    objectID: 1,
  },
  {
    title: "Back Day",
    muscle_groups: ["Back", "Biceps"],
    day_of_week: "Friday",
    date: "2023-07-21",
    exercises: [
      {
        name: "Deadlift",
        sets: [
          {
            weight: 225,
            reps: 5,
            rpe: 8,
            objectID: 0,
          },
          {
            weight: 245,
            reps: 4,
            rpe: 9,
            objectID: 1,
          },
        ],
        notes: "This is a note",
        objectID: 0,
      },
      {
        name: "Lat Pulldown",
        sets: [
          {
            weight: 50,
            reps: 10,
            rpe: 7,
            objectID: 0,
          },
          {
            weight: 60,
            reps: 8,
            rpe: 8,
            objectID: 1,
          },
        ],
        notes: "This is a note",
        objectID: 1,
      },
      {
        name: "Bicep Curl",
        sets: [
          {
            weight: 50,
            reps: 10,
            rpe: 6,
            objectID: 0,
          },
          {
            weight: 55,
            reps: 8,
            rpe: 7,
            objectID: 1,
          },
          {
            weight: 60,
            reps: 6,
            rpe: 8,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 2,
      },
    ],
    objectID: 2,
  },
  {
    title: "Chest Day",
    muscle_groups: ["Chest", "Triceps"],
    day_of_week: "Saturday",
    date: "2023-07-22",
    exercises: [
      {
        name: "Bench Press",
        sets: [
          {
            weight: 185,
            reps: 8,
            rpe: 7,
            objectID: 0,
          },
          {
            weight: 195,
            reps: 6,
            rpe: 8,
            objectID: 1,
          },
          {
            weight: 205,
            reps: 6,
            rpe: 9,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 0,
      },
      {
        name: "Incline Bench Press",
        sets: [
          {
            weight: 185,
            reps: 8,
            rpe: 7,
            objectID: 0,
          },
          {
            weight: 195,
            reps: 6,
            rpe: 8,
            objectID: 1,
          },
          {
            weight: 205,
            reps: 6,
            rpe: 9,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 1,
      },
      {
        name: "Cable Flys",
        sets: [
          {
            weight: 50,
            reps: 10,
            rpe: 6,
            objectID: 0,
          },
          {
            weight: 55,
            reps: 8,
            rpe: 7,
            objectID: 1,
          },
          {
            weight: 60,
            reps: 6,
            rpe: 8,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 2,
      },
      {
        name: "Tricep Pulldown",
        sets: [
          {
            weight: 50,
            reps: 10,
            rpe: 6,
            objectID: 0,
          },
          {
            weight: 55,
            reps: 8,
            rpe: 7,
            objectID: 1,
          },
          {
            weight: 60,
            reps: 6,
            rpe: 8,
            objectID: 2,
          },
        ],
        notes: "This is a note",
        objectID: 3,
      },
    ],
    objectID: 3,
  },
];

export default workouts;
