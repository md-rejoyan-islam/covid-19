import { Contact } from "../shared/contact";
import TitleCardHeader from "../shared/title-card-header";

export default function SymptomContact() {
  return (
    <>
      <Contact>
        <TitleCardHeader
          title="Contact Us"
          subTitle="COVID-19"
          titleBgColor="bg-[#0e6dc5]"
          subTitleColor="text-[#431a7c]"
          titleColor="text-white"
        />
      </Contact>
    </>
  );
}
