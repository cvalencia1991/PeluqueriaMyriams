import { ModeToggle } from "./toggle-theme";

export function TheHeader() {
  return (
    <nav className="inline-flex w-full justify-around items-center h-16 border-b-2">
      <div>
        <p>logo</p>
      </div>
      <div>
        <ul>
          <li>
            <ModeToggle />
          </li>
          <li>
          </li>
        </ul>
      </div>
    </nav>
  );
}
