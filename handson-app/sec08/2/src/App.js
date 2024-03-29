// import faker from "faker";

// import { GitHubUser } from "./GitHubUser";
import { LocalStorage } from "./LocalStorage";
import { RenderProp, List } from "./RenderProp";
import { FakerItem } from "./FakerItem";
import { BigRow } from "./RenderRow";
import { SearchForm } from "./SearchForm";
import { useState } from "react";

// const bigList = [...Array(5000)].map(() => ({
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   avatar: faker.internet.avatar(),
// }));

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Mountment Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

export default function App() {
  const [login, setLogin] = useState("w40141");
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <LocalStorage login={login} />
    </>
  );
  // return <GitHubUser login="moonhighway" />;
  // return <RenderProp data={tahoe_peaks} />;
  // return (
  //   <List
  //     data={tahoe_peaks}
  //     renderItem={RenderProp}
  //     renderEmpty={<p>This list is empty</p>}
  //   />
  // );
  // return <BigRow />;
}
