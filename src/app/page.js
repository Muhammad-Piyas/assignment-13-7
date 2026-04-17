import Header from "./components/mainPage/Header";
import YourFriends from "./components/mainPage/YourFriends";
import TotalDetails from "./components/mainPage/TotalDetails";

export default function Home() {
  return (
    <section>
      <Header />
      <TotalDetails />
      <YourFriends />
    </section>
  );
}
