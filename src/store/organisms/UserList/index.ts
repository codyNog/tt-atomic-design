import { User } from "~/domain/entity/User";

const users: User[] = [
  {
    uid: "foo",
    name: "Kohki Noguchi",
    age: 28,
    organization: "JX通信社",
    features: []
  },
  {
    uid: "bar",
    name: "Tanjiro Kamado",
    age: 15,
    organization: "鬼殺隊",
    features: []
  },
  {
    uid: "baz",
    name: "Yuji Itadori",
    age: 15,
    organization: "東京都立呪術高等専門学校",
    features: []
  }
];

export const useUserList = () => {
  return { users };
};
