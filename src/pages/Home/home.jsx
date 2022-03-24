import { Header } from "../../components/Header/Header";
import { Courses } from "../../components/Courses/Courses";
import { Company } from "../../components/Company/Company";
import { Depoiment } from "../../components/Depoiment/Depoiment";
import { Footer } from "../../components/Footer/Footer";

function Home() {
    return (
      <div >
      <Header />
      <Courses />
      <Company />
      <Depoiment />
      <Footer />
      </div>
    );
  }

  export { Home }
  