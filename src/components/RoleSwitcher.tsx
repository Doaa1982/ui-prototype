export type UserRole = "Student" | "Tutor" | "Organization";

type RoleSwitcherProps = {
  role: UserRole;
  onChange: (role: UserRole) => void;
};

const roles: UserRole[] = ["Student", "Tutor", "Organization"];

function RoleSwitcher({ role, onChange }: RoleSwitcherProps) {
  return (
    <label className="role-switcher">
      <span>Workspace</span>
      <select
        value={role}
        onChange={(event) => onChange(event.target.value as UserRole)}
      >
        {roles.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

export default RoleSwitcher;