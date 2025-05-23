import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex sticky top-0 w-full justify-around">
      <Link href="#profile">Profile</Link>
      <Link href="#education">Education</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#experience">Experience</Link>
    </nav>
  );
}
