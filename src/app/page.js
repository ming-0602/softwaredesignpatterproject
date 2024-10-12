import Image from "next/image";
import {CardWithForm} from "@/app/custom_component/form";
import NavigationMenuDemo from "@/app/custom_component/navbar";
import Slideshow from "@/app/custom_component/slideshow";
import ProductcardMainPage from "@/app/custom_component/mainpageproductcard";
import NavigationMenu from "@/app/custom_component/navbar";

export default function Home() {
  return (
    <div>
        <NavigationMenu></NavigationMenu>
        <Slideshow></Slideshow>
        <ProductcardMainPage></ProductcardMainPage>
    </div>
  );
}
