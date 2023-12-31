import { Button } from "@/components/ui/button";
import { LuAlignJustify } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import Brand from "../navbar-brand";
import MobileNavLinks from "./mobile-navbar-links";
import MobileNavAuthButtons from "./mobile-navbar-auth-buttons";
import SocialLinks from "../../social-links";
import {useSelector} from 'react-redux';

const MobileNavbarItems = () => {

  const Auth = useSelector( (state: any) => state.auth);

  return (
    <div className={Auth.AUTH ? 'order-1 flex justify-center items-center' : 'order-2 ml-auto'}>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" className="px-3 py-3">
            <LuAlignJustify className="text-[25px] text-[#021c64]" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Brand />
            </SheetTitle>
            <SheetDescription>
              <MobileNavLinks />
              <MobileNavAuthButtons
              auth = {Auth}
              />
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="justify-center items-center pt-20">
            <SocialLinks className="text-[22px] text-[#021c64]" />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbarItems;
