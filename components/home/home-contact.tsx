import { Contact } from "../shared/contact";
import SubTitle from "./sub-title";
import Title from "./title";

export default function HomeContact() {
  return (
    <Contact>
      <div className="text-center mb-8">
        <SubTitle title="COVID-19" color="text-[#ef4d27]" />
        <Title title="Contact Us" color="text-[#0e6dc5]" />
      </div>
    </Contact>
  );
}
