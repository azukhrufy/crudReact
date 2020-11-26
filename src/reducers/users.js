let usersTable =  [
    {
      id: 1,
      name: "Moch Rizaldy",
      address: "Bandung",
      age: 21,
      phone: "085777777777",
    },
    {
      id: 2,
      name: "Fitriana",
      address: "Tangerang",
      age: 20,
      phone: "085888888888",
    },
    {
      id: 3,
      name: "Angung Junior",
      address: "Bangka Belitung",
      age: 22,
      phone: "085666777888",
    },
    {
        id: 4,
        name: "Azukhrufy",
        address: "Indramayu",
        age: 21,
        phone: "085666777990",
      },
  ];

const users = (state = usersTable, action) => {
  return state;
};

export default users;
