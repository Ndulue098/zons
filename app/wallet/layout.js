import FooterNav from "@/components/FooterNav";
import WallectContent from "./WallectContent";

export default function layout({children}){
    return  <section className="min-h-screen pt-12 bg-gradient-to-b from-[#FFF5F9] via-[#F8F0FF] to-[#FFFFFF]">
       <WallectContent>
        {children}
       </WallectContent>
       <FooterNav/>
    </section>
}