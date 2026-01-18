export const getPatientHealthData = async () => {
  return [
    {
      id: 1,
      title: "Steps",
      value: 3620,
      goal: 6000,
      unit: "steps"
    },
    {
      id: 2,
      title: "Active Time",
      value: 56,
      goal: 60,
      unit: "mins",
      extra: "1712 kcal | 1.23 km"
    },
    {
      id: 3,
      title: "Sleep",
      value: 6.5,
      goal: 8,
      unit: "hrs",
      extra: "11:30 pm - 6:00 am"
    }
  ];
};
