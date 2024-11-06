import Box from "@/components/box";
import Header from "@/components/Header";
import Main from "@/components/main";
import Navbar from "@/components/navbar";


export default function App() {
  return (
    <div className="home bg-[#252B42] ">
      <Navbar />
      {/* <Header /> */}
      <Main />
      <Box />
      
    </div>
  );
}