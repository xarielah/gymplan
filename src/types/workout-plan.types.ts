type Plan = {
  name: string;
  description?: string;
  days: string[];
  workouts: Workout[];
} & Partial<Timestamps>;

type Timestamps = {
  updatedAt: Date;
  createdAt: Date;
};

type Workout = {
  workoutType: string;
  description?: string;
  sets: WorkoutSet[];
};

type WorkoutSet = {
  setName: string;
  fields: {
    label: string;
    value: string;
  }[];
  notes: string;
};

export type { Plan, Workout, WorkoutSet };
