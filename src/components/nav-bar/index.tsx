import {
  AlignJustify,
  Fingerprint,
  Moon,
  Search,
  SlidersHorizontal,
  Sun,
} from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";
import { setIsSidebarOpen } from "@/store/states/global";

const Navbar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.global);
  const dispatch = useDispatch();
  return (
    <div className="bg-secondary-300 dark:bg-dark-primary flex items-center justify-between px-4 py-3">
      {/* SEARCH BAR */}
      <div className="flex items-center gap-8">
        {!isSidebarOpen ? null : (
          <button
            className="hover:bg-secondary-100 rounded-xl p-2"
            onClick={() => dispatch(setIsSidebarOpen())}
          >
            <AlignJustify className="dark:text-dark-secondary size-7" />
          </button>
        )}
        <div className="relative flex h-min w-[230px]">
          <Search className="dark:text-primary-600 absolute top-[50%] ml-2 size-6 -translate-y-1/2 cursor-pointer" />
          <Input />
        </div>
      </div>
      {/* ICONS */}
      <div className="flex items-center">
        <Link
          href="/app-settings"
          className="hover:bg-secondary-100 size-min rounded-xl p-2"
        >
          <SlidersHorizontal className="size-7 rounded-xl" />
        </Link>
        <Link
          href="/authentication"
          className="hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-100 dark:hover:text-primary-700 size-min rounded p-2"
        >
          <Fingerprint className="size-7 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
